const inOfCountChar = document.getElementById("inOfCountChar");
const outOfCountChar = document.getElementById("outOfCountChar");

const countCharacters = (S) => {
	let count = 0;
	let sum = 0;
	let B = [];
	for (let i = 0; i < S.length; i++) {
		if (S[i] === "A") {
			count++;
		} else if (S[i] === "D") {
			sum++;
		}
	}
	B.push(count);
	B.push(sum);
	return B;
};

function countCharactersFun() {
	let inputText = inOfCountChar.value;
	if (inputText == "") {
		//empty so cant do anything
		return;
	}
	let result = countCharacters(inputText);

	// let output = "count of A is" + result[0] + "count of D is" + result[1];
	// outOfCountChar.innerText = output;
	//or
	outOfCountChar.innerHTML = `<p>count of A is <small>${result[0]}</small> </p> <p>count of D is <small>${result[1]}</small> </p>`;
}
