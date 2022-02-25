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
		borderColor: 'rgba(197, 203, 206, 0.4)',
	},
	layout: {
		backgroundColor: '#100841',
		textColor: '#ffffff',
	},
	grid: {
		vertLines: {
			color: 'rgba(197, 203, 206, 0.4)',
			style: LightweightCharts.LineStyle.Dotted,
		},
		horzLines: {
			color: 'rgba(197, 203, 206, 0.4)',
			style: LightweightCharts.LineStyle.Dotted,
		},
	},
});

var areaSeries = chart.addAreaSeries({
  topColor: 'rgba(67, 83, 254, 0.7)',
  bottomColor: 'rgba(67, 83, 254, 0.3)',
  lineColor: 'rgba(67, 83, 254, 1)',
  lineWidth: 2,
});

var extraSeries = chart.addAreaSeries({
  topColor: 'rgba(255, 192, 0, 0.7)',
  bottomColor: 'rgba(255, 192, 0, 0.3)',
  lineColor: 'rgba(255, 192, 0, 1)',
  lineWidth: 2,
});


areaSeries.setData([
	{ time: '2018-10-19', value: 219.31 },
	{ time: '2018-10-22', value: 220.65 },
	{ time: '2018-10-23', value: 222.73 },
	{ time: '2018-10-24', value: 215.09 },
	{ time: '2018-10-25', value: 219.8 },
	{ time: '2018-10-26', value: 216.3 },
	{ time: '2018-10-29', value: 212.24 },
	{ time: '2018-10-30', value: 213.3 },
	{ time: '2018-10-31', value: 218.86 },
	{ time: '2018-11-01', value: 222.22 },
	{ time: '2018-11-02', value: 207.48 },
	{ time: '2018-11-05', value: 201.59 },
	{ time: '2018-11-06', value: 203.77 },
	{ time: '2018-11-07', value: 209.95 },
	{ time: '2018-11-08', value: 208.49 },
	{ time: '2018-11-09', value: 204.47 },
	{ time: '2018-11-12', value: 194.17 },
	{ time: '2018-11-13', value: 192.23 },
	{ time: '2018-11-14', value: 186.8 },
	{ time: '2018-11-15', value: 191.41 },
	{ time: '2018-11-16', value: 193.53 },
	{ time: '2018-11-19', value: 185.86 },
	{ time: '2018-11-20', value: 176.98 },
	{ time: '2018-11-21', value: 176.78 },
	{ time: '2018-11-23', value: 172.29 },
	{ time: '2018-11-26', value: 174.62 },
	{ time: '2018-11-27', value: 174.24 },
	{ time: '2018-11-28', value: 180.94 },
	{ time: '2018-11-29', value: 179.55 },
	{ time: '2018-11-30', value: 178.58 },
	{ time: '2018-12-03', value: 184.82 },
	{ time: '2018-12-04', value: 176.69 },
	{ time: '2018-12-06', value: 174.72 },
	{ time: '2018-12-07', value: 168.49 },
	{ time: '2018-12-10', value: 169.6 },
	{ time: '2018-12-11', value: 168.63 },
	{ time: '2018-12-12', value: 169.1 },
	{ time: '2018-12-13', value: 170.95 },
	{ time: '2018-12-14', value: 165.48 },
	{ time: '2018-12-17', value: 163.94 },
	{ time: '2018-12-18', value: 166.07 },
	{ time: '2018-12-19', value: 160.89 },
	{ time: '2018-12-20', value: 156.83 },
	{ time: '2018-12-21', value: 150.73 },
	{ time: '2018-12-24', value: 146.83 },
	{ time: '2018-12-26', value: 157.17 },
	{ time: '2018-12-27', value: 156.15 },
	{ time: '2018-12-28', value: 156.23 },
	{ time: '2018-12-31', value: 157.74 },
	{ time: '2019-01-02', value: 157.92 },
	{ time: '2019-01-03', value: 142.19 },
	{ time: '2019-01-04', value: 148.26 },
	{ time: '2019-01-07', value: 147.93 },
	{ time: '2019-01-08', value: 150.75 },
	{ time: '2019-01-09', value: 153.31 },
	{ time: '2019-01-10', value: 153.8 },
	{ time: '2019-01-11', value: 152.29 },
	{ time: '2019-01-14', value: 150 },
	{ time: '2019-01-15', value: 153.07 },
	{ time: '2019-01-16', value: 154.94 },
	{ time: '2019-01-17', value: 155.86 },
	{ time: '2019-01-18', value: 156.82 },
	{ time: '2019-01-22', value: 153.3 },
	{ time: '2019-01-23', value: 153.92 },
	{ time: '2019-01-24', value: 152.7 },
	{ time: '2019-01-25', value: 157.76 },
	{ time: '2019-01-28', value: 156.3 },
	{ time: '2019-01-29', value: 154.68 },
	{ time: '2019-01-30', value: 165.25 },
	{ time: '2019-01-31', value: 166.44 },
	{ time: '2019-02-01', value: 166.52 },
	{ time: '2019-02-04', value: 171.25 },
	{ time: '2019-02-05', value: 174.18 },
	{ time: '2019-02-06', value: 174.24 },
	{ time: '2019-02-07', value: 170.94 },
	{ time: '2019-02-08', value: 170.41 },
	{ time: '2019-02-11', value: 169.43 },
	{ time: '2019-02-12', value: 170.89 },
	{ time: '2019-02-13', value: 170.18 },
	{ time: '2019-02-14', value: 170.8 },
	{ time: '2019-02-15', value: 170.42 },
	{ time: '2019-02-19', value: 170.93 },
	{ time: '2019-02-20', value: 172.03 },
	{ time: '2019-02-21', value: 171.06 },
	{ time: '2019-02-22', value: 172.97 },
	{ time: '2019-02-25', value: 174.23 },
	{ time: '2019-02-26', value: 174.33 },
	{ time: '2019-02-27', value: 174.87 },
	{ time: '2019-02-28', value: 173.15 },
	{ time: '2019-03-01', value: 174.97 },
	{ time: '2019-03-04', value: 175.85 },
	{ time: '2019-03-05', value: 175.53 },
	{ time: '2019-03-06', value: 174.52 },
	{ time: '2019-03-07', value: 172.5 },
	{ time: '2019-03-08', value: 172.91 },
	{ time: '2019-03-11', value: 178.9 },
	{ time: '2019-03-12', value: 180.91 },
	{ time: '2019-03-13', value: 181.71 },
	{ time: '2019-03-14', value: 183.73 },
	{ time: '2019-03-15', value: 186.12 },
	{ time: '2019-03-18', value: 188.02 },
	{ time: '2019-03-19', value: 186.53 },
	{ time: '2019-03-20', value: 188.16 },
	{ time: '2019-03-21', value: 195.09 },
	{ time: '2019-03-22', value: 191.05 },
	{ time: '2019-03-25', value: 188.74 },
	{ time: '2019-03-26', value: 186.79 },
	{ time: '2019-03-27', value: 188.47 },
	{ time: '2019-03-28', value: 188.72 },
	{ time: '2019-03-29', value: 189.95 },
	{ time: '2019-04-01', value: 191.24 },
	{ time: '2019-04-02', value: 194.02 },
	{ time: '2019-04-03', value: 195.35 },
	{ time: '2019-04-04', value: 195.69 },
	{ time: '2019-04-05', value: 197 },
	{ time: '2019-04-08', value: 200.1 },
	{ time: '2019-04-09', value: 199.5 },
	{ time: '2019-04-10', value: 200.62 },
	{ time: '2019-04-11', value: 198.95 },
	{ time: '2019-04-12', value: 198.87 },
	{ time: '2019-04-15', value: 199.23 },
	{ time: '2019-04-16', value: 199.25 },
	{ time: '2019-04-17', value: 203.13 },
	{ time: '2019-04-18', value: 203.86 },
	{ time: '2019-04-22', value: 204.53 },
	{ time: '2019-04-23', value: 207.48 },
	{ time: '2019-04-24', value: 207.16 },
	{ time: '2019-04-25', value: 205.28 },
	{ time: '2019-04-26', value: 204.3 },
	{ time: '2019-04-29', value: 204.61 },
	{ time: '2019-04-30', value: 200.67 },
	{ time: '2019-05-01', value: 210.52 },
	{ time: '2019-05-02', value: 209.15 },
	{ time: '2019-05-03', value: 211.75 },
	{ time: '2019-05-06', value: 208.48 },
	{ time: '2019-05-07', value: 202.86 },
	{ time: '2019-05-08', value: 202.9 },
	{ time: '2019-05-09', value: 200.72 },
	{ time: '2019-05-10', value: 197.18 },
	{ time: '2019-05-13', value: 185.72 },
	{ time: '2019-05-14', value: 188.66 },
	{ time: '2019-05-15', value: 190.92 },
	{ time: '2019-05-16', value: 190.08 },
	{ time: '2019-05-17', value: 189 },
	{ time: '2019-05-20', value: 183.09 },
	{ time: '2019-05-21', value: 186.6 },
	{ time: '2019-05-22', value: 182.78 },
	{ time: '2019-05-23', value: 179.66 },
	{ time: '2019-05-24', value: 178.97 },
	{ time: '2019-05-28', value: 179.07 },
]);

