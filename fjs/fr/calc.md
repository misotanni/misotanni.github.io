# Calculatrices FJS

<select id="computations">
  <option value="">Choisissez un calcul</option>
  <option value="comma">Calculer le comma formel d'un nombre premier</option>
  <option value="tofjs">Convertir une fraction en intervalle FJS</option>
  <option value="fromfjs">Convertir un intervalle FJS en fraction</option>
</select>

Entrée (<span id="input-name"></span>):<br />
<input type="text" id="input">

Résultat: <br />
<pre><code id="output"></code></pre>

<script>
  var loc = {
             prime: "un nombre premier",
          fraction: "une fraction",
      intervalName: "un nom d'intervalle (comme m3_5)",
     cantFactorize: "« %1 » – je ne sais pas factoriser cela.",
        notANumber: "« %1 » n'est pas un nombre.",
       wrongFormat: "Je ne comprends pas la forme.",
   wrongIntVariant: "L'intervalle « %1 » ne peut pas être dans la catégorie « %2 ».",
       wrongFactor: "2 ou 3 ne peuvent pas être des facteurs dans une altération FJS.",
     noComputation: "Vous n'avez choisi rien.",
           noInput: "Vous n'avez entré rien.",
          notPrime: "« %1 » n'est pas un nombre premier.",
    butPythagorean: "2 et 3 sont des octaves et quintes pythagoréennes qui n'ont pas besoin des altérations FJS.",
           notFrac: "L'entrée n'est pas une fraction puisqu'elle ne contient aucune barre oblique.",
        notNatFrac: "L'entrée n'est pas une fraction composée seulement des entiers positifs.",
              div0: "Pourquoi voulez-vous diviser par zéro?"
  };
</script>
<script src="../assets/fjs.js"></script>
<script src="../assets/calc.js"></script>

- La fonction « Calculer le comma formel d'un nombre premier » trouvera la fonction génératrice et le comma formel (ainsi que le nombre de cents pour ce comma) pour chaque nombre premier au-delà de 3.
- La fonction « Convertir une fraction en intervalle FJS » trouvera la seule représentation FJS de chaque fraction positive. Toutes les altérations FJS seront séparées, jamais multipliées. Des intervalles inférieurs à l'unisson seront écrits avec un signe moins qui représente un intervalle descendant. Par exemple, 5/4 serait `M3^5` pendant que 4/5 serait `M-3_5`.
- La fonction « Convertir un intervalle FJS en fraction » trouvera la seule fraction correspondante à chaque représentation FJS. Vous devez utiliser le signe caret pour indiquer le début des altérations otonales et la barre de soulignement pour les utonales. Les altérations FJS peuvent être multipliées comme vous voulez, et vous pouvez utiliser un signe moins pour écrire un intervalle descendant.

**Remarque:** La calculatrice utilise des noms anglais pour les intervalles: par exemple, « M3 » signifie une tierce majeure.
