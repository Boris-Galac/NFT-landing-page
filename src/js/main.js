//// open menu

const hamIcon = document.querySelector('.nav__ham-icon');
hamIcon.addEventListener('click', (e) => {
	searchBtn.style = `
		pointer-events: none;
    `;
	const menuList = document.querySelector('.nav__list');
	const lines = [...hamIcon.children];
	lines.forEach((line) => {
		line.classList.toggle('active');
	});
	menuList.classList.toggle('is-open');
	menuList.classList.remove('is-closed');
	if (!menuList.classList.contains('is-open')) {
		searchBtn.style = `
        pointer-events: visible;
    `;
		menuList.classList.remove('is-open');
		menuList.classList.add('is-closed');
	}
});

//// search window

const navbar = document.querySelector('.nav');
const searchBtn = document.querySelector('.nav__search-icon');

searchBtn.addEventListener('click', (e) => {
	navbar.style = `
        z-index: -1;
    `;
	document.querySelector('.search-overlay').classList.add('is-open');
	document.querySelector('.search-overlay').classList.remove('is-closed');
});
document
	.querySelector('.search__close-wrapper')
	.addEventListener('click', (e) => {
		navbar.style = `
        z-index: 1;
    `;
		document.querySelector('.search-overlay').classList.remove('is-open');
		document.querySelector('.search-overlay').classList.add('is-closed');
	});

//// padding navbar

const xy = document.querySelector('.nav').offsetHeight;
const mainPaddingTop = (document.querySelector('.hero').style = `
	padding-top: ${xy}px;
`);