extraSeries.setData([
	{ time: '2018-10-19', value: 44 },
	{ time: '2018-10-22', value: 43.14 },
	{ time: '2018-10-23', value: 42.3 },
	{ time: '2018-10-24', value: 40.99 },
	{ time: '2018-10-25', value: 41.59 },
	{ time: '2018-10-26', value: 41.1 },
	{ time: '2018-10-29', value: 41.03 },
	{ time: '2018-10-30', value: 42.21 },
	{ time: '2018-10-31', value: 43.37 },
	{ time: '2018-11-01', value: 42.65 },
	{ time: '2018-11-02', value: 41.6 },
	{ time: '2018-11-05', value: 42.61 },
	{ time: '2018-11-06', value: 42.66 },
	{ time: '2018-11-07', value: 43.11 },
	{ time: '2018-11-08', value: 41.27 },
	{ time: '2018-11-09', value: 41.24 },
	{ time: '2018-11-12', value: 40.87 },
	{ time: '2018-11-13', value: 39.81 },
	{ time: '2018-11-14', value: 40.33 },
	{ time: '2018-11-15', value: 41.16 },
	{ time: '2018-11-16', value: 40.84 },
	{ time: '2018-11-19', value: 40.92 },
	{ time: '2018-11-20', value: 40.1 },
	{ time: '2018-11-21', value: 41.27 },
	{ time: '2018-11-23', value: 39.89 },
	{ time: '2018-11-26', value: 40.53 },
	{ time: '2018-11-27', value: 40.32 },
	{ time: '2018-11-28', value: 40.84 },
	{ time: '2018-11-29', value: 40.48 },
	{ time: '2018-11-30', value: 40.35 },
	{ time: '2018-12-03', value: 41.19 },
	{ time: '2018-12-04', value: 40.95 },
	{ time: '2018-12-06', value: 39.59 },
	{ time: '2018-12-07', value: 39.51 },
	{ time: '2018-12-10', value: 39.37 },
	{ time: '2018-12-11', value: 39.08 },
	{ time: '2018-12-12', value: 39.05 },
	{ time: '2018-12-13', value: 39.29 },
	{ time: '2018-12-14', value: 38.66 },
	{ time: '2018-12-17', value: 38.41 },
	{ time: '2018-12-18', value: 37.82 },
	{ time: '2018-12-19', value: 37.65 },
	{ time: '2018-12-20', value: 37.26 },
	{ time: '2018-12-21', value: 37.67 },
	{ time: '2018-12-24', value: 36.65 },
	{ time: '2018-12-26', value: 38.06 },
	{ time: '2018-12-27', value: 37.73 },
	{ time: '2018-12-28', value: 38.13 },
	{ time: '2018-12-31', value: 37.92 },
