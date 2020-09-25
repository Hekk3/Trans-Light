// slider********************************************************************************


// a tunes your slider number one, if you need to add anoter slider, add this is "const", with change classes on your elem.
// And add on yout buttons "addEventLisnter" with tune;
const projectTrack = document.querySelector('.project__track');
const projectPrev = document.querySelector('.project__button-prev');
const projectNext = document.querySelector('.project__button-next');
const projectItem = document.querySelectorAll('.project__slide');

let margin = 30; // need to set the your margin between yout item. If you have it.
let projectPosition = 0;
if (projectPosition === 0) {
	projectPrev.style.pointerEvents = "none";
}

// the end of the tune a slider number two;

const rentPrev = document.querySelector('.slider-rent__button-prev'),
	  rentNext = document.querySelector('.slider-rent__button-next'),
	  rentSlide = document.querySelectorAll('.rent__slide'),
	  rentTrack = document.querySelector('.rent__slider-track');

let rentPosition = 0;
let rentMargin = 0;
if (rentPosition === 0) {
	rentPrev.style.pointerEvents = "none";
}

// check size before the end of site

let checkSize = (track) => {
	// check, when we need turn on the button(btnNext)
	let trackCheckSize = track.getBoundingClientRect();
	const doc1 = document.documentElement.getBoundingClientRect();
	let totalSize = doc1.right - track.right;
	return totalSize;
}


const movetrack = function(position, track) {
	track.style.transform = "translateX(" + position + "px)"; // When we click on the button, we move the "track" using translateX + position.
}

let checkBtn = function(position, btnPrev, btnNext, countSlides, width) { // check buttons - check when the button need stops
	position === 0 ? btnPrev.style.pointerEvents = "none" : btnPrev.style.pointerEvents = "auto" ;
	position <= (-width * countSlides) - (margin * countSlides) ? btnNext.style.pointerEvents = "none" : btnNext.style.pointerEvents = "auto" ;
}

//***************************************************************************

projectPrev.addEventListener('click', () => {
	let width = projectItem[0].clientWidth;
	let countSlides = 2; // quantity slides in your slider;
	projectPosition += width + margin; // take width the item;

	movetrack(projectPosition, projectTrack);
	checkBtn(projectPosition, projectPrev, projectNext, countSlides, width);
});

// projectNext.addEventListener('click', () => {
// 	let width = projectItem[0].clientWidth;
// 	let countSlides = 2; // quantity slides in your slider;
// 	projectPosition -= width + margin; // take width the item;

// 	movetrack(projectPosition, projectTrack);
// 	checkBtn(projectPosition, projectPrev, projectNext, countSlides, width);
// });

if (checkSize(projectTrack) !== 0 || checkSize(projectTrack) < 0) {
	projectNext.addEventListener('click', () => {

		if (checkSize(projectTrack) >= 0) {
			projectNext.style.pointerEvents = "none";
		} else {
			let width = projectItem[0].clientWidth;
			let countSlides = 2; // quantity slides in your slider;

			projectPosition -= width + margin; // take width the item;

			movetrack(projectPosition, projectTrack);
			checkBtn(projectPosition, projectPrev, projectNext, countSlides, width);
		}

	});
} else {
	projectNext.style.pointerEvents = "none";
}

//*****************************************************************************

rentPrev.addEventListener('click', () => {
	let width = rentSlide[0].clientWidth;
	let countSlides = 1; // quantity slides in your slider;
	rentPosition += width + rentMargin; // take width the item;

	movetrack(rentPosition, rentTrack);
	checkBtn(rentPosition, rentPrev, rentNext, countSlides, width);
});

rentNext.addEventListener('click', () => {
	let width = rentSlide[0].clientWidth;
	let countSlides = 1; // quantity slides in your slider;
	rentPosition -= width + rentMargin; // take width the item;

	movetrack(rentPosition, rentTrack);
	checkBtn(rentPosition, rentPrev, rentNext, countSlides, width);
});


// tabs********************************************************************************

const tabButtons = document.querySelectorAll('.tab-buttons__button'),
	  catalogItems = document.querySelectorAll('.catalog__items'),
	  catalog1 = document.querySelector('.catalog__items1'),
	  catalog2 = document.querySelector('.catalog__items2');

// default
tabButtons[0].classList.add('tab-buttons__button-acitve');

const turnTabs = function(e, catalog) {
	for (let i = 0; i < tabButtons.length; i++) {
		tabButtons[i].classList.remove('tab-buttons__button-acitve');
	}

	for (let i = 0; i < catalogItems.length; i++) {
		catalogItems[i].classList.remove('catalog__items--active');
		catalogItems[i].classList.add("catalog__items--hide");
	}

	catalog.classList.remove("catalog__items--hide");
	catalog.classList.add("catalog__items--active");
	e.classList.add('tab-buttons__button-acitve');
}

tabButtons[0].addEventListener('click', (e) => {
	turnTabs(e.target, catalog1);
});

tabButtons[1].addEventListener('click', (e) => {
	turnTabs(e.target, catalog2);
});



// show more********************************************************************************

const allNews = document.querySelectorAll('.news__item');
const showAllBtn = document.querySelector('.news__show-more');

const hideAllNews = function() {
	for (let i = 0; i < allNews.length; i++) {
		if (allNews[i] !== allNews[0] && allNews[i] !== allNews[1]) {
			allNews[i].classList.add("news__item--hide");
		}
	}
}

const showAllNews = function() {
	for (let i = 0; i < allNews.length; i++) {
		if (allNews[i] !== allNews[0] && allNews[i] !== allNews[1]) {
			allNews[i].classList.toggle("news__item--hide");
		}
	}
}

showAllBtn.addEventListener('click', showAllNews);

hideAllNews();


// burger*****************************************************************

const burger = document.querySelector('.ham');
const nav = document.querySelector(".nav");


const hideAndShow = function() {
	nav.classList.toggle('nav-burger--hide');
	burger.classList.toggle('burger--active');
}

burger.addEventListener('click', hideAndShow);










