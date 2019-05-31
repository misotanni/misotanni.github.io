# The Mathematics of the FJS

This page contains mathematical theorems whose truth is required to ensure that the FJS can work the way it does and that the FJS has all these properties I stated it has, but which do not appear outside the context of the FJS. Most of the mathematics on this page is one huge endeavor to eventually prove that the FJS is bijective, i.e. that every FJS representation corresponds to one JI ratio, and vice versa.

## Theorem 1

**To add two intervals, we multiply their ratios.**

Consider three frequencies:

$$f_1, f_2, f_3$$

Let them form two adjacent intervals as follows:

$$d_{1,2}=\frac{f_2}{f_1}, d_{2,3}=\frac{f_3}{f_2}$$

The sum of these intervals is defined as follows:

$$d_{1,3}=\frac{f_3}{f_1}$$

But this is also equal to the following:

$$\frac{f_3}{f_1}=\frac{f_2 \cdot f_3}{f_1 \cdot f_2}=\frac{f_2}{f_3} \cdot \frac{f_1}{f_2}=d_{1,2} \cdot d_{2,3} \quad \blacksquare$$

**Corollary.** The difference of two intervals is a quotient of magnitudes.

## Theorem 2

**Any positive rational number can be uniquely factorized into prime numbers raised to integer exponents.** ("Fundamental Theorem of Harmony")

For the proof, we begin with the Fundamental Theorem of Arithmetic, the ability to factorize any positive integer uniquely into primes with natural exponents. Here the notation p⁡(*n*) refers, as usual, to the *n*<sup>th</sup> prime number, so $$\text{p}(1)=2$$.

$$\displaystyle a=\prod_{i=1}^{n} \text{p}(i)^{\alpha _i}, a\in \mathbb{Z}_+, n, \alpha _i \in \mathbb{N}$$

Consider now an interval, which – if it is just – must be capable of being represented as the quotient of two positive integers. Expand both positive integers uniquely using the Fundamental Theorem of Arithmetic.

$$\frac{a}{b}=\frac{\prod_{i=1}^{n} \text{p}(i)^{\alpha _i}}{\prod_{j=1}^{m} \text{p}(j)^{\beta _j}}$$

Now consider $$t=\text{max}(n,m)$$ and expand at most one of these products until both of them are length *t*, just by adding further primes raised to the power 0. Then simplify.

$$\frac{a}{b}=\frac{\prod_{i=1}^{t} \text{p}(i)^{\alpha _i}}{\prod_{j=1}^{t} \text{p}(j)^{\beta _j}}=\prod_{k=1}^{t} \text{p}(k)^{\gamma _k}$$

By the Fundamental Theorem of Arithmetic, the exponents are differences of two natural numbers. The natural numbers are not closed under subtraction, but their least superset which is closed under subtraction is the set of integers. Hence there exists a unique representation of every just interval as a product of primes raised to integer exponents and the proposition holds.&nbsp;$$\blacksquare$$

## Theorem 3

**If *p*, *q* are two different prime numbers, then $$p^n\neq q^m$$ for any nonzero integers *n*, *m*.**

We proceed by contradiction. Assume that there exist some two unequal prime numbers *p*, *q* and two integers *n*, *m* such that:

$$p^n=q^m$$

The numbers *p* and *q* are already prime, so this also already is their prime factorization using the Fundamental Theorem of Arithmetic.

This is an immediate contradiction, since by the Fundamental Theorem of Arithmetic, the decomposition of any positive integer into primes is unique, and here we have two different prime factorizations of the same positive integer. The only case where this is not a contradiction is if *n*, *m* are both zero. Then the positive integer in question is 1. But this is a contradiction with the assumption that *n*, *m* are both nonzero.&nbsp;$$\blacksquare$$

**Corollary.** Taking *p* = 2, *q* = 3, we obtain the statement for octaves and perfect twelfths, equivalent to the statement for octaves and perfect fifths. This implies that a "circle" of just 3/2 fifths never closes.

## Theorem 4

**Pythagorean tuning is bijective to staff notation.**

Consider the diatonic scale on C, sorted by fifths:

F, C, G, D, A, E, B

This is a fragment of a chain of fifths originating on D, as follows:

−3, −2, −1, 0, +1, +2, +3

Here, these integers represent the number of motions around this infinite "spiral of fifths"; positive integers corresponding to the addition of fifths, and negative integers corresponding to the subtraction of fifths.

However, note that we already know how to extend this chain. The sharp and the flat are specifically defined as accidentals such that B♭ to F = B to F♯ = a perfect fifth. Adding a flat and sharp copy of the diatonic scale extends the chain to −10 on the left and +10 on the right, as follows:

F♭, C♭, G♭, D♭, A♭, E♭, B♭, F, C, G, D, A, E, B, F♯, C♯, G♯, D♯, A♯, E♯, B♯

−10, −9, −8, −7, −6, −5, −4, −3, −2, −1, 0, +1, +2, +3, +4, +5, +6, +7, +8, +9, +10

Using double flats and double sharps extends the chain to 17, using triple flats and triple sharps extends it even further to 24, etc.

*The chain will never close to form a circle*, which we have proved in Theorem 3. Thus it is infinite in both directions, and so every note will correspond to an integer on the number line, which corresponds to a number of motions of fifths.&nbsp;$$\blacksquare$$

**Corollary.** Any Pythagorean ratio corresponds exactly to one conventional interval class, in the same way the FJS associates Pythagorean tuning with conventional interval classes.

## Theorem 5

**Definition:** A *bridge number* for a prime number *p* is a number of the form $$2^a\cdot 3^b\cdot p$$ where *p* is a prime greater than 3 and *a*, *b* are integers.

