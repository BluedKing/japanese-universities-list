var chart = LightweightCharts.createChart(document.body, {
	width: 600,
  height: 300,
	rightPriceScale: {
		scaleMargins: {
			top: 0.1,
			bottom: 0.1,
		},
		mode: LightweightCharts.PriceScaleMode.Percentage,
		borderColor: 'rgba(197, 203, 206, 0.4)',
	},
	timeScale: {
		borderColor: 'rgba(197, 203, 206, 0.4)