document.body.style.position = 'relative';

var container = document.createElement('div');
document.body.appendChild(container);

var width = 600;
var height = 300;

var chart = LightweightCharts.createChart(container, {
	width: width,
	height: height,
  crosshair: {
		mode: LightweightCharts.CrosshairMode.Normal,
	},
