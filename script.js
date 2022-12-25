//Function to make changes wrt Dark Mode

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

//Function to make changes wrt Dark Mode

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
	//to make changes in component 2
	let comp2 = document.querySelector(".component-2");
	comp2.style.gap = "60px";
	let comp2Content = document.querySelector(".component-2-content");
	comp2Content.style.color = "#fff";
	comp2Content.style.fontWeight = "300";
	let comp2Btn = document.querySelector(".component-2-button");
	comp2Btn.style.background =
		"linear-gradient(to bottom right, #252525, #404040)";
	//to make changes in component 3
	let comp3 = document.querySelector(".component-3");
	comp3.style.gap = "50px";
	let comp3Content = document.querySelector(".component-3-content");
	comp3Content.style.color = "#fff";
	comp3Content.style.fontWeight = "300";
	let comp3Btn = document.querySelector(".component-3-button");
	comp3Btn.style.background =
		"linear-gradient(to bottom right, #252525, #404040)";
	//to change the appearance of Dark mode & Light mode buttons in dark mode
	lightBtn.style.color = "#fff";
	darkBtn.style.color = "#fff";
	//to change the appearance of Logo in dark mode
	blackLogo.style.display = "none";
	whiteLogo.style.display = "flex";
}
