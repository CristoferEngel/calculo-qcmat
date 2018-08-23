var botao = document.getElementById('botao');

var vf = function() {
	var m = document.getElementById('massa').value;
	var c = document.getElementById('calor').value;
	var t = document.getElementById('tempo').value;

	var convertM = parseFloat(m);
	var convertC = parseFloat(c);
	var convertT = parseFloat(t);
	var result = m * c * t;

	alert(result);
}
