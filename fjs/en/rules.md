# The Complete Formal FJS Description

This page is a *de facto* reference manual for using the FJS. It contains all the rules you will need to use the FJS, including its shorthand elements. However it will not be of much use to you unless you have read through the [Crash Course](crash.html) first.

Everything concerning experimental elements is marked with the symbol (\*).

## Reduced Forms

> The regular reduced form is $$\text{red}(d)=d \cdot 2^{-\lfloor\log_2 d\rfloor}$$
>
> The balanced reduced form is $$\text{reb}(d)=\frac{1}{\sqrt{2}} \text{red}(\sqrt{2} \cdot \text{red}(d))$$

## The FJS Master Algorithm

> 1. Input the desired prime interval in octave-reduced form.
> 2. Let *k* = 0.
> 3. Consider the interval of *k* Pythagorean fifths, in octave-reduced form.
> 4. Is the difference between this interval and the target prime interval less than the radius of tolerance?
> 5. If so: *k* is the generator function. Output. End.
> 6. If not: move to the next *k* in sequence: (0, 1, −1, 2, −2, 3, −3, …) and repeat from step 3.
>
> In step 4, the meaning of “difference” is the **absolute value** of the cent size of $$\text{reb}\left( \frac{p}{3^k} \right)$$

## The Formal Comma

> The formal comma of a prime *p* with a generator function *g* is given by:
>
> $$\text{comma} (p)=\text{reb}\left( \frac{p}{3^g} \right)$$

## Converting JI Ratios into FJS Representations

> 1. Factorize the ratio.
> 2. For every prime *p* greater than 3 with an exponent of α<sub>*p*</sub>, remember the α<sub>*p*</sub> for every *p* and multiply the initial ratio by
>
> 	$$(\text{comma} (p))^{-\alpha _p}$$
>
> 3. The result will be Pythagorean. Transform it into FJS form.
> 4. Now add the α<sub>*p*</sub> as accidentals – if positive, then otonal; if negative, then utonal.
> 5. Take the reduced form and adjust octaves as required.

## Converting FJS Representations into JI Ratios

> 1. Convert the Pythagorean part of the FJS interval into a Pythagorean ratio.
> 2. For every otonal accidental *p*, multiply by the formal comma of *p*. If utonal, then divide.
> 3. Take the reduced form and adjust octaves as required.

## FJS Interval Arithmetic

> - The sum of the FJS representations of two JI ratios is the FJS representation of the product of these ratios.
> - The difference of the FJS representations of two JI ratios is the FJS representation of the quotient of these ratios.
> - The inversion of the FJS representation of a JI ratio is the FJS representation of the reciprocal of the ratio.
> - To add two FJS intervals, add their Pythagorean parts (conventional interval classes) and merge the accidentals.
> - To subtract two FJS intervals, subtract their Pythagorean parts, then swap the otonal with the utonal accidental for the second interval, then merge. Subtracting an FJS interval is the same as adding its inverse.
> - To invert an FJS interval, invert its Pythagorean part and swap the otonal with the utonal accidental.
> - You can also add an FJS interval to an FJS note, or subtract an FJS note from another FJS note.

## Rules for Generating FJS Interval and Note Names

1. By default, the FJS uses Pythagorean tuning for traditional staff notation. So the interval C–E is 81/64, the interval C–D♭ is 256/243, the interval D♭–C♯ is 531441/524288, etc.

2. A single comma of the prime *p* (greater than 3) will use the appended number “p” (preferably as a superscript) to represent a deviation by that comma **in its original direction**. E.g. E<sup>5</sup> is an interval of 81/80 **below** E (because the comma of 5 is 80/81); F<sup>11</sup> is an interval of 33/32 **above** F (because the comma of 11 is 33/32). These note names are pronounced with the number appended: “E-five”, “F-eleven”. I do not expect them to cause confusion with chord symbols, since it is often clear from context whether a single note or a chord is meant. In the case of confusion, an optional “super” prefix can be attached. Note that the original direction is preserved.

3. A single comma of the prime *p* will use the appended number “p” as a subscript to represent a deviation by that comma in the **opposite of its original direction**. E.g. E♭<sub>5</sub> is an interval of 81/80 above E♭; A<sub>19</sub> is an interval of 513/512 below A. These are pronounced with the number appended, but with a “sub” prefix attached: “E-flat-sub-five”, “A-sub-nineteen”.

