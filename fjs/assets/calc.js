var loc = {
        centValue: "cents",
        generator: "generator",
      outputComma: "formal comma",
   outputInterval: "interval name",
            ratio: "value",
 
          noInput: "No input given.",
   lambdaInformer: "No input given; type in 'default' to set λ (now %1) back to sqrt(33/31).",
    cantFactorize: "‘%1’ – not something I can factorize.",
       notANumber: "‘%1’ is not a number.",
      wrongFormat: "I don't understand the format.",
  wrongIntVariant: "Interval class ‘%1’ doesn't match variant ‘%2’.",
      wrongFactor: "2 nor 3 may not be factors of FJS modifiers.",
    noComputation: "No computation specified.",
         notPrime: "‘%1’ is not a prime number.",
   butPythagorean: "2 and 3 are Pythagorean octaves and fifths which don't need FJS modifiers.",
          notFrac: "Input is not a natural fraction (like 5/3 or 928/777).",
             div0: "Why would you divide by zero?",
          notReal: "‘%1’ is not a real number.",

            comma: "Find the generator function and formal comma (as well as give the cent size of this comma) for any input prime number greater than 3.",
            tofjs: "Find the unique FJS representation of any input positive fraction. \nAll FJS accidentals will be listed separate, never multiplied together. For intervals less than the perfect prime, a negative number is used to represent a downward interval. For instance, 5/4 is M3^5, while 4/5 is M-3^5.",
          fromfjs: "Find the unique fraction corresponding to an FJS interval input. \nA caret must be used to indicate the beginning of the otonal modifiers, and an underscore for the utonal ones. FJS accidentals may be multiplied together in any combination, and a negative number for a downward interval can be used.",
        setlambda: "A nice description of this function's function function function will be given by misotanni soon."
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
    output.innerText = r;
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
  return "set radius of tolerance to " + x;
}
