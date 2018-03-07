function PokazFaleMechaniczne(){
	obszar=document.getElementById('obszar');
	var tresc = `
		<article>
		<h2>Fale mechaniczne.</h2>
		<p>
			Fale mechaniczne są najbardziej znanym rodziajem fal, ponieważ spotykamy je prawie wszędzie. Typowymi przykładami są: fale na wodzie, fale dźwiękowe oraz fale sejsmiczne. Wszyskie te fale mają pewne wspólne cechy, a mianowicie podlegają zasadom Newtona oraz mogą istnieć wyłącznie w jakimś ośrodku materialnym czyli np: wodzie, powietrzu, czy skale.
		</p>
		<p> 
			Jeżeli wychylimy jakiś fragment ośrodka sprężystego z jego położenia równowagi to w następstwie będzie on wykonywał drgania wokół tego położenia. Te drgania, dzięki właściwościom sprężystym ośrodka są przekazywane na kolejne części ośrodka, które zaczynają drgać. W ten sposób zaburzenie przechodzi przez cały ośrodek.
		</p>
		<p>
			Fala dobiegając do danego punktu ośrodka wprawia go w ruch drgający przekazując mu energię, która jest dostarczana przez źródło drgań. Energia fal to energia kinetyczna i potencjalna cząstek ośrodka. Za pomocą fal można przekazywać energię na duże odległości przy czym cechą charakterystyczną jest to, że fale przenoszą energię poprzez ośrodek dzięki przesuwaniu się zaburzenia w ośrodku, a nie dzięki ruchowi postępowemu samego ośrodka. 	
		</p>
		<br/>
		<fieldset class="definicja">
			<legend>Definicja</legend>
				<h4>Ruchem falowym nazywamy rozchodzenie się zaburzenia w ośrodku.</h4>
		</fieldset>
		<br/>
		<div class="obrazki">
			<video controls>
				<source src="FizykaRuchdrgajacy.mp4" type="video/mp4">
			</video>
		</div>
	</article>
	`;
	obszar.innerHTML = tresc;
}


function PokazRodzajeFal(){
	obszar=document.getElementById('obszar');
	var tresc = `
		<article>
		<h2>Rodzaje fal.</h2>
		<h4>Fale możemy podzielić w następujący sposób:</h4>
		<ul>
			<li>Ze względu na kierunek drgań cząstek ośrodka względem kierunku rozchodzenia się fale dzielimy na: <br/><br/>
				<ul>
					<li>
						Podłużne - fala jest podłużna, gdy kierunek drgań cząstek ośrodka jest równoległy do kierunku rozchodzenia się fali i zarazem kierunku transportu energii. Przykładem są tu fale dźwiękowe w powietrzu czy też drgania naprzemiennie ściskanej i rozciąganej sprężyny.
						<br/><br/>
						<div class="obrazki"><img src="falaPodlozna.gif" alt="falaPodluzna"></div>
						<br/><br/>
					</li>
					<li>
						Poprzeczne - fala jest poprzeczna, gdy kierunek drgań cząstek ośrodka jest prostopadły do kierunku rozchodzenia się fali i zarazem kierunku transportu energii. Przykładem mogą tu być drgania naprężonego sznura, którego końcem poruszamy cyklicznie w górę i w dół. 
						<br/><br/>
						<div class="obrazki"><img src="falaPoprzeczna.gif" alt="falaPoprzeczna"></div>
						<br/><br/>
					</li>
				</ul>
			</li>

			
			<li>Ze względu na rodzaj zaburzenia fale dzielimy na:<br/><br/>
				<ul>
					<li>
						Impuls falowy - impuls falowy powstaje gdy źródłem jest jednorazowe zaburzenie w ośrodku.
						<br/><br/>
						<div class="obrazki"><img src="impuls.gif" alt="impuls"></div>
						<br/><br/>
					</li>
					<li>
						Harmoniczne - fala harmoniczna powstaje gdy źródło wykonuje drgania harmonicznie, czyli inaczej cyklicznie.
						<br/><br/>
						<div class="obrazki"><img src="harmoniczna.gif" alt="harmoniczna"></div>
					</li>
				</ul>
			</li>
		</ul>
	</article>
	`;
	obszar.innerHTML = tresc;
}




