var czas = 0;

var zmienPierwsza = false;
var zmienDruga = false;
var koniec = false;

function init(){
	setInterval(rysuj, 150);
}

function zmienNaPrawdePierwsza(){
	zmienPierwsza = true;
	rysujPierwsza();
}

function zmienNaPrawdeDruga(){
	zmienDruga = true;
	rysujDruga();
}

function rysujPierwsza(){
	var obszar = document.getElementById("obszarAnimacja");

	var px2 = obszar.width/7.0;
	var px = (2.0*Math.PI)/px2;

	var amplituda1 = Number(parseFloat(document.formularz.amplituda1.value));
	var faza1 = Number(parseFloat(document.formularz.faza1.value));
	var czestotliwosc1 = Number(parseFloat(document.formularz.czestotliwosc1.value)/100.0);

	var kontekst = obszar.getContext("2d");
	kontekst.beginPath();
	
	var czestotliwoscX1 = czestotliwosc1/Math.PI;
	var fazaX1 = faza1 * px;

	if(zmienPierwsza==true){
		kontekst.clearRect(0, 0, obszar.width, obszar.height);

		for(i=0; i<=obszar.width; i++){
			kontekst.strokeStyle='red';
			kontekst.lineWidth = 1;

			kontekst.lineTo(i, obszar.height * 0.5 + (amplituda1 * Math.sin((czestotliwoscX1 * (czas- i*px))+fazaX1)));
		}
		kontekst.stroke();	

	legenda();
	ukladWspolrzednych();
	}
}

function rysujDruga(){
	var obszar = document.getElementById("obszarAnimacja");

	var px2 = obszar.width/7.0;
	var px = (2.0*Math.PI)/px2;

	var amplituda2 = Number(parseFloat(document.formularz.amplituda2.value));
	var faza2 = Number(parseFloat(document.formularz.faza2.value));
	var czestotliwosc2 = Number(parseFloat(document.formularz.czestotliwosc2.value)/100.0);

	var kontekst = obszar.getContext("2d");
	kontekst.beginPath();
	
	var czestotliwoscX2 = czestotliwosc2/Math.PI;
	var fazaX2 = faza2 * px;

	if(zmienDruga==true){
		kontekst.clearRect(0, 0, obszar.width, obszar.height);

		for(i=0; i<=obszar.width; i++){
			kontekst.strokeStyle='blue';
			kontekst.lineWidth = 1;

			kontekst.lineTo(i, obszar.height * 0.5 + (amplituda2 * Math.sin((czestotliwoscX2 * (czas- i*px))+fazaX2)));
		}
		kontekst.stroke();	
	
	legenda();
	ukladWspolrzednych();
	}
}

function rysuj(){

	var obszar = document.getElementById("obszarAnimacja");

	var px2 = obszar.width/7.0;
	var px = (2.0*Math.PI)/px2;

	var amplituda1 = Number(parseFloat(document.formularz.amplituda1.value));
	var faza1 = Number(parseFloat(document.formularz.faza1.value));
	var czestotliwosc1 = Number(parseFloat(document.formularz.czestotliwosc1.value)/100.0);

	var amplituda2 = Number(parseFloat(document.formularz.amplituda2.value));
	var faza2 = Number(parseFloat(document.formularz.faza2.value));
	var czestotliwosc2 = Number(parseFloat(document.formularz.czestotliwosc2.value)/100.0);


	if(koniec==false){

		czas += 0.1;

		var kontekst = obszar.getContext("2d");
		kontekst.beginPath();
		
		var czestotliwoscX1 = czestotliwosc1/Math.PI;
		var fazaX1 = faza1 * px;

		var czestotliwoscX2 = czestotliwosc2/Math.PI;
		var fazaX2 = faza2 * px;

		kontekst.clearRect(0, 0, obszar.width, obszar.height);

		var fala1 = [];
		var fala2 = [];

		for(i=0; i<=obszar.width; i++){
			kontekst.strokeStyle='red';
			kontekst.lineWidth = 1;
			if(formularz.kierunek1.value=="lewo"){
				fala1.push(amplituda1 * Math.sin((czestotliwoscX1 * (czas+ i*px))+fazaX1));
				kontekst.lineTo(i, obszar.height * 0.5 + fala1[i]);
			}
			if(formularz.kierunek1.value=="prawo"){
				fala1.push(amplituda1 * Math.sin((czestotliwoscX1 * (czas- i*px))+fazaX1));
				kontekst.lineTo(i, obszar.height * 0.5 + fala1[i]);
			}

		}
		kontekst.stroke();
		kontekst.beginPath();

		for(j=0; j<=obszar.width; j++){
			kontekst.strokeStyle='blue';
			kontekst.lineWidth = 1;
			if(formularz.kierunek2.value=="lewo"){
				fala2.push(amplituda2 * Math.sin((czestotliwoscX2 * (czas+ j*px))+fazaX2));
				kontekst.lineTo(j, obszar.height * 0.5 + fala2[j]);
			}
			if(formularz.kierunek2.value=="prawo"){
				fala2.push(amplituda2 * Math.sin((czestotliwoscX2 * (czas- j*px))+fazaX2));
				kontekst.lineTo(j, obszar.height * 0.5 + fala2[j]);
			}
		}

		kontekst.stroke();

		kontekst.beginPath();

		for(k=0; k<=obszar.width; k++){
			kontekst.strokeStyle='darkmagenta';
			kontekst.lineWidth = 2;
			kontekst.lineTo(k, obszar.height * 0.5 + (fala1[k]+fala2[k]));
		}

		kontekst.stroke();

		legenda();
		ukladWspolrzednych();
	}
}

