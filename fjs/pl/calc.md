# Kalkulatory FJS

<select id="computations">
  <option value="">Proszę wybrać kalkulację</option>
  <option value="comma">Obliczanie komatów formalnych</option>
  <option value="tofjs">Zamiana ułamków na interwały FJS</option>
  <option value="fromfjs">Zamiana interwałów FJS na ułamki</option>
  <option value="setlambda">Regulacja promienia tolerancji</option>
</select>

Dane: <br />
<input type="text" id="input">

Wynik: <br />
<div id="output"></div>

<link rel="stylesheet" href="../assets/calc/calcsheets.css">
<script src="../assets/calc/fjs.js"></script>
<script src="../assets/calc/calc.js"></script>
<script>
  var loc = {
         centValue: "centów",
             shift: "przeniesienie",
       outputComma: "komat formalny",
    outputInterval: "nazwa interwału",
             ratio: "wartość",
           noInput: "Nie podano żadnych danych.",
     cantFactorize: "„%1” – nie umiem tego rozłożyć na czynniki.",
        notANumber: "„%1” to nie liczba.",
       wrongFormat: "Nie rozumiem formatu.",
   wrongIntVariant: "Interwał „%1” nie pasuje do wariantu „%2”.",
       wrongFactor: "Alteracje FJS-owe nie mogą zawierać czynników 2 ani 3.",
     noComputation: "Nie wybrałeś kalkulacji – proszę wybrać jedną z listy.",
          notPrime: "„%1” nie jest liczbą pierwszą.",
    butPythagorean: "2 i 3 to interwały pitagorejskie – nie wymagają one alteracji FJS-owych.",
           notFrac: "Wprowadzone dane nie są ułamkiem (takim, jak 5/3 czy 928/777).",
              div0: "Dlaczego chciałbyś dzielić przez zero?",
           notReal: "„%1” to nie rozwinięcie dziesiętne.",
         radiusSet: "Ustawiono promień tolerancji na %1.",

             comma: "Ta kalkulacja znajduje przeniesienie kwintowe i komat formalny (z rozmiarem w centach) dla podanej liczby pierwszej większej niż 3.",
             tofjs: "Ta kalkulacja wyznacza (jednoznacznie) interwał FJS-owy odpowiadający podanemu ułamkowi. <br>Alteracje FJS-owe nie są z sobą wymnażane. Interwały mniejsze od prymy czystej są zapisane liczbą ujemną (czyli interwał idący w przeciwną stronę, tak jak w notacji kolorowej Kite'a) – na przykład kiedy 5/4 to <code>M3^5</code>, 4/5 to <code>M-3_5</code>. <br><strong>Uwaga.</strong> Kalkulator używa angielskich nazw interwałów – na przykład <code>m3</code> to 3&gt;.",
           fromfjs: "Ta kalkulacja wyznacza (jednoznacznie) ułamkową wielkość interwału FJS-owego. <br>Alteracje otonalne muszą być poprzedzone znakiem karety (^), a utonalnych – następować po podkreślniku (\_). Poszczególne alteracje mogą być zapisane osobno zamiast ich iloczynu; można też użyć liczby ujemnej na oznaczenie interwału w dół. <br><strong>Uwaga.</strong> Kalkulator używa angielskich nazw interwałów – na przykład <code>m3</code> to 3&gt;.",
         setlambda: "Tu można zmienić promień tolerancji na dowolną wartość, podaną w postaci rozwinięcia dziesiętnego, pomiędzy 1 a pierwiastkiem kwadratowym z 2. <br>Wprowadzenie słowa „default” (ang. „domyślny”) przywróci promień do wartości zalecanej λ = 65/63."
  };
</script>
