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
button.on("click", function () { //no need to pass a value yet
  d3.event.preventDefault(); // prevents button from reloading page if there's an issue
  // create an object out of the filters established
  var filtersObj = { //key-value pairs based on the filter choices
    "datetime": d3.select("#datetime").property("value"), 
    "city": d3.select("#city").property("value"), 
    "state": d3.select("#state").property("value"),
    "country": d3.select("#country").property("value"),
    "shape": d3.select("#shape").property("value")
  };

  for (var key in filtersObj) {  
    if (!filtersObj[key]) { // if the filter object is missing a key
      delete filtersObj[key]; // delete it 
    }
  }

  var filters = Object.entries(filtersObj);  //pass the filters object into a new variable called filters
  const filteredTableData = tableData.filter(item => //make a new variable that contains the key-value
    filters.every(([key, value]) => item[key] == value) //pairs from the filters object, above
  );

  buildTable(filteredTableData); //make it a table
});