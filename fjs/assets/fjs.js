Array.prototype.product = function() {
  var n = 1;
  for(var i = 0; i < this.length; ++i)
    n *= this[i];
  return n;
};

Array.prototype.some = function(f) {
  for(var i = 0; i < this.length; ++i)
    if(f(this[i])) return true;
  return false;
};

function factorize(n) {
  if(n % 1 || n <= 0)
    throw new Error(n + " - not something I can factorize");
  var factors = [];
  for(var i = 2, s = Math.sqrt(n); i <= s;)
    if(n % i == 0) {
      factors.push(i);
      n /= i;
      s = Math.sqrt(n);
    } else i++;
  if(n > 1) factors.push(n);
  return factors;
}

function isPrime(n) {
  return factorize(n).length == 1;
}

function cents(s) {
  return 1200 * Math.log2(s instanceof Array ? val(s) : s);
}

// Bring `s` down to fit in one octave.
function reduce(s) {
  var num = s[0], denom = s[1];
  if(num > 2 * denom)
    denom *= Math.pow(2, Math.floor(Math.log2(num / denom)));
  if(denom > num)
    num *= Math.pow(2, Math.ceil(Math.log2(denom / num)));
  return smp([num, denom]);
}

function gcd(a, b) {
  if(isNaN(a) || isNaN(b)) throw new Error("I've got NaN (" + a + "/" + b + ")");
  if(b == 0) return a;
  return gcd(b, a % b);
}

function smp(s) {
  var g = gcd(s[0], s[1]);
  return [s[0] / g, s[1] / g];
}
function val(s) { return s[0] / s[1]; }
function mul(s, t) { return smp([s[0] * t[0], s[1] * t[1]]); }
function div(s, t) { return mul(s, [t[1], t[0]]); }
function inv(s) { return [s[1], s[0]]; }
function pow(s, n) {
  if(n < 0)
    return inv(pow(s, -n));
  return [Math.pow(s[0], n), Math.pow(s[1], n)];
}

var lambda = Math.sqrt(33/31);
var commaCache = {};
function commaForPrime(p) {
  if(commaCache[p]) return commaCache[p];
  var k = 0, v = [1, 1], n, num;
  while(true) {
    n = reduce(div([1, p], v));
    num = val(n);
    if(num < lambda || 2 / num < lambda) break;
    k = k > 0 ? -k + 1 : -k;
    v = div(k > 0 ? [3, 2] : [1, 1], v);
  }
  var comma = div(num > lambda ? [2, 1] : [1, 1], n);
  return (commaCache[p] = [k, comma, cents(comma)]);
}

function parseIn(s) {
  var n = parseInt(s, 10);
  if(isNaN(n)) throw new Error("'" + s + "' is not a number");
  return n;
}

var perfectInterval = [true,  false, false,  true,  true, false, false];
var nominalSize     = [0,     2,     4,      5,     7,    9,     11];
var pythagoreanMods = [0,     2,     4,      -1,    1,    3,     5];
var sharpMod = 7;
var sharpSize = reduce(pow([3, 2], sharpMod));

function parseInterval(name) {
  var parts = name.match(/^(m|M|P|d+|A+)([1-9][0-9]*)(?:\^([0-9,]+))?(?:_([0-9,]+))?$/);
  if(!parts) throw new Error("I don't understand the format of the interval");
  var variant = parts[1], steps = parts[2] - 1,
    otonal = parts[3] || '1', utonal = parts[4] || '1';
  var isPerfect = perfectInterval[steps % 7];
  if((isPerfect && (variant == 'm' || variant == 'M')) ||
    (!isPerfect && variant == 'P'))
    throw new Error("The interval size (" + (steps % 7 + 1) +
      ") doesn't match the variant specifier (" + variant + ")");
  var modulation;
  switch(variant) {
    case 'M': case 'P':
      modulation = 0;
      break;
    case 'm':
      modulation = -1;
      break;
    default:
      var isDim = variant.indexOf('A') == -1;
      modulation = (isDim ? -1 : +1) * variant.length - (!isPerfect && isDim);
  }
  otonal = factorize(otonal.split(',').map(parseIn).product());
  utonal = factorize(utonal.split(',').map(parseIn).product());
  var fjs = [1, 1];
  for(var i = 0; i < otonal.length; ++i) {
    if(otonal[i] == 2 || otonal[i] == 3)
      throw new Error("FJS modifiers may not have factors of 2 or 3");
    fjs = mul(fjs, commaForPrime(otonal[i])[1]);
  }
  for(var i = 0; i < utonal.length; ++i) {
    if(utonal[i] == 2 || utonal[i] == 3)
      throw new Error("FJS modifiers may not have factors of 2 or 3");
    fjs = div(fjs, commaForPrime(utonal[i])[1]);
  }
  return mul(pythagorean(steps, modulation), fjs);
}

function pythagorean(steps, modulation) {
  var octave = Math.floor(steps / 7);
  var basicStep = steps - 7 * octave;
  return mul(pow([2, 1], octave),
    mul(reduce(pow([3, 2], pythagoreanMods[basicStep])),
      pow(sharpSize, modulation)));
}

function nameInterval(frac) {
  frac = smp(frac);
  var otonal = factorize(frac[0]);
  var utonal = factorize(frac[1]);
  var fifths = 0;
  var otonalCommas = [];
  var utonalCommas = [];
  var commas = [1, 1];
  for(var i = 0; i < otonal.length; ++i)
    if(otonal[i] == 3) fifths++;
    else if(otonal[i] != 2) {
      otonalCommas.push(otonal[i]);
      var commaData = commaForPrime(otonal[i]);
      commas = mul(commas, commaData[1]);
      fifths += commaData[0];
    }
  for(var i = 0; i < utonal.length; ++i)
    if(utonal[i] == 3) fifths--;
    else if(utonal[i] != 2) {
      utonalCommas.push(utonal[i]);
      var commaData = commaForPrime(utonal[i]);
      commas = div(commas, commaData[1]);
      fifths -= commaData[0];
    }
  var sharpCount = Math.floor((fifths + 1) / 7);
  var basicInt = pythagoreanMods.indexOf(fifths - sharpMod * sharpCount);
  var octave = Math.log2(val(div(frac, mul(commas,
    mul(reduce(pow([3, 2], pythagoreanMods[basicInt])),
      pow(sharpSize, sharpCount))))));
  var isPerfect = perfectInterval[basicInt];
  var variant = '';
  if(sharpCount < -1 || sharpCount > 0 || (sharpCount == -1 && isPerfect)) {
    var modName = sharpCount > 0 ? 'A' : 'd';
    if(!isPerfect && sharpCount < 0) sharpCount++;
    sharpCount = Math.abs(sharpCount);
    for(var i = 0; i < sharpCount; ++i)
      variant += modName;
  } else if(sharpCount == -1) variant = 'm';
  else                        variant = isPerfect ? 'P' : 'M';
  return variant + (7 * octave + 1 + basicInt) +
    (otonalCommas.length ? "^" + otonalCommas.join(',') : "") +
    (utonalCommas.length ? "_" + utonalCommas.join(',') : "");
}