4. To represent combinations of movements by commas **in the same orientation** (either all otonal or all utonal), **multiply** the numbers that the original commas would contain (rather than add or concatenate them). This is because these numbers are primes. A sum of primes cannot be uniquely resolved into its summands, and neither can a contenation of primes, but due to the Fundamental Theorem of Arithmetic, a product of primes can. Therefore, from the final product, we can always uniquely deduce which primes were multiplied. Order does not matter. E.g. G♯<sup>25</sup> is two 81/80 intervals below G♯ and there is no other interpretation, since 25 = 5 × 5 and no other prime decomposition exists.

5. Usually the product allows the deduction of the prime factorization immediately at first sight. Some of the most frequent products are all recognizable: 25, 35, 49, 125, 625, 343, 55, 77, 65, 121 are all familiar. If it is completely unclear at first sight what a number factorizes to, e.g. 119 = 7 × 17, an alternative notation can be used where all factors are listed, separated with commas (punctuation marks). The example from above could alternatively be written as G♯<sup>5,5</sup> and both notations are equally correct. If commas are listed out individually, it is preferred to list them in non-descending order, so D<sup>119</sup> is D<sup>7,17</sup> rather than D<sup>17,7</sup>. These extremes can also be combined in any way, and individual factors may be multiplied in any combination, e.g. G<sup>11,125</sup> is a perfectly valid representation of G<sup>1375</sup>. These are pronounced as normal: “G-eleven-one-hundred-twenty-five”

6. Products of positive and negative commas are independent. They are written as a combined subscript and superscript, e.g. F<sup>7</sup><sub>5</sub> represents F lowered by 64/63 and then raised by 81/80 (or in the opposite order; first raised by 81/80 and then lowered by 64/63; the result is the same). Note that the products used to represent positive and negative commas will always be coprime, otherwise there is an unnecessary shift in one direction that is canceled out in the other one; \*C<sup>35</sup><sub>5</sub> is the same note as C<sup>7</sup>.

7. The number 1 represents canceling any microtonal accidentals, similar to the natural sign used to cancel standard accidentals. It can be written either in a superscript or a subscript. For example, the sequence C – D – E<sup>5</sup> – E<sup>1</sup> (or simply C – D – E<sup>5</sup> – E) represents the intervals 1/1, 9/8, 5/4, 81/64 above C.

8. Intervals may have the same modifiers as notes.

## Rules for Using FJS Note Names in Notation

1. To add positive comma shifts to a note, write the corresponding number that results from combining these shifts in front of it, as an accidental. For consistency, just like standard accidentals are prepended to a note on a staff but appended to its name, the same happens to microtonal accidentals. They are written in front of the note, and if there is a standard accidental as well, then in front of the accidental.

2. To add negative comma shifts to a note, write the corresponding number that results from combining these shifts in front of it, but prepended with a negative sign (e.g. “−35”).

3. If both positive and negative comma shifts appear, then the total positive shift should be written to the left of the total negative shift.

4. *Pythagorean accidentals divide notes with the same diatonic pitch class (C, D, E, F, G, A, or B) into their Pythagorean pitch classes. Hence, a Pythagorean accidental applies to all notes with the same diatonic pitch class and octave in the same bar, until overwritten or canceled.* Analogically, microtonal accidentals divide notes with the same Pythagorean pitch class into their absolute JI pitches. Hence, a microtonal accidental applies to all notes with the same Pythagorean pitch class and octave in the same bar, until overwritten or canceled. This means that, if the first E in a bar is written with a +5 accidental, then all other E in that bar in the same octave will also have the +5 accidental implied (until it is canceled with a 1), however, an E♭, just as much as a D or an F, will not have that accidental implied, even if it is in the same bar.

5. A “1” accidental cancels any microtonal accidentals for the Pythagorean pitch class it is applied to.

## Rules for Using FJS Key Signatures (\*)

1. FJS key signatures work exactly like Pythagorean key signatures, are independent of them, and are written to the right of Pythagorean key signatures if they exist in the same score.

2. By default, an FJS key signature can only apply microtonal accidentals to those pitches which are diatonic in the key that a Pythagorean key signature has already supplied. For example, if a piece is in A major, and has the Pythagorean key signature ♯FCG, then an FJS key signature can usually only apply microtonal accidentals to the notes A, B, C♯, D, E, F♯, and G♯. Because FJS key signatures are nonstandard, there is no particular order in which these accidentals must appear. However, due to the Pythagorean nature of the FJS, it is found that these key signatures will often exhibit Pythagorean patterns, and so they will appear as fragments of the standard FCGDAEB or BEADGCF order.

