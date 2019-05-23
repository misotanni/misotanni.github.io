function get(id) {
  return document.getElementById(id);
}

var computations = {
  comma: [comma, loc.prime],
  tofjs: [tofjs, loc.fraction],
  fromfjs: [fromfjs, loc.intervalName]
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
  if(! input.value)
    return loc.noInput;
  try {
    return c[0](input.value);
  } catch(e) {
    return e.message;
  }
}

window.onload = comps.onchange = input.onkeyup = function upda() {
  output.innerText = recompute();
};

function comma(i) {
  var inp;
  if(!i.match(/^[0-9]+$/) || isNaN(inp = parseInt(i, 10)) || !isPrime(inp))
    throw new Error(loc.notPrime.replace('%1', i.toString()));
  if(inp == 2 || inp == 3)
    throw new Error(loc.butPythagorean);
  var res = commaForPrime(i);
  return "  gen: " + res[0] + "\n" +
         "comma: " + res[1][0] + "/" + res[1][1] + " (" + res[2].toFixed(2) + "¢)\n";
}

function tofjs(i) {
  var parts = i.split('/');
  if(parts.length != 2) throw new Error(loc.notFrac);
  var num   = parseInt(parts[0], 10);
  var denom = parseInt(parts[1], 10);
  if(isNaN(num) || isNaN(denom)) throw new Error(loc.notNatFrac);
  if(denom == 0) throw new Error(loc.div0);
  return nameInterval([num, denom]);
}

function fromfjs(i) {
  var res = parseInterval(i);
  return res[0] + "/" + res[1];
}
