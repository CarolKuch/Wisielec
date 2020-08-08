
var przyslowia = new Array("I króla robaki zjedzą","Im wcześniej tym lepiej","Paluszek i główka to szkolna wymówka","Do ludzi po rozum do matki po serce","Do grosza grosz to się napełni trzos","Cel uświęca środki","Co ma wisieć nie utonie","Czego oczy nie widzą tego sercu nie żal","Wszystko dobre co się dobrze kończy","Wszędzie dobrze gdzie nas nie ma","Hulaj dusza piekła nie ma","O pieniądzach się nie mówi pieniądze się ma","Łyżka dziegciu beczkę miodu zepsuje");
var haslo = przyslowia[Math.ceil(Math.random()*przyslowia.length)];
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var haslozasloniete = "";
var licznik_skuch = 0;

for	(i=0; i<dlugosc; i++)
{
	if(haslo.charAt(i)==" ") haslozasloniete = haslozasloniete + " ";		
	else haslozasloniete = haslozasloniete + "-";
}

function wypisz_haslo()
{
	document.getElementById("zagadka").innerHTML = haslozasloniete;
}

window.onload = start;

var litery = new Array(35);
litery[0]="A";
litery[1]="Ą";
litery[2]="B";
litery[3]="C";
litery[4]="Ć";
litery[5]="D";
litery[6]="E";
litery[7]="Ę";
litery[8]="F";
litery[9]="G";
litery[10]="H";
litery[11]="I";
litery[12]="J";
litery[13]="K";
litery[14]="L";
litery[15]="Ł";
litery[16]="M";
litery[17]="N";
litery[18]="O";
litery[19]="Ó";
litery[20]="P";
litery[21]="Q";
litery[22]="R";
litery[23]="S";
litery[24]="T";
litery[25]="U";
litery[26]="W";
litery[27]="X";
litery[28]="Y";
litery[29]="Z";
litery[30]="Ż";
litery[31]="Ź";
litery[32]="Ń";
litery[33]="Ś";
litery[34]="V";


function start()
{
	var tresc_diva = "";
	
	for	(i=0; i<35; i++)
	{ 
		var element = "lit"+ i;
		tresc_diva = tresc_diva+ '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+ litery[i]+ '</div>';
		if ((i+1)%7==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>'
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	
	wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce>this.length-1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{
		var trafiona = false;
		
		for(i=0; i<dlugosc;i++)
		{
			if(haslo.charAt(i)==litery[nr])
			{
				haslozasloniete = haslozasloniete.ustawZnak(i, litery[nr]);	
				trafiona = true;
			}
		}
		
		if(trafiona==true) 
		{
			var element = "lit" + nr;
			document.getElementById(element).style.background="#003300";
			document.getElementById(element).style.color="#00C000";
			document.getElementById(element).style.border="3px solid #00C000";
			document.getElementById(element).style.cursor = "context-menu";
			
			wypisz_haslo();
		}
		else 
		{
			var element = "lit" + nr;
			document.getElementById(element).style.background="#330000";
			document.getElementById(element).style.color="#c00000";
			document.getElementById(element).style.border="3px solid #c00000";
			document.getElementById(element).style.cursor = "context-menu";
			document.getElementById(element).setAttribute("onclick",";");
			licznik_skuch++;
			var numer_obrazka = "img/s"+licznik_skuch+".jpg";
			document.getElementById("szubienica").innerHTML='<img src='+numer_obrazka+' />';
		}
		
		//wygrana
		if(haslo == haslozasloniete)
		{
			document.getElementById("alfabet").innerHTML= "Wygrałeś! Hasło to: "+haslo+ ' </br></br> <span class="reset" onclick="location.reload()" > Chcesz zagrać ponownie?</span>'
		}
		
		//przegrana
		if(licznik_skuch>=9)
		{
			document.getElementById("alfabet").innerHTML= "Przegrałeś... Hasło to: " +haslo+ ' </br></br> <span class="reset" onclick="location.reload()" > Chcesz zagrać ponownie?</span>'
		}
	
}