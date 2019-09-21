// from data.js
var tableData = data;
var tbody = d3.select("tbody");



function buildTable(sightingsData) {
    //console.log(sightingsData); *check to see if it's working
    tbody.html(""); //clear out html; will start fresh
    sightingsData.forEach(function(sightingReport) {
        var row = tbody.append("tr");
        Object.entries(sightingReport).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
buildTable(tableData);



// Prepare to tie function to button
var button = d3.select("#filter-btn"); //#filter-btn is id
button.on("click", function() { //no need to pass a value yet
    d3.event.preventDefault(); // prevents button from reloading page if there's an issue
    // create an object out of the filters established
    var filtersObject = { //key-value pairs based on the filter choices
        "datetime": d3.select("#datetime").property("value"),
        "city": d3.select("#city").property("value").toLowerCase(),
        "state": d3.select("#state").property("value").toLowerCase(),
        "country": d3.select("#country").property("value").toLowerCase(),
        "shape": d3.select("#shape").property("value").toLowerCase()
    };

    for (var key in filtersObject) {
        if (!filtersObject[key]) { // if the filter object is missing a key (i.e. no value was entered in property value)
            delete filtersObject[key]; // delete it; don't look 
        }
    }

    var filters = Object.entries(filtersObject); //pass the filters object into a new variable called filters
    const filteredTableData = tableData.filter(item => //make a new variable that contains the key-value
        filters.every(([key, value]) => item[key] == value) //pairs from the filters object, above
    );

    buildTable(filteredTableData); //make it a table
});

function tooltip() {
    ('[data-toggle="tooltip"]').tooltip()
}

tooltip()