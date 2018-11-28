// YOUR CODE HERE!

// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var filterButton = d3.select("#filter-btn");


// display the table
function displayData(tableData) {
    tbody.html("");
    tableData.forEach((ufodata) => {
        var row = tbody.append("tr");
        Object.entries(ufodata).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}

// return the table
displayData(tableData);


// date filter function
filterButton.on("click", function ()
    {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    //assign data to var
    var filteredDataList = tableData;

    // Select the input element and get the raw HTML node
    var datetimeValue = d3.select("#datetime").property("value");

    //filter Date
    filteredDataList = filteredDataList.filter(data => data.datetime === datetimeValue);

    //display the filter data
    displayData(filteredDataList);
});