function legenda(){
	var obszar = document.getElementById("obszarAnimacja");
	var kontekst = obszar.getContext("2d");
	kontekst.beginPath();

	kontekst.strokeStyle='black';
	kontekst.lineWidth = 1;
	kontekst.strokeRect(560,0,140,50);

	kontekst.beginPath();
	kontekst.strokeStyle='red';
	kontekst.lineWidth = 1;
	kontekst.moveTo(565,13);
	kontekst.lineTo(595,13);
	kontekst.stroke();
	kontekst.lineWidth = 1;
	kontekst.font="15px Arial";
	kontekst.strokeText("fala pierwsza", 600, 15);

	kontekst.beginPath();
	kontekst.strokeStyle='blue';
	kontekst.lineWidth = 1;
	kontekst.moveTo(565,28);
	kontekst.lineTo(595,28);
	kontekst.stroke();
	kontekst.lineWidth = 1;
	kontekst.font="15px Arial";
	kontekst.strokeText("fala druga", 600, 30);

	kontekst.beginPath();
	kontekst.strokeStyle='darkmagenta';
	kontekst.lineWidth = 1;
	kontekst.moveTo(565,43);
	kontekst.lineTo(595,43);
	kontekst.stroke();
	kontekst.lineWidth = 1;
	kontekst.font="15px Arial";
	kontekst.strokeText("fala wynikowa", 600, 45);
}

function ukladWspolrzednych(){

	var obszar = document.getElementById("obszarAnimacja");
	var kontekst = obszar.getContext("2d");
	kontekst.beginPath();

	kontekst.beginPath();
	kontekst.strokeStyle='black';
	kontekst.lineWidth = 1;
	kontekst.moveTo(1, obszar.height/2.0);
	kontekst.lineTo(obszar.width, obszar.height/2.0);
	kontekst.stroke();

	kontekst.strokeStyle='black';
	kontekst.lineWidth = 1;
	kontekst.moveTo(1, 0);
	kontekst.lineTo(1, obszar.height);
	kontekst.stroke();

	kontekst.strokeStyle='black';
	kontekst.lineWidth = 1;
	kontekst.moveTo(1, 0);
	kontekst.lineTo(10, 20);
	kontekst.lineTo(1, 20);
	kontekst.fill();
	kontekst.stroke();

	kontekst.strokeStyle='black';
	kontekst.lineWidth = 1;
	kontekst.moveTo(obszar.width, obszar.height/2.0);
	kontekst.lineTo(obszar.width-20, obszar.height/2.0-10);
	kontekst.lineTo(obszar.width-20, obszar.height/2.0+10);
	kontekst.lineTo(obszar.width, obszar.height/2.0);
	kontekst.fill();
	kontekst.stroke();

	kontekst.closePath();

	var px2 = obszar.width/7.0;

	var i=px2;

	while(i<obszar.width){
		kontekst.beginPath();
		kontekst.moveTo(i, obszar.height/2.0+5);
		kontekst.lineTo(i, obszar.height/2.0-5);
		kontekst.stroke();
		kontekst.lineWidth = 1;
		kontekst.font="10px Arial";
		kontekst.strokeText(i/100+'π', i-5, obszar.height/2.0+15);
		kontekst.closePath();
		i+=px2;
	}

		kontekst.beginPath();
		kontekst.moveTo(0, obszar.height/2.0+obszar.height/8.0);
		kontekst.lineTo(5, obszar.height/2.0+obszar.height/8.0);
		kontekst.stroke();
		kontekst.lineWidth = 1;
		kontekst.font="10px Arial";
		kontekst.strokeText("1", 7, obszar.height/2.0+obszar.height/8.0+3);
		kontekst.closePath();

		kontekst.beginPath();
		kontekst.moveTo(0, obszar.height/2.0-obszar.height/8.0);
		kontekst.lineTo(5, obszar.height/2.0-obszar.height/8.0);
		kontekst.stroke();
		kontekst.lineWidth = 1;
		kontekst.font="10px Arial";
		kontekst.strokeText("1", 7, obszar.height/2.0-obszar.height/8.0+3);
		kontekst.closePath();		

	legenda();
}


function wyczysc(){
	var obszar = document.getElementById("obszarAnimacja");
	var kontekst = obszar.getContext("2d");
	kontekst.clearRect(0, 0, obszar.width, obszar.height);
	koniec = true;
	zmienPierwsza = false;
	zmienDruga = false;
	ukladWspolrzednych();
	legenda();
}

function zmiana(){
	koniec = false;
	init();
}