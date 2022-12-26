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
	//to make changes in entire container
	let body = document.querySelector("body");
	let container = body.querySelector(".container");
	body.style.backgroundColor = "#101010";
	container.style.backgroundColor = "#101010";
	container.style.color = "#fff";
	//to change the appearance of Dark mode & Light mode buttons in dark mode
	let lightBtn = document.querySelector(".theme .lightmode .lightmodebtn");
	let darkBtn = document.querySelector(".theme .darkmode .darkmodebtn");
	lightBtn.style.color = "#fff";
	darkBtn.style.color = "#fff";
	//to change the appearance of Logo in dark mode
	let whiteLogo = document.querySelectorAll(".whiteLogo");
	let blackLogo = document.querySelectorAll(".blackLogo");
	for (let index = 0; index < 2; index++) {
		blackLogo[index].style.display = "none";
		whiteLogo[index].style.display = "flex";
	}

	//to make changes in NavBar
	let navLI = document.querySelectorAll(".nav-mid .list .list-item");
	for (let i = 0; i < 6; i++) {
		if (i === 0) {
			navLI[i].style.color = "#fff";
			navLI[i].style.fontWeight = "700";
		} else {
			navLI[i].style.color = "#d0d0d0";
			navLI[i].style.fontWeight = "400";
		}
	}
	let navbarBtn = document.querySelector(".nav-end .btn");
	navbarBtn.style.border = "1.5px solid #fff";
	navbarBtn.style.backgroundColor = "transparent";
	navbarBtn.style.color = "#fff";
	//to make changes in component 1
	let comp1Content = document.querySelector(".component-1-content");
	comp1Content.style.color = "#d0d0d0";
	comp1Content.style.fontWeight = "400";
	let comp1Btn = document.querySelector(".component-1-button");
	comp1Btn.style.background =
		"linear-gradient(to bottom right, #252525, #404040)";
	//to make changes in component 2
	let comp2 = document.querySelector(".component-2");
	comp2.style.gap = "60px";
	let comp2Content = document.querySelector(".component-2-content");
	comp2Content.style.color = "#d0d0d0";
	comp2Content.style.fontWeight = "400";
	let comp2Btn = document.querySelector(".component-2-button");
	comp2Btn.style.background =
		"linear-gradient(to bottom right, #252525, #404040)";
	//to make changes in component 3
	let comp3 = document.querySelector(".component-3");
	comp3.style.gap = "50px";
	let comp3Content = document.querySelector(".component-3-content");
	comp3Content.style.color = "#d0d0d0";
	comp3Content.style.fontWeight = "400";
	let comp3Btn = document.querySelector(".component-3-button");
	comp3Btn.style.background =
		"linear-gradient(to bottom right, #252525, #404040)";
	//to make changes in component 4
	let comp4Content = document.querySelector(".component-4-content");
	comp4Content.style.color = "#d0d0d0";
	comp4Content.style.fontWeight = "400";
	//to make changes in component 5
	let comp5Content = document.querySelectorAll(".component-5-content");
	for (let i = 0; i < 6; i++) {
		comp5Content[i].style.color = "#d0d0d0";
		comp5Content[i].style.fontWeight = "400";
	}
	//to make changes in component 6
	// let comp6 = document.querySelector(".component-6");
	// comp6.style.background = "linear-gradient(to bottom right, #000, #252525)";
	//to make changes in component 7
	let comp7 = document.querySelector(".component-7");
	comp7.style.backgroundColor = "#202020";
	let comp7Content = document.querySelector(".component-7-central-heading p");
	comp7Content.style.color = "#d0d0d0";
	comp7Content.style.fontWeight = "400";
	//to make changes in component 8
	let comp8 = document.querySelector(".component-8");
	comp8.style.background = "linear-gradient(to bottom right, #000, #252525)";
	//to make changes in Footer
	let footerContent = document.querySelector(".footer-container-1 p");
	footerContent.style.color = "#d0d0d0";
	footerContent.style.fontWeight = "400";
	let footerListItems = document.querySelectorAll(".footer-list-item");
	for (let index = 0; index < footerListItems.length; index++) {
		footerListItems[index].style.color = "#d0d0d0";
		footerListItems[index].style.fontWeight = "400";
	}
}
