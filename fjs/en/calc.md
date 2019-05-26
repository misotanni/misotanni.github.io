# FJS Calculators

<select id="computations">
  <option value="">Select computation</option>
  <option value="comma">Compute FJS comma for prime</option>
  <option value="tofjs">Convert fraction into an FJS interval</option>
  <option value="fromfjs">Convert FJS interval into a fraction</option>
</select>

Input (<span id="input-name"></span>):<br />
<input type="text" id="input">

Output: <br />
<pre><code id="output"></code></pre>

<script>
  var loc = {
             prime: "a prime",
          fraction: "a fraction",
      intervalName: "interval name (like M3^5)",
     cantFactorize: "‘%1’ – not something I can factorize.",
        notANumber: "‘%1’ is not a number.",
       wrongFormat: "I don't understand the format.",
   wrongIntVariant: "Interval class ‘%1’ doesn't match variant ‘%2’.",
       wrongFactor: "2 nor 3 may not be factors of FJS modifiers.",
     noComputation: "No computation specified.",
           noInput: "No input given.",
          notPrime: "‘%1’ is not a prime number.",
    butPythagorean: "2 and 3 are Pythagorean octaves and fifths which don't need FJS modifiers.",
           notFrac: "Input is not a fraction (does not contain a slash symbol /).",
        notNatFrac: "Input must be a natural fraction.",
              div0: "Why would you divide by zero?"
  };
</script>
<script src="../assets/fjs.js"></script>
<script src="../assets/calc.js"></script>

- The function "Compute FJS comma for prime" will find the generator function and formal comma (as well as give the cent size of this comma) for any input prime number greater than 3.
- The function "Convert fraction into an FJS interval" will find the unique FJS representation of any input positive fraction. All FJS accidentals will be listed separate, never multiplied together. For intervals less than the perfect prime, a negative number is used to represent a downward interval. For instance, 5/4 is `M3^5`, while 4/5 is `M-3_5`.
- The function "Convert FJS interval into a fraction" will find the unique fraction corresponding to an FJS interval input. A caret must be used to indicate the beginning of the otonal modifiers, and an underscore for the utonal ones. FJS accidentals may be multiplied together in any combination, and a negative number for a downward interval can be used.
