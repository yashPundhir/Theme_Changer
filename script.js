function toggleLight() {
	let body = document.querySelector("body");
	let container = document.querySelector(".container");
	body.style.backgroundColor = "#fff";
	let lightBtn = document.querySelector(".theme .lightmode .lightmodebtn");
	lightBtn.style.color = "#000";
	let darkBtn = document.querySelector(".theme .darkmode .darkmodebtn");
	darkBtn.style.color = "#000";
	container.style.backgroundColor = "#fff";
	container.style.color = "#101010";
	let whiteLogo = document.querySelector(".whiteLogo");
	let blackLogo = document.querySelector(".blackLogo");
	blackLogo.style.display = "flex";
	whiteLogo.style.display = "none";
}
function toggleDark() {
	let body = document.querySelector("body");
	let container = body.querySelector(".container");
	body.style.backgroundColor = "#101010";
	container.style.backgroundColor = "#101010";
	container.style.color = "#fff";
	let lightBtn = document.querySelector(".theme .lightmode .lightmodebtn");
	let darkBtn = document.querySelector(".theme .darkmode .darkmodebtn");
	let whiteLogo = document.querySelector(".whiteLogo");
	let blackLogo = document.querySelector(".blackLogo");
	let navLI = document.querySelectorAll(".nav-mid .list .list-item");
	for (let i = 0; i < 6; i++) {
		navLI[i].style.color = "#fff";
		if (i === 0) {
			navLI[i].style.fontWeight = "700";
		} else {
			navLI[i].style.fontWeight = "300";
		}
	}
	let navbarBtn = document.querySelector(".nav-end .btn");
	navbarBtn.style.border = "1.5px solid #fff";
	navbarBtn.style.backgroundColor = "transparent";
	navbarBtn.style.color = "#fff";
	let comp1Content = document.querySelector(".component-1-content");
	comp1Content.style.color = "#fff";
	comp1Content.style.fontWeight = "300";
	let comp1Btn = document.querySelector(".component-1-button");
	comp1Btn.style.background =
		"linear-gradient(to bottom right, #252525, #404040)";

	lightBtn.style.color = "#fff";
	darkBtn.style.color = "#fff";
	blackLogo.style.display = "none";
	whiteLogo.style.display = "flex";
}