function PokazParametryFali(){
	obszar=document.getElementById('obszar');
	var tresc = `
		<article>
		<h2>Parametry fali.</h2>
		<h4>Wyróżniamy następujące parametry fal:</h4>
		<ul>
			<li>Amplituda A fali to odległość największego wychylenia od położenia równowagi.<br/><br/></li>
			<li>Długość fali λ to odległość pomiędzy kolejnymi powtórzeniami kształtu fali.<br/><br/></li>
			<li>Początkowe przesunięcie fazowe ϕ.<br/><br/></li>
			<li>Okres T to czas wykonania jednego pełnego drgania w ruchu.<br/><br/></li>
			<li>Częstość f jest to ilość grzbietów (dolin), które w czasie jednej sekundy przechodzą przez ten sam punkt:

				<math display="block">
				<mi>f = </mi> 
				  <mfrac>
				   <mi>1</mi>
				   <mi>T</mi>
				  </mfrac>
				</math>
			<br/><br/>
			</li>

			<li>Częstość kołowa ω dana jest wzorem:
				<math display="block">
				<mi>ω = </mi> 
				  <mfrac>
				   <mi>2π</mi>
				   <mi>T</mi>
				  </mfrac>
				</math>
			<br/><br/>
			</li>

			<li>Prędkość fazowa v - w czasie równym T fala pokonuje dystans λ, zatem prędkość z jaką przemieszacza się fala, dana jest wzorem:

				<math display="block">
				<mi>v = </mi> 
				  <mfrac>
				   <mi>λ</mi>
				   <mi>T</mi>
				  </mfrac>
				</math>
			<br/><br/>
			</li>
		</ul>
	<div class="obrazki"><img src="parametryFali.png" alt="parametry"></div>
	</article>
	`;
	obszar.innerHTML = tresc;
}


function PokazRownanieFali(){
	obszar=document.getElementById('obszar');
	var tresc = `
		<article>
		<h2>Równanie fali.</h2>
		<p>
			Aby w pełni opisać falę i ruch dowolnego jej punktu, potrzebujemy funkcji opisującej jej kształt. Oznacza to, że potrzebna nam zależność w postaci y=h(x,t), opisująca poprzeczne przemieszczenie y elementu liny jako funkcję h zależną od czasu t i położenia x tego elementu fali. Do opisania fali posłużymy się funkcją sinus. 
		</p>
		<p>
			Wyobraźmy sobie falę sinusoidalną, biegnącą w dodatnim kierunku osi x. W miarę jak fala przesuwa się, elementy te drgają równolegle do osi y. W chwili t przemieszczenie y elementu znajdującego się w punkcie x dane jest wzorem:
		</p>

		<math display="block">
		  <mi>y</mi>
		  <mo>(</mo>
		  <mi>x</mi>
		  <mo>,</mo>
		  <mi>t</mi>
		  <mo>)</mo>
		  <mo>=</mo>
		  <mi>A</mi>
		  <mi>sin</mi>
		  <mo>(</mo>
		  <mi>k</mi>
		  <mi>x</mi>
		  <mo>&#x2212;</mo>
		  <mi>&#x03C9;</mi>
		  <mi>t</mi>
		  <mo>)</mo>
		</math>
		<p>
			Powyższy wzór opisuje falę biegnącą w dodatnim kierunku osi x.
		</p>
		<p>
			Falę biegnącą w przeciwnym kierunku opisuje wyrażenie, które możemy otrzymać zastępując czas t przez -t. Tak więc falę tę opisuje równanie:
		</p>
		<math display="block">
		  <mi>y</mi>
		  <mo>(</mo>
		  <mi>x</mi>
		  <mo>,</mo>
		  <mi>t</mi>
		  <mo>)</mo>
		  <mo>=</mo>
		  <mi>A</mi>
		  <mi>sin</mi>
		  <mo>(</mo>
		  <mi>k</mi>
		  <mi>x</mi>
		  <mo>+</mo>
		  <mi>&#x03C9;</mi>
		  <mi>t</mi>
		  <mo>)</mo>
		</math>
		<p>
			Wielkość k nazywamy liczbą falową. Wyrażona jest wzorem:
		</p>
		<math display="block">
		<mi>k = </mi> 
		  <mfrac>
		   <mi>2π</mi>
		   <mi>λ</mi>
		  </mfrac>
		</math>	

	</article>
	`;
	obszar.innerHTML = tresc;
}


