# Kalkulatory FJS

<select id="computations">
  <option value="">Wybierz kalkulację</option>
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
           noInput: "Nie podałeś żadnych danych.",
     cantFactorize: "„%1” – nie umiem tego rozłożyć na czynniki.",
        notANumber: "„%1” to nie liczba.",
       wrongFormat: "Nie rozumiem formatu.",
   wrongIntVariant: "Interwał „%1” i wariant „%2” nie pasują do siebie.",
       wrongFactor: "Alteracje FJS-owe nie mogą zawierać czynników 2 ani 3.",
     noComputation: "Nie wybrałeś kalkulacji – wybierz jedną z listy.",
          notPrime: "„%1” to nie liczba pierwsza.",
    butPythagorean: "2 i 3 to odpowiednio oktawy i kwinty pitagorejskie – nie przypisuje się im alteracji FJS-owych.",
           notFrac: "Na wejściu nie ma ułamka (tak, jak 5/3 lub 928/777).",
              div0: "Nie dziel przez zero, ty draniu!",
           notReal: "„%1” to nie liczba rzeczywista podana w postaci rozwinięcia dziesiętnego.",
         radiusSet: "Promień tolerancji wynosi teraz %1.",

             comma: "Ta kalkulacja znajduje przeniesienie kwintowe i komat formalny (z rozmiarem w centach) dla podanej liczby pierwszej, większej niż 3.",
             tofjs: "Ta kalkulacja wyznacza (jednoznacznie) interwał FJS-owy odpowiadający podanemu ułamkowi. <br>Alteracje FJS-owe nie są przedstawione w postaci wymnożonej. Interwały mniejsze niż pryma czysta są zapisane liczbą ujemną (interwał w dół) – na przykład 5/4 to <code>M3^5</code>, a 4/5 – <code>M-3_5</code>. <br><strong>Uwaga.</strong> Kalkulator używa angielskich nazw interwałów, czyli „m3” to nasze 3&gt;.",
           fromfjs: "Ta kalkulacja wyznacza (jednoznacznie) ułamek odpowiadający dowolnemu interwałowi FJS-owemu. <br>Początek alteracji otonalnych musisz zasygnalizować znakiem karety (^), a utonalnych – podkreślnikiem (\_). Poszczególne alteracje możesz zostawić nieprzemnożone ze sobą; możesz też użyć liczby ujemnej na oznaczenie interwału w dół. <br><strong>Uwaga.</strong> Kalkulator używa angielskich nazw interwałów, czyli „m3” to nasze 3&gt;.",
         setlambda: "Zmień promień tolerancji na dowolną wartość, podaną w postaci rozwinięcia dziesiętnego, pomiędzy 1 a sqrt(2). <br>Wprowadzenie słowa „default” (ang. „domyślny”) przywróci promień do wartości domyślnej λ = pierwiastek z 33/31."
  };
</script>
