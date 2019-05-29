# lo kajytci pe fy jy sy

<select id="computations">
  <option value="">ve kanji te cuxna</option>
  <option value="comma">i kanji lo togyfancyku'e tu'a pa dilcysle</option>
  <option value="tofjs">i kanji lo fy jy sy togyku'e tu'a pa frinu</option>
  <option value="fromfjs">i kanji lo pa frinu tu'a pa togyku'e pe fy jy sy</option>
</select>

i lo se pruce <span id="input-name"></span><br />
<input type="text" id="input">

i lo te pruce: <br />
<pre><code id="output"></code></pre>

<script>
  var loc = {
             prime: "noi dilcysle",
          fraction: "noi frinu",
      intervalName: "noi sinxa su'o fy jy sy togyku'e to mu'u zo'oi «m3_5» toi",
     cantFactorize: "i mi na ka'e kanji tu'a lo'i dilcymu'o be la'oi «%1»",
        notANumber: "i zo'oi «%1» sinxa no namcu",
       wrongFormat: "i mi na jimpe fi lo stura",
   wrongIntVariant: "i zo'oi «%1» zo'oi «%2» na mapti lo ka klesi",
       wrongFactor: "i li re na e nai li ci ka'e dilcymu'o lo fy jy sy togystika",
     noComputation: "i cuxna no ve pruce",
           noInput: "i lo se pruce ca kunti",
          notPrime: "i la'oi «%1» na dilcysle",
    butPythagorean: "i li re e li ci cu jai nu cistrpitagora i ri na jai se sarcu tu'a lo fy jy sy togystika",
           notFrac: "i lo se pruce na frinu i ri na se pagbu la'e me'o slac bu",
        notNatFrac: "i lo se pruce cu frinu gi'e se pagbu lo kacna'u po'o vau na ku",
              div0: "i ai nai cumgau lo nu dilcu fi li no"
  };
</script>
<script src="../assets/fjs.js"></script>
<script src="../assets/calc.js"></script>

ni'o lo cnita ba se fanva fa'o

- Die Funktion "FJS-Komma einer Primzahl berechnen" findet sowohl die Generatorfunktion, als auch das formale Komma (sowie die Cent-Größe davon) für jede Eingabe einer Primzahl größer als 3.
- Die Funktion "Bruch in ein FJS-Intervall umrechnen" findet die einzige FJS-Darstellung jeder Eingabe einer positiven Bruchzahl. Alle FJS-Modifikatoren werden dabei getrennt geschrieben, nie miteinander multipliziert. Für Intervalle kleiner als eine reine Prime wird eine negative Zahl benutzt, um ein Intervall nach unten darzustellen. 5/4 ist also `M3^5`, aber 4/5 ist `M-3_5`.
- Die Funktion "FJS-Intervall in einen Bruch umrechnen" findet den einzigen Bruch, der jeder Eingabe eines FJS-Intervalls entspricht. Das Einschaltungszeichen für den Anfang der otonalen Modifikatoren, ebenso wie der Unterstrich für die utonalen, sind immer notwendig. Du kannst die Modifikatoren multiplizieren, wie du willst, und eine negative Zahl für ein Intervall nach unten benutzen.

**Bemerkung:** Der Rechner benutzt englischsprachige Intervallnamen: "M3" ist z.B. eine große Terz.
