function createSimpleSwitcher(items, activeItem, activeItemChangedCallback) {
	var switcherElement = document.createElement('div');
	switcherElement.classList.add('switcher');

	var intervalElements = items.map(function(item) {
		var itemEl = document.createElement('button');
		itemEl.innerText = item;
		itemEl.classList.add('switcher-item');
		itemEl.classList.toggle('switcher-active-item', item === activeItem);
		itemEl.addEventListener('click', function() {
			onItemClicked(item);
		});
		switcherElement.appendChild(itemEl);
		return itemEl;
	});

	function onItemClicked(item) {
		if (item === activeItem) {
			return;
		}

		intervalElements.forEach(function(element, index) {
			element.classList.toggle('switcher-active-item', items[index] === item);
		});

		activeItem = item;

		activeItemChangedCallback(item);
	}

	return switcherElement;
}

var switcherElement = createSimpleSwitcher(['Courier New', 'Arial', 'Times New Roman'], 'Trebuchet MS', function(fontFamily) {
	chart.applyOptions({
		layout: {
			fontFamily: fontFamily,
		},
	});
});

var chartElement = document.createElement('div');

var chart = LightweightCharts.createChart(chartElement, {
	width: 600,
  height: 300,
	layout: {
		fontFamily: 'Comic Sans MS',
	},
	rightPriceScale: {
		borderColor: 'rgba(197, 203, 206, 1)',
	},
	timeScale: {
		borderColor: 'rgba(197, 203, 206, 1)',
	},
});

document.body.appendChild(chartElement);
document.body.appendChild(switcherElement);

var areaSeries = chart.addAreaSeries({
  topColor: 'rgba(33, 150, 243, 0.56)',
  bottomColor: 'rgba(33, 150, 243, 0.04)',
  lineColor: 'rgba(33, 150, 243, 1)',
  lineWidth: 2,
});

areaSeries.setData([
	{ time: '2018-10-19', value: 46.33 },
	{ time: '2018-10-22', value: 45.97 },
	{ time: '2018-10-23', value: 46.36 },
	{ time: '2018-10-24', value: 46.73 },
	{ time: '2018-10-25', value: 46.51 },
	{ time: '2018-10-26', value: 45.92 },
	{ time: '2018-10-29', value: 46.46 },
	{ time: '2018-10-30', value: 47.63 },
	{ time: '2018-10-31', value: 47.88 },
	{ time: '2018-11-01', value: 47.74 },
	{ time: '2018-11-02', value: 48.00 },
	{ time: '2018-11-05', value: 48.69 },
	{ time: '2018-11-06', value: 49.11 },
	{ time: '2018-11-07', value: 49.37 },
	{ time: '2018-11-08', value: 49.33 },
	{ time: '2018-11-09', value: 49.68 },
	{ time: '2018-11-12', value: 49.87 },
	{ time: '2018-11-13', value: 49.86 },
	{ time: '2018-11-14', value: 49.76 },
	{ time: '2018-11-15', value: 49.74 },
	{ time: '2018-11-16', value: 50.17 },
	{ time: '2018-11-19', value: 50.51 },
	{ time: '2018-11-20', value: 49.38 },
	{ time: '2018-11-21', value: 48.73 },
	{ time: '2018-11-23', value: 49.02 },
	{ time: '2018-11-26', value: 48.87 },
	{ time: '2018-11-27', value: 49.37 },
	{ time: '2018-11-28', value: 49.71 },
	{ time: '2018-11-29', value: 48.98 },
	{ time: '2018-11-30', value: 50.40 },
	{ time: '2018-12-03', value: 49.69 },
	{ time: '2018-12-04', value: 49.58 },
	{ time: '2018-12-06', value: 49.38 },
	{ time: '2018-12-07', value: 49.09 },
	{ time: '2018-12-10', value: 49.24 },
	{ time: '2018-12-11', value: 49.54 },
	{ time: '2018-12-12', value: 49.22 },
	{ time: '2018-12-13', value: 49.47 },
	{ time: '2018-12-14', value: 49.34 },
	{ time: '2018-12-17', value: 48.33 },
	{ time: '2018-12-18', value: 48.32 },
	{ time: '2018-12-19', value: 47.90 },
	{ time: '2018-12-20', value: 47.54 },
	{ time: '2018-12-21', value: 47.57 },
	{ time: '2018-12-24', value: 45.96 },
	{ time: '2018-12-26', value: 46.94 },
	{ time: '2018-12-27', value: 47.53 },
	{ time: '2018-12-28', value: 47.20 },
	{ time: '2018-12-31', value: 47.35 },
	{ time: '2019-01-02', value: 46.93 },
	{ time: '2019-01-03', value: 46.64 },
	{ time: '2019-01-04', value: 47.57 },
	{ time: '2019-01-07', value: 46.95 },
	{ time: '2019-01-08', value: 47.