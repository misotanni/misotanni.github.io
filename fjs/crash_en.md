<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML" async></script>

In other languages: [de](https://misotanni.bandcamp.com/album/6-digit-computer-ost) - en - [fr](https://misotanni.bandcamp.com/album/6-digit-computer-ost) - [jbo](https://misotanni.bandcamp.com/album/6-digit-computer-ost) - [pl](https://misotanni.bandcamp.com/album/6-digit-computer-ost)

***

# The FJS Crash Course

So, you are intrigued by what the FJS has to offer, and would like to learn to use it.

This "crash course" was designed specifically with a focus on fast acquisition of all the fundamental elements of the system. It puts less focus on its shorthand system, which is not necessary. If you already have had exposure to Just Intonation, the FJS will be extremely easy for you to learn - you can learn it all in one sitting within a few minutes. Its beauty and simplicity are at your grasp.

## Introduction: Abandoning Enharmony

We are all familiar with standard staff notation and its conventional sharps and flats. But what we may not realize is that we learn staff notation as adapted for our omnipresent tuning system, twelve-tone equal temperament (from now on, this course will use the abbreviation 12-EDO, for Equal Divisions of the Octave).

For example, here is the 12-EDO chromatic scale:

<img src="" alt="The chromatic scale from C, ascending: C-C♯-D-D♯-E-F-F♯-G-G♯-A-A♯-B-C">

No, wait. Actually, the way that it is most commonly written is like this:

<img src="" alt="The chromatic scale from C, ascending: C-C♯-D-D♯-E-F-F♯-G-G♯-A-B♭-B-C">

Replacing that A♯ with B♭ makes no difference to us, of course. We know that those are different names for two notes that are of the same pitch. Choosing between these names is just a matter of legibility, or consistency, or simplicity, as given by context, but they are equivalent.

This property - that the interval of a diminished second be the same size as a perfect prime - has a name: enharmonic equivalence. In fact, musicians who are not familiar with (or aware of) alternate tuning systems may not even know that this property is not universal, and that 12-EDO is one of few tuning systems that satisfies it. In other tuning systems, there is no enharmonic equivalence or there is a different interval of the same size as the perfect prime. (For example, in 19-EDO, the perfect prime is the same size as the *double* diminished second, so E♯ and F♭ are actually equivalent.)

But let's not forget that staff notation predates even the thought of using 12-EDO (to say nothing of complete dominance) by many centuries. Staff notation was originally based on the diatonic scale, which - among its many simultaneous properties - also has the property of being generated from a stack of fifths (F-C-G-D-A-E-B). Actually, the very *fact* that staff notation has multiple ways to name the same pitch in 12-EDO implies that its original construction was based on something very different from 12-EDO.

In other words, enharmonic equivalence is the only 12-EDO feature in staff notation. Everything else is independent.

## Preliminary

Before you start learning about the FJS, there are three mathematical concepts that are FJS-specific that you must be acquainted with.

The first is the ability to quickly convert back and forth between an **interval in staff notation** (without enharmonic equivalence) and the **number of steps by fifths** which is required to build that interval. For example, a **major second** is **+2** fifths, because reaching the major second requires 2 steps by fifths in the clockwise direction: C-G-D. Similarly a **minor third** is **-3 fifths**, because reaching it requires 3 steps by fourths, which are fifths in the anticlockwise direction: C-F-B♭-E♭. Each interval in staff notation has one unique number of steps by fifths corresponding to it. You must be able to perform this conversion and the backwards conversion, ideally quickly.

The second is the ability to prime-factorize a rational number. Much like any **positive integer** can be uniquely factorized into primes with **natural number** exponents (this is the Fundamental Theorem of Arithmetic), any **positive rational number** can be uniquely factorized into primes with **integer** exponents. I will humorously dub this the Fundamental Theorem of Harmony. For example, the number 6/5 factorizes to 2<sup>1</sup> 3<sup>1</sup> 5<sup>-1</sup> and no other factorization exists. (Given that this is a crash course, the mathematical details of this fact will be omitted, but of course [they are available](https://misotanni.github.io/fjs/math_en.html) for the curious reader. From this point onwards, the symbol (\*) will indicate a reference to the mathematics page.)

The third is taking the reduced form of an interval. In practice, it consists of multiplying or dividing a number by 2 until the result is between 1 (inclusive) or 2 (exclusive); this process reflects our perception of *octave equivalence*, the tendency to perceive pitches off by an interval of 2/1 (the octave) as equivalent. For example, 7/1 becomes 7/4, and 1/6 becomes 4/3. The reduced form is given by the formula:

$$\red (d)=d \times 2^{-\log_2 (d)}$$

This is just about all you need, so let's get started!

## Lesson 1: Pythagorean Tuning

You might think that removing enharmonic equivalence from staff notation gives us access to a vastly larger number of pitches, and you would be correct. However, removing enharmonic equivalence, on its own, is insufficient to represent the entirety of JI in a meaningful way. One of the merits of JI is its ability to express very small differences in pitch to give different intervals different flavors.

Consider the sequence of JI intervals: 11/10, 10/9, 9/8, 8/7. Listen to it below:

<audio controls><source src="" type=""></audio>

All of them are "some type of major second" to most listeners, but it would be wrong to represent all of them with a major second in writing. They are very different intervals, and suppressing variety where it is the biggest virtue is contradicting the very essence of JI.

In that case, you might think that there might exist some middle ground, a subset of JI, which can be mapped exactly onto staff notation without enharmonic equivalence, and again you would be correct. That middle ground is none other than 3-limit JI, also known as Pythagorean tuning.

**FJS Rule \#1: Conventional staff notation represents Pythagorean tuning.**

This means that the octave in staff notation is assigned the JI ratio 2/1, exactly the same as in 12-EDO, and that the perfect fifth in staff notation is assigned the JI ratio 3/2. With this assignment, every possible interval in staff notation is assigned exactly one possible 3-limit JI interval; there is a bijection. (\*)

I should note that this requires something that some musicians may not be aware exists: multiples, beyond double, of the sharp and flat. While extremely rarely used in conventional music, they are required here. In the FJS, sharps and flats can appear with any multiplicity. This is not to say that they are common; just do not panic when you have to use them.

You are now ready to learn the first two FJS techniques.

**FJS Technique \#1: To convert from a Pythagorean ratio to an FJS representation.**

~~~
1. Factorize the ratio.
2. Initially ignore octaves (powers of two).
3. If the power of three is positive, move that many steps by fifths clockwise; if negative, move anticlockwise. Convert that number to an interval.
4. Adjust octaves as required.
~~~

**FJS Technique \#2: To convert from an FJS representation of a Pythagorean ratio back to the ratio.**

~~~
1. Initially ignore octaves.
2. Convert the interval to the number of steps by fifths.
3. Raise three to that power and take the reduced form.
4. Adjust octaves as required.
~~~