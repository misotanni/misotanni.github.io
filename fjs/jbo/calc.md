# lo kajytci pe fy jy sy

<select id="computations">
  <option value="">i ko cuxna lo ve kanji</option>
  <option value="comma">i kanji lo pa fy jy sy datyto'aku'e pa dilcysle</option>
  <option value="tofjs">i kanji lo pa fy jy sy togyku'e pa frinu</option>
  <option value="fromfjs">i kanji lo pa frinu pa fy jy sy togyku'e</option>
</select>

i pruce <span id="input-name"></span><br />
<input type="text" id="input">

i te pruce: <br />
<pre><code id="output"></code></pre>

<script>
  var loc = {
             prime: "pa dilcysle",
          fraction: "pa frinu",
      intervalName: "pa fy jy sy togyku'e cmene ne mu'u zoi a M3^5 a",
     cantFactorize: "i mi na ka'e kanji lo'i dilcymu'o be la'e zoi a %1 a",
        notANumber: "i la'e zoi a %1 a na'e namcu",
       wrongFormat: "i mi na jimpe fi lo stura",
   wrongIntVariant: "i zoi a %1 a zoi a %2 a na mapti lo ka klesi",
       wrongFactor: "i li re lo'o na e nai li ci ka'e dilcymu'o lo fy jy sy togystika",
     noComputation: "i lo ve kanji ca na se cuxna",
           noInput: "i ca pruce no da",
          notPrime: "i la'e zoi a %1 a na'e dilcysle",
    butPythagorean: "i li re lo'o e li ci cu jai se cistrpitagora i ri na nitcu lo fy jy sy togystika",
           notFrac: "i lo se pruce cu na'e frinu i ri na se pagbu me'o slac bu",
        notNatFrac: "i lo se pruce cu na'e frinu poi se pagbu lo mulnonmau ku po'o",
              div0: "i ua nai dilcu fi li no"
  };
</script>
<script src="../assets/fjs.js"></script>
<script src="../assets/calc.js"></script>

ni'o lo cnita ba se fanva fa'o

- Die Funktion "FJS-Komma einer Primzahl berechnen" findet sowohl die Generatorfunktion, als auch das formale Komma (sowie die Cent-Größe davon) für jede Eingabe einer Primzahl größer als 3.
- Die Funktion "Bruch in ein FJS-Intervall umrechnen" findet die einzige FJS-Darstellung jeder Eingabe einer positiven Bruchzahl. Alle FJS-Modifikatoren werden dabei getrennt geschrieben, nie miteinander multipliziert. Für Intervalle kleiner als eine reine Prime wird eine negative Zahl benutzt, um ein Intervall nach unten darzustellen. 5/4 ist also `M3^5`, aber 4/5 ist `M-3_5`.
- Die Funktion "FJS-Intervall in einen Bruch umrechnen" findet den einzigen Bruch, der jeder Eingabe eines FJS-Intervalls entspricht. Das Einschaltungszeichen für den Anfang der otonalen Modifikatoren, ebenso wie der Unterstrich für die utonalen, sind immer notwendig. Du kannst die Modifikatoren multiplizieren, wie du willst, und eine negative Zahl für ein Intervall nach unten benutzen.

**Bemerkung:** Der Rechner benutzt englischsprachige Intervallnamen: "M3" ist z.B. eine große Terz.
