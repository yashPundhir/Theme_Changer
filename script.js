//Function to make changes wrt Light Mode

function toggleLight() {
	//to make changes in entire container
	let body = document.querySelector("body");
	let container = document.querySelector(".container");
	let theme = body.querySelector(".theme");
	theme.style.boxShadow = "inset 0 0 2rem 1rem rgba(0, 0, 0, 0.6)";
	body.style.backgroundColor = "#fff";
	container.style.backgroundColor = "#fff";
	container.style.color = "#101010";
	//to change the appearance of Dark mode & Light mode buttons in light mode
	let lightBtn = document.querySelector(".theme .lightmode .lightmodebtn");
	lightBtn.style.color = "#000";
	let darkBtn = document.querySelector(".theme .darkmode .darkmodebtn");
	darkBtn.style.color = "#000";
	//to change the appearance of Logo in light mode
	let whiteLogo = document.querySelectorAll(".whiteLogo");
	let blackLogo = document.querySelectorAll(".blackLogo");
	for (let index = 0; index < 2; index++) {
		blackLogo[index].style.display = "flex";
		whiteLogo[index].style.display = "none";
	}
	//to make changes in NavBar
	let navLI = document.querySelectorAll(".nav-mid .list .list-item");
	for (let i = 0; i < 6; i++) {
		if (i === 0) {
			navLI[i].style.color = "#000";
			navLI[i].style.fontWeight = "700";
		} else {
			navLI[i].style.color = "#757575";
			navLI[i].style.fontWeight = "500";
		}
	}
	let navbarBtn = document.querySelector(".nav-end .btn");
	navbarBtn.style.border = "2px solid #000";
	navbarBtn.style.backgroundColor = "transparent";
	navbarBtn.style.color = "#000";
	//to make changes in component 1
	let comp1Content = document.querySelector(".component-1-content");
	comp1Content.style.color = "#757575";
	comp1Content.style.fontWeight = "500";
	let comp1Btn = document.querySelector(".component-1-button");
	comp1Btn.style.background =
		"linear-gradient(to bottom right, #09bcf8, #056aeb)";
	//to make changes in component 2
	let comp2Content = document.querySelector(".component-2-content");
	comp2Content.style.color = "#858585";
	comp2Content.style.fontWeight = "500";
	let comp2Btn = document.querySelector(".component-2-button");
	comp2Btn.style.background =
		"linear-gradient(to bottom right, #09bcf8, #056aeb)";
	//to make changes in component 3
	let comp3Content = document.querySelector(".component-3-content");
	comp3Content.style.color = "#858585";
	comp3Content.style.fontWeight = "500";
	let comp3Btn = document.querySelector(".component-3-button");
	comp3Btn.style.background =
		"linear-gradient(to bottom right, #09bcf8, #056aeb)";
	//to make changes in component 4
	let comp4Content = document.querySelector(".component-4-content");
	comp4Content.style.color = "#858585";
	comp4Content.style.fontWeight = "500";
	//to make changes in component 5
	let comp5Content = document.querySelectorAll(".component-5-content");
	for (let i = 0; i < 6; i++) {
		comp5Content[i].style.color = "#858585";
		comp5Content[i].style.fontWeight = "500";
	}
	//to make changes in component 6
	let comp6 = document.querySelector(".component-6");
	comp6.style.background = "linear-gradient(to bottom right, #09bcf8, #056aeb)";
	let purchasePlan = document.querySelectorAll(".purchase-plan");
	for (let index = 0; index < purchasePlan.length; index++) {
		purchasePlan[index].style.backgroundColor = "#fff";
	}
	let purchasePlanHeading = document.querySelectorAll(".purchase-plan-heading");
	let purchasePlanMainHeading = document.querySelectorAll(
		".purchase-plan-main-heading"
	);
	let purchasePlanSubHeading = document.querySelectorAll(
		".purchase-plan-sub-heading"
	);
	for (let index = 0; index < purchasePlanHeading.length; index++) {
		purchasePlanHeading[index].style.background =
			"linear-gradient(to bottom right, #d0d0d0, #fff)";
		purchasePlanMainHeading[index].style.color = "#000";
		purchasePlanSubHeading[index].style.color = "#757575";
	}
	let purchasePlan2Heading = document.querySelector(".purchase-plan-2-heading");
	let purchasePlan2MainHeading = document.querySelector(
		".purchase-plan-2-main-heading"
	);
	let purchasePlan2SubHeading = document.querySelector(
		".purchase-plan-2-sub-heading"
	);
	purchasePlan2Heading.style.background = "#353535";
	purchasePlan2MainHeading.style.color = "#fff";
	purchasePlan2SubHeading.style.color = "#fff";
	purchasePlan2SubHeading.style.fontWeight = "300";
	let benefitsListItems = document.querySelectorAll(".benefits-list-item");
	for (let index = 0; index < benefitsListItems.length; index++) {
		benefitsListItems[index].style.color = "#393939";
		benefitsListItems[index].style.fontWeight = "700";
	}
	let purchasePlanBtn = document.querySelectorAll(
		".purchase-plan-pricing-info button"
	);
	for (let index = 0; index < purchasePlanBtn.length; index++) {
		purchasePlanBtn[index].style.border = "2px solid #000";
		purchasePlanBtn[index].style.backgroundColor = "transparent";
		purchasePlanBtn[index].style.color = "#000";
	}
	let cpBtn = document.querySelector(".cp-btn");
	cpBtn.style.background = "linear-gradient(to bottom right, #09bcf8, #056aeb)";
	cpBtn.style.border = "none";
	cpBtn.style.color = "#fff";

	//to make changes in component 7
	let comp7 = document.querySelector(".component-7");
	comp7.style.backgroundColor = "#f5f5f5";
	let comp7Content = document.querySelector(".component-7-central-heading p");
	comp7Content.style.color = "#757575";
	comp7Content.style.fontWeight = "500";
	//to make changes in component 8
	let comp8 = document.querySelector(".component-8");
	comp8.style.background = "linear-gradient(to bottom right, #09bcf8, #056aeb)";
	//to make changes in Footer
	let footerContent = document.querySelector(".footer-container-1 p");
	footerContent.style.color = "#959595";
	footerContent.style.fontWeight = "500";
	let footerListItems = document.querySelectorAll(".footer-list-item");
	for (let index = 0; index < footerListItems.length; index++) {
		footerListItems[index].style.color = "#959595";
		footerListItems[index].style.fontWeight = "500";
	}
}

