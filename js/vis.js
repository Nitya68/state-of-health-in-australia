var vg_1= "js/expenditure_choropleth.vg.json"

vegaEmbed("#choroplethmap", vg_1).then(function(result ) {

}).catch(console.error);


// area chart
var vg_2= "js/num_lt_areachart.vg.json"

vegaEmbed("#areachart", vg_2).then(function(result ) {

}).catch(console.error);

// stacked bar chart
var vg_3= "js/num_lt_states_stackbar.vg.json"

vegaEmbed("#stackedbar", vg_3).then(function(result ) {

}).catch(console.error);

// line chart
var vg_4= "js/selected_lt_cond_linechart.vg.json"

vegaEmbed("#linechart", vg_4).then(function(result ) {

}).catch(console.error);

// heat map
var vg_5= "js/health_risks_states_heatmap.vg.json"

vegaEmbed("#heatmap", vg_5).then(function(result ) {

}).catch(console.error);
