// d3.json("samples.json", function(data) {
//     console.log(data.names);
// });

var otu = d3.json("samples.json").then(function(data){ console.log(data)});


// var uk = Object.values(data.uk);
// var canada = Object.values(data.canada);

// Create an array of music provider labels
// var labels = Object.keys(data.us);

// // Sort the data by OTU results descending
// let sortedByOTU = metadata.sort((a, b) => b.wfreq - a.wfreq);

// // Slice the first 10 objects for plotting
// slicedData = sortedByOTU.slice(0, 10);

// // Reverse the array to accommodate Plotly's defaults
// reversedData = slicedData.reverse();

// // Trace1 for the OTU Data
// let trace1 = {
//   x: reversedData.map(object => object.wfreq),
//   y: reversedData.map(object => object.id),
//   text: reversedData.map(object => object.id),
//   name: "OTU Data",
//   type: "bar",
//   orientation: "h"
// };

// let traceData = [trace1];

// // Note that we use `traceData` here, not `data`
// Plotly.newPlot("plot", traceData);