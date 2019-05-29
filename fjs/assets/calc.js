var loc = {
            prime: "a prime",
         fraction: "a fraction",
     intervalName: "interval name (like m3_5)",
       realNumber: "a real number",
 
        centValue: "cents",
        generator: "generator",
            comma: "formal comma",
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
          notReal: "‘%1’ is not a real number."
};

function get(id) {
  return document.getElementById(id);
}

var computations = {
  comma: [comma, loc.prime],
  tofjs: [tofjs, loc.fraction],
  fromfjs: [fromfjs, loc.intervalName],
  setlambda: [setlambda, loc.realNumber]
};

var comps = get('computations'),
    iname = get('input-name'),
    input = get('input'),
   output = get('output');

function recompute() {
  var c = computations[comps.value];
  if(! c) {
    iname.innerText = '';
    return loc.noComputation;
  }
  iname.innerText = c[1];
  try {
    return c[0](input.value);
  } catch(e) {
    return e.message;
  }
}

comps.onchange = function() {
  input.value = '';
  upda();
}
window.onload = input.onkeyup = function upda() {
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

function comma(i) {
  var inp;
  if(! i) throw new Error(loc.noInput);
  if(!i.match(/^[0-9]+$/) || isNaN(inp = parseInt(i, 10)) || !isPrime(inp))
    throw new Error(loc.notPrime.replace('%1', i.toString()));
  if(inp == 2 || inp == 3)
    throw new Error(loc.butPythagorean);
  var res = commaForPrime(i);
  return [[loc.generator, res[0]],
          [loc.comma,     res[1][0] + "/" + res[1][1]],
          [loc.centValue, res[2].toFixed(2) + "¢"]];
}

function tofjs(i) {
  if(! i) throw new Error(loc.noInput);
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
  if(! i) throw new Error(loc.noInput);
  var res = parseInterval(i);
  return [[loc.ratio,     res[0] + "/" + res[1]],
          [loc.centValue, cents(res).toFixed(2) + "¢"]];
}

function setlambda(i) {
  if(! i) throw new Error(loc.lambdaInformer.replace('%1', lambda));
  var x;
  if(i == 'default') x = Math.sqrt(33/31);
  else x = parseFloat(i);
  if(isNaN(x)) throw new Error(loc.notReal.replace('%1', i));
  lambda = x;
  commaCache = {};
  return "set radius of tolerance to " + x;
}
