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
	//Add date filter
	let dateElement = d3.select("#datetime");
	let inputDate = dateElement.property("value");
	let filterData = tableData.filter(row => row.datetime==inputDate);
	// Add city filter
	let cityElement = d3.select("#city");
	let inputCity = cityElement.property("value");
	let filterData = tableData.filter(row => row.city==inputCity);
	// Add state filter
	let stateElement = d3.select("#state");
	let inputState = stateElement.property("value");
	let filterData = tableData.filter(row => row.state==inputState);
	// Add country filter
	let countryElement = d3.select("#country");
	let inputCountry = countryElement.property("value");
	let filterData = tableData.filter(row => row.country==inputCountry);
	// Add shape filter
	let shapeElement = d3.select("#shape");
	let inputShape = shapeElement.property("value");
	let filterData = tableData.filter(row => row.shape==inputShape);
	buildTable(filterData);
})

//I think you just repeat everything here for the other filters. 
