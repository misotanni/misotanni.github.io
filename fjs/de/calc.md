# FJS-Rechner

<select id="computations">
  <option value="">Wähle eine Berechnung aus</option>
  <option value="comma">FJS-Komma einer Primzahl berechnen</option>
  <option value="tofjs">Bruch in ein FJS-Intervall umrechnen</option>
  <option value="fromfjs">FJS-Intervall in einen Bruch umrechnen</option>
  <option value="setlambda">translateme</option>
</select>

Eingabe: <br />
<input type="text" id="input">

Ergebnis: <br />
<div id="output"></div>

<link rel="stylesheet" href="../assets/calcsheets.css">
<script src="../assets/fjs.js"></script>
<script src="../assets/calc.js"></script>
<script>
  var loc = {
                    // translate me
         centValue: "cents",
         generator: "generator",
       outputComma: "formal comma",
    outputInterval: "interval name",
             ratio: "value",
           noInput: "Keine Eingabe.",
    lambdaInformer: "No input given; type in 'default' to set λ (now %1) back to sqrt(33/31).",
     cantFactorize: "‘%1’ – das kann ich nicht faktorisieren.",
        notANumber: "‘%1’ ist keine Zahl.",
       wrongFormat: "Ich verstehe die Struktur nicht.",
   wrongIntVariant: "Das Intervall ‘%1’ darf nicht die Variante ‘%2’ haben.",
       wrongFactor: "2 oder 3 dürfen keine Faktoren von FJS-Modifikatoren sein.",
     noComputation: "Keine Berechnung angegeben.",
          notPrime: "‘%1’ ist keine Primzahl.",
    butPythagorean: "2 und 3 sind pythagoreische Oktaven und Quinten, sie brauchen keine FJS-Modifikatoren.",
           notFrac: "Die Eingabe ist kein Bruch (wie 5/3 oder 928/777).",
              div0: "Wieso würdest du durch null teilen?",
           notReal: "‘%1’ is not a real number.",

             comma: "Finde sowohl die Generatorfunktion, als auch das formale Komma (sowie die Cent-Größe davon) für jede Eingabe einer Primzahl größer als 3.",
             tofjs: "Finde die einzige FJS-Darstellung jeder Eingabe einer positiven Bruchzahl. \nAlle FJS-Modifikatoren werden dabei getrennt geschrieben, nie miteinander multipliziert. Für Intervalle kleiner als eine reine Prime wird eine negative Zahl benutzt, um ein Intervall nach unten darzustellen. 5/4 ist also M3^5, aber 4/5 ist M-3^5. \nPass auf: der Rechner benutzt englischsprachige Intervallnamen: M3 ist z.B. eine große Terz.",
           fromfjs: "Find den einzigen Bruch, der jeder Eingabe eines FJS-Intervalls entspricht. \nDas Einschaltungszeichen für den Anfang der otonalen Modifikatoren, ebenso wie der Unterstrich für die utonalen, sind immer notwendig. Du kannst die Modifikatoren multiplizieren, wie du willst, und eine negative Zahl für ein Intervall nach unten benutzen. \nPass auf: der Rechner benutzt englischsprachige Intervallnamen: M3 ist z.B. eine große Terz.",
         setlambda: "Hallo! Ich heiße Misotanni und, als ich ein Kind war, aß ich gern Miso."

  };
</script>