**Theorem: For any given infinite list of bridge numbers, exactly one for every prime, any JI interval can be represented uniquely as a product of a Pythagorean interval and bridge numbers raised to integer powers.** (Core Theorem of the FJS)

We proceed by induction, with *p* = 5 as the base case.

Let $$C_p=2^{a_p}\cdot 3^{b_p}\cdot p$$ be the bridge number chosen for the prime number *p* with particular integers *a*<sub>*p*</sub>, *b*<sub>*p*</sub>. It is an arbitrary known interval.

For the base case, consider a known 5-bridge: $$C_5=2^{a_5}\cdot 3^{b_5}\cdot 5$$, and a 5-limit JI interval with a known unique prime factorization: $$d=2^{\alpha _2} \cdot 3^{\alpha _3} \cdot 5^{\alpha _5}$$.

$$d=2^{\alpha _2} \cdot 3^{\alpha _3} \cdot 5^{\alpha _5}$$

$$d=2^{\alpha _2 + \alpha_5 a_5 - \alpha_5 a_5} \cdot 3^{\alpha _3 + \alpha_5 b_5 - \alpha_5 b_5} \cdot 5^{\alpha _5}$$

$$d=2^{\alpha _2 - \alpha_5 a_5} \cdot 2^{\alpha _5 a_5} \cdot 3^{\alpha _3 - \alpha_5 b_5} \cdot 3^{\alpha _5 b_5} \cdot 5^{\alpha _5}$$

$$d=(2^{a_5} \cdot 3^{b_5} \cdot 5)^{\alpha _5} \cdot 2^{\alpha _2 - \alpha_5 a_5} \cdot 3^{\alpha _3 - \alpha_5 b_5}$$

$$d=(C_5)^{\alpha _5} \cdot 2^{\alpha _2 - \alpha_5 a_5} \cdot 3^{\alpha _3 - \alpha_5 b_5}$$

This is a unique representation as a Pythagorean ratio, i.e. a power of 2 and 3 raised to integer exponents, multiplied by the given arbitrary 5-bridge raised to an integer exponent. The base case holds.

For the induction step, we assume the truth for $$\text{p}(n)$$ and prove that this implies the truth for $$\text{p}(n+1)$$.

Let *g* be a JI interval with factors up to and including $$\text{p}(n+1)$$. Therefore it can be uniquely factorized into primes up to and including that prime:

$$\displaystyle g=\prod_{i=1}^{n+1} \text{p}(i)^{\alpha _{\text{p}(i)}}$$

Split the product, referring to $$\text{p}(n+1)$$ as *q* for convenience:

$$\displaystyle g=\prod_{i=1}^n \text{p}(i)^{\alpha _{\text{p}(i)}} \cdot q^{\alpha _q}$$

Due to the induction hypothesis, we may now immediately represent the term on the left with bridges. Here *x*, *y* are arbitrary integers resulting from the conversion into prime bridges up to $$\text{p}(n)$$.

$$\displaystyle g=(2^x \cdot 3^y \cdot \prod_{i=3}^n (C_{\text{p}(i)})^{\alpha _{\text{p}(i)}}) \cdot q^{\alpha _q}$$

Let's refer to the product of bridges as γ for convenience, then the statement above becomes:

$$g=2^x \cdot 3^y \cdot \gamma \cdot q^{\alpha _q}$$

Now consider a known q-bridge: $$C_q=2^{a_q}\cdot 3^{b_q}\cdot q$$. We proceed to rewrite *g* in terms of this q-bridge.

$$g=\gamma \cdot 2^x \cdot 3^y \cdot q^{\alpha _q}$$

$$g=\gamma \cdot 2^{x + \alpha _q a_q - \alpha _q a_q} \cdot 3^{y + \alpha _q b_q - \alpha _q b_q} \cdot q^{\alpha _q}$$

$$g=\gamma \cdot 2^{x - \alpha _q a_q} \cdot 2^{\alpha _q a_q} \cdot 3^{y - \alpha _q b_q} \cdot 3^{\alpha _q b_q} \cdot q^{\alpha _q}$$

$$g=\gamma \cdot (2^{a_q} \cdot 3^{b_q} \cdot q)^{\alpha _q} \cdot 2^{x - \alpha _q a_q} \cdot 3^{y - \alpha _q b_q}$$

$$g=\gamma \cdot (C_q)^{\alpha _q} \cdot 2^{x - \alpha _q a_q} \cdot 3^{y - \alpha _q b_q}$$

Expanding γ and *q* back:

$$g=2^{x - \alpha _q a_q} \cdot 3^{y - \alpha _q b_q} \cdot \prod_{i=3}^n (C_{\text{p}(i)})^{\alpha _{\text{p}(i)}}) \cdot (C_{\text{p}(n+1)})^{\alpha _{\text{p}(n+1)}}$$

$$g=2^{x - \alpha _q a_q} \cdot 3^{y - \alpha _q b_q} \cdot \prod_{i=3}^{n+1} (C_{\text{p}(i)})^{\alpha _{\text{p}(i)}}$$

This is a unique representation of a JI interval with factors up to $$\text{p}(n+1)$$ in terms of the factors up to $$\text{p}(n)$$. The induction step holds.

As the statement has also been proven for the base case $$\text{p}(n)=5$$, it also holds for all the prime numbers greater than 3 by the principle of mathematical induction.&nbsp;$$\blacksquare$$

**Corollary.** Since a formal comma is a bridge number, for any given list of formal commas – one for every prime – every JI ratio can be uniquely represented as a Pythagorean ratio multiplied by formal commas raised to integer powers. This is exactly what the FJS does.
