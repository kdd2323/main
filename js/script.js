let menu = document.querySelector(".nav-menu");
let openbtn = document.querySelector(".open-btn");
let closebtn = document.querySelector(".close-btn");

openbtn.onclick = () => {
	menu.classList.add('active');


	openbtn.classList.add('hide');
	closebtn.classList.add('active');
}

closebtn.onclick = () => {
	menu.classList.remove('active');


	openbtn.classList.remove('hide');
	closebtn.classList.remove('active');
}



let searchopen = document.querySelector(".search-open");
let searchclose = document.querySelector(".search-close");
let searchfield = document.querySelector(".search-field");

searchopen.onclick = () => {
	searchfield.style.display = "block";
	searchopen.style.display = "none";
	searchclose.style.display = "block";
}

searchclose.onclick = () => {
	searchfield.style.display = "none";
	searchopen.style.display = "block";
	searchclose.style.display = "none";
}






const arrow = document.querySelector(".arrow");

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 600) {
		arrow.classList.add('active');
	}
	else {
		arrow.classList.remove('active');
	}
})

arrow.addEventListener('click', () => {
	window.scrollTo(0,0);
})


const modal = document.querySelector(".modal");
const openmodal = document.querySelector(".nav-button");
const closemodal = document.querySelector(".modal-close");

openmodal.onclick = (event) => {
	event.preventDefault();
	modal.style.display = "block";
	document.body.style.overflowY = "hidden";
} 

closemodal.onclick = () => {
	modal.style.display = "none";
	document.body.style.overflowY = "auto";
} 

window.onclick = (event) => {
	if (event.target == modal) {
		modal.style.display = "none";
		document.body.style.overflowY = "auto";
	}
} 











