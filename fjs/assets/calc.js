var loc = {
        centValue: "cents",
        generator: "generator",
      outputComma: "formal comma",
   outputInterval: "interval name",
            ratio: "value",
 
          noInput: "No input given.",
    cantFactorize: "‘%1’ – not something I can factorize.",
       notANumber: "‘%1’ is not a number.",
      wrongFormat: "I don't understand the format.",
  wrongIntVariant: "Interval class ‘%1’ doesn't match variant ‘%2’.",
      wrongFactor: "2 nor 3 may not be factors of FJS modifiers.",
    noComputation: "No computation specified; please select one from the list.",
         notPrime: "‘%1’ is not a prime number.",
   butPythagorean: "2 and 3 are Pythagorean octaves and fifths which don't need FJS modifiers.",
          notFrac: "Input is not a natural fraction (like 5/3 or 928/777).",
             div0: "Why would you divide by zero?",
          notReal: "‘%1’ is not a real number.",
        radiusSet: "Set radius of tolerance to %1.",

            comma: "Find the generator function and formal comma (as well as give the cent size of this comma) for any input prime number greater than 3.",
            tofjs: "Find the unique FJS representation of any input positive fraction. <br>All FJS accidentals will be listed separate, never multiplied together. For intervals less than the perfect prime, a negative number is used to represent a downward interval. For instance, 5/4 is <code>M3^5</code>, while 4/5 is <code>M-3_5</code>.",
          fromfjs: "Find the unique fraction corresponding to an FJS interval input. <br>A caret must be used to indicate the beginning of the otonal modifiers, and an underscore for the utonal ones. FJS accidentals may be multiplied together in any combination, and a negative number for a downward interval can be used.",
        setlambda: "Set the radius of tolerance to any custom floating-point (decimal) value between 1 and sqrt(2). <br>Type 'default' to reset the value back to the standard sqrt(33/31)."
};

function get(id) {
  return document.getElementById(id);
}

var computations = { comma: comma, tofjs: tofjs, fromfjs: fromfjs, setlambda: setlambda };
var comps = get('computations'),
    input = get('input'),
   output = get('output');

function recompute() {
  var c = computations[comps.value];
  if(! c) return loc.noComputation;
  if(! input.value)
    return loc[comps.value];
  try {
    return c(input.value);
  } catch(e) {
    return e.message;
  }
}

function upda() {
  var r = recompute();
  if(r instanceof Array) {
    var str = "<table>";
    for(var i = 0; i < r.length; ++i) {
      str += "<tr><td>" + r[i][0] + "</td><td>" + r[i][1] + "</td></tr>";
    }
    str += "</table>";
    output.innerHTML = str;
  } else
    output.innerHTML = r;
};
comps.onchange = function() {
  input.value = '';
  upda();
}
window.onload = input.onkeyup = upda;

function comma(i) {
  var inp;
  if(!i.match(/^[0-9]+$/) || isNaN(inp = parseInt(i, 10)) || !isPrime(inp))
    throw new Error(loc.notPrime.replace('%1', i.toString()));
  if(inp == 2 || inp == 3)
    throw new Error(loc.butPythagorean);
  var res = commaForPrime(i);
  return [[loc.generator,   res[0]],
          [loc.outputComma, res[1][0] + "/" + res[1][1]],
          [loc.centValue,   res[2].toFixed(2) + "¢"]];
}

function tofjs(i) {
  var parts = i.split('/');
  if(parts.length != 2) throw new Error(loc.notFrac);
  var num   = parseInt(parts[0], 10);
  var denom = parseInt(parts[1], 10);
  if(isNaN(num) || isNaN(denom)) throw new Error(loc.notFrac);
  if(denom == 0) throw new Error(loc.div0);
  var named = nameInterval([num, denom]);
  return [[loc.outputInterval, named],
          [loc.centValue,      cents(num / denom).toFixed(2) + "¢"]];
}

function fromfjs(i) {
  var res = parseInterval(i);
  return [[loc.ratio,     res[0] + "/" + res[1]],
          [loc.centValue, cents(res).toFixed(2) + "¢"]];
}

function setlambda(i) {
  var x;
  if(i == 'default') x = Math.sqrt(33/31);
  else x = parseFloat(i);
  if(isNaN(x)) throw new Error(loc.notReal.replace('%1', i));
  lambda = x;
  commaCache = {};
  return loc.radiusSet.replace('%1', x);
}
