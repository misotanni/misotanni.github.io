# A Summary of the FJS

The Functional Just System (FJS) is a notation system used to extend traditional staff notation to be able to notate all of Just Intonation (JI). Like Helmholtz-Ellis notation or Johnston notation, the FJS does this by extending staff notation with a list of special accidentals. The FJS uses a deterministic process to convert any JI ratio **uniquely** into an interval class (M2, m3, A4, etc.) plus additional specific FJS accidentals.

The goals of the FJS are:

- To make the conversion process from JI ratios to musical notation and backwards fully automatic and deterministic, in contrast to the hand-picked accidentals used in Helmholtz-Ellis and Johnston notations. There are no special glyphs for accidentals and no special predefined list of their values. All of the FJS can be calculated on the spot, both using external tools and mental arithmetic.
- To be able to represent the entirety of Just Intonation with perfect accuracy, not only up to a certain prime limit (61 for Helmholtz-Ellis, 31 for Johnston) or only up to a certain degree of precision (Sagittal).
- To be much easier to use (both in reading and in writing) than existing notation systems for Just Intonation.
- To be optimized for use with digital musical notation software, due to its ability to automatically generate all of its accidentals.

The core of the FJS is the **FJS master algorithm**, which takes any prime number greater than 3 as its input, and makes use of a constant known as the **radius of tolerance** (whose standard value is $$\sqrt{\frac{33}{31}}$$, the geometric mean of 33/32 and 32/31). It looks for the simplest approximation of that prime number closer than the radius of tolerance within the 3-limit (*simplest* means lowest absolute value of the **fifth shift**, i.e. the exponent of three). The difference between the target and the approximation is then recorded as the so-called **formal comma** of that prime, always in the original direction, i.e. with the prime number factor in the numerator.

Just Intonation is notated in the following way: 

- All 3-limit intervals are assigned directly to unchanged interval classes, since Pythagorean tuning is bijective to staff notation (cf. the [mathematics page](math.html)).
- For the 5-limit and above, the following procedure is used:
	- Every prime has exactly one formal comma under any given radius of tolerance (it is the output of the FJS master algorithm for that prime). Every formal comma is assigned exactly two accidentals, an otonal one and a utonal one.
	- Every ratio starting from the 5-limit can be uniquely represented as a 3-limit ratio multiplied by so-called bridge numbers raised to integer exponents, with exactly one bridge interval for every prime above 3 (cf. the [mathematics page](math.html)). A bridge number is an interval equal to an integer power of 2 times an integer power of 3 times exactly one other prime raised to +1.
	- Every formal comma is a bridge number, since they all are the difference between a 3-limit ratio and a prime ratio.
	- Therefore every ratio starting from the 5-limit is represented as a 3-limit ratio, which is given an interval class, multiplied by integer powers of formal commas, which are given FJS accidentals. 

For every prime, the FJS master algorithm outputs two values: the fifth shift, and the formal comma. Both are useful to describe the FJS fully, but only one of them must be known for a given prime for both to be uniquely determined without having to use the FJS master algorithm or the radius of tolerance (cf. the [formal description](rules.html)).

Below is the FJS master algorithm.

> 1. Input the desired prime interval in octave-reduced form.
> 2. Let *k* = 0.
> 3. Consider the interval of *k* Pythagorean fifths, in octave-reduced form.
> 4. Is the difference between this interval and the target prime interval less than the radius of tolerance?
> 5. If so: *k* is the fifth shift. Output. End.
> 6. If not: move to the next *k* in sequence: (0, 1, −1, 2, −2, 3, −3, …) and repeat from step 3.
>
> In step 4, the meaning of “difference” is the **absolute value** of the cent size of the difference, chosen in octaves of *p* and *P* to minimize this absolute difference. For details, see the [crash course](crash.html).