3. An FJS key signature can supply microtonal accidentals to non-diatonic pitches by selecting an appropriate space or line on the staff for the diatonic pitch class, writing the FJS accidental, and then appending a Pythagorean accidental in parentheses to indicate the Pythagorean pitch class. The parentheses are required to indicate that the Pythagorean accidental itself is not part of the key signature, instead the meaning is as follows: if the Pythagorean accidental is used, then the microtonal accidental that follows will also be applied. For instance, an FJS key signature for C harmonic major could be B<sup>5</sup> E<sup>5</sup> A<sup>5</sup> A<sub>5</sub>(♭), indicating that all B, E, and A should be altered by a +5 accidental, and all A♭ should be altered by a −5 accidental. In this case, A is not flat by default; but *if* it is, *then* it is also altered by −5.

4. As with standard key signatures, FJS key signatures do not “mix” with proper FJS accidentals. Rather, standalone FJS accidentals overwrite those that would be due to an FJS key signature. An E<sub>7</sub> indicated by writing E with a −7 accidental before it is still E<sub>7</sub>, even if there is an FJS key signature that says E<sup>5</sup> instead. (It does not, for instance, become E<sup>5</sup><sub>7</sub>.)

5. A Pythagorean key signature change does not automatically also trigger an FJS key signature change. A piece which begins with the key signatures ♯FCG and F<sup>5</sup> C<sup>5</sup> G<sup>5</sup> will not have its FJS key signature canceled when the piece changes key to A♭ major (♭BEAD). If no FJS key signature change has happened, then it is still assumed that in this key of A♭ major, if an F♯ appears, then alter it by +5. This may seem strange, since an F♯ is never expected to appear in A♭ major. However, it actually makes lots of sense because it helps avoid the need to restate the FJS key signature every time that a simple modulation occurs (e.g. from ♯FCG to ♯FC). In such cases, it may very probably be desired that the F♯ and C♯ (and G♯, which may appear in D major as part of a II chord) remain altered by +5.

6. An FJS key signature change will cancel all alterations due to the previous FJS key signature. If the Pythagorean key signature has changed as well, which it always does before the FJS key signature, then of course a new key signature is always defined with respect to the new set of seven diatonic pitches. For example, ♯FCG F<sup>5</sup> C<sup>5</sup> G<sup>5</sup> is quintal A major. Changing the Pythagorean key signature to ♭BEAD causes ♭BEAD F<sup>5</sup>(♯) C<sup>5</sup>(♯) G<sup>5</sup>(♯). However, if the FJS key signature (written as F<sup>5</sup> C<sup>5</sup> G<sup>5</sup>) is restated immediately after the Pythagorean switch to ♭BEAD, i.e. if we have the combination ♭BEAD F<sup>5</sup> C<sup>5</sup> G<sup>5</sup>, this has a different effect because the F, C, and G that are diatonic to A♭ major are now different: F♮, C♮, G♮ instead of F♯, C♯, G♯.

7. An FJS key signature change is indicated by at least one microtonal accidental. If the change is to cancel the previous FJS key signature but without introducing any new accidentals, all the previous accidentals can be canceled with 1s (which are the equivalent of naturals in the FJS). However, such cancelations are implied in any FJS key signature change. Note that a complete cancelation of all FJS accidentals is very rarely required.

8. FJS key signatures may be generally omitted in subsequent systems. This is simply because, being nonstandard key signatures, they are often inconvenient to write in digital musical notation software.

## Rules for Using FJS Transposition Lines (\*)

1. There exist FJS transposition lines, which work analogically to octave lines, but apply an FJS accidental instead of shifting by an octave.

2. An FJS transposition line can be written either as alta or bassa, with no difference in meaning.

3. An FJS transposition line begins with a compound FJS accidental, which appears just as it would if it was written on a staff. For example, a transposition line of +5 will begin with “5”, a transposition line of +7−5 will begin with “7−5”, etc. As with octave lines, “loco” following such a line is optional.

4. All notes under the transposition line have its FJS pitch shift **added** to its pitch shifts as applied by FJS accidentals and key signatures.

## Using the FJS for Notation Beyond JI (\*)

Any number, not just primes, can be the input of the FJS master algorithm. In fact, although the FJS was not constructed for this purpose, the entire algorithmic procedure can be carried out for many irrational numbers. Any positive real number works, but a few (in particular, integer roots of rational numbers) will obliterate the FJS's pristine and fragile bijection, leaving a mere surjection behind (unambiguous reading, but no longer unambiguous writing).

