var chart = LightweightCharts.createChart(document.body, {
	width: 600,
  height: 300,
	timeScale: {
	tickMarkFormatter: (time) => {
				const date = new Date(time.year, time.month, time.day);
				return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
			},
		},
  grid: {
  	vertLines: {
      visible: false, 
    }
  },
	crosshair: {
		horzLine: {
			visible: false,
			labelVisible: false,
		},
	  vertLine: {
		  visible: true,
		  labelVisible: false,
		},
	},
});
chart.addAreaSeries({
	topColor: 'rgba(156, 39, 176, 1)',
	bottomColor: 'rgba(41, 121, 255, 0.1)',
	lineColor: 'rgba(156, 39, 176, 0.8)',
	lineWidth: 1,
	}).setData([{ time: {year: 2018, month: 9, day: 22}, value: 17.561605782793357 },
{ time: {year: 2018, month: 9, day: 23}, value: 18.586765395788515 },
{ time: {year: 2018, month: 9, day: 24}, value: 16.67923813275883 },
{ time: {year: 2018, month: 9, day: 25}, value: 18.139367606990206 },
{ time: {year: 2018, month: 9, day: 26}, value: 19.175341064495118 },
{ time: {year: 2018, month: 9, day: 27}, value: 17.026133664805055 },
{ time: {year: 2018, month: 9, day: 28}, value: 17.862891721122114 },
{ time: {year: 2018, month: 9, day: 29}, value: 18.307393426640242 },
{ time: {year: 2018, month: 9, day: 30}, value: 20.870050581795134 },
{ time: {year: 2018, month: 10, day: 1}, value: 19.004329503393258 },
{ time: {year: 2018, month: 10, day: 2}, value: 19.442993891919564 },
{ time: {year: 2018, month: 10, day: 3}, value: 19.104414198492133 },
{ time: {year: 2018, month: 10, day: 4}, value: 22.075521421139175 },
{ time: {year: 2018, month: 10, day: 5}, value: 19.100220372613407 },
{ time: {year: 2018, month: 10, day: 6}, value: 20.66834030878228 },
{ time: {year: 2018, month: 10, day: 7}, value: 19.833283354440272 },
{ time: {year: 2018, month: 10, day: 8}, value: 20.000491670320855 },
{ time: {year: 2018, month: 10, day: 9}, value: 19.574017537061927 },
{ time: {year: 2018, month: 10, day: 10}, value: 23.223782351967557 },
{ time: {year: 2018, month: 10, day: 11}, value: 19.902094436817613 },
{ time: {year: 2018, month: 10, day: 12}, value: 20.615063006327762 },
{ time: {year: 2018, month: 10, day: 13}, value: 24.63754338125632 },
{ time: {year: 2018, month: 10, day: 14}, value: 21.134263672405172 },
{ time: {year: 2018, month: 10, day: 15}, value: 24.22085045389956 },
{ time: {year: 2018, month: 10, day: 16}, value: 21.249788449456116 },
{ time: {year: 2018, month: 10, day: 17}, value: 23.423834329011136 },
{ time: {year: 2018, month: 10, day: 18}, value: 22.659731736820323 },
{ time: {year: 2018, month: 10, day: 19}, value: 21.991322885799974 },
{ t