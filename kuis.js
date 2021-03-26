function check() {
	var c = 0;
	var q1 = document.quiz.question1.value;
	var q2 = document.quiz.question2.value;
	var q3 = document.quiz.question3.value;
	var q4 = document.quiz.question4.value;
	var q5 = document.quiz.question5.value;
	var result = document.getElementById('result');
	var quiz  = document.getElementById("quiz"); 
	if (q1=="TRUE") {c++}
	if (q2=="FALSE") {c++}
	if (q3=="FALSE") {c++}
	if (q4=="TRUE") {c++}
	if (q5=="TRUE") {c++}	

	if (c <= 3) {
		result.innerHTML = `Nilai kamu ${c}. Semangat, coba lagi nanti yaa.`
	}
	else{
		result.innerHTML = `Nilai kamu ${c}. Wah kamu luar biasa sekali.`
	}
		quiz.style.display="none";
		document.getElementById('button').style.display = 'none';
		
	console.log(c);
}