This means the FJS can be used to notate e.g. the 833 cents scale, an octave-repeating scale from a lattice of 3/2 and φ (the golden ratio). In the FJS, φ/1 is a m6<sup>φ</sup>.

Moreover, expanding the FJS to notate powers of φ in addition to the rational numbers preserves all its amazing properties.

Among others, the following famous irrational constants work, too:

- π; m6<sup>π</sup> (τ, the [true circle constant](https://tauday.com/tau-manifesto), has the same representation, since it's just 2π, so an octave of π)
- *e*; P4<sup>*e*</sup>
- γ; M2<sup>γ</sup> (Euler-Mascheroni constant)
- Ω; M2<sup>Ω</sup> (Omega constant)

All transcendental numbers work.

There has been no attempt so far to represent negative or complex numbers in the FJS. :)

## More Experimental Features (\*)

From this point onwards, the FJS is open source! Make new shorthand features if you feel they are needed. You can make entire FJS dialects with nonstandard radii of tolerance (the calculator has a function for that), using commas for every odd limit rather than just every prime limit, having all positive accidentals be upward and all negatives be downward, or even using a nonstandard master algorithm (e.g. instead of finding the simplest Pythagorean approximation within a radius of tolerance, maybe finding the nearest approximation within a Pythagorean simplicity of tolerance).

I'm not a stubborn original creator who won't let anyone modify their work if the changes benefit the work. The FJS used to have so many bad features, some of which have gone through last-minute changes or removals. If you think you've made a nice new feature, share it with me by e-mail and I'll be happy to add it here.

## Examples

The following two notes are G♭<sup>7</sup><sub>5</sub> and F♯<sup>5</sup><sub>7</sub> respectively.

<img src="../assets/example_5.png" alt="G♭7_5–F♯5_7">

The following four bars read: C♯<sup>5</sup> C♯<sup>5</sup>; C♯<sup>5</sup> C♯; C♯<sup>5</sup> C; C♯<sup>5</sup> C<sup>5</sup>.

<img src="../assets/example_4.png" alt="C♯5–C, C♯5–C1, C♯5–C♮, C♯5–C♮5">

The following is the just major scale in A; A, B, C♯<sup>5</sup>, D, E, F♯<sup>5</sup>, G♯<sup>5</sup>, A.

<img src="../assets/example_6.png" alt="♯FCG F5 C5 G5: A–B–C–D–E–F–G–A">

The following is the harmonic series fragment 8–16 in F; F, G, A<sup>5</sup>, B♭<sup>11</sup>, C, D♭<sup>13</sup>, E♭<sup>7</sup>, E<sup>5</sup>, F. (The key signature is not practical, but possible.)

<img src="../assets/example_7.png" alt="♭B ♭D A5 E5 B11 D13 E(♭)7: F–G–A–B–C–D–E♭–E♮–F">

The following chord progression contains two 10:12:14:17 diminished seventh chords and two 4:5:6 major triads, on A, D, G, and C, in that order.

<img src="../assets/example_8.png" alt="E5 B5 F(♯)5 C(♯)5 B(♭)17 A(♭)17: C♯–B♭–E1–G7, D–A–D–F♯, B–A♭–D–F7, C–G–C–E">

This chord progression demonstrates the usefulness of the rule that a Pythagorean key change doesn't reset an FJS key. It reads: A major, E major, A major, A dominant 7<sup>th</sup>, D major, G major, D major/A, E major/A, A dominant 7<sup>th</sup>, D major; where all major triads are 4:5:6 and all dominant seventh chords are 4:5:6:7. The FJS key stays the same after the modulation from A to D, which is useful because the G♯ in D is expected to be +5.

<img src="../assets/example_9.png" alt="♯FCG F5 C5 G5: A–E–C–A, E–E–B–G, A–E–C–A, G7–E–C–A, ♯FC: F–A–D–A, G–B–D–G, A–A–D–F, A–B–E–G♯, A–C♯–E–G7, D–A–D–F♯">

The following example uses the eight notes C, D, E<sup>5</sup>, F, G, A<sup>5</sup>, A, and B<sup>5</sup> without a key signature.

<img src="../assets/example_10.png" alt="C–D–G–C–D–G–C–D–G, 5: E–A–B–E–A–B–E–A–B, loco: F–G–C–F–G–C–F–G–C, D–G–A–D–G–A–D–G–A">
