# FJS-Rechner

Der Rechner benutzt englischsprachige Intervallnamen: "M3" ist z.B. eine große Terz.

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
