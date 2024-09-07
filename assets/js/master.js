function calculate() {
	const height = document.getElementById("height").value;
	const weight = document.getElementById("weight").value;
	let bmi;
	const form = document.getElementById("myform");
	const metr = height / 100;
	function submitForm(event) {
		//Preventing page refresh
		event.preventDefault();
	}

	if (height >= 94 && weight >= 13) {
		bmi = weight / (metr * metr);
		document.getElementById("result").innerHTML = bmi.toFixed(6);
		form.addEventListener("submit", submitForm);
	} else {
		form.addEventListener("submit", submitForm);
		document.getElementById("comment").innerHTML = "Enter Correct numbers";
	}

	if (bmi <= 18.5) {
		document.getElementById("comment").innerHTML = "You are underweight";
	} else if (bmi >= 18.5 && bmi <= 25) {
		document.getElementById("comment").innerHTML = "You are healthy";
	} else if (bmi >= 25 && bmi <= 30) {
		document.getElementById("comment").innerHTML = "You are overweight";
	} else if (bmi >= 30) {
		document.getElementById("comment").innerHTML = "you are fat";
	}
}

function reload() {
	document.getElementById("result").textContent = "00.00";
	document.getElementById("comment").textContent = "";
}
