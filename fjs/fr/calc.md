# Calculatrices FJS

<select id="computations">
  <option value="">Choisissez un calcul</option>
  <option value="comma">Calculer le comma formel d'un nombre premier</option>
  <option value="tofjs">Convertir une fraction en intervalle FJS</option>
  <option value="fromfjs">Convertir un intervalle FJS en fraction</option>
  <option value="setlambda">Ajustez le rayon de tolérance à une valeur arbitraire</option>
</select>

Entrée : <br />
<input type="text" id="input">

Résultat : <br />
<div id="output"></div>

<link rel="stylesheet" href="../assets/calc/calcsheets.css">
<script src="../assets/calc/fjs.js"></script>
<script src="../assets/calc/calc.js"></script>
<script>
  var loc = {
         centValue: "cents",
             shift: "déplacement",
       outputComma: "comma formel",
    outputInterval: "nom d'intervalle",
             ratio: "valeur",
           noInput: "Vous n'avez rien entré.",
     cantFactorize: "« %1 » – je ne sais pas factoriser cela.",
        notANumber: "« %1 » n'est pas un nombre.",
       wrongFormat: "Je ne comprends pas la forme.",
   wrongIntVariant: "L'intervalle « %1 » ne peut pas être dans la catégorie « %2 ».",
       wrongFactor: "2 ou 3 ne peuvent pas être facteurs dans une altération FJS.",
     noComputation: "Vous n'avez rien choisi ; choisissez un calcul de la liste.",
          notPrime: "« %1 » n'est pas un nombre premier.",
    butPythagorean: "2 et 3 sont des octaves et quintes pythagoriciennes qui n'ont pas besoin des altérations FJS.",
           notFrac: "L'entrée n'est pas une fraction (par exemple, 5/3 ou 928/777).",
              div0: "Pourquoi voulez-vous diviser par zéro ?",
           notReal: "« %1 » n'est pas un nombre réel.",
         radiusSet: "Le rayon de tolérance est maintenant %1.",

             comma: "Trouver le déplacement de quintes et le comma formel (ainsi que le nombre de cents pour ce comma) pour chaque nombre premier au-delà de 3.",
             tofjs: "Trouver la seule représentation FJS de chaque fraction. <br>Toutes les altérations FJS sont ici séparées, jamais multipliées. Des intervalles plus petits qu'un unisson sont écrits avec un nombre négatif pour représenter un intervalle descendant, par exemple, 5/4 est <code>M3^5</code> mais 4/5 est <code>M-3_5</code>. <br><strong>Remarque :</strong> la calculatrice utilise des noms anglais pour les intervalles : par exemple, « M3 » signifie une tierce majeure.",
           fromfjs: "Trouver la seule fraction correspondante à chaque représentation FJS. <br>Vous devez utiliser le signe caret pour indiquer le début des altérations otonales et la barre de soulignement pour les utonales. Les altérations FJS peuvent être multipliées comme vous voulez, et vous pouvez utiliser un signe moins pour écrire un intervalle descendant. <br><strong>Remarque :</strong> la calculatrice utilise des noms anglais pour les intervalles : par exemple, « M3 » signifie une tierce majeure.",
         setlambda: "Ajuster le rayon de tolérance à n'importe quelle valeur d'une décimale (nombre à virgule flottante) entre 1 et sqrt(2). <br>Écrivez « default » pour retourner à la valeur conventionnelle, sqrt(33/31)."
  };
</script>
