function get_answer() {
	try {
		return JSON.parse(window.localStorage.getItem("gameState"))["solution"];
	}
	catch(e) {
		return false;
	}
}


document.body.addEventListener("keydown", event => {
	if (event.key === ".") {
		var answer = get_answer();
		if (answer) {
			alert("Answer is '" + answer.toUpperCase() + "'.");
		}
		else {
			alert(
				"Error\n" + 
				"An unexpected exception has occurred.\n" +
				"Please report it to the developer's Github.\n" +
				"URL: https://github.com/HidegonSan/Answordle"
			)
		}
	}
});