//Function to make changes wrt Dark Mode

function toggleDark() {
	//to make changes in entire container
	let body = document.querySelector("body");
	let container = body.querySelector(".container");
	let theme = body.querySelector(".theme");
	theme.style.boxShadow = "inset 0 0 2rem 1rem rgba(255, 255, 255, 0.2)";
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
	let comp2Content = document.querySelector(".component-2-content");
	comp2Content.style.color = "#d0d0d0";
	comp2Content.style.fontWeight = "400";
	let comp2Btn = document.querySelector(".component-2-button");
	comp2Btn.style.background =
		"linear-gradient(to bottom right, #252525, #404040)";
	//to make changes in component 3
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
	let comp6 = document.querySelector(".component-6");
	comp6.style.background = "linear-gradient(to bottom right, #252525, #454545)";
	let purchasePlan = document.querySelectorAll(".purchase-plan");
	for (let index = 0; index < purchasePlan.length; index++) {
		purchasePlan[index].style.backgroundColor = "#151515";
	}
	let purchasePlanHeading = document.querySelectorAll(".purchase-plan-heading");
	let purchasePlanMainHeading = document.querySelectorAll(
		".purchase-plan-main-heading"
	);
	let purchasePlanSubHeading = document.querySelectorAll(
		".purchase-plan-sub-heading"
	);
	for (let index = 0; index < purchasePlanHeading.length; index++) {
		purchasePlanHeading[index].style.background =
			"linear-gradient(to bottom right, #202020, #656565)";
		purchasePlanMainHeading[index].style.color = "#fff";
		purchasePlanSubHeading[index].style.color = "#fff";
	}
	let purchasePlan2Heading = document.querySelector(".purchase-plan-2-heading");
	let purchasePlan2MainHeading = document.querySelector(
		".purchase-plan-2-main-heading"
	);
	let purchasePlan2SubHeading = document.querySelector(
		".purchase-plan-2-sub-heading"
	);
	purchasePlan2Heading.style.background =
		"linear-gradient(to bottom right, #404040, #f5f5f5)";
	purchasePlan2MainHeading.style.color = "#151515";
	purchasePlan2SubHeading.style.color = "#151515";
	purchasePlan2SubHeading.style.fontWeight = "600";
	let benefitsListItems = document.querySelectorAll(".benefits-list-item");
	for (let index = 0; index < benefitsListItems.length; index++) {
		benefitsListItems[index].style.color = "#d0d0d0";
		benefitsListItems[index].style.fontWeight = "600";
	}
	let purchasePlanBtn = document.querySelectorAll(
		".purchase-plan-pricing-info button"
	);
	for (let index = 0; index < purchasePlanBtn.length; index++) {
		purchasePlanBtn[index].style.border = "1.5px solid #fff";
		purchasePlanBtn[index].style.backgroundColor = "transparent";
		purchasePlanBtn[index].style.color = "#fff";
	}
	let cpBtn = document.querySelector(".cp-btn");
	cpBtn.style.background = "linear-gradient(to bottom right, #252525, #404040)";
	cpBtn.style.border = "none";

	//to make changes in component 7
	let comp7 = document.querySelector(".component-7");
	comp7.style.backgroundColor = "#151515";
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
