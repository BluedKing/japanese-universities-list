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

var switcherElement = createSimpleSwitcher(['Show', 'Hide'], 'Show', toggleVisibility);

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
	{time: { year: 2018 ,month: 1 ,day: 1 }, value: 42.22210452014025},
	{time: { year: 2018 ,month: 1 ,day: 2 }, value: 43.48275819228589},
	{time: { year: 2018 ,month: 1 ,day: 3 }, value: 41.25703217290084},
  {time: { year: 2018 ,month: 1 ,day: 4 }, value: 52.36806460558146},
  {time: { year: 2018 ,month: 1 ,day: 5 }, value: 60.69667982617172},
  {time: { year: 2018 ,month: 1 ,day: 6 }, value: 69.17609377151253},
  {time: { year: 2018 ,month: 1 ,day: 7 }, value: 85.51875019658569},
  {time: { year: 2018 ,month: 1 ,day: 8 }, value: 96.4186685920291},
  {time: { year: 2018 ,month: 1 ,day: 9 }, value: 82.44179232797916},
  {time: { year: 2018 ,month: 1 ,day: 10 }, value: 93.0175238040603},
  {time: { year: 2018 ,month: 1 ,day: 11 }, value: 91.8595676615472},
  {time: { year: 2018 ,month: 1 ,day: 12 }, value: 83.28209706034694},
  {time: { year: 2018 ,month: 1 ,day: 13 }, value: 80.609124225016},
  {time: { year: 2018 ,month: 1 ,day: 14 }, value: 82.15533916277663},
  {time: { year: 2018 ,month: 1 ,day: 15 }, value: 78.32003700919904},
  {time: { year: 2018 ,month: 1 ,day: 16 }, value: 63.38579267461397},
  {time: { year: 2018 ,month: 1 ,day: 17 }, value: 65.70768834648815},
  {time: { year: 2018 ,month: 1 ,day: 18 }, value: 65.64334693107601},
  {time: { year: 2018 ,month: 1 ,day: 19 }, value: 64.72428194346374},
  {time: { year: 2018 ,month: 1 ,day: 20 }, value: 58.6638597707784},
  {time: { year: 2018 ,month: 1 ,day: 21 }, value: 60.34203250807201},
  {time: { year: 2018 ,month: 1 ,day: 22 }, value: 57.29440816830159},
  {time: { year: 2018 ,month: 1 ,day: 23 }, value: 53.712421253860164},
  {time: { year: 2018 ,month: 1 ,day: 24 }, value: 50.46928068150196},
  {time: { year: 2018 ,month: 1 ,day: 25 }, value: 42.78790665990494},
  {time: { year: 2018 ,month: 1 ,day: 26 }, value: 41.33037545169063},
  {time: { year: 2018 ,month: 1 ,day: 27 }, value: 39.823075079362404},
  {time: { year: 2018 ,month: 1 ,day: 28 }, value: 35.128171536827985},
  {time: { year: 2018 ,month: 1 ,day: 29 }, value: 28.91045910743947},
  {time: { year: 2018 ,month: 1 ,day: 30 }, value: 27.991825846214837},
  {time: { year: 2018 ,month: 1 ,day: 31 }, value: 27.593527577912855},
  {time: { year: 2018 ,month: 2 ,day: 1 }, value: 22.05