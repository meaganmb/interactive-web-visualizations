var gdata
function barChart(x){
d3.json("samples.json").then(function(data){

    gdata = data
    g = gdata.samples
    var attempt = g.filter(m => m.id == x)[0]
    // var attempt = data.samples[0];
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

    // for (var i = 0; i < attempt.length; i++){
    //         if (attempt[i].otu_id < 3500){
    //             colorsbubble = "Blues" 
    //         } else if (attempt[i].otu_id < 1500){
    //             colorsbubble = "Greens" 
    //         } else {
    //             colorsbubble = "Reds"
    //         }
    function bubbleChart(x){
    var trace2 = {
        x: labels,
        y: attempt2,
        mode: 'markers',
        marker: {
        color: labels,
        // color: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
        //   colorscale: "Blues",
        // colorscale: colorsbubble,
        opacity: [1, 0.8, 0.6, 0.4],
        size: attempt2
        }
    };
    
    let bubbledata = [trace2];
    
    var layout = {
        // title: 'Marker Size and Color',
        // showlegend: true,
        height: 600,
        width: 600
    };
    
    Plotly.newPlot('bubble', bubbledata, layout);

    };
    // Display box id options here

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
        });
      }
      function optionChanged(newSample) {
        // Retrieve new data every time a new sample is chosen
        barChart(newSample);
        bubbleChart(newSample);

        // function({

        // })
      }
      // Initializing
      init();


    // };

    // g = gdata.samples
    // otuid = "943"
    // g.filter(m => m.id == otuid)