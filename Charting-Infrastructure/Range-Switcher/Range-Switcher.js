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

var intervals = ['1D', '1W', '1M', '1Y'];

var dayData = [
	{ time: '2018-10-19', value: 26.19 },
	{ time: '2018-10-22', value: 25.87 },
	{ time: '2018-10-23', value: 25.83 },
	{ time: '2018-10-24', value: 25.78 },
	{ time: '2018-10-25', value: 25.82 },
	{ time: '2018-10-26', value: 25.81 },
	{ time: '2018-10-29', value: 25.82 },
	{ time: '2018-10-30', value: 25.71 },
	{ time: '2018-10-31', value: 25.82 },
	{ time: '2018-11-01', value: 25.72 },
	{ time: '2018-11-02', value: 25.74 },
	{ time: '2018-11-05', value: 25.81 },
	{ time: '2018-11-06', value: 25.75 },
	{ time: '2018-11-07', value: 25.73 },
	{ time: '2018-11-08', value: 25.75 },
	{ time: '2018-11-09', value: 25.75 },
	{ time: '2018-11-12', value: 25.76 },
	{ time: '2018-11-13', value: 25.80 },
	{ time: '2018-11-14', value: 25.77 },
	{ time: '2018-11-15', value: 25.75 },
	{ time: '2018-11-16', value: 25.75 },
	{ time: '2018-11-19', value: 25.75 },
	{ time: '2018-11-20', value: 25.72 },
	{ time: '2018-11-21', value: 25.78 },
	{ time: '2018-11-23', value: 25.72 },
	{ time: '2018-11-26', value: 25.78 },
	{ time: '2018-11-27', value: 25.85 },
	{ time: '2018-11-28', value: 25.85 },
	{ time: '2018-11-29', value: 25.55 },
	{ time: '2018-11-30', value: 25.41 },
	{ time: '2018-12-03', value: 25.41 },
	{ time: '2018-12-04', value: 25.42 },
	{ time: '2018-12-06', value: 25.33 },
	{ time: '2018-12-07', value: 25.39 },
	{ time: '2018-12-10', value: 25.32 },
	{ time: '2018-12-11', value: 25.48 },
	{ time: '2018-12-12', value: 25.39 },
	{ time: '2018-12-13', value: 25.45 },
	{ time: '2018-12-14', value: 25.52 },
	{ time: '2018-12-17', value: 25.38 },
	{ time: '2018-12-18', value: 25.36 },
	{ time: '2018-12-19', value: 25.65 },
	{ time: '2018-12-20', value: 25.70 },
	{ time: '2018-12-21', value: 25.66 },
	{ time: '2018-12-24', value: 25.66 },
	{ time: '2018-12-26', value: 25.65 },
	{ time: '2018-12-27', value: 25.66 },
	{ time: '2018-12-28', value: 25.68 },
	{ time: '2018-12-31', value: 25.77 },
	{ time: '2019-01-02', value: 25.72 },
	{ time: '2019-01-03', value: 25.69 },
	{ time: '2019-01-04', value: 25.71 },
	{ time: '2019-01-07', value: 25.72 },
	{ time: '2019-01-08', value: 25.72 },
	{ time: '2019-01-09', value: 25.66 },
	{ time: '2019-01-10', value: 25.85 },
	{ time: '2019-01-11', value: 2