// d3.json("samples.json", function(data) {
//     console.log(data.names);
// });
var gdata
d3.json("samples.json").then(function(data){

    gdata = data
    var attempt = data.samples[0];
    var attempt2 = attempt.sample_values;
    var labels = attempt.otu_ids;
    // var labelsotu = attempt.otu_labels;
    console.log(attempt2)
    console.log(attempt)

    //     // Sort the data by Greek search results descending
    // let sorted = gdata.sort((a, b) => b.attempt.sample_values - a.attempt.sample_values);

    // Slice the first 10 objects for plotting
    slicedData = attempt2.slice(0, 10);
    slicedLabels = labels.slice(0,10);
    slicedLabels = slicedLabels.map(L => "otu" + L)
    

    // Reverse the array to accommodate Plotly's defaults
    slicedData.reverse();

    // // Trace1 for the OTU Data
    let trace1 = {
        x: slicedData,
        y: slicedLabels,
        // text: labelsotu,
        name: "OTU Data",
        type: "bar",
        orientation: "h"
        };
  
  let traceData = [trace1];
  
  // Note that we use `traceData` here, not `data`
  Plotly.newPlot("bar", traceData);

});