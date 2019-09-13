// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// for bonus, try with arrows

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
var button = d3.select("#filter-btn");
button.on("click", function() {
	d3.event.preventDefault() //Will refresh page if you don't include w/forms
	var inputElement = d3.select("#datetime");
	var inputDate = inputElement.property("value");
	var filterData = tableData.filter(row => row.datetime==inputDate);
	buildTable(filterData);
})

