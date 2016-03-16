var redTab = document.querySelector('.redTabButton');
var greenTab = document.querySelector('.greenTabButton');
var blueTab = document.querySelector('.blueTabButton');
var redTabInfo = document.querySelector('.redTabInformation')
var greenTabInfo = document.querySelector('.greenTabInformation')
var blueTabInfo = document.querySelector('.blueTabInformation')

redTab.addEventListener('click', displayRedTab);
greenTab.addEventListener('click', displayGreenTab);
blueTab.addEventListener('click', displayBlueTab);

function displayRedTab () {
		redTab.style.backgroundColor = '#BBB'
		greenTab.style.backgroundColor = '#FFF'
		blueTab.style.backgroundColor = '#FFF'	
		redTabInfo.style.display = 'block';
		greenTabInfo.style.display = 'none';
		blueTabInfo.style.display = 'none';
}
function displayGreenTab () {
		redTab.style.backgroundColor = '#FFF'
		greenTab.style.backgroundColor = '#BBB'
		blueTab.style.backgroundColor = '#FFF'	
		redTabInfo.style.display = 'none';
		greenTabInfo.style.display = 'block';
		blueTabInfo.style.display = 'none';
}
function displayBlueTab () {
		redTab.style.backgroundColor = '#FFF'
		greenTab.style.backgroundColor = '#FFF'
		blueTab.style.backgroundColor = '#BBB'	
		redTabInfo.style.display = 'none';
		greenTabInfo.style.display = 'none';
		blueTabInfo.style.display = 'block';
}