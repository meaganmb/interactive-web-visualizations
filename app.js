// d3.json("samples.json", function(data) {
//     console.log(data.names);
// });

let data = d3.json("samples.json").then(function(data){
    var attempt = Object.values(data.samples);
    var attempt2 = Object.values(attempt[0].sample_values);
    var labels = Object.values(attempt[0].otu_ids);
    var labelsotu = Object.values(attempt[0].otu_labels);

    //     // Sort the data by Greek search results descending
    // sorted = data.sort((a, b) => b.attempt[0].sample_values - a.attempt[0].sample_values);

    // // Slice the first 10 objects for plotting
    // slicedData = sorted.slice(0, 10);

    // // Reverse the array to accommodate Plotly's defaults
    // reversedData = slicedData.reverse();

    // // Trace1 for the OTU Data
    let trace1 = {
        x: attempt2,
        y: labels,
        text: labelsotu,
        name: "OTU Data",
        type: "bar",
        orientation: "h"
        };
  
  let traceData = [trace1];
  
  // Note that we use `traceData` here, not `data`
  Plotly.newPlot("bar", traceData);

});
// let dataOTU = d3.json("samples.json").then(function(data){ console.log(data)});

// var samplesOTU = d3.json("samples.json").then(function(data){
//     console.log(data.samples)
// });

// var d2 = Object.values()
// console.log(samplesOTU[sample_values]);








// var uk = Object.values(data.uk);
// var otuvalues = Object.values(samplesOTU.sample_values);
// console.log(otuvalues);
// console.log(samplesOTU[0][sample_values])

// Create an array of music provider labels
// var labels = Object.keys(data.us);

// // Sort the data by OTU results descending
// let sortedByOTU = samplesOTU.sort((a, b) => b.sample_values - a.sample_values);

// // Slice the first 10 objects for plotting
// slicedData = sortedByOTU.slice(0, 10);

// // Reverse the array to accommodate Plotly's defaults
// reversedData = slicedData.reverse();