var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var haslozasloniete = "";

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

function sprawdz(nr)
{
		for(i=0; i<dlugosc;i++)
		{
			if(haslo.charAt(i)==litery[nr])
			{
				alert(i);
			}
		}
}