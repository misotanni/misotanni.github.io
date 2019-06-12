# loi fy jy sy kajytci

<select id="computations">
  <option value="">.i ko cuxna lo ve kanji</option>
  <option value="comma">.i kanji lo togyfancyku'e lo dilcysle</option>
  <option value="tofjs">.i kanji lo fy jy sy togyku'e lo frinu</option>
  <option value="fromfjs">.i kanji lo frinu lo fy jy sy togyku'e</option>
  <option value="setlambda">.i zifre stika lo crulai</option>
</select>

.i pruce fe ti: <br />
<input type="text" id="input">

.i pruce fi ti: <br />
<div id="output"></div>

<link rel="stylesheet" href="../assets/calcsheets.css">
<script src="../assets/fjs.js"></script>
<script src="../assets/calc.js"></script>
<script>
  var loc = {
         centValue: "toglai:",
             shift: "togyfancylei:",
       outputComma: "togyfancyku'e:",
    outputInterval: "togyku'e cmene:",
             ratio: "frinu:",
           noInput: ".i claxu lo se pruce",
     cantFactorize: ".i na ka'e kanji lo'i dilcymu'o be la'oi %1",
        notANumber: ".i la'oi %1 na'e namcu",
       wrongFormat: ".i na ka'e turfa'i",
   wrongIntVariant: ".i la'oi %1 noi togyku'e ku'o la'oi %2 noi klesi cu na mapti",
       wrongFactor: ".i li re lo'o .e li ci na jai se curmi fai lo ka ce'u dilcymu'o lo fy jy sy togystika",
     noComputation: ".i lo ve pruce cu na se cuxna .i lo liste zo'u ko cuxna",
          notPrime: ".i la'oi %1 na'e dilcysle",
    butPythagorean: ".i li re fa'u li ci cu zelto'aku'e fa'u vonto'aku'e se cistrpitagora .i na nitcu lo fy jy sy togystika",
           notFrac: ".i lo se pruce cu na'e frinu .i mu'a li mu fi'u ci",
              div0: ".i mabla .i'o nai fa lo nu dilcu fi li no",
           notReal: ".i zo'oi %1 na'e saclu lo mrena'u",
         radiusSet: ".i li %1 ca crulai",

             comma: ".i kanji fi lo dilcysle poi zmadu li ci ku'o fe ge lo togyfancylei gi lo togyfancyku'e to .e lo toglai be ri toi",
             tofjs: ".i kanji fi lo frinu fe lo pa fy jy sy togyku'e noi srana ri <br>.i la'e di'u zo'u lo fy jy sy togystika cu tolxre .i lo togyku'e poi mleca lo nontogyku'e zo'u pilno lo mecna'u noi sinxa lo togyku'e poi cnita .i mu'a li mu fi'u vo cu se sinxa zo'oi <code>M3^5</code> .i ku'i li vo fi'u mi zo'u zo'oi <code>M-3_5</code> <br>.i <strong>.o'i</strong> lo kanji cu pilno lo glico ke togyku'e cmene .i mu'a zo'oi M3 cmene lo brarelto'aku'e",
           fromfjs: ".i kanji fi lo fy jy sy togyku'e fe lo frinu noi srana ri .i bilga lo nu jarco lo du'u ma kau cfari lo galto'a .e lo dzito'a .i .e'a zifre pilji lo togystika gi'e te smuni lo togyku'e poi cnita ku'o lo mecna'u <br>.i <strong>.o'i</strong> lo kanji cu pilno lo glico ke togyku'e cmene .i mu'a zo'oi M3 cmene lo brarelto'aku'e",
         setlambda: ".i zifre stika lo crulai lo namcu poi zmadu li pa gi'e mleca li re te'a pi mu sei lo saclu cu se ciska .i ciska zoi gy default gy te zu'e lo nu xruti lo crulai lo fadni no'u li vei ci ci fi'u ci pa ve'o te'a pi mu"
  };
</script>
