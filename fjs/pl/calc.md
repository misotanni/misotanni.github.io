# Kalkulatory FJS

<select id="computations">
  <option value="">Wybierz obliczenie</option>
  <option value="comma">Oblicz komat formalny liczby pierwszej</option>
  <option value="tofjs">Zamień ułamek na interwał FJS</option>
  <option value="fromfjs">Zamień interwał FJS na ułamek</option>
  <option value="setlambda">Zmień promień tolerancji na dowolną wartość</option>
</select>

Wejście: <br />
<input type="text" id="input">

Wyjście: <br />
<div id="output"></div>

<link rel="stylesheet" href="../assets/calcsheets.css">
<script src="../assets/fjs.js"></script>
<script src="../assets/calc.js"></script>
<script>
  var loc = {
         centValue: "centy",
         generator: "generator",
       outputComma: "komat formalny",
    outputInterval: "nazwa interwału",
             ratio: "wartość",
           noInput: "Nie ma nic na wejściu.",
     cantFactorize: "„%1” – nie umiem tego rozłożyć na czynniki.",
        notANumber: "„%1” nie jest liczbą.",
       wrongFormat: "Nie rozumiem formatu.",
   wrongIntVariant: "Interwał „%1” nie pasuje do kategorii „%2”.",
       wrongFactor: "2 ani 3 nie mogą być czynnikami alteracji FJS-owych.",
     noComputation: "Nie wybrałeś obliczenia: wybierz jedno z listy.",
          notPrime: "„%1” nie jest liczbą pierwszą.",
    butPythagorean: "2 i 3 są odpowiednio oktawami i kwintami pitagorejskimi, zatem nie potrzebują alteracji FJS-owych.",
           notFrac: "Na wejściu nie ma ułamka (np. 5/3 lub 928/777).",
              div0: "Nie dziel przez zero, ty draniu!",
           notReal: "„%1” nie jest rozwinięciem dziesiętnym liczby rzeczywistej.",
         radiusSet: "Promień tolerancji wynosi teraz %1.",

             comma: "Znajdź funkcję generującą i komat formalny (z rozmiarem w centach) dla każdej liczby pierwszej większej niż 3.",
             tofjs: "Wynajdź jedyny interwał FJS-owy z dowolnego ułamka. <br>Na wyjściu wszystkie alteracje FJS-owe będą zapisane osobno, nigdy pomnożone razem. Interwały mniejsze niż pryma czysta są zapisane liczbą ujemną (interwał w dół), np. 5/4 to <code>M3^5</code>, a 4/5 – <code>M-3_5</code>. <br><strong>Uwaga:</strong> Kalkulator używa angielskich nazw interwałów, czyli „m3” to nasze „3>”.",
           fromfjs: "Wynajdź jedyny ułamek odpowiadający dowolnemu interwałowi FJS-owemu. <br>Początek alteracji otonalnych musisz zaznaczyć znakiem karety (^), a utonalnych – znakiem podkreślenia (\_). Możesz je mnożyć, jak chcesz, i możesz użyć liczby ujemnej na oznaczenie interwału w dół. <br><strong>Uwaga:</strong> Kalkulator używa angielskich nazw interwałów, czyli „m3” to nasze „3>”.",
         setlambda: "Zmień promień tolerancji na dowolną wartość zmiennoprzecinkową (rozwinięcie dziesiętne) pomiędzy 1 a sqrt(2). <br>Napisz „default”, aby powrócić do λ = sqrt(33/31)."
  };
</script>
