// Create chart
var chart = am4core.create("radikals", am4plugins_forceDirected.ForceDirectedTree);

// Create series
var series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
series.dataSource.url = "generated.json";

// Set up data fields
series.dataFields.value = "value";
series.dataFields.name = "name";
series.dataFields.children = "children";

// Add labels
series.nodes.template.label.text = "{name}";
series.nodes.template.tooltipText = "{name}: [bold]{value}[/][\n][URL]{test}";

series.maxLevels = 2;

series.fontSize = 10;
series.minRadius = 15;
series.maxRadius = 40;