function PokazSuperpozycje(){
	obszar=document.getElementById('obszar');
	var tresc = `
		<article>
		<h2>Zasada superpozycji fal</h2>
		<p>
			Często zdarza się, że dwie lub więcej fal przechodzi równocześnie przez ten sam obszar. Gdy na przykład słuchamy koncertu do naszych uszu wpadają równocześnie fale dźwiękowe z wielu instrumentów.  
		</p>
		<p>
			Załóżmy, że dwie fale biegną równocześnie wzdłuż tej samej napiętej liny. Przemieszczenie liny w sytuacji, gdy fale nakładają się będzie ich sumą:
		</p>
		<math display="block">
		  <mi>y</mi>
		  <mo>(</mo>
		  <mi>x</mi>
		  <mo>,</mo>
		  <mi>t</mi>
		  <mo>)</mo>
		  <mo>=</mo>
		  <msub>
		  	<mi>y</mi>
		  	<mn>1</mn>
		  </msub>
		  <mo>(</mo>
		  <mi>x</mi>
		  <mo>,</mo>
		  <mi>t</mi>
		  <mo>)</mo>
		  <mi>+</mi>
		  <msub>
		  	<mi>y</mi>
		  	<mn>2</mn>
		  </msub>
		  <mo>(</mo>
		  <mi>x</mi>
		  <mo>,</mo>
		  <mi>t</mi>
		  <mo>)</mo>
		</math>
		<br/>
		<fieldset class="definicja">
			<legend>Definicja</legend>
				<h4>Nakładające się fale dodają się algebraicznie, tworząc falę wypadkową.</h4>
		</fieldset>
		<br/>
		<fieldset class="definicja">
			<legend>Definicja</legend>
				<h4>Nakładające się fale w żaden sposób nie wpływają na siebie wzajemnie.</h4>
		</fieldset>

		<p>
			Poniżej przedstawiony został przykład superpozycji. Dwa impulsy poruszają się w przeciwnych kierunkach wzdłuż tej samej napiętej liny. Gdy impulsy nakładają się, wypadkowy impuls stanowi ich sumę.
		</p>
		<div class="obrazki"><img src="superpozycja.bmp" alt="superpozycja"></div>
	</article>
	`;
	obszar.innerHTML = tresc;
}

function PokazInerferencje(){
	obszar=document.getElementById('obszar');
	var tresc = `
		<article>
		<h2>Interferencja fal</h2>
		<p>
			Jeżeli w ośrodku rozchodzi się kilka fal, wysyłanych jednocześnie przez różne źródła, to wypadkowy ruch każdej cząstki ośrodka jest złożeniem ruchów, jakie wykonywałaby ta cząstka przy rozchodzeniu się każdej fali z osobna.
		</p>
			<fieldset class="definicja">
			<legend>Definicja</legend>
				<h4>Interferencja to zjawisko nakładania się fal, na skutek którego może dochodzić do wzmocnienia bądź wygaszenia pewnych obszarów fali wynikowej.</h4>
		</fieldset>
		<p>
			Na poniższym filmie przedstawione jest zjawisko interferencji fal na wodzie:
		</p>
		<div class="filmInterferencja">
			<video controls>
				<source src="Interference.mp4" type="video/mp4">
			</video>
		</div>
	</article>
	`;
	obszar.innerHTML = tresc;
}


