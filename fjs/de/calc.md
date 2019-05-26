# FJS-Rechner

<select id="computations">
  <option value="">Wähle eine Berechnung aus:</option>
  <option value="comma">FJS-Komma einer Primzahl berechnen</option>
  <option value="tofjs">Bruch in ein FJS-Intervall umrechnen</option>
  <option value="fromfjs">FJS-Intervall in einen Bruch umrechnen</option>
</select>

Eingabe (<span id="input-name"></span>):<br />
<input type="text" id="input">

Ergebnis: <br />
<pre><code id="output"></code></pre>

<script>
  var loc = {
             prime: "eine Primzahl",
          fraction: "ein Bruch",
      intervalName: "ein Intervallname (z.B. M3^5)",
     cantFactorize: "‘%1’ – das kann ich nicht faktorisieren.",
        notANumber: "‘%1’ ist keine Zahl.",
       wrongFormat: "Ich verstehe die Struktur nicht.",
   wrongIntVariant: "Das Intervall ‘%1’ darf nicht die Variante ‘%2’ haben.",
       wrongFactor: "2 oder 3 dürfen keine Faktoren von FJS-Modifikatoren sein.",
     noComputation: "Keine Berechnung angegeben.",
           noInput: "Keine Eingabe.",
          notPrime: "‘%1’ ist keine Primzahl.",
    butPythagorean: "2 und 3 sind pythagoreische Oktaven und Quinten, sie brauchen keine FJS-Modifikatoren.",
           notFrac: "Die Eingabe ist kein Bruch (sie enthält kein Schrägstrich /).",
        notNatFrac: "Die Eingabe ist kein Bruch aus natürlichen Zahlen.",
              div0: "Wieso würdest du durch null teilen?"
  };
</script>
<script src="../assets/fjs.js"></script>
<script src="../assets/calc.js"></script>

- The function "Compute FJS comma for prime" will find the generator function and formal comma (as well as give the cent size of this comma) for any input prime number greater than 3.
- The function "Convert fraction into an FJS interval" will find the unique FJS representation of any input fraction. All FJS accidentals will be listed separate, never multiplied together. For intervals less than the perfect prime, a negative number is used to represent a downward interval. For instance, 5/4 is `M3^5`, while 4/5 is `M-3_5`.
- The function "Convert FJS interval into a fraction" will find the unique fraction corresponding to an FJS interval input. A caret must be used to indicate the beginning of the otonal modifiers, and an underscore for the utonal ones. FJS accidentals may be multiplied together in any combination, and a negative number for a downward interval can be used.

- Die Funktion "FJS-Komma einer Primzahl berechnen" findet sowohl die Generatorfunktion, als auch das formale Komma (sowie die Cent-Größe davon) für jede Eingabe einer Primzahl größer als 3.
- Die Funktion "Bruch in ein FJS-Intervall umrechnen" findet die einzige FJS-Darstellung jeder Eingabe einer positiven Bruchzahl. Alle FJS-Modifikatoren werden dabei getrennt geschrieben, nie miteinander multipliziert. Für Intervalle kleiner als eine reine Prime wird eine negative Zahl benutzt, um ein Intervall nach unten darzustellen. 5/4 ist also `M3^5`, aber 4/5 ist `M-3_5`.
- Die Funktion "FJS-Intervall in einen Bruch umrechnen" findet den einzigen Bruch, der jeder Eingabe eines FJS-Intervalls entspricht. Das Einschaltungszeichen für den Anfang der otonalen Modifikatoren, ebenso wie der Unterstrich für die utonalen, sind immer notwendig. Du kannst die Modifikatoren multiplizieren, wie du willst, und eine negative Zahl für ein Intervall nach unten benutzen.

**Bemerkung:** Der Rechner benutzt englischsprachige Intervallnamen: "M3" ist z.B. eine große Terz.
