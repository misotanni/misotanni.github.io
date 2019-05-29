# FJS Calculators

<select id="computations">
  <option value="">Select computation</option>
  <option value="comma">Compute FJS comma for prime</option>
  <option value="tofjs">Convert fraction into an FJS interval</option>
  <option value="fromfjs">Convert FJS interval into a fraction</option>
  <option value="setlambda">Set the radius of tolerance to a custom value</option>
</select>

Input (<span id="input-name"></span>):<br />
<input type="text" id="input">

Output: <br />
<pre><code id="output"></code></pre>

- The function "Compute FJS comma for prime" will find the generator function and formal comma (as well as give the cent size of this comma) for any input prime number greater than 3.
- The function "Convert fraction into an FJS interval" will find the unique FJS representation of any input positive fraction. All FJS accidentals will be listed separate, never multiplied together. For intervals less than the perfect prime, a negative number is used to represent a downward interval. For instance, 5/4 is `M3^5`, while 4/5 is `M-3^5`.
- The function "Convert FJS interval into a fraction" will find the unique fraction corresponding to an FJS interval input. A caret must be used to indicate the beginning of the otonal modifiers, and an underscore for the utonal ones. FJS accidentals may be multiplied together in any combination, and a negative number for a downward interval can be used.

<link rel="stylesheet" href="../assets/calcsheets.css">
<script src="../assets/fjs.js"></script>
<script src="../assets/calc.js"></script>