function PokazAnimacje(){
	obszar=document.getElementById('obszar');
	var tresc = `
		<article onload="legenda()">
		<h2>Animacja</h2>
		<p>
			Poniżej znajduje się animacja, która prezentuje zjawiska interferencji oraz superpozycji fal.
		</p>
		<h4>
			Instrukcja obslugi:
		</h4>
		<p>
			Aby uruchomić animacje należy ustawić parametry pierwszej fali oraz nacisnąć przycisk "Pierwsza fala". Na planszy pojawi się fala z ustalonymi parametrami. Zmiany wartości można dokonać w każdym momencie działania programu. W identyczny sposób należy ustawić wartości fali drugiej. Aby zobaczyć efekt składania dwóch wybranych fal należy kliknąć przycisk "Wykonaj". Aby wyczyścić planszę należy kliknąć przycisk "Wyczyść".
		</p>
		<br/>
		<fieldset class="fieldsetFormularz">
		<legend>Parametry fal</legend>
		<form name="formularz"> 
			<table class="formularzTab">
					<tr><th colspan="2">Parametry fali pierwszej</th></tr>
					<tr><td>Amplituda</td><td><input onchange="rysujPierwsza()" type="range" name="amplituda1" min="0" max="125" value="0.0"/></td></tr>
					<tr><td>Faza</td><td><input onchange="rysujPierwsza()" type="range" name="faza1" min="0.0" value="0.0"/></td></tr>
					<tr><td>Czestotliwosc</td><td><input onchange="rysujPierwsza()" type="range" name="czestotliwosc1" min="0.0" max="1000.0" value="0.0"/></td></tr>
					<tr><td>Kierunek</td><td>
						<input type="radio" name="kierunek1" value="lewo" checked="checked"/>lewo
						<input type="radio" name="kierunek1" value="prawo"/>prawo
					</td></tr>
					<tr><td colspan="2"><input type="button" value="Pierwsza fala" onclick="zmienNaPrawdePierwsza()" style="width: 348px; height: 30px"/></td></tr>
			</table>

			<table class="formularzTab">
					<tr><th colspan="2">Parametry fali drugiej</th></tr>
					<tr><td>Amplituda</td><td><input onchange="rysujDruga()" type="range" name="amplituda2" min="0" max="125" value="0.0"/></tr>
					<tr><td>Faza</td><td><input onchange="rysujDruga()" type="range" name="faza2" min="0.0" value="0.0"/></tr>
					<tr><td>Czestotliwosc</td><td><input onchange="rysujDruga()" type="range" name="czestotliwosc2" min="0.0" max="1000.0" value="0.0"/></tr>
					<tr><td>Kierunek</td><td>
						<input type="radio" name="kierunek2" value="lewo" checked="checked"/>lewo
						<input type="radio" name="kierunek2" value="prawo"/>prawo
					<tr><td colspan="2"><input type="button" value="Druga fala" onclick="zmienNaPrawdeDruga()" style="width: 348px; height: 30px"/></td></tr>
			</table>
			<input type="button" value="Wykonaj" onclick="zmiana()" style="width: 352px; height: 30px"/>
			<input type="reset" value="Wyczyść" onclick="wyczysc()" style="width: 352px; height: 30px"/>
			<br/><br/>
			
		</form>
		</fieldset>

		<canvas id="obszarAnimacja" width="700" height="510" onload="ukladWspolrzednych()">
		</canvas> 

		<br/>
		<h3>Poprzez ustawienie konkretnych parametów możemy uzyskać szczególne przypadki:</h3>
		<ul>
			<li>Całkowite wygaszenie fali. Sytuacja nastąpi, gdy fale wejściowe będą miały takie same amplitudy, częstości oraz kierunki, przy czym jedna fala będzie przesunięta względem drugiej w fazie o połowę długości.<br/><br/></li>
			<li>Maksymalne wzmocnienie fali. Sytuacja ma miejsce, gdy fale mają takie same amplitudy, częstości, kierunki oraz są zgodne w fazie.<br/><br/></li>
			<li>Fala stojąca. Jest wynikiem nakładania się dwóch fal o jednakowych amplitudach, częstościach i rozchodzących się w przeciwnych kierunkach.<br/><br/></li>
			<li>Dudnienie. Powstaje w wyniku nakładania dwóch fal o zbliżonych, lecz niejednakowych częstotliwościach. Polega ono na okresowym osłabianiu i wzmacnianiu amplitudy drgania wynikowego po złożeniu dwóch fal.<br/><br/></li>

		</ul>
	</article>
	`;
	obszar.innerHTML = tresc;
	legenda();
	ukladWspolrzednych();
}