function capturarContinente(){
	var x = document.getElementById("continente").selectedIndex;
	var y = document.getElementById("continente").options;
	return y[x].text;
}

function capturarPagina(){
	var x1 = document.getElementById("pagina").selectedIndex;
	var y1 = document.getElementById("pagina").options;
	return y1[x1].text;
}