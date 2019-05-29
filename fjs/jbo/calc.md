# lo kajytci pe fy jy sy

<select id="computations">
  <option value="">ve kanji te cuxna</option>
  <option value="comma">i kanji lo togyfancyku'e tu'a pa dilcysle</option>
  <option value="tofjs">i kanji lo fy jy sy togyku'e tu'a pa frinu</option>
  <option value="fromfjs">i kanji lo pa frinu tu'a pa togyku'e pe fy jy sy</option>
  <option value="setlambda">translateme</option>
</select>

i lo se pruce <br />
<input type="text" id="input">

i lo te pruce: <br />
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
           noInput: "i lo se pruce ca kunti",
    lambdaInformer: "No input given; type in 'default' to set λ (now %1) back to sqrt(33/31).",
     cantFactorize: "i mi na ka'e kanji tu'a lo'i dilcymu'o be la'oi «%1»",
        notANumber: "i zo'oi «%1» sinxa no namcu",
       wrongFormat: "i mi na jimpe fi lo stura",
   wrongIntVariant: "i zo'oi «%1» zo'oi «%2» na mapti lo ka klesi",
       wrongFactor: "i li re na e nai li ci ka'e dilcymu'o lo fy jy sy togystika",
     noComputation: "i cuxna no ve pruce",
          notPrime: "i la'oi «%1» na dilcysle",
    butPythagorean: "i li re e li ci cu jai nu cistrpitagora i ri na jai se sarcu tu'a lo fy jy sy togystika",
           notFrac: "i lo se pruce na frinu to mu'u zo'oi «5/3» e zo'oi «928/777» toi",
              div0: "i ai nai cumgau lo nu dilcu fi li no",
           notReal: "‘%1’ is not a real number."
  };
</script>
