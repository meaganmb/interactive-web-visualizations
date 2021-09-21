var gdata
// Create Bar Chart
function barChart(x){
d3.json("samples.json").then(function(data){

    gdata = data
    g = gdata.samples
    var attempt = g.filter(m => m.id == x)[0]
    var attempt2 = attempt.sample_values;
    var labels = attempt.otu_ids;
    var labelsotu = attempt.otu_labels;
    console.log(attempt2)
    console.log(attempt)
    console.log(labels)

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
        text: labelsotu,
        name: "OTU Data",
        type: "bar",
        orientation: "h"
        };
  
  let traceData = [trace1];
  
  // Note that we use `traceData` here, not `data`
  Plotly.newPlot("bar", traceData);
    });
 
}
//   Bubble Chart

    function bubbleChart(x){
        d3.json("samples.json").then(function(data){
    gdata = data
    g = gdata.samples
    var attempt = g.filter(m => m.id == x)[0]
    var attempt2 = attempt.sample_values;
    var labels = attempt.otu_ids;
    var labelsotu = attempt.otu_labels;

    var trace2 = {
        x: labels,
        y: attempt2,
        mode: 'markers',
        text: labelsotu,
        marker: {
        color: labels,
        opacity: [1, 0.8, 0.6, 0.4],
        size: attempt2
        }
    };
    
    let bubbledata = [trace2];
    
    var layout = {
        height: 600,
        width: 600
    };
    
    Plotly.newPlot('bubble', bubbledata, layout);
        })
    }
//      Demographic Box
    function Metadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata= data.metadata;
        var array= metadata.filter(samplevalue => samplevalue.id == sample);
        var result= array[0]
        var selectsample = d3.select("#sample-metadata");
        selectsample.html("");
        Object.entries(result).forEach(([key, value]) => {
        selectsample.append("h5").text(`${key}: ${value}`);
  });
});
}


    // Display box ID options here

    function init() {
        // Creating the dropdown element using the proper ID
        var menu = d3.select("#selDataset");
        // Creating the select options
        d3.json("samples.json").then((data) => {
          var DataNames = data.names;
          DataNames.forEach((sample) => {
            menu
              .append("option")
              .text(sample)
          });
          // Building the initial data display with index 0
          const Sample = DataNames[0];
          barChart(Sample);
          bubbleChart(Sample);
          Metadata(Sample)
        });
      }
      function optionChanged(newSample) {
        // Retrieve new data every time a new sample is chosen
        barChart(newSample);
        bubbleChart(newSample);
        Metadata(newSample)

      }
      // Initializing
      init();
