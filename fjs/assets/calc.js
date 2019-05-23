function get(id) {
  return document.getElementById(id);
}

var computations = {
  comma: [comma, 'prime'],
  tofjs: [tofjs, 'fraction (p/q)'],
  fromfjs: [fromfjs, 'name (like M3^5)']
};

var comps = get('computations'),
    iname = get('input-name'),
    input = get('input'),
   output = get('output');

function recompute() {
  var c = computations[comps.value];
  if(! c) {
    iname.innerText = '';
    return 'No computation specified.';
  }
  iname.innerText = c[1];
  if(! input.value)
    return 'No input.';
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
  var inp = parseInt(i, 10);
  if(isNaN(inp) || !isPrime(inp))
    throw new Error('Input must be a prime; "' + i + '" is not a valid prime.');
  if(inp == 2 || inp == 3)
    throw new Error("2 and 3 are Pythagorean; I can't compute commas for them.");
  var res = commaForPrime(i);
  return "  gen: " + res[0] + "\n" +
         "  pol: " + (val(res[1]) > 1 ? "+" : "-") + "\n" +
         "comma: " + res[1][0] + "/" + res[1][1] + " (" + res[2].toFixed(2) + "¢)\n";
}

function tofjs(i) {
  var parts = i.split('/');
  if(parts.length != 2) throw new Error('Input must be a natural fraction; "' + i + '" does not contain one slash (/).');
  var num   = parseInt(parts[0], 10);
  var denom = parseInt(parts[1], 10);
  if(isNaN(num) || isNaN(denom)) throw new Error('Input must be a natural fraction; "' + i + '" has non-natural constituents.');
  if(denom == 0) throw new Error('One does not divide by zero.');
  return nameInterval([num, denom]);
}

function fromfjs(i) {
  var res = parseInterval(i);
  return res[0] + "/" + res[1];
}
