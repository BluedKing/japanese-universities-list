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
  {time: { year: 2018 ,month: 2 ,day: 1 }, value: 22.059541745557055},
  {time: { year: 2018 ,month: 2 ,day: 2 }, value: 18.047396380264853},
  {time: { year: 2018 ,month: 2 ,day: 3 }, value: 15.79113363861636},
  {time: { year: 2018 ,month: 2 ,day: 4 }, value: 15.114005946147184},
  {time: { year: 2018 ,month: 2 ,day: 5 }, value: 22.389833755085093},
  {time: { year: 2018 ,month: 2 ,day: 6 }, value: 30.475241570884755},
  {time: { year: 2018 ,month: 2 ,day: 7 }, value: 35.64574571032008},
  {time: { year: 2018 ,month: 2 ,day: 8 }, value: 44.8549824540891},
  {time: { year: 2018 ,month: 2 ,day: 9 }, value: 56.12682795880514},
  {time: { year: 2018 ,month: 2 ,day: 10 }, value: 56.144090503297754},
  {time: { year: 2018 ,month: 2 ,day: 11 }, value: 72.35322713704332},
  {time: { year: 2018 ,month: 2 ,day: 12 }, value: 62.09017694194767},
  {time: { year: 2018 ,month: 2 ,day: 13 }, value: 64.85517647951522},
  {time: { year: 2018 ,month: 2 ,day: 14 }, value: 63.47610979859819},
  {time: { year: 2018 ,month: 2 ,day: 15 }, value: 63.86332265459604},
  {time: { year: 2018 ,month: 2 ,day: 16 }, value: 71.7568241271079},
  {time: { year: 2018 ,month: 2 ,day: 17 }, value: 72.80009292979229},
  {time: { year: 2018 ,month: 2 ,day: 18 }, value: 75.09662381451854},
  {time: { year: 2018 ,month: 2 ,day: 19 }, value: 75.43614584507303},
  {time: { year: 2018 ,month: 2 ,day: 20 }, value: 71.06304162891944},
  {time: { year: 2018 ,month: 2 ,day: 21 }, value: 78.40791711983542},
  {time: { year: 2018 ,month: 2 ,day: 22 }, value: 69.6585958606917},
  {time: { year: 2018 ,month: 2 ,day: 23 }, value: 67.73376360214594},
  {time: { year: 2018 ,month: 2 ,day: 24 }, value: 74.12151210035006},
  {time: { year: 2018 ,month: 2 ,day: 25 }, value: 78.39330638696072},
  {time: { year: 2018 ,month: 2 ,day: 26 }, value: 77.87118971351924},
  {time: { year: 2018 ,month: 2 ,day: 27 }, value: 77.13270745635027},
  {time: { year: 2018 ,month: 2 ,day: 28 }, value: 81.74281472793882},
  {time: { year: 2018 ,month: 3 ,day: 1 }, value: 85.57284655990753},
  {time: { year: 2018 ,month: 3 ,day: 2 }, value: 82.7624142925178},
  {time: { year: 2018 ,month: 3 ,day: 3 }, value: 74.01651405486257},
  {time: { year: 2018 ,month: 3 ,day: 4 }, value: 79.93504969669681},
  {time: { year: 2018 ,month: 3 ,day: 5 }, value: 89.64746508444578},
  {time: { year: 2018 ,month: 3 ,day: 6 }, value: 90.62528459606357},
  {time: { year: 2018 ,month: 3 ,day: 7 }, value: 80.00707220475063},
  {time: { year: 2018 ,month: 3 ,day: 8 }, value: 81.59628429038834},
  {time: { year: 2018 ,month: 3 ,day: 9 }, value: 77.79291661253133},
  {time: { year: 2018 ,month: 3 ,day: 10 }, value: 81.03823525786399},
  {time: { year: 2018 ,month: 3 ,day: 11 }, value: 79.80331320448992},
  {time: { year: 2018 ,month: 3 ,day: 12 }, value: 88.89774014730041},
  {time: { year: 2018 ,month: 3 ,day: 13 }, value: 75.81970162298855},
  {time: { year: 2018 ,month: 3 ,day: 14 }, value: 75.0084105772097},
  {time: { year: 2018 ,month: 3 ,day: 15 }, value: 85.16073703609935},
  {time: { year: 2018 ,month: 3 ,day: 16 }, value: 81.09316828673543},
  {time: { year: 2018 ,month: 3 ,day: 17 }, value: 80.3342626969752},
  {time: { year: 2018 ,month: 3 ,day: 18 }, value: 74.13038390698544},
  {time: { year: 2018 ,month: 3 ,day: 19 }, value: 80.01814811295786},
  {time: { year: 2018 ,month: 3 ,day: 20 }, value: 68.46810010777608},
  {time: { year: 2018 ,month: 3 ,day: 21 }, value: 79.619896725317},
  {time: { year: 2018 ,month: 3 ,day: 22 }, value: 68.41959044310636},
  {time: { year: 2018 ,month: 3 ,day: 23 }, value: 72.5453343431864},
  {time: { year: 2018 ,month: 3 ,day: 24 }, value: 69.07045579886751},
  {time: { year: 2018 ,month: 3 ,day: 25 }, value: 60.98681074599423},
  {time: { year: 2018 ,month: 3 ,day: 26 }, value: 61.39141580844359},
  {time: { year: 2018 ,month: 3 ,day: 27 }, value: 60.52257500916425},
  {time: { year: 2018 ,month: 3 ,day: 28 }, value: 60.59631277607336},
  {time: { year: 2018 ,month: 3 ,day: 29 }, value: 51.69207565689537},
  {time: { year: 2018 ,month: 3 ,day: 30 }, value: 51.184841260667454},
  {time: { year: 2018 ,month: 3 ,day: 31 }, value: 43.39440106429029},
  {time: { year: 2018 ,month: 4 ,day: 1 }, value: 47.79547804498225},
  {time: { year: 2018 ,month: 4 ,day: 2 }, value: 42.76437326862586},
  {time: { year: 2018 ,month: 4 ,day: 3 }, value: 39.635882266149764},
  {time: { year: 2018 ,month: 4 ,day: 4 }, value: 42.63206448677937},
  {time: { year: 2018 ,month: 4 ,day: 5 }, value: 46.924872242889315},
  {time: { year: 2018 ,month: 4 ,day: 6 }, value: 44.376577820875944},
  {time: { year: 2018 ,month: 4 ,day: 7 }, value: 45.635090388724755},
  {time: { year: 2018 ,month: 4 ,day: 8 }, value: 48.35277725814508},
  {time: { year: 2018 ,month: 4 ,day: 9 }, value: 46.79523595971238},
  {time: { year: 2018 ,month: 4 ,day: 10 }, value: 56.929585972608855},
  {time: { year: 2018 ,month: 4 ,day: 11 }, value: 59.487807750440695},
  {time: { year: 2018 ,month: 4 ,day: 12 }, value: 54.30764239621555},
  {time: { year: 2018 ,month: 4 ,day: 13 }, value: 56.80561703248087},
  {time: { year: 2018 ,month: 4 ,day: 14 }, value: 58.74586704158549},
  {time: { year: 2018 ,month: 4 ,day: 15 }, value: 58.498242742662676},
  {time: { year: 2018 ,month: 4 ,day: 16 }, value: 65.90861710896445},
  {time: { year: 2018 ,month: 4 ,day: 17 }, value: 68.61388035871701},
  {time: { year: 2018 ,month: 4 ,day: 18 }, value: 71.55332886283813},
  {time: { year: 2018 ,month: 4 ,day: 19 }, value: 69.31003236409828},
  {time: { year: 2018 ,month: 4 ,day: 20 }, value: 75.1653729983101},
  {time: { year: 2018 ,month: 4 ,day: 21 }, value: 83.11036494801645},
  {time: { year: 2018 ,month: 4 ,day: 22 }, value: 75.98153617868084},
  {time: { year: 2018 ,month: 4 ,day: 23 }, value: 84.66034865453285},
  {time: { year: 2018 ,month: 4 ,day: 24 }, value: 78.59421831251817},
  {time: { year: 2018 ,month: 4 ,day: 25 }, value: 86.88128446936965},
  {time: { year: 2018 ,month: 4 ,day: 26 }, value: 79.16828231408478},
  {time: { year: 2018 ,month: 4 ,day: 27 }, value: 91.87322070765862},
  {time: { year: 2018 ,month: 4 ,day: 28 }, value: 96.9550780329382},
  {time: { year: 2018 ,month: 4 ,day: 29 }, value: 95.4618035097367},
  {time: { year: 2018 ,month: 4 ,day: 30 }, value: 90.75591849506392},
  {time: { year: 2018 ,month: 5 ,day: 1 }, value: 89.13732252440592},
  {time: { year: 2018 ,month: 5 ,day: 2 }, value: 96.23894524247444},
  {time: { year: 2018 ,month: 5 ,day: 3 }, value: 92.12522394933478},
  {time: { year: 2018 ,month: 5 ,day: 4 }, value: 72.76545532452775},
  {time: { year: 2018 ,month: 5 ,day: 5 }, value: 65.18170696888704},
  {time: { year: 2018 ,month: 5 ,day: 6 }, value: 55.937781859313816},
  {time: { year: 2018 ,month: 5 ,day: 7 }, value: 42.491658940033545},
  {time: { year: 2018 ,month: 5 ,day: 8 }, value: 30.847668074114665},
  {time: { year: 2018 ,month: 5 ,day: 9 }, value: 20.881651085924638},
  {time: { year: 2018 ,month: 5 ,day: 10 }, value: 21.600749390729455},
  {time: { year: 2018 ,month: 5 ,day: 11 }, value: 22.74590132083831},
  {time: { year: 2018 ,month: 5 ,day: 12 }, value: 22.72816582950465},
  {time: { year: 2018 ,month: 5 ,day: 13 }, value: 20.140226582326367},
  {time: { year: 2018 ,month: 5 ,day: 14 }, value: 22.137304918417858},
  {time: { year: 2018 ,month: 5 ,day: 15 }, value: 21.957523151750603},
  {time: { year: 2018 ,month: 5 ,day: 16 }, value: 19.26240278925464},
  {time: { year: 2018 ,month: 5 ,day: 17 }, value: 18.96962860736481},
  {time: { year: 2018 ,month: 5 ,day: 18 }, value: 19.96932416243322},
  {time: { year: 2018 ,month: 5 ,day: 19 }, value: 18.829069620413513},
  {time: { year: 2018 ,month: 5 ,day: 20 }, value: 19.496175320008135},
  {time: { year: 2018 ,month: 5 ,day: 21 }, value: 18.511128917556523},
  {time: { year: 2018 ,month: 5 ,day: 22 }, value: 18.88313397180525},
  {time: { year: 2018 ,month: 5 ,day: 23 }, value: 20.414779618976485},
  {time: { year: 2018 ,month: 5 ,day: 24 }, value: 19.167118627960917},
  {time: { year: 2018 ,month: 5 ,day: 25 }, value: 18.958891962531045},
  {time: { year: 2018 ,month: 5 ,day: 26 }, value: 17.3186104976213},
  {time: { year: 2018 ,month: 5 ,day: 27 }, value: 17.215676002595384},
  {time: { year: 2018 ,month: 5 ,day: 28 }, value: 18.065259599425982},
  {time: { year: 2018 ,month: 5 ,day: 29 }, value: 17.346141797939875},
  {time: { year: 2018 ,month: 5 ,day: 30 }, value: 16.478209857863117},
  {time: { year: 2018 ,month: 5 ,day: 31 }, value: 15.842803275076939},
  {time: { year: 2018 ,month: 6 ,day: 1 }, value: 15.47556