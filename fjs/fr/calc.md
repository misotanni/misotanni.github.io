# Calculatrices FJS

<select id="computations">
  <option value="">Choisissez un calcul</option>
  <option value="comma">Calculer le comma formel d'un nombre premier</option>
  <option value="tofjs">Convertir une fraction en intervalle FJS</option>
  <option value="fromfjs">Convertir un intervalle FJS en fraction</option>
  <option value="setlambda">translateme</option>
</select>

Entrée: <br />
<input type="text" id="input">

Résultat: <br />
<div id="output"></div>

<link rel="stylesheet" href="../assets/calcsheets.css">
<script src="../assets/fjs.js"></script>
<script src="../assets/calc.js"></script>
<script>
  var loc = {
                    // translate me
         centValue: "cents",
         generator: "generator",
             comma: "formal comma",
    outputInterval: "interval name",
             ratio: "value",
           noInput: "Vous n'avez entré rien.",
    lambdaInformer: "No input given; type in 'default' to set λ (now %1) back to sqrt(33/31).",
     cantFactorize: "« %1 » – je ne sais pas factoriser cela.",
        notANumber: "« %1 » n'est pas un nombre.",
       wrongFormat: "Je ne comprends pas la forme.",
   wrongIntVariant: "L'intervalle « %1 » ne peut pas être dans la catégorie « %2 ».",
       wrongFactor: "2 ou 3 ne peuvent pas être des facteurs dans une altération FJS.",
     noComputation: "Vous n'avez choisi rien.",
          notPrime: "« %1 » n'est pas un nombre premier.",
    butPythagorean: "2 et 3 sont des octaves et quintes pythagoréennes qui n'ont pas besoin des altérations FJS.",
           notFrac: "L'entrée n'est pas une fraction (par exemple, 5/3 ou 928/777).",
              div0: "Pourquoi voulez-vous diviser par zéro?",
           notReal: "‘%1’ is not a real number.",

             comma: "Trouver la fonction génératrice et le comma formel (ainsi que le nombre de cents pour ce comma) pour chaque nombre premier au-delà de 3.",
             tofjs: "Trouver la seule fraction correspondante à chaque représentation FJS. \nVous devez utiliser le signe caret pour indiquer le début des altérations otonales et la barre de soulignement pour les utonales. Les altérations FJS peuvent être multipliées comme vous voulez, et vous pouvez utiliser un signe moins pour écrire un intervalle descendant. \nRemarque: la calculatrice utilise des noms anglais pour les intervalles: par exemple, « M3 » signifie une tierce majeure.",
           fromfjs: "Trouver la seule fraction correspondante à chaque représentation FJS. \nVous devez utiliser le signe caret pour indiquer le début des altérations otonales et la barre de soulignement pour les utonales. Les altérations FJS peuvent être multipliées comme vous voulez, et vous pouvez utiliser un signe moins pour écrire un intervalle descendant. \nRemarque: la calculatrice utilise des noms anglais pour les intervalles: par exemple, « M3 » signifie une tierce majeure.",
         setlambda: "Bonjour! Je m'appelle Misotanni, et pendant mon enfanté suis-je un ardenter mangeur de miso."
  };
</script>
