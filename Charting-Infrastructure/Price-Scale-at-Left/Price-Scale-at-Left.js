var chart = LightweightCharts.createChart(document.body, {
	width: 600,
  height: 300,
  rightPriceScale:{
  	visible: false,
  },
	leftPriceScale: {
		visible: true,
	},
});

var areaSeries = chart.addAreaSeries({
  topColor: 'rgba(251, 192, 45, 0.56)',
  bottomColor: 'rgba(251, 192, 45, 0.04)',
  lineColor: 'rgba(251, 192, 45, 1)',
  lineWidth: 2,
});

areaSeries.setData([
	{ time: '2018-10-19', value: 154.05 },
	{ time: '2018-10-22', value: 154.78 },
	{ time: '2018-10-23', value: 154.39 },
	{ time: '2018-10-24', value: 146.04 },
	{ time: '2018-10-25', value: 150.95 },
	{ time: '2018-10-26', value: 145.37 },
	{ time: '2018-10-29', value: 142.09 },
	{ time: '2018-10-30', value: 146.22 },
	{ time: '2018-10-31', value: 151.79 },
	{ time: '2018-11-01', value: 151.75 },
	{ time: '2018-11-02', value: 150.35 },
	{ time: '2018-11-05', value: 148.68 },
	{ time: '2018-11-06', value: 149.94 },
	{ time: '2018-11-07', value: 151.53 },
	{ time: '2018-11-08', value: 147.87 },
	{ time: '2018-11-09', value: 144.96 },
	{ time: '2018-11-12', value: 141.55 },
	{ time: '2018-11-13', value: 142.16 },
	{ time: '2018-11-14', value: 144.22 },
	{ time: '2018-11-15', value: 143.85 },
	{ time: '2018-11-16', value: 139.53 },
	{ time: '2018-11-19', value: 131.55 },
	{ time: '2018-11-20', value: 132.43 },
	{ time: '2018-11-21', value: 134.82 },
	{ time: '2018-11-23', value: 131.73 },
	{ time: '2018-11-26', value: 136.38 },
	{ time: '2018-11-27', value: 135.00 },
	{ time: '2018-11-28', value: 136.76 },
	{ time: '2018-11-29', value: 138.68 },
	{ time: '2018-11-30', value: 140.61 },
	{ time: '2018-12-03', value: 141.09 },
	{ time: '2018-12-04', value: 137.93 },
	