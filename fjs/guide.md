<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML" async></script>

# The Functional Just System
A Guide to a New Notation System for Just Intonation Music

## Abstract

Most modern music relies on a tuning system known as
twelve-tone equal temperament, which divides the octave into twelve
equal intervals. This tuning system can be contrasted with just
intonation, a method of tuning that relies entirely on using whole
number ratios between note frequencies as intervals. Just intonation
remains important because of its use in traditional music of non-Western
cultures, its historical significance, and its appearance in avant-garde
music. However, it lacks a good system of standardized notation – a
difficulty that my invention, the Functional Just System, aims to
eliminate.

## Introduction

The overwhelming majority of modern music is played in
twelve-tone equal temperament: this means that the octave, the interval
of equivalence, is divided into twelve equal parts and this concludes
the number of possible pitches. In fact, this tuning system, often
abbreviated as 12-EDO (Equal Division of the Octave), is so widespread
that the identities that follow from it are treated as universal, even
though they are not: C♯ = D♭ or A2 = m3, for example.

12-EDO, however, is far from being the only tuning system in
existence. In fact, the modern phenomenon of nearly complete
predominance of 12-EDO is speculated to be only one or two centuries
old. The history of Western classical music knows a plethora of
alternative tuning systems such as meantone temperaments or irregular
temperaments. Non-Western music often makes use of tuning significantly
different from 12-EDO; for instance, traditional Arabic music uses
"quarter tones" – approximately a further subdivision of the semitone
into two – while the music of India makes use of divisions as fine as
22 notes per octave. Additionally, the twentieth-century avant-garde
knows many examples of creative, original alternative tunings which have
nothing in common with 12-EDO.

One alternative tuning system of particular importance is known
as just intonation (abbreviated JI). In many ancient advanced
civilizations, JI was the tuning system used in music, and it continued
to be widely used throughout the Middle Ages. Because of its widespread
appearance throughout history, and because it is the most common
alternative tuning to 12-EDO in avant-garde music, it remains important
to music theory. One of the most notable works of modern avant-garde
non-12-EDO music is in just intonation: La Monte Young's masterpiece,
*The Well-Tuned Piano*.

Since JI is much less formalized due to the contexts in which it
appears, it lacks the sophisticated notation system that 12-EDO
possesses. Many attempts have been made to notate it in a way that
extends 12-EDO notation, and the two most successful attempts so far
have been Helmholtz-Ellis notation and Ben Johnston notation. However, I
believe that both of these systems contain flaws and are not optimal for
the notation of JI. I will compare and contrast these systems, as well
as present my own alternative which I consider to be better than both of
them: the Functional Just System, abbreviated FJS.

## What Is Just Intonation?

To understand just intonation, a quick excursion to physics and
acoustics must be made first. Precisely because 12-EDO is so
omnipresent, musicians are able to ignore the physical basis of sound
nearly completely in their musical education, and therefore many
professional musicians may only be aware of elements of what is
described here.

It is common knowledge that sound is a result of motion, and
pitched sound is a result of periodic motion, where pitch is a
psychological correlate of the frequency of that motion, i.e. the number
of oscillations per unit time. The hertz, equal to an inverse second,
$\text{Hz} = \mathrm{s}^{-1}$ is the SI unit for frequency.
For example, standard concert pitch A is a tone of 440 Hz.

However, what is less known among musicians is that intervals
are psychological correlates of the quotient between two frequencies
(not, for example, their difference). In other words, two intervals
between two pairs of tones will sound identical if and only if the
ratios between the frequencies of these pairs are identical.

The fact that intervals are ratios has important consequences.
First, it means that interval magnitude is a dimensionless quantity,
meaning that it is not measured in a certain physical unit, but is
rather a "raw number". Another implication is that among ratios, whole
number ratios might be particularly important. Pythagoras and his
disciples formulated the claim that small whole number ratios as
intervals sound particularly consonant. Whether or not this is a
universal truth is beyond the scope of this article. What is known is
that small whole number ratios provoke particular acoustic effects which
other intervals cannot cause, and that these effects may add to the
richness and fullness of the music in question. These include phenomena
such as sympathetic resonance or combination tones. Again, their
description and explanation will not be described in this article.
Instead, we will proceed directly to the first definition: **Just
intonation is a tuning system where every interval is a whole number
ratio.**

This definition carries important consequences. Because the
frequency of any tone is necessarily a positive number of oscillations
per second, every interval is necessarily the quotient of two positive
numbers, hence necessarily positive. This means that just intonation
consists entirely of positive rational numbers describing the magnitudes
of intervals. **Table 1** lists a few.

| Interval                          | Ratio | 
| --------------------------------- | ----- | 
| Unison                            | 1/1   | 
| Octave                            | 2/1   | 
| Perfect fifth                     | 3/2   | 
| Perfect fourth                    | 4/3   | 
| Quintal major third, golden third | 5/4   | 
| Quintal minor third, silver third | 6/5   |
| Septimal minor third, lunar third | 7/6   |
| Strong whole tone                 | 9/8   |
| Weak whole tone                   | 10/9  |
| Just quintal diatonic semitone    | 16/15 |

[]{#_Toc5207165 .anchor}**Table** **1. Selected JI intervals and their ratios**


[TODO UWAGA: nie ma żadnych ‘adjectives in parentheses’!]

In the table above, the adjectives in parentheses are additional
means of increasing the accuracy of the intervals described. "Quintal"
simply means involving a factor of five, and "septimal" means involving
a factor of seven. Ratios such as the strong whole tone, which only
involve factors of three and two, are called Pythagorean.

Note also, importantly, that describing an interval as a ratio
of frequencies also has another unexpected consequence: to add two
intervals, we multiply their ratios.

> **Theorem 1.** The sum of two intervals is the product of their ratios.

The proof is straightforward. Consider three frequencies:

$$f_{1},f_{2},f_{3}$$

Let them form two adjacent intervals as follows:

$$d_{1,2} = \frac{f_{2}}{f_{1}},d_{2,3} = \frac{f_{3}}{f_{2}}$$

The sum of these two intervals is of course equal to the
following:

$$d_{1,3} = \frac{f_{3}}{f_{1}}$$

But this is also equivalent to the following:

$$\frac{f_{3}}{f_{1}} = \frac{f_{2}}{f_{1}} \times \frac{f_{3}}{f_{2}} = d_{1,2} \times d_{2,3}$$

Hence the sum of the two intervals is the product of their
magnitudes. ∎

Knowing that interval addition involves multiplication of
ratios (and, conversely, that interval subtraction involves division of
ratios), we can find the ratios of other closely related JI intervals:
the quintal major (golden) sixth is 5/3, the quintal minor (silver)
sixth is 8/5, the quintal minor seventh is 9/5, and the quintal major
seventh is 15/8.

In particular, the fact that interval addition translates
directly to multiplication of ratios, together with the fact that JI
intervals are described by positive rational numbers, leads to the
result that every JI interval can be factorized uniquely into prime
factors with integer exponents. This is analogical to the ability to
factorize every positive integer into prime factors with natural number
exponents (0 is included in the natural numbers).

> **Theorem 2.** Any JI interval can be represented uniquely as a
> product of primes raised to integer exponents.

For the proof, we begin with the Fundamental Theorem of
Arithmetic, the ability to factorize any positive integer uniquely into
primes with natural exponents. Here the notation $\operatorname{p}{(n)}$
refers to the n^th^ prime number, so $\operatorname{p}{(1)} = 2$.

$$a = \prod_{i = 1}^{n}{\operatorname{p}{(i)}}^{r_{i}},a \in \mathbb{Z}_{+},n,r_{i}\mathbb{\in N}$$

Consider now an interval, which – if it is just – must be
capable of being represented as the quotient of two positive integers.
Expand both positive integers uniquely using the Fundamental Theorem of
Arithmetic.

$$\frac{a}{b} = \frac{\prod_{i = 1}^{n}{\operatorname{p}{(i)}}^{r_{i}}}{\prod_{i = 1}^{m}{\operatorname{p}{(i)}}^{s_{i}}}$$

Now consider $t = \max{(n,m)}$ and expand at most one of these
products until both of them are that length, just by adding further
primes raised to the power 0. Then simplify.

$$\frac{a}{b} = \frac{\prod_{i = 1}^{t}{\operatorname{p}{(i)}}^{r_{i}}}{\prod_{i = 1}^{t}{\operatorname{p}{(i)}}^{s_{i}}} = \prod_{i = 1}^{t}{\operatorname{p}{(i)}}^{r_{i} - s_{i}}$$

By the Fundamental Theorem of Arithmetic, the exponents are
differences of two natural numbers. The natural numbers are not closed
under subtraction, but their least superset which is closed under
subtraction is the set of integers. Hence there exists a unique
representation of every just interval as a product of primes raised to
integer exponents and the proposition holds. ∎

The conclusions that follow from these two theorems are of
profound importance to our understanding of how just intonation works,
and how we can make use of these properties to construct the notation
system that conveys information about a note in JI.

How do these intervals relate to 12-EDO? While historical
tuning systems strived to approximate JI, 12-EDO does not have this
goal, and so musicians raised in a culture where 12-EDO predominates are
not at all familiar with JI intervals. The unison and the octave are the
exact same size in both JI and 12-EDO; in fact, 12-EDO makes use of a
just octave of 2/1. The JI fifth, 3/2, is only very slightly sharper
than the 12-EDO fifth; the difference is so insignificant that, as a
melodic interval, it is inaudible to human listeners. In general,
Pythagorean ratios made from a small number of fifths, such as the
strong whole tone, are practically equivalent to their 12-EDO
counterparts. The remaining intervals, however, are considerably far
from their nearest 12-EDO approximations, for instance, the golden third
and sixth are quite flat from the familiar major third and sixth, while
the silver third and sixth are rather sharp. Ratios involving factors of
7, 11, or 13 can be considered not to exist in 12-EDO at all, being
closer to quarter tones or sixth tones. Ratios involving 17 and 19
correspond almost exactly to 12-EDO, but then 23, 29, and 31 are again
not represented at all.

## Interval Size: An Excursion

Before continuing with the formal description of a notation
system for these notes, it is crucial to introduce a way of quantifying
very small differences between intervals. Musicians who have only had
experience with 12-EDO will not know any intervals smaller than the
12-EDO semitone; this makes it very difficult to accurately describe the
difference that exists e.g. between the golden third and the 12-EDO
major third. This is why tuning theory has developed a specific unit for
interval size: the *cent* (abbreviated ¢ or sometimes simply c).

As a melodic interval, one cent is indistinguishable from a
unison: one cent is an interval such that 100 cents are one 12-EDO
semitone, and 1200 cents are one octave. However, the fact that it is
inaudible musically is of no importance, since it is not used as an
interval, but as a unit to compare the sizes of other intervals to.

From a corollary to the theorems established before, multiplying
an interval means exponentiating its ratio, and dividing an interval
means taking the corresponding root of its ratio. Hence, the ratio of
the cent is $\sqrt[1200]{2}$ and that of a semitone is $\sqrt[12]{2}$.
Thus the cent size of an interval can be calculated directly from its
ratio as follows: it is the power to which the ratio of the cent must be
raised to obtain the given interval. The cent size scale is logarithmic,
and the cent size is calculated as follows:

$$\operatorname{C}{(d)} = \operatorname{}d$$

Here, $\operatorname{C}{(d)}$ is the cent size function, $d$ is
the ratio of the interval in question, and the symbol
$¢ = \sqrt[1200]{2}$ stands for the ratio of the cent.

The way the cent is defined makes it very easy to determine the
cent size of any 12-EDO interval: it is always 100 times its size in
12-EDO semitones. For instance, the 12-EDO fifth is exactly 700¢ and the
major third is exactly 400¢. These compare with the JI fifth of
approximately 701.96¢ and the golden third of approximately 386.31¢. As
stated before, the difference between the fifths is insignificant, but
the difference between the thirds is quite meaningful, with the golden
third often sounding considerably "sweeter" and more "mellow" to
listeners with an acute ear that can distinguish between the two.

## The Basis of Notes

To understand our original motivation – the need for an
efficient extension to traditional heptatonic staff notation capable of
encoding information about all JI notes – it is crucial to understand
how traditional staff notation works, and on what basis it was
constructed. This allows us to understand exactly what traditional staff
notation is capable of doing.

It is particularly notable that staff notation, the way we use
it today, is not restricted only to 12-EDO use. One must note that staff
notation predates even the thought of using 12-EDO by many centuries. In
fact, staff notation provides more information than is sufficient for
exclusive 12-EDO: for instance, there is both a note G♯ and a note A♭,
even though in 12-EDO, they both have the same sound. This indicates
that staff notation on its own is capable of representing more
information than just the position of a note in the 12-EDO pitch space.

On the other hand, staff notation on its own is also not capable
of representing JI with complete accuracy. To give just one example, the
intervals 5/4, 81/64, and 9/7 all sound like some kind of major third
(in ascending order of size: just quintal or golden; Pythagorean; just
septimal or solar). But to represent all these intervals above C with
the note E is damnably inaccurate. They have very different qualities,
and equating them in a system where diversity is of great importance is
a huge mistake.

These two extremes indicate that there might exist a tuning
system in which every possible note name in staff notation corresponds
exactly to one pitch. This indeed is the case: that tuning system is
none other than Pythagorean tuning, a tuning system created by an
infinite spiral of JI fifths (3/2) in either direction, raised or
lowered by any number of JI octaves (2/1). Equivalently, it is a tuning
system consisting of an infinite two-dimensional grid where one
dimension corresponds to octaves (2/1) and another one corresponds to
perfect twelfths (3/1), which are sometimes called "tritaves" in this
context. Pythagorean tuning is a subset of just intonation.

How does Pythagorean tuning work? To most musicians, it seems
obvious that the circle of fifths closes after 12 fifths, and there are
no more notes. But we must take two things into consideration. Firstly,
the "circle of 12 fifths" is actually a circle of 11 fifths plus a
diminished sixth. Second, the fact that it closes is only the case for a
size of fifth specifically chosen to close this way: the 12-EDO fifth,
which is slightly flatter – about 1.96¢ flatter – than the JI fifth of
3/2. It is easy to see that JI fifths do not form a circle, no matter
how long. This will be proven below, but the theorem in question is
actually more general: no interval with a prime number ratio will make a
cycle to align with an interval of a different prime number ratio.

> **Theorem 3.** If $p,q$ are two different prime numbers, then
> $p^{n} \neq q^{m}$ for any nonzero $n,m$ out of the set of integers.

Proving this requires a technique known as proof by
contradiction. Assume the negation, and show that such an assumption
contradicts what is already known. In this case, we assume that there
exist some two unequal prime numbers $p,q$ and two integers $n,m$ such
that:

$$p^{n} = q^{m}$$

Factorize both of them with the Fundamental Theorem of
Arithmetic. This is not too difficult in this case, since $p,q$ are
already prime:

$$p^{n} = q^{m}$$

This is an immediate contradiction, since by the Fundamental
Theorem of Arithmetic, the decomposition of any positive integer into
primes is unique, and here we have two different prime factorizations of
the same positive integer. The only case where this is not a
contradiction is if $n,m$ are both zero. Then the positive integer in
question is 1. But this is a contradiction with the assumption that
$n,m$ are both nonzero. If we now take $p = 2,q = 3$ as our prime
numbers, we obtain the statement for octaves and perfect twelfths,
equivalent to the statement for octaves and perfect fifths. ∎

What makes the number 3 so unique? The fifth (plus or minus
octaves) is the only interval from which any other interval capable of
being represented in traditional staff notation can be constructed. No
other interval that is not already equivalent to the fifth in this sense
(e.g. the twelfth or the fourth) has this property.

In fact, while the Western diatonic scale is of debatable
origin due to its many simultaneous music theory properties, and while
staff notation directly originates from the diatonic scale, one of many
equivalent derivations is that staff notation directly corresponds to
the infinite chain of fifths, and is bijective to it.

**Theorem 4.** Pythagorean tuning is bijective to staff notation.

The proof is quite straightforward. Here it is not presented in
a formal way, because doing so would require an abstract algebra
approach to intervals. Instead, it is presented in a way that is easy to
understand intuitively.

Consider the diatonic scale on C, sorted by fifths:

F, C, G, D, A, E, B

This is really a fragment of an endless chain of fifths
originating on D, as follows:

−3, −2, −1, 0, +1, +2, +3

Here, these integers represent the number of motions around
this infinite "spiral of fifths"; positive integers corresponding to the
addition of fifths, and negative integers corresponding to the
subtraction of fifths.

However, note that we already know how to extend this chain.
The sharp and the flat are specifically *defined* as accidentals such
that B♭ to F = B to F♯ = a perfect fifth. Adding a flat and sharp copy
of the diatonic scale extends the chain to −10 on the left and +10 on
the right, as follows:

F♭, C♭, G♭, D♭, A♭, E♭, B♭, F, C, G, D, A, E, B, F♯, C♯, G♯, D♯, A♯, E♯,
B♯

−10, −9, −8, −7, −6, −5, −4, −3, −2, −1, 0, +1, +2, +3, +4, +5, +6, +7,
+8, +9, +10

Using double flats and double sharps extends the chain to 17,
using triple flats and triple sharps extends it even further to 24, etc.
The chain will never close to form a circle, which we have proved in
Theorem 3. Thus it is infinite in both directions, and so every note
will correspond to an integer on the number line, which corresponds to a
number of motions of fifths. (As 12-EDO musicians, we are not used to
seeing accidentals beyond double sharps and flats, but they exist and
have been used in some compositions. Theoretically the "multiple" of the
sharp and flat is unbounded, and this is required to allow Pythagorean
tuning to be fully notated.)

On a related note, this also immediately implies that 12-EDO
enharmonics are by no means universal: they are restricted only to
12-EDO. In Pythagorean tuning, in particular, G♯ is not the same pitch
as A♭. The interval between them only happens to be quite small, but not
1/1. In fact, that interval is exactly equal to $\frac{3^{12}}{2^{19}}$
which is numerically equal to 531441/524288. (Since it was proven that
no two different note names in Pythagorean tuning have the same pitch,
then in particular, it cannot be true for note names 12 units apart.)
The interval between 12-EDO enharmonics is usually known as the
*Pythagorean comma*, but for reasons explained later, I prefer not to
use this name and refer to it as the *Pythagorean diesis* or
*Pythagorean diminished second* instead.

This is exactly the bijection between staff notation and
Pythagorean tuning. ∎

## Commas: Bridges to JI

In the endeavor to notate the entirety of JI using an easily
legible extension of traditional staff notation, Pythagorean tuning is
already covered – it is exactly the bijection to staff notation which
already occurs. In other words, in this new JI notation system, if the
octave is assumed to be 2/1 and the fifth to be 3/2, then Pythagorean
tuning can already be fully notated. All Pythagorean ratios in just
intonation can therefore already be associated with particular
intervals. For example, the strong whole tone becomes assigned to the
major second, e.g. C to D, and the Pythagorean major third from the
above example (81/64) becomes assigned to the major third, e.g. G to B.

To cover the rest of JI, a particular class of musical intervals
called *commas* can be used. Commas are generally small musical
intervals, much smaller than a 12-EDO semitone, and usually even smaller
than a quarter tone, or half of a semitone. (We have already seen one
example of an interval commonly called a comma: the Pythagorean comma.)
In music, commas are a result of assigning the same note name to notes
of different pitches. For example, both 5/4 (the just quintal major
third) and 81/64 (the Pythagorean major third) above C are often given
the note name E. Therefore, the interval between these two, 81/80, is
called a comma. Commas are a convention; there is no mathematical
definition for these, they are just a result of approximating
non-Pythagorean JI intervals with nearby Pythagorean intervals. There is
no reason why 81/80 should be treated as a comma, but 49/48 should not.

While usually in Western tuning theory commas are seen as a
nuisance to be either avoided or eliminated, in the construction of this
notation system for JI, commas are seen as particularly useful. If an
accidental is assigned the value of a comma, then it can be added to a
note to change its pitch value by an insignificant amount and be able to
exactly represent a new non-Pythagorean JI ratio. For example, if the
comma shown above (81/80, known as the syntonic comma) is associated
with an accidental, then the 5/4 just quintal major third can be
represented by starting from an 81/64 Pythagorean major third and
lowering it by this accidental, while still keeping the pitch mostly the
same.

There is one particular property of the syntonic comma that
allows it to function in this way: its prime factorization. Here it is:

$$\frac{81}{80} = 2^{- 4}\ 3^{4}\ 5^{- 1}$$

This prime factorization only consists of a factor of 2, a
factor of 3, and a factor of exactly one other prime (5 in this case),
and this one other prime is raised to a power of either 1 or −1. The
combination of these properties, together with its small size, makes it
perfect for its use as a comma.

Here is another famous comma: 64/63, often used to represent
septimal ratios, i.e. those with a factor of seven. The most famous
septimal JI interval is the so-called harmonic seventh, 7/4. This is an
interval which is approximately a sixth-tone lower (about 31.17¢, to be
more precise) than a standard 12-EDO minor seventh. It can still be
recognized as a seventh, but in the ears of many musicians, it sounds
much mellower than a minor seventh and is often seen as a consonance,
not a dissonance – much like the golden third is also often seen as
more pleasant than the standard major third. Its characteristic sound
resembles everyday acoustic phenomena: metallic clanks, bells, train
horns. The interval between this harmonic seventh and the Pythagorean
minor seventh (16/9) is the so-called septimal comma or celestial comma,
whose value is 64/63. Due to the ambiguity of the term "septimal comma",
which can also potentially refer to other septimal commas of particular
importance, such as 49/48 or 1029/1024, I prefer the use of the term
"celestial comma" coined by Michael Harrison in his program notes to his
work *Revelation*.

Much like the syntonic comma, the celestial comma has a prime
factorization that makes it ideal to be used as a comma:

$$\frac{64}{63} = 2^{6}\ 3^{- 2}\ 7^{- 1}$$

It also has only factors of 2, 3, and one other prime: 7, which
is raised to a power of either 1 or −1.

Why these prime factorizations are ideal to use an interval as a
comma, together with small size, will be explained in the next section.

## A Curious Representation

This combination of properties is ideal for commas because it is
possible to convert any JI interval from its unique prime factorization
into a unique form where it is represented as a Pythagorean ratio
multiplied by a list of these commas raised to integer exponents, with
exactly one comma for every prime.

> **Theorem 5.** Any JI interval can be represented uniquely as a
> product of a Pythagorean interval and commas of the form
> $2^{a}\ 3^{b}\ p^{r}$ where $p$ is a prime greater than 3, $a,b$ are
> integers, and $r^{2} = 1$.

I will make use of a proof technique known as proof by
induction. I will prove the general statement by showing that it holds
for the base case, $p = 5$ in this example, and also by showing that if
it holds for some case, then this ensures that it also holds for the
next case. At its core, the proof is purely algebraic.

Let $C_{p} = 2^{a_{p}}\ 3^{b_{p}}\ p^{r_{p}}$ be an interval
chosen for the prime number $p$ with some particular integers
$a_{p},b_{p}$ and some particular $r_{p}$ such that
$\left( r_{p} \right)^{2} = 1$. Note that in this context, it need not
be small in size; it just needs to be an arbitrary, but known, interval.

For the base case, consider a known
$C_{5} = 2^{a_{5}}\ 3^{b_{5}}\ 5^{r_{5}}$ and a quintal JI interval with
a known unique prime factorization:
$d = 2^{x_{2}}\ 3^{x_{3}}\ 5^{x_{5}}$ where $x_{2},x_{3},x_{5}$ are
integers.

Since $r_{5}$ is either 1 or −1, $\frac{x_{5}}{r_{5}}$ will
certainly be an integer. (Note that it is not necessarily an integer if
$r_{5}$ is not 1 or −1.) Let's call that quotient $u_{5}$ and proceed:

$$d = 2^{x_{2}}\ 3^{x_{3}}\ 5^{x_{5}}$$

$$d = 2^{x_{2} + u_{5}a_{5} - u_{5}a_{5}}\ 3^{x_{3} + {u_{5}b}_{5} - {u_{5}b}_{5}}\ 5^{x_{5} + u_{5}r_{5} - u_{5}r_{5}}$$

$$d = 2^{x_{2} - u_{5}a_{5}}\ 2^{u_{5}a_{5}}\ 3^{x_{3} - u_{5}b_{5}}\ 3^{u_{5}b_{5}}\ 5^{x_{5} - u_{5}r_{5}}\ 5^{u_{5}r_{5}}$$

$$d = \left( 2^{a_{5}}\ 3^{b_{5}}\ 5^{r_{5}} \right)^{u_{5}}\  \times 2^{x_{2} - u_{5}a_{5}}\ 3^{x_{3} - u_{5}b_{5}}\ 5^{x_{5} - u_{5}r_{5}}$$

$$d = \left( C_{5} \right)^{u_{5}} \times 2^{x_{2} - u_{5}a_{5}}\ 3^{x_{3} - u_{5}b_{5}}\ 5^{x_{5} - u_{5}r_{5}}$$

But $x_{5} = u_{5}r_{5}$ so $x_{5} - u_{5}r_{5} = 0$ and
therefore the power of 5 outside the comma disappears. Finally we have:

$$d = 2^{x_{2} - u_{5}a_{5}}\ 3^{x_{3} - u_{5}b_{5}}\ \left( C_{5} \right)^{u_{5}}$$

This is a unique representation as a Pythagorean ratio, i.e. a
power of 2 and 3 raised to integer exponents, multiplied by the given
arbitrary quintal comma. The base case holds.

For the induction step, assume the statement is true for some
prime number $\operatorname{p}{(n)}$ so that we may show that this
ensures its truth for the next prime number,
$\operatorname{p}{(n + 1)}$.

Let $d$ be a JI interval with factors up to and including
$\operatorname{p}{(n + 1)}$. Therefore it can be uniquely factorized
into primes up to and including that prime:

$$d = \prod_{i = 1}^{n + 1}{\operatorname{p}{(i)}}^{x_{\operatorname{p}{(i)}}}$$

Here, the $x_{p}$ represent the integer exponents to which the
primes $\operatorname{p}{(i)}$ are raised. Split this product into two
parts:

$$d = \prod_{i = 1}^{n}{\operatorname{p}{(i)}}^{x_{\operatorname{p}{(i)}}} \times {\operatorname{p}{(n + 1)}}^{x_{\operatorname{p}{(n + 1)}}}$$

Due to our induction hypothesis, we may immediately represent
the term on the left with commas.

$$d = \left( 2^{f}\ 3^{g} \times \prod_{i = 3}^{n}\left( C_{\operatorname{p}{(i)}} \right)^{u_{\operatorname{p}{(i)}}} \right) \times {\operatorname{p}{(n + 1)}}^{x_{\operatorname{p}{(n + 1)}}}$$

Here, $f,g$ are arbitrary integers resulting from the
conversion into prime commas up to $\operatorname{p}{(n)}$.

Let's refer to the Pi notation product term as $\gamma$ for
convenience, and similarly, let's refer to $\operatorname{p}{(n + 1)}$
as $q$; then the statement above becomes

$$d = 2^{f}\ 3^{g} \times \gamma \times q^{x_{q}}$$

Also, let's assume that
$C_{q} = 2^{a_{q}}\ 3^{b_{q}}\ q^{r_{q}}$ is given and known. Since
$\left( r_{q} \right)^{2} = 1$, as before, $\frac{x_{q}}{r_{q}} = u_{q}$
is necessarily an integer, but this is not necessarily the case if
$\left( r_{q} \right)^{2} \neq 1$.

The algebra is essentially the same as before:

$$d = \gamma \times 2^{f}\ 3^{g}\ q^{x_{q}}$$

$$d = \gamma \times 2^{f + u_{q}a_{q} - u_{q}a_{q}}\ 3^{g + u_{q}b_{q} - u_{q}b_{q}}\ q^{x_{q} + u_{q}r_{q} - u_{q}r_{q}}$$

$$d = \gamma \times 2^{f - u_{q}a_{q}}\ 2^{u_{q}a_{q}}\ 3^{g - u_{q}b_{q}}\ 3^{u_{q}b_{q}}\ q^{x_{q} - u_{q}r_{q}}\ q^{u_{q}r_{q}}$$

$$d = \gamma \times \left( 2^{a_{q}}\ 3^{b_{q}}\ q^{r_{q}} \right)^{u_{q}} \times 2^{f - u_{q}a_{q}}\ 3^{g - u_{q}b_{q}}\ q^{x_{q} - u_{q}r_{q}}$$

$$d = \gamma \times \left( C_{q} \right)^{u_{q}} \times 2^{f - u_{q}a_{q}}\ 3^{g - u_{q}b_{q}}\ q^{x_{q} - u_{q}r_{q}}$$

As before, $x_{q} - u_{q}r_{q} = 0$ and so the power of $q$
outside the comma disappears again. Converting back into Pi notation:

$$d = \gamma \times \left( C_{q} \right)^{u_{q}} \times 2^{f - u_{q}a_{q}}\ 3^{g - u_{q}b_{q}}$$

$$d = 2^{f - u_{q}a_{q}}\ 3^{g - u_{q}b_{q}} \times \prod_{i = 3}^{n}\left( C_{\operatorname{p}{(i)}} \right)^{u_{\operatorname{p}{(i)}}} \times \left( C_{q} \right)^{u_{q}}$$

Finally, since $q = \operatorname{p}{(n + 1)}$, we can join the
final term into the Pi notation product:

$$d = 2^{f - u_{q}a_{q}}\ 3^{g - u_{q}b_{q}} \times \prod_{i = 3}^{n + 1}\left( C_{\operatorname{p}{(i)}} \right)^{u_{\operatorname{p}{(i)}}}$$

This is a unique representation of a JI interval with factors
up to $\operatorname{p}{(n + 1)}$ in terms of the factors up to
$\operatorname{p}{(n)}$. The induction step holds.

As the statement has also been proven for the base case
$\operatorname{p}{(n)} = 5$, it also holds for all the prime numbers
greater than 3 by the principle of mathematical induction. ∎

## Comma Scavenger Hunt

The theorem proven above is of profound importance to our
construction of a JI notation system. Any JI interval can be rewritten
as a Pythagorean interval shifted by particular intervals for each prime
number greater than 3, as long as each of these particular intervals
only consists of a factor of 2, 3, and one other prime raised to either
1 or −1. Since we already know that Pythagorean tuning directly
corresponds to traditional staff notation, what remains to be done is to
find such particular intervals for every prime greater than 3 and assign
accidentals to them, and we are done!

Here is where the word "comma" comes into play. While the
theorem above holds for any interval of the specific required form, it
is useful if this interval is also small. That way, these microtonal
accidentals will not create a meaningful difference in pitch, but can
nevertheless be used to accurately represent JI intervals.

Note the requirement. A trivial way of choosing these
"particular intervals" mentioned before would be to simply choose the
intervals 5/4, 7/4, 11/8, 13/8, 17/16, etc. – which is the
octave-reduced version of each prime. However, such a system would be
very bad at representing JI: for instance, the golden third would be
represented as a unison plus the 5/4 accidental. It gives us no
awareness of where the golden third is located in terms of pitch (i.e.
it does not represent the fact that it is a type of major third), and as
a result, the notes represented are very strange. One of the most iconic
JI chords, 4:5:6, the major triad, would be represented as "C, C + 5/4,
G", which gives someone unfamiliar with JI no understanding that this is
close to "C, E, G".

On the other side of the spectrum, we can get arbitrarily close
to any just interval with only Pythagorean tuning. Beyond the
Pythagorean diminished second, which is the octave-reduced version of
the number $3^{12}$ and has a cent size of approximately 23.46¢, there
exist many much smaller Pythagorean intervals:

-   The 41-comma, the octave-reduced version of $3^{41}$, is
    approximately 19.85¢. It equals
    36893488147419103232/36472996377170786403.

-   The 53-comma, the octave-reduced version of $3^{53}$, is only
    approximately 3.62¢. It equals
    19383245667680019896796723/19342813113834066795298816.

Even smaller Pythagorean intervals, of ratios much too large to
write here, include the 306-comma, the 665-comma, the 15601-comma, and
the 31867-comma, of which the last measures only approximately 0.0126¢
to 3 significant figures.

Of course, stacking these intervals would provide an
approximation of any just interval beyond any accuracy that could ever
be required or desired. However, it would be extremely impractical: the
31867-comma is written as a major sixth with 4552 sharps (2276
double-sharp symbols)! Even the 53-comma, which still has reasonable
complexity, is written as a major third with 7 sharps. Another example
is that the golden third could be approximated very well (to within one
schisma, 32805/32768, approximately 1.95¢) with the Pythagorean
diminished fourth. But to think of the JI major triad, 4:5:6, as the
notes C-F♭-G is strange and unnatural. It is clear that a compromise
must be found.

## Preliminary Definitions: An Excursion

Before proceeding with the core of this article, which is the
formal description of the FJS – the notation system that I invented to
accurately represent JI as an extension of staff notation – I will need
to define a few terms.

The *reduced form* of an interval, with respect to some
parameter $k$, is equal to that interval, but octave-reduced until it is
between $2^{k}$ (inclusive) and $2^{k + 1}$ (exclusive). In particular,
the reduced form of an interval with respect to 0 is equal to that
interval, but octave-reduced until it is between the unison (inclusive)
and the octave (exclusive). This renders intervals such as the golden
third 5/4, golden tenth 5/2, and golden seventeenth 5/1, equivalent, or
the JI fifth 3/2 and the JI twelfth 3/1. The mathematical definition is
as follows:

$$\operatorname{}{(d)} = d \times 2^{k - \left\lfloor \operatorname{}d \right\rfloor}$$

Here $\left\lfloor x \right\rfloor$ is the floor function, which
returns the greatest integer not greater than its input.

The *shuffle function* is used to create a bijective mapping
between the natural numbers and the integers. That way, every point on
the Pythagorean spiral of fifths can be numbered in a countable list
("countable" in the Cantor set theory sense). There are two versions, a
positive and a negative shuffle function. One is the additive inverse of
the other. The positive version is defined recursively as follows:

$$\operatorname{shp}{(n)}:\left\{ \begin{matrix}
\operatorname{shp}{(0)} = 0 \\
\operatorname{shp}\left( n + 1 \right) = - \operatorname{shp}\left( n \right) + 1;n\ \mathrm{\text{even}} \\
\operatorname{shp}{(n + 1)} = - \operatorname{shp}\left( n \right);n\ \mathrm{\text{odd}} \\
\end{matrix} \right.\ $$

The negative shuffle function $\operatorname{shn}{(n)}$ can be
described in an analogical way by using $- 1$ instead of $+ 1$ in the
formula when $n$ is even. Alternatively, it is simply the additive
inverse of the positive shuffle function for the same value.

This means that the values of the positive shuffle function for
the ascending natural numbers $n = 0,1,2,3,4,5,6\ldots$ are
$0, + 1, - 1, + 2, - 2, + 3, - 3\ldots$ and those of the negative
shuffle function would be $0, - 1, + 1, - 2, + 2, - 3, + 3\ldots$

Both the positive and the negative shuffle functions can also be
computed directly. Below is the formula for the positive shuffle
function:

$$\operatorname{shp}{(n)} = \left\{ \begin{matrix}
 - \frac{n}{2};n\ \mathrm{\text{even}} \\
\frac{(n + 1)}{2};n\ \mathrm{\text{odd}} \\
\end{matrix} \right.\ $$

Again, the negative shuffle function is simply its additive
inverse.

The final term that needs to be defined preliminarily is the
radius of tolerance, which I will represent with the symbol $\lambda$.
The radius of tolerance is the maximum possible ratio of an interval
which can be used as a "comma" – i.e. an interval used in the alternate
representation of a JI ratio, which will ultimately be mapped to an
accidental. I have devised at least two different versions of the FJS
with two different values of $\lambda$.

My preferred choice for $\lambda$ is 256/243 (which I will call
$L$), the ratio of the Pythagorean diatonic semitone. That way, if ↑
represents an arbitrary upward FJS accidental, and ↓ an arbitrary (the
same or different) downward accidental, we can be certain that

E↑ is lower than F;\
E is lower than F↓.

Another possible choice is the square root of the above;
$\sqrt{\frac{256}{243}} = \frac{16\sqrt{3}}{27} = l$. This way, we can
be further certain that

E↑ is lower than F↓.

In the description used here, I will include both FJS systems
generated by each of these values of the radius of tolerance. I prefer
256/243, because this choice generates much better intervals for the
representation of 11 and 13, while being worse at representing 23, 31
and 37. In other words, I prefer the accuracy of lower primes over
higher ones. (Both of these values return the same representations for
the first two primes greater than 3, which are 5 and 7. They also return
the same representations for 17 and 19.)

There are some additional radii of tolerance that I have also
considered. I conjecture that $\sqrt{\frac{33}{31}}$ is an interesting
and potentially highly useful (maybe even optimal) choice, since it
should give the optimal representations (P4, M6, A4, and M7
respectively) for 11, 13, 23, and 31. This is because this number is the
geometric mean of 33/32 and 32/31, and so it will accept the former as a
small enough comma, but the latter will be rejected as too large. The
12-EDO semitone or the 50-cent quarter tone might also be useful radii
of tolerance, giving a more useful frame of reference as opposed to the
Pythagorean diatonic semitone or its equal division into two. I
encourage tuning theorists experimenting with the FJS to investigate
behaviors of further radii of tolerance.

## The Description of the FJS

01 **LET** $k = - 1$

02 **DO {**

03 $k + = 1$

04
$g = \operatorname{}\left( p \times 3^{\operatorname{shn}{(k)}} \right)$

05
$h = \operatorname{}\left( p \times 3^{\operatorname{shn}{(k)}} \right)$

06
$I = \left( \left( \ln g \right)^{2} < \left( \ln\lambda \right)^{2} \right)$

07
$J = \left( \left( \ln h \right)^{2} < \left( \ln\lambda \right)^{2} \right)$

08 **} UNTIL** $(I \vee J)$

09 **RETURN** $\operatorname{gen}{(p)} = - \operatorname{shn}{(k)}$

10 **IF** $I$ **THEN {**

11 **RETURN** $\operatorname{pol}{(p)} = 1$

12 **RETURN** $\operatorname{comma}{(p)} = g$

13 **}**

14 **IF** $J$ **THEN {**

15 **RETURN** $\operatorname{pol}{(p)} = - 1$

16 **RETURN** $\operatorname{comma}{(p)} = h$

17 **}**

18 **END**

[]{#_Toc5182876 .anchor}**Algorithm** **1. The FJS algorithm**

What I depicted above has been the FJS algorithm, the core of
the FJS. It provides a deterministic way of finding every element of the
FJS, as described below.

As mentioned, the FJS takes any prime number greater than 3 and
finds a corresponding comma which can be used to represent it in the
alternate commatic representation. To do this, it "scans" the
Pythagorean spiral of fifths, looking for the simplest Pythagorean
interval which is close enough – within less than $\lambda$ – of the
target octave-reduced prime interval. Now we can formally define the
term "comma" instead of using it in an ambiguous and qualitative way:
**A comma is an interval used as an accidental in the FJS.**

This is why I was hesitant earlier to call the Pythagorean
diminished second a comma. It is not used as an accidental; C and B♯ are
distinct pitches due to the exact bijection that exists between staff
notation and Pythagorean tuning. While sometimes it is useful to shift
by a Pythagorean diminished second, it has no FJS accidental.

What I have shown on the previous page has been the algorithm
used to determine the interval in question, for any prime number $p$
greater than 3 and any radius of tolerance $\lambda$. I have chosen to
use *shn* in lines 4, 5, and 9, but a nearly equivalent algorithm may
exist with *shn* changed to *shp* (everywhere consistently, not in free
variation). Most outputs would be the same. The difference will be
described in detail below, as part of a full explanation of the
algorithm.

The algorithm may seem confusing as written (in universal
pseudocode), but all that it really is doing is "scanning" through the
Pythagorean spiral of fifths to find the simplest interval (in terms of
the number of fifths and/or fourths required to construct it) which is
sufficiently close to the target interval, closer than the radius of
tolerance, close enough that the difference between the two can be
converted into an accidental of the required form to represent any JI
interval using that accidental. **Appendix 1** shows this algorithm
written in the programming language C++.

This algorithm returns three functions:
$\operatorname{gen}{(p)}$, $\operatorname{pol}{(p)}$ and
$\operatorname{comma}{(p)}$, in that order. All three are necessary to
describe an FJS accidental.

The *gen* function is the "generator interval" function. It
returns the number of fifths (equivalently, the additive inverse of the
number of fourths) required to be added together to create the located
Pythagorean interval that is "close enough". In other words, it
describes the interval class of both the Pythagorean approximation and
the target interval.

The *pol* function is the "polarity" function. It returns
information about whether or not the comma that was found is positive or
negative. The simplest definition is that *pol* is the signum of the
cent size of the comma. This means that if the located Pythagorean
interval must be lowered to reach the target interval, *pol* is equal to
−1, otherwise it is equal to +1.

Finally, the *comma* function returns the interval which must be
added to the located Pythagorean interval to obtain the target interval.

**Table 2** lists values of *gen*, *pol*, and *comma* for
$\lambda = \frac{256}{243}$ for primes greater than 3, up to and
including 31.

| **p**   | **Target**   | **Pythagorean Approx.**   | **gen**   | **pol**   | **comma**   | 
| ------- | ------------ | ------------------------- | --------- | --------- | ----------- | 
| 5       | 5/4          | 81/64                     | +4 (M3)   | −         | 80/81       |  
| 7       | 7/4          | 16/9                      | −2 (m7)   | −         | 63/64       |
| 11      | 11/8         | 4/3                       | −1 (P4)   | \+        | 33/32       |
| 13      | 13/8         | 27/16                     | +3 (M6)   | −         | 26/27       |
| 17      | 17/16        | 256/243                   | −5 (m2)   | \+        | 4131/4096   |
| 19      | 19/16        | 32/27                     | −3 (m3)   | \+        | 513/512     |  
| 23      | 23/16        | 3/2                       | +1 (P5)   | −         | 23/24       | 
| 29      | 29/16        | 16/9                      | −2 (m7)   | \+        | 261/256     | 
| 31      | 31/16        | 2/1                       | 0 (P8)    | −         | 31/32       | 

[]{#_Toc5207166 .anchor}**Table** **2. The values of gen, pol, and comma
for a tolerance of L**

It may perhaps not at all be obvious that the algorithm will
always halt, but it will. Furthermore, for a value of $\lambda$ as large
as 256/243, the algorithm will halt quite fast; the maximum number of
iterations of the main loop is 12. This corresponds to a maximum range
of outputs of the *gen* function from −6 to +6. In fact, depending on
the choice of either *shn* or *shp*, the range will be either from −5 to
+6 or from −6 to +5, respectively. This corresponds very neatly to
12-EDO, actually; with a tolerance of 256/243, every prime interval is
sufficiently close to exactly one of the following Pythagorean
intervals: P1, m2, M2, m3, M3, P4, (A4 or d5), P5, m6, M6, m7, M7; where
the choice of A4 or d5 corresponds on the choice of *shn* or *shp*
respectively. In the algorithm above, *shn* was chosen to prioritize the
augmented fourth (+6) over the diminished fifth (−6) for the sake of
convenience.

> **Theorem 6.** For a tolerance of 256/243, the FJS algorithm will halt
> after a maximum of 12 steps.

The proof is very straightforward. In order to ensure that the
FJS algorithm will halt after a given number of steps, let's take a look
at the octave filled with Pythagorean intervals. Let those intervals
correspond to a number of fifths which is equal to every output of *shn*
or *shp* up to and including the given number of steps. In our case, the
radius of tolerance is 256/243, meaning that all gaps between
consecutive intervals must be strictly less than
$\left( \frac{256}{243} \right)^{2} \approx 180.45¢$, which is the
Pythagorean diminished third. Note that the strong whole tone, i.e. the
Pythagorean major second, 9/8, approximately 203.91¢, is greater than
the diminished third, too large. However, the chromatic semitone,
2187/2048, is small enough: approximately 113.69¢.

Here is the result of iterating the main loop 11 times, either
with *shn* or *shp*:

|      | m2   | M2   | m3   | M3   | P4   | P5   | m6   | M6   | m7   | M7   | 
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | 
| m2   | A1   | m2   | A1   | m2   | M2   | m2   | A1   | m2   | A1   | m2   | 

[]{#_Toc5207167 .anchor}**Table** **3. The Pythagorean scale with 11
intervals**

The top row represents intervals above the tonic, while the
bottom row represents intervals between consecutive scale degrees. All
these intervals are small enough (either minor seconds or augmented
primes, i.e. diatonic or chromatic semitones, respectively) except for
the interval between the fourth and the fifth, which is a major second,
which is too large. However, at the 12^th^ iteration, either an
augmented fourth (if *shn* was chosen) or a diminished fifth (if *shp*)
will be added. Either one of them will divide this major second into a
diatonic and chromatic semitone, which are small enough. Therefore, 12
iterations are enough, and the range of the function is one of the
following:

$$\bigcup_{i = 0}^{12}\left\{ \operatorname{shp}{(i)} \right\} = \left\lbrack - 5,\ 6 \right\rbrack,\ \mathrm{\text{if\ shn\ was\ chosen}}$$

$$\bigcup_{i = 0}^{12}\left\{ \operatorname{shn}{(i)} \right\} = \left\lbrack - 6,\ 5 \right\rbrack,\ \mathrm{\text{if\ shp\ was\ chosen}}$$

The situation is very similar to my second preferred choice of
the radius of tolerance, which is $\sqrt{\frac{256}{243}}$. In this
case, all gaps between consecutive intervals must be strictly less than
256/243; but in this case, they can also be exactly equal to 256/243,
since the radius of tolerance is not a just interval (its simplest form
involves a factor of $\sqrt{3}$, making it irrational). 256/243 is the
Pythagorean minor second; the chromatic semitone or augmented prime is
slightly greater, but the diminished second or Pythagorean "comma" is
small enough. In this case, 17 iterations with either function is the
minimum required to fill the scale (implying that the range of the *gen*
function is always −8 to +8), and the result is symmetrical, the same
whether *shn* or *shp* was chosen, corresponding to the 17-EDO chromatic
scale:

P1-m2-A1-M2-m3-d4-M3-P4-d5-A4-P5-m6-A5-M6-m7-d8-M7-P8.

|      | m2   | A1   | M2   | m3   | d4   | M3   | P4   | d5   | A4   | P5   | m6   | A5   | M6   | m7   | d8   | M7   |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| m2   | d2   | m2   | m2   | m2   | d2   | m2   | m2   | d2   | m2   | m2   | d2   | m2   | m2   | m2   | d2   | m2   |

[]{#_Toc5207168 .anchor}**Table** **4. The Pythagorean scale with 17
intervals**

For comparison, below is the table of values of the *gen*,
*pol*, and *comma* function for a radius of tolerance of
$\sqrt{\frac{256}{243}}$.

| **p**   | **Target**   | **Pythagorean | Approx.**   | **gen**   | **pol**   | **comma**   |
| ------- | ------------ | --------------| ----------- | --------- | --------- | ----------- |
| 5       | 5/4          | 81/64         |             | +4 (M3)   | −         | 80/81       |
| 7       | 7/4          | 16/9          |             | −2 (m7)   | −         | 63/64       |
| 11      | 11/8         | 1024/729      |             | −6 (d5)   | −         | 8019/8192   |
| 13      | 13/8         | 6561/4096     |             | +8 (A5)   | \+        | 6656/6561   |
| 17      | 17/16        | 256/243       |             | −5 (m2)   | \+        | 4131/4096   |
| 19      | 19/16        | 32/27         |             | −3 (m3)   | \+        | 513/512     |
| 23      | 23/16        | 729/512       |             | +6 (A4)   | \+        | 736/729     |
| 29      | 29/16        | 16/9          |             | −2 (m7)   | \+        | 261/256     |
| 31      | 31/16        | 243/128       |             | +5 (M7)   | \+        | 248/243     | 

[]{#_Toc5207169 .anchor}**Table** **5. The values of gen, pol, and comma
for a tolerance of l**

Luckily, the values are the same for 5 and 7. They also
coincide for 17, 19, and 29. However, 23 and 31 – being, respectively,
a "supertritone" and "supermajor seventh", are approximated better with
this choice, as an augmented fourth and major seventh respectively,
rather than the perfect fifth and octave. On the other hand, the smaller
primes 11 and 13 are approximated so badly that it couldn't possibly be
worse: the 11^th^ harmonic, being almost halfway between the 12-EDO
perfect fourth and tritone, is certainly perceived as a fourth. Yet both
the Pythagorean perfect fourth and its augmented fourth are too far, and
the simplest interval close enough is the Pythagorean diminished fifth.
For the 13^th^ harmonic it is even worse. As with the 11^th^, this
harmonic is almost halfway between the 12-EDO minor and major sixths. In
any case, it is perceived as a sixth. However, again, both the major and
minor sixth of Pythagorean tuning are too far, and the simplest interval
close enough is the Pythagorean augmented fifth, which is not only the
"wrong" interval class, but also is the most complex interval that could
possibly be the output of the *gen* function, being made from 8 perfect
fifths!

For now, I propose 256/243 for the radius of tolerance. While
some further harmonics such as 23 and 31 are approximated in a strange
way, 11 and 13 are represented much better. Even though most musicians
familiar with JI would hear the thirty-first harmonic as a supermajor
seventh, I am certain nobody would perceive the 11^th^ as a diminished
fifth and the 13^th^ as an augmented one. I will give reasons why I
dismiss the idea of mixing approximations from both radii later in this
article. **Appendix 2** gives outputs of the FJS algorithm for both
radii up to and including 127, the greatest prime less than
$128 = 2^{7}$. This gives FJS commas for the first seven octaves of the
harmonic series. One should keep in mind, however, that the FJS is
procedurally generated and therefore exists in infinitely many octaves.
∎

Before moving on to a description of how to use these intervals
to actually notate music using the FJS, I should point out one more
detail. Only the knowledge of the *gen* function or the *comma* function
at a particular prime is required to find out the corresponding values
of all three functions at that prime easily. Finding the *pol* function
is extremely easy; if the *comma* is less than 1, *pol* is −1; if the
*comma* is greater than 1, *pol* is +1. The other two conversions are a
little more complicated. They are described in detail below; they can
also be rendered as algorithms and automated if need be. Both of these
conversions are independent of the size of $\lambda$.

To find the *comma* function from the *gen* function:

-   Raise 3 to the power of the *gen* function.

-   Divide that by 2 until the result is between 1 and 2.

-   You have just obtained the Pythagorean approximation for the given
    prime.

-   Divide the prime itself (octave-reduced until between 1 and 2) by
    the Pythagorean approximation you just obtained.

-   You have just obtained the *comma* function for that prime.

Example: Given $p = 5,\operatorname{gen}{(p)} = 4$ we take
$3^{4} = 81$ and octave-reduce this number to obtain
$2^{- 6}\ 3^{4} = \frac{81}{64}$. This is the Pythagorean approximation
to octave-reduced 5, which is $\frac{5}{4}$. So the *comma* function for
5 is $\frac{(\frac{5}{4})}{(\frac{81}{64})} = \frac{80}{81}$.

To find the *gen* function from the *comma* function:

-   Prime-factorize the *comma*.

-   It should contain a factor of 2, a factor of 3, and a single factor
    of the given prime raised to the power +1 (not −1). Otherwise, it is
    not a correct output of the *comma* function. The negative exponent
    to which 3 is raised is the *gen* function of that prime.

Example: Given
$p = 7,\operatorname{comma}{(p)} = \frac{63}{64}$ we factorize
$\frac{63}{64} = 2^{- 6}\ 3^{2}\ 7^{1}$ and since the power of 7 is +1,
the input is valid. The power of 3 is +2, hence the *gen* function for 7
is its additive inverse, or −2.

## FJS in Naming

This has been a formal description of how the interval "bridges"
are formed, the bridges between Pythagorean tuning and the rest of the
entirety of JI. I will now discuss how these bridges will be used for
the two main purposes of the FJS:

1.  To name notes and intervals in JI.

2.  To notate JI music.

The first of these two is significantly easier to accomplish and
is a foundation for the second. Therefore, I will begin by describing
the first.

By the theorem I have proven above by induction, any JI interval
in its ordinary (prime factorized) form can be rewritten as a
Pythagorean interval added to a list of "commas", under the condition
that these "commas" are themselves of the form of a Pythagorean interval
multiplied by exactly one prime to the power of +1 or −1. These "commas"
can be of any size.

Compare this to the intervals (outputs of the comma function)
that we have found using the FJS algorithm. Since the FJS algorithm was
designed to approximate an octave-reduced prime interval with a
Pythagorean interval, this means that the corresponding output of the
comma function, which outputs the difference between the two intervals,
will necessarily be a Pythagorean interval multiplied by a single prime
raised to the power of +1.

One small adjustment needs to be made before we continue: some
of these commas are "negative", meaning that the numerator is less than
the denominator, e.g. 80/81 and 63/64 (as opposed to e.g. 513/512),
because their corresponding polarity function is negative. This is
because the FJS algorithm looks for good approximations from both sides.
(It accomplishes this by taking the natural logarithm and squaring it to
remove the negative sign.) If we take the reciprocal of the negative
commas, then we obtain an interval where the prime is raised to the
power of −1, giving us the other possible case of the theorem.

It is notable that while in the initial first version of the
FJS, I forced all the commas positive (e.g. changing 80/81 to 81/80),
with usage I have come to the clear conclusion that it is a better
choice to keep the commas positive or negative as they are originally
found by the algorithm. I will explain what this change means in more
detail below.

The algorithm, as mentioned, has returned intervals of an
appropriate form to be used to rewrite JI intervals. In addition, the
algorithm has also returned intervals that are sufficiently small to not
cause huge deviations in pitch (smaller than the radius of tolerance,
256/243 in this case). Furthermore, it has returned the *simplest* such
intervals (in terms of number of steps on the spiral of fifths) which
accomplish both of these tasks. Therefore, these intervals are ideal to
be used as "commas" with which we can describe JI intervals in a way
that prevents large loss of information about pitch.

Therefore, at this point, the intervals found by the FJS
algorithm will be assigned to accidentals. This is an infinite list of
accidentals generated procedurally. For every prime number, there exists
a corresponding simplest Pythagorean approximation for any arbitrarily
small radius of tolerance. The time that my algorithm takes to find this
approximation is not correlated with the size of this prime number; it
only depends on the radius of tolerance. However, at this point, I am
unable to say whether the algorithm halts in polynomial time with
respect to the reciprocal of the radius of tolerance, or whether it
takes more time. As I mentioned, the choice of 256/243, and even its
square root, both make the algorithm halt very quickly, and there are no
computational problems.

This means that, unlike in JI notation systems which manually
assign values of accidentals to notate JI intervals, there is a huge
difference that comes with using the FJS: these accidentals need not be
known. All that must be known is an algorithm and a radius of tolerance,
and the correct accidental value can be found for every prime (of which
there are infinitely many). This way, not only does the FJS manage to
assign an accidental to infinitely many primes, but also, it makes it
redundant to have a lookup table to retrieve their values; they can be
found computationally. This change potentially makes the FJS much easier
to use in computer notation software, since all it requires is an
implementation of the FJS algorithm.

Below are the rules I have devised for the creation of
accidentals from the commas found by the FJS algorithm.

1.  By default, the FJS uses Pythagorean tuning for traditional staff
    notation. So the interval C-E is 81/64, the interval C-D♭ is
    256/243, the interval D♭-C♯ is 531441/524288, etc.

2.  A single comma of the prime $p$ (greater than 3) will use the
    appended number "p" (preferably as a superscript) to represent a
    deviation by that comma **in its original direction**. E.g. E^5^ is
    an interval of 81/80 [below]{.underline} E; F^11^ is an interval of
    33/32 [above]{.underline} F. These note names are pronounced with
    the number appended: "E-five", "F-eleven". I do not expect them to
    cause confusion with chord symbols, since it is often clear from
    context whether a single note or a chord is meant. Note that the
    original direction is preserved, meaning that the direction of
    change depends on the polarity. The reason for this will be
    explained later.

3.  A single comma of the prime $p$ will use the appended number "p" as
    a subscript to represent a deviation by that comma **in the opposite
    of its original direction**. E.g. E♭~5~ is an interval of 81/80
    [above]{.underline} E♭; E~19~ is an interval of 513/512
    [below]{.underline} E. These are pronounced with the number
    appended, but with a "sub" infix inserted in between:
    "E-flat-sub-five", "E-sub-nineteen".

4.  To represent combinations of movements by commas *in the same
    direction* (either positive or negative), multiply the numbers that
    the original commas would contain (rather than add them). This is
    because these numbers are primes. Positive integers cannot be
    uniquely written as a sum of primes, but due to the Fundamental
    Theorem of Arithmetic, they can be written uniquely as a product of
    primes. Therefore, from the final product, we can always uniquely
    deduce which primes were multiplied. Order does not matter. E.g.
    G♯^25^ is two 81/80 intervals below G♯ and there is no other
    interpretation, since $25 = 5 \times 5$ and no other prime
    decomposition exists.

5.  Usually the product allows the deduction of the prime factorization
    immediately at first sight. Some of the most frequent products are
    all recognizable: 25, 35, 49, 125, 625, 343, 55, 77, 65, 121 are all
    familiar. If it is completely unclear at first sight what a number
    factorizes to, e.g. $119 = 7 \times 17$, an alternative notation can
    be used where all factors are listed, separated with full stops. The
    example from above could alternatively be written as G♯^5.5^ and
    both notations are equally correct. If commas are listed out
    individually, it is preferred to list them in non-descending order,
    so D^119^ is D^7.17^ rather than D^17.7^.

6.  Products of positive and negative commas are independent. They are
    preferably written as a combined subscript and superscript, e.g.
    $F_{5}^{7}$ represents F lowered by 64/63 and then raised by 81/80
    (or in the opposite order; first raised by 81/80 and then lowered by
    64/63; the result is the same). Where such notation is unavailable,
    the positive shift prepends the negative shift, e.g. F^7^~5~
    represents the same note as before. Note that the products used to
    represent positive and negative commas will always be coprime,
    otherwise there is an unnecessary shift in one direction that is
    canceled out in the other one; $\mathrm{*C}_{5}^{35}$ is the same
    note as C^7^.

7.  The number 1 represents canceling any microtonal commas, similar to
    the natural sign used to cancel standard accidentals. It can be
    written either in a superscript or a subscript. For example, the
    sequence C – D – E^5^ – E^1^ (or simply C – D – E^5^ – E)
    represents the intervals 1/1, 9/8, 5/4, 81/64 above C. In previous
    FJS versions, the number 0 used to have this function; I changed it
    because the number 0 might be potentially confused for a white dot,
    a different symbol used in the FJS.

This is the standard ruleset used to describe the naming of
standalone notes in the FJS. I have revised this ruleset several times
since the first conception of the FJS, and I believe the current version
to be optimal for usage in musical notation.

One of the greatest controversies that may perhaps arise is my
decision to maintain a comma's original direction as returned by the
comma function. The reason I have decided to do this, rather than force
all commas positive, is because with this system, a positive comma will
always add one positive factor of its prime to the interval in question,
while a negative comma will always add one negative factor. For
instance, E is 81/64 above C, while E^5^ is 5/4. Because the comma is in
a superscript, it indicates that a factor of 5 will be added to the
numerator, which is indeed correct. The same notes, but above D, are
respectively 9/8 and 10/9. Again, the positive comma adds a factor of 5
to the numerator. The same applies to all of the infinitely many commas
generated by the FJS algorithm.

This change reflects the way in which this system intends to be
different from alternative systems used to notate JI: it focuses on
preserving *function*, while notating pitch only approximately. This is
seen even in the name of the system: the Functional Just System. (Pitch
is only notated correctly to the point that all harmonic intervals are
within the radius of tolerance away from their true values.) To
musicians more familiar with JI, this notation will certainly seem much
more intuitive than a notation with all commas set to positive. It also
makes writing in the FJS much easier. Finding a note name from a simple
ratio is easier because the polarity of a prime need not be known. For
example, the harmonic series as a musical scale is extremely easy to
notate: all microtonal accidentals are positive. Below are the first 16
partials of the harmonic series notated in the FJS. Behold its
simplicity:

C, C, G, C, E^5^, G, B♭^7^, C, D, E^5^, F^11^, G, A^13^, B♭^7^, B^5^, C.

Quintal major and minor diatonic scales require the use of
positive 5 and negative 5 accidentals respectively. If all commas were
forced positive, then these two usages would be swapped, which is quite
counterintuitive. In general, anything that makes use of intervals from
the overtone series will use positive accidentals, and anything that
makes use of the undertone series will use negative accidentals.

Due to a difference between "positive/negative" and
"upward/downward" accidentals, these two terms are distinct and refer,
respectively, to actual function of an accidental in a note (C^5^ being
positive, C~5~ being negative) and to the pitch bend that it causes
(C^5^ being downward, C~5~ being upward). If "positive" and "upward"
correspond to +1, while "negative" and "downward" to −1, then the
product of these two, for any prime accidental, is always the polarity
of that prime. This means that positive is upward (and negative is
downward) if and only if the polarity is +1, otherwise they are swapped.

Because microtonal accidentals use superscripts and subscripts,
they can be combined with scientific pitch notation (prepended) to
notate octaves: C3 – E5^5^ is an interval of 5/1. It looks a little
strange, but is unambiguous. German octave notation can also be used: c
– eʺ^5^ is the same 5/1 interval. Where superscripts and subscripts are
unavailable (e.g. in ASCII), a superscript can be marked with +, and a
subscript with −. Then, the note $F_{5}^{7}$ becomes F+7−5, and the same
note in the fourth octave (${\mathrm{F}4}_{5}^{7}$) becomes F4+7−5.
Where it is understood from context that the first number following a
Pythagorean note name refers to a microtonal accidental and not an
octave, the + sign can even be omitted, so F7 can mean F^7^, and as in
common practice, the underscore sign \_ can be used to represent the
subscript, so F7\_5 can also mean $\mathrm{F}_{5}^{7}$ where it is
unambiguous that it does not instead refer to F7~5~.

To sum up, notating a JI note with the FJS requires the
following steps in this order:

-   Diatonic note name (C, D, E, F, G, A, or B)

-   Pythagorean accidental (either ♮ or a choice of ♭, ♯, or a multiple
    of these two)

-   Optional octave number

-   Product of all positive comma shifts

-   Product of all negative comma shifts

A very similar process can be used to notate intervals.
Positive and negative comma shifts are appended according to the rules
listed above to interval class names. For example, the interval 5/4 can
be written as M3^5^ or M3+5 (read "major-third-five"):

-   Interval type (either P, M, m or a choice of A, d, or a multiple of
    these two)

-   Interval size

-   Product of all positive comma shifts

-   Product of all negative comma shifts

Naming individual notes and intervals is therefore covered. The
entirety of JI can now be named using a regular, infinitely extendable
system.

I will additionally describe how to translate from interval
ratios to FJS interval names and note names, and back. The process of
doing so is entirely deterministic and can be automated. It is easiest
to translate from interval ratios to note names through FJS interval
names. Both of these processes, in both directions, are described below.
With practice, it becomes increasingly easy to do all these conversions,
and it is much easier to learn than what some alternative JI notation
systems have to offer.

To determine the FJS interval name between two FJS notes:

-   First, apply the same shifts to both notes, canceling out shifts as
    necessary, until the lower note has no FJS accidentals.

-   Determine the Pythagorean interval between their Pythagorean parts.

-   To this Pythagorean interval, add the FJS accidentals remaining on
    the higher note.

Example: One of the more iconic harmonies of *The Well-Tuned
Piano* is known as the shimmering minor third. Its ratio is 147/128, and
this interval is notated in the FJS as D~7~-F^7^. We apply +7 to both
notes: $D_{7}^{7}\mathrm{-}\mathrm{F}^{49}$ and we cancel the 7s:
D-F^49^. Now we have no FJS accidentals on the lower note, so the
interval is a m3^49^ (minor third forty-nine).

To build an FJS interval from an FJS note:

-   First, build the Pythagorean interval.

-   Then, apply the FJS accidentals of the interval, canceling as
    necessary.

Example: The interval ${M2}_{13}^{5}$ is very close to dividing
the perfect fourth in two. To find this interval from A^13^, we first
build the major second: B^13^, then we apply the remaining accidentals:
$\mathrm{B}_{13}^{5.13}$ and cancel the 13s: B^5^. It was simpler in
this case to leave 5 and 13 as distinct factors, so that it is easier to
see what can later be canceled to simplify the microtonal factors.

To find a ratio from an FJS interval:

-   First, find the ratio of the Pythagorean interval. This is easy:
    simply determine the number of fifths from which the Pythagorean
    interval is constructed (positive if clockwise around the spiral of
    fifths, negative otherwise), raise 3 to that power, and
    octave-reduce.

-   Then apply the accidentals.

Example: An interval known as the *lesser septimal tritone* is
called ${\mathrm{d}5}_{5}^{7}$ in the FJS. To determine its ratio, start
with d5. It is made from 6 fifths in the negative direction, so its
ratio is the octave-reduced form of $3^{- 6}$ which is
$2^{10}\ 3^{- 6} = \frac{1024}{729}$. Now we apply the accidentals to
this ratio. +7 means multiply by
$\operatorname{comma}{(7)} = \frac{63}{64}$ and −5 means divide by
$\operatorname{comma}{(5)} = \frac{80}{81}$. Therefore we have
$\frac{1024}{729} \times \frac{63}{64} \div \frac{80}{81} = \frac{7}{5}$
and so the ratio is 7/5.

To find an FJS interval from the ratio:

-   Factorize the ratio.

-   Now, express the ratio in the form of a Pythagorean interval
    multiplied by commas. To do this, for every prime in the ratio that
    is not 2 or 3 raised to some exponent, multiply by the comma of that
    prime raised to the negated exponent.

-   The FJS interval class can be found by factorizing the resulting
    Pythagorean interval. Find its exponent of 3 and take that many
    steps (positive is clockwise, negative is counterclockwise) on the
    spiral of fifths.

-   Add accidentals resulting from the original interval's prime
    factorization.

Example: We will name the weak quintal chromatic semitone,
25/24, in the FJS. Factorizing this ratio, we obtain
$2^{- 3}\ 3^{- 1}\ 5^{2}$. There is a factor of 5 (exponent +2) and it
is the only non-Pythagorean factor. Hence we multiply by a comma with
the negated exponents, $\left( \operatorname{comma}{(5)} \right)^{- 2}$,
to obtain
$\frac{25}{24} \times \left( \frac{80}{81} \right)^{- 2} = \frac{2187}{2048}$.
Factorizing that new ratio, we obtain $2^{- 11}\ 3^{7}$, so the interval
class is +7 fifths, which is A1 (as expected; a chromatic semitone, i.e.
an augmented prime). But since the original interval had a factor of 5
(exponent +2), we add two +5 accidentals. The resulting interval class
is A1^25^.

The final one of these four conversions is the most complex to
carry out using mental arithmetic. But in reality, this one can be done
in a matter of seconds as one's familiarity with JI increases and facts
can be combined easily. Take the ratio 12/7. With some knowledge of JI,
it can be immediately recognized as a type of major sixth. Additionally,
knowing that its ratio has one factor of seven in the denominator, and
otherwise no other non-Pythagorean factors, we can immediately suggest
that its FJS interval name is M6~7~ and this is indeed correct!

## FJS in Notation

The second major use of the FJS is to fully notate JI music in
an extension of staff notation. Since staff notation is already capable
of notating all significant elements of music, such as tempo, rhythm,
meter, and dynamics, the only change must be made to extend the range of
possible pitch.

The FJS in notation makes use of note names as described in the
previous section, and applies accidentals to them to notate them. In
addition, it has expanded possibilities for the usage of these
accidentals, as well as some extra symbols, to make notation shorter in
some cases. Below are the rules that I have devised for this usage,
revised multiple times until I believe they have been optimized to their
most efficient form.

1.  To add positive comma shifts to a note, write the corresponding
    number that results from combining these shifts in front of it, as
    an accidental. For consistency, just like standard accidentals are
    prepended to a note on a staff but appended to its name, the same
    happens to microtonal accidentals. They are written in front of the
    note, and if there is a standard accidental as well, then in front
    of the accidental.

2.  To add negative comma shifts to a note, write the corresponding
    number that results from combining these shifts in front of it, but
    either prepended with a negative sign (e.g. "−35") or upside down.
    The second option, reflecting the traditional way of generating dual
    accidentals not based on standard accidentals (more about them
    later), may sometimes be preferred in handwriting, but due to its
    many practical downsides, the first option is usually better.
    Writing upside down is probably a very bad idea; there even exist
    primes which do not change when flipped, the smallest such prime is
    686989, and if the digit 1 is written as a vertical line, then 11 is
    already the smallest such prime.

3.  If both positive and negative comma shifts appear, then the total
    positive shift should be written to the left of the total negative
    shift.

These rules govern how FJS note names, as described in the
previous ruleset, are transferred to the staff and used as actual
accidentals.

Considering the different possibilities of how these microtonal
accidentals can interact with standard accidentals (to which I will
refer to as Pythagorean accidentals), I have decided the following to be
the most intuitive rule.

Pythagorean accidentals divide notes with the same diatonic
pitch class (C, D, E, F, G, A, or B) into their Pythagorean pitch
classes. Hence, a Pythagorean accidental applies to all notes with the
same diatonic pitch class in the same bar, until overwritten or
canceled. Analogically, microtonal accidentals divide notes with the
same Pythagorean pitch class into their absolute JI pitches. Hence, a
microtonal accidental applies to all notes with the same Pythagorean
pitch class in the same bar, until overwritten or canceled.

This means that, if the first E4 in a bar is written with a +5
accidental, then all other E4 in that bar will also have the +5
accidental implied (until it is canceled with a 1), but an E♭4, just as
much as a D4 or an F4, will not have that accidental implied, even if it
is in the same bar. This is because there is little use to the
Pythagorean chromatic semitone (2187/2048) or its multiples as musical
harmonic or melodic intervals in JI music that is not specifically
restricted to Pythagorean tuning. Some of the more commonly occurring
chromatic semitones include 25/24, 15/14, and 135/128.

There also exist FJS key signatures. These work exactly like
Pythagorean key signatures, are independent of them, and are written to
the right of Pythagorean key signatures if they exist in the same score.
Here are the rules governing FJS key signatures:

1.  By default, an FJS key signature can only apply microtonal
    accidentals to those pitches which are diatonic in the key that a
    Pythagorean key signature has already supplied. For example, if a
    piece is in A major, and has the Pythagorean key signature ♯FCG,
    then an FJS key signature can usually only apply microtonal
    accidentals to the notes A, B, C♯, D, E, F♯, and G♯. Because FJS key
    signatures are nonstandard, there is no particular order in which
    these accidentals must appear. However, due to the Pythagorean
    nature of the FJS, it is found that these key signatures will often
    exhibit Pythagorean patterns, and so they will appear as fragments
    of the standard FCGDAEB or BEADGCF order.

2.  An FJS key signature can supply microtonal accidentals to
    non-diatonic pitches by selecting an appropriate space or line on
    the staff for the diatonic pitch class, writing a Pythagorean
    accidental in parentheses to indicate the Pythagorean pitch class,
    and then appending the FJS accidental. The parentheses are required
    to indicate that the Pythagorean accidental itself is not part of
    the key signature, instead the meaning is as follows: if the
    Pythagorean accidental is used, then the microtonal accidental that
    follows will also be applied. For instance, an FJS key signature for
    quintal C harmonic major could be B5 E5 A5 A(♭)−5, indicating that
    all B, E, and A should be altered by a +5 accidental, and all A♭
    should be altered by a −5 accidental. In this case, A is not flat by
    default; but if it is, then it is also altered by −5.

3.  As with standard key signatures, FJS key signatures do not 'mix'
    with proper FJS accidentals. Rather, standalone FJS accidentals
    overwrite those that would be due to an FJS key signature. An E~7~
    indicated by writing E with a −7 accidental before it is still E~7~,
    even if there is an FJS key signature that says E^5^ instead. (It
    does not become $\mathrm{E}_{7}^{5}$.)

4.  A Pythagorean key signature change does not automatically also
    trigger an FJS key signature change. A piece which begins with the
    key signatures ♯FCG and F5 C5 G5 will not have its FJS key signature
    canceled when the piece changes key to A♭ major (♭BEAD). If no FJS
    key signature change has happened, then it is still assumed that in
    this key of A♭ major, if an F♯ appears, then alter it by +5. This
    may seem strange, since an F♯ is never expected to appear in A♭
    major. However, it actually makes lots of sense because it helps
    avoid the need to restate the FJS key signature every time that a
    simple modulation occurs (e.g. from ♯FCG to ♯FC). In such cases, it
    may very probably be desired that the F♯ and C♯ (and G♯, which may
    appear in D major as part of a II chord) remain altered by +5.

5.  An FJS key signature change will cancel all alterations due to the
    previous FJS key signature. If the Pythagorean key signature has
    changed as well, which it always does before the FJS key signature,
    then of course a new key signature is always defined with respect to
    the new set of seven diatonic pitches. For example, ♯FCG F5 C5 G5 is
    quintal A major. Changing the Pythagorean key signature to ♭BEAD
    causes ♭BEAD F(♯)5 C(♯)5 G(♯)5. However, if the FJS key signature
    (written as F5 C5 G5) is restated immediately after the Pythagorean
    switch to ♭BEAD, i.e. if we have the combination ♭BEAD F5 C5 G5,
    this has a different effect because the F, C, and G that are
    diatonic to A♭ major are now different: F♮, C♮, G♮ instead of F♯,
    C♯, G♯.

6.  An FJS key signature change is indicated by at least one microtonal
    accidental. If the change is to cancel the previous FJS key
    signature but without introducing any new accidentals, all the
    previous accidentals can be canceled with 1's (which are the
    equivalent of naturals in the FJS). However, such cancelations are
    implied in any FJS key signature change. Note that a complete
    cancelation of all FJS accidentals is very rarely required.

7.  FJS key signatures may be generally omitted in subsequent systems.

In addition to proper accidentals and key signatures, there
also are three additional symbols in the FJS which can be used for
writing pitch alterations more efficiently. These are the cross ×, the
black dot ●, and the white dot ○, which are used to skip having to
reiterate the same FJS accidental multiple times.

The cross is used instead of an ordinary FJS accidental to
indicate "the accidental that was last used in the same staff (or grand
staff), whether or not on the same staff position or of the same pitch
class". This helps avoid having to restate a complicated accidental,
such as +35−13, over and over again, if such an accidental needs to be
used multiple times (e.g. applied to notes that are off by Pythagorean
fifths). The cross can also be combined with an ordinary FJS accidental,
in which case the two are added.

The black dot is used in conjunction with an ordinary FJS
accidental to indicate "not only is this particular note modified by
this accidental, but every upcoming note in the same staff (or grand
staff), whether or not in the same staff position or of the same pitch
class, will be modified by the same accidental as well, until the black
dot loses its effect". This effectively establishes a kind of short-term
"sub-key". The black dot essentially means something similar to "until
the black dot loses its effect, all notes in the same staff receive an
implied cross" and therefore the standard effect is that the implied
accidental from a black dot is added to an FJS accidental written in
front of a note. The meaning is not quite the same as restating the
cross many times; the cross always refers to the last used accidental in
the same staff, while the black dot always refers to the accidental on
the first note to which it was applied.

The white dot is simply the most straightforward way to end
the effect of a black dot. A note with a white dot is the first note
that is no longer affected by the black dot. Alternatives to break the
effect of a black dot include an FJS key change, end of score, section
break, or a new black dot in the same staff.

Finally, these additional shorthand symbols, just like FJS
accidentals, completely overwrite changes due to FJS key signatures.
This means that in the key of quintal C major (B5 E5 A5), if one E is
marked with an accidental of −7 and a black dot, then both that E and a
further E in the same staff (e.g. an octave higher and in the next bar)
will be E~7~, rather than something like $\mathrm{E}_{7}^{5}$. If the
black dot is canceled with a white dot, then an E is once again E^5^.

While these rules regarding the shorthand elements of the FJS
may seem rather complicated, in fact they are well engineered in a way I
believe to be the most efficient. These three final symbols as well as
FJS key signatures are completely optional elements of the system
anyway; they need not be used. The core of the system is its ability to
represent notes by using its regularly generated accidentals. **Appendix
3** contains many note-naming examples of the FJS used in practice,
including comparisons with alternative note-naming and notation systems
that have been devised for just intonation. **Appendix 4** contains an
extended notation example.

## FJS Compared With Alternatives

The FJS is not the only JI notation system in existence. Many
composers make microtonal music independently and so a large number of
idiosyncratic notation systems for many different microtonal scales have
been invented. The overwhelming majority of these notation systems,
however, is optimized for one particular aspect of microtonality, such
as one particular microtonal division of the octave, and is inadequate
for JI notation.

The FJS has been constructed specifically with JI in mind, and
while it is very adequate for JI notation, it can hardly notate anything
else. Two other widespread notation systems with similar goals exist:
the Helmholtz-Ellis notation system and Ben Johnston's notation system.
There also exists one particular notation system, Sagittal, which was
created with all of microtonal music in mind. I will not be considering
Sagittal because it relies entirely on representing pitch, meaning that
– regardless of the relative accuracy of its accidentals – it will
always be ambiguous when representing JI, because JI intervals are
infinitely dense.

The Helmholtz-Ellis notation system (sometimes called HEWM,
Helmholtz-Ellis-Wolf-Monzo) was the first JI system based on extending
traditional staff notation to incorporate further tuning possibilities.
The original was quite limited, but subsequent extensions to prime
factors up to 23, 31, or even 61, were later developed by Wolfgang von
Schweinitz and Marc Sabat. On the other hand, the Ben Johnston system
was developed by one person: JI composer Ben Johnston. Like the FJS,
both of these systems rely on taking traditional staff notation and
extending it by adding further accidentals. I will compare each of them
to the FJS so that it can be seen what the significant similarities and
differences are.

Helmholtz-Ellis, like the FJS, assumes that default staff
notation represents Pythagorean tuning. This way, as in the FJS, every
Pythagorean interval corresponds to exactly one traditional interval
class, and every fifth is tuned as 3/2. What follows is a list of
specifically designed accidentals that represent a list of specifically
chosen commas to represent the remaining prime factors. The list I am
using here is from Marc Sabat's extension of Helmholtz-Ellis.

-   Upward or downward arrow, may be doubled or tripled, must be
    combined with a Pythagorean accidental: Raise or lower by 81/80, a
    5-comma.

-   Upward or downward digit "7" shaped arrow, may be doubled: Raise or
    lower by 64/63, a 7-comma.

-   Slightly modified "quarter tone sharp/flat" accidental: Raise or
    lower by 33/32, an 11-comma.

-   Differently modified "quarter tone sharp/flat" accidental: Raise or
    lower by 27/26, a 13-comma.

-   Double slash or backslash: Raise or lower by 256/255, a 17-comma
    with a factor of five.

-   Single slash or backslash: Raise or lower by 513/512, a 19-comma.

-   Up or down arrow: Raise or lower by 736/729, a 23-comma.

-   Triple slash or backslash: Raise or lower by 145/144, a 29-comma
    with a factor of five.

-   Plus or minus: Raise or lower by 1024/1023, a 31-comma with a factor
    of eleven.

Prime numbers from 32 to 64 are also available as accidentals;
they reuse some of the previous accidentals with curly brackets around
them. The precise forms of these accidentals are insignificant. The
commas used are as follows: 297/296 (37, with a factor of 11), 6561/6560
(41, with a factor of 5), 129/128 (43), 2304/2303 (47, with a factor of
7), 160/159 (53, with a factor of 5), 768/767 (57, with a factor of 13),
1281/1280 (61, with a factor of 7).

What stands out most of all is that the accidentals up to 13,
as well as 19, coincide with those of the FJS. Thanks to a careful
choice of the radius of tolerance, the FJS managed to choose
historically important commas – 81/80 and 64/63 – for the 5- and
7-comma. I predict that historical significance is the reason why they
also appear in Helmholtz-Ellis. The 19-comma is also present because
513/512 is by coincidence a very small number with only factors of two,
three, and nineteen, and the exponent of 3 is not very large.

However, Helmholtz-Ellis clearly also has many flaws compared
to the FJS. The accidentals for 17, 29, 31, 37, 41, 47, 53, 57, and 61
involve factors other than 2, 3, and the prime in question. In fact, the
only Helmholtz-Ellis commas that are in canonical form are those for 5,
7, 11, 13, 19, 23, and 43. Among the primes between 32 and 64, only one
of them – 43 – is in canonical form. Why is this a problem? While
these can still be represented, they require two accidentals combined
from two different primes, which is unnecessarily confusing. It seems as
though all commas after the 23-comma were specifically selected to be a
ratio of the form $\frac{(n + 1)}{n}$ (referred to as superparticular),
often at the cost of having a complicated prime factorization. What is
particularly notable is that such a form does not even guarantee that
the resulting comma is small. One famous comma, 1029/1024, the
difference between a 3/2 fifth and three 8/7 septimal whole tones, is
not of this form, yet it is particularly small. Helmholtz-Ellis,
rejecting these commas, starts reusing primes and needlessly complicates
the representation of higher JI intervals. There also is a huge
imbalance between comma sizes; 27/26 is a huge 13-comma in comparison to
the tiny 6561/6560 for the 41-comma.

The most significant disadvantage of Helmholtz-Ellis, however,
is that its accidentals are picked by hand, not by means of an
algorithm, and that they are represented with arbitrarily chosen glyphs
that have nearly no connection to the commas in question. The only
association is that "quarter-tone-ish" sized commas are represented with
glyphs based around quarter tone accidentals, while smaller sized commas
have different glyphs. There is no way to predict what the comma
corresponding to a given prime will be. There also is no way to predict
what the accidental for a given comma will be, either. These two things
just need to be looked up or memorized. Most importantly, it means that
extending Helmholtz-Ellis must be done by hand, and the list of commas
will always remain finite.

Compare this to the FJS, where every comma for every prime can
be found algorithmically, every accidental for every comma can be found
algorithmically, and every comma is in canonical form (so representing
the harmonic series requires at most one accidental for every term). In
the FJS, any JI interval can be represented, no matter how huge prime
factors occur in it, and no manual extension to arbitrarily high limits
must be performed, as long as one radius of tolerance (preferably
256/243) is agreed upon.

This exact reason – the fact that the FJS generates all its
commas from a fixed, agreed-upon radius of tolerance – is why I am
against varying the radius depending on the prime. This is why I do not
wish to represent the eleventh harmonic with a perfect fourth, and at
the same time, the thirty-first harmonic with a major seventh. Varying
the radius would create an irregular system where the commas are
manually picked. The fact that the FJS does not do this is its greatest
strength.

It is a matter of debate whether the fact that Helmholtz-Ellis
forces all its commas positive is an advantage or a disadvantage. The
FJS specifically focuses on function over pitch accuracy, while
Helmholtz-Ellis does not have such a clear goal, and from its choices of
accidentals, it seems as if it prioritizes the latter over the former.

While Helmholtz-Ellis was a major source of inspiration to the
FJS, by itself it has many flaws, mainly resulting from its
idiosyncratic rather than regular choice of commas and accidentals, as
well as the fact that it reuses primes. Nevertheless, apart from the
lack of logic in the choice of accidental glyphs, Helmholtz-Ellis is
quite appropriate for JI notation.

The other notation system which is a significant possible
alternative to the FJS is the Ben Johnston notation. Like both the FJS
and Helmholtz-Ellis, the Ben Johnston notation relies on extending staff
notation. However, it differs in its definitions of the natural notes
and accidentals. Traditional staff notation has the following meaning in
Ben Johnston notation:

-   F – C – G – D is a chain of perfect fifths.

-   F – A, C – E, and G – B are 5/4 major thirds.

-   The standard sharp and flat represent accidentals of 25/24.

Ben Johnston has dedicated accidentals for primes up to 11.
Here they are:

-   Plus or minus for a syntonic comma, 81/80.

-   "Digit 7" arrow (up or down) for a septimal quarter-tone, 35/36.
    (35/36 corresponds to an upward digit 7, and 36/35 to a downward
    digit 7.)

-   Regular up or down arrow for the 11-comma 33/32.

In the Tonalsoft encyclopedia article on Johnston notation,
Joe Monzo writes that "for all higher primes his notation simply uses
the prime number itself for the otonal adjustment and the prime number
inverted \[upside down\] for the utonal adjustment." The
keywords *otonal* and *utonal*, coined by Harry Partch, are of huge
importance, because they signal that Johnston notation does not force
all commas positive (e.g. the 7-comma, 35/36 instead of 36/35). However,
it is unknown how the remaining commas are generated. Kyle Gann provides
a list for commas from 13 up to 31, with no mention of the method by
which they were chosen: 65/64 (13 with a factor of 5), 51/50 (17 with a
factor of 25), 95/96 (19 with a factor of 5), 46/45 (23 with a factor of
5), 145/144 (29 with a factor of 5), 31/30 (31 with a factor of 5).

Again, it seems to be the case that Johnston notation
prioritizes superparticular commas, while this is neither necessary nor
ensures that these ratios are particularly small. In addition, except
for 33/32, every single comma on the list contains a factor of five; the
17-comma, 51/50, even contains two factors of five. Two particularly
strange choices are 51/50 representing the seventeenth harmonic, 17/16,
with a chromatic semitone rather than a diatonic semitone, and 31/30
instead of the smaller and simpler 32/31.

Factors of five may cause a smaller problem in Johnston
notation than they do in Helmholtz-Ellis, but this in itself is due to a
different problem. Johnston notation has a rather strange way of
interpreting default staff notation. The natural notes in a diatonic
sequence, C D E F G A B, are taken to be the Ptolemaic sequence (also
known as the quintal major scale or Zarlino's major scale) 1/1 9/8 5/4
4/3 3/2 5/3 15/8. This is very different from the Helmholtz-Ellis (and
FJS) definition of F C G D A E B as a row of Pythagorean fifths, which
would produce the Pythagorean major scale of only Pythagorean intervals:
1/1 9/8 81/64 4/3 3/2 27/16 243/128. In Johnston notation, the D-A fifth
is not a 3/2, but instead has the ratio 40/27. This is a 3/2 lowered by
a syntonic comma, known as the "grave fifth" or sometimes the "wolf
fifth" (although the latter term is usually used instead for diminished
sixths, especially in tuning systems where they are significantly
different from the perfect fifth). In addition, the sharp and flat
represent intervals of 25/24, which is the difference between a quintal
major (golden) third and a quintal minor (silver) third.

There are many problems resulting from defining the natural
notes based on the Ptolemaic sequence rather than a Pythagorean spiral
of fifths. Most importantly, it means that transposition is problematic.
A piece written in Helmholtz-Ellis or the FJS can easily be transposed
up by a 3/2 fifth by simply changing the Pythagorean parts of the note
names, and keeping all microtonal accidentals unchanged. It can even be
easily transposed by a non-Pythagorean interval, like 5/4: just
transpose by 81/64 and then add +5 to all notes. In contrast, a piece
written in Johnston notation cannot be easily transposed by any
Pythagorean or 5-limit (let alone more complicated) interval. If the
piece is originally in G, then transposing it to D would additionally
require adding a syntonic comma accidental (a plus) to every A, because
G-D (3/2) is not the same interval as D-A (40/27), and adding an inverse
syntonic comma (a minus) to every F, because G-B♭ (6/5) is not the same
as D-F (32/27). Transposing instruments would need to have their part
completely rewritten with countless additional pluses and minuses, even
if the interval they deviate by is as simple as a strong whole tone!

This is unnecessarily complicated, with the alleged aim to
make notating diatonic quintal music simpler, but instead hugely
overcomplicates both diatonic quintal music and any non-quintal JI
music. Music that contains no factors of five, such as La Monte Young's
*Well-Tuned Piano* tuning (which famously only makes use of the prime
factors 2, 3, and 7), requires lots of syntonic commas in its Johnston
representation, even though not a single factor of 5 appears in the
tuning. In fact, in the Tonalsoft article, Monzo writes "It is the
opinion of several tuning-theorists that Johnston\'s notational idea is
a good one, but that it could be improved by using a Pythagorean scale
instead of a 5-limit one as a basis." (*Limit* is a term coined by Harry
Partch to mean the largest prime factor, or sometimes odd factor, which
appears in a certain scale or tuning system.)

From Ben Johnston's strange choice of the Ptolemaic sequence
follows a list of strange commas that are probably meant to cancel out
the abundance of factors of five. The 7-comma, for instance, is 35/36
rather than 63/64. 35/36 is the "septimal quarter-tone" which is the sum
of a celestial comma and a syntonic comma. It creates a septimal
interval directly from the corresponding quintal interval, rather than
starting from the corresponding Pythagorean interval. This somewhat
gives a rationale to the unusual choices for commas, but the basic
principle – the usage of the Ptolemaic sequence for natural notes –
remains very problematic.

Johnston notation also has a strange system of arbitrary
division of its accidentals when it is used to name notes. Some Johnston
accidentals are written between the diatonic pitch class and a
Pythagorean accidental, but there is no rule which ones. For example,
representing a 63/32 interval above E♭ requires one to write E7♭+ (sic).
The septimal accidental goes between the E and the ♭, while the +
required to adjust is then written after the ♭. What is most hurtful is
that the deviation downwards by a celestial comma is, in Johnston
notation, expressed using two accidentals, as "downwards by a syntonic
plus celestial comma, but then upwards by a syntonic comma again".

The remaining points I can make about Johnston notation are
similar to those about Helmholtz-Ellis. It is unknown where its commas
come from, other than inspection of the harmonic series and arbitrary
choice. They must likely be looked up or memorized in order to be used
properly. While the 5-, 7- and 11-accidentals have special glyphs, all
accidentals from 13 onwards simply make use of the prime number itself
as an accidental, like in the FJS. (However, they cannot be combined in
the way that FJS accidentals can.)

The only significantly good thing about Johnston notation
(but, again, this is a matter of debate) is that it does not force its
commas positive, similarly to the FJS, and unlike Helmholtz-Ellis. The
7- and 19-commas are both negative by default so that they contain their
respective prime factor in the numerator. However, in such a case, why
is the syntonic comma accidental, 81/80, an exception to that rule?

Johnston notation has many huge disadvantages that clearly
outweigh its few advantages. Its unclear definition of the natural notes
with the Ptolemaic sequence, together with its lack of compatibility for
transposition, makes it rather badly suited for JI notation.

## Conclusion

To summarize, while Helmholtz-Ellis and Johnston notation are
both good starting points in an aim to find a good JI notation system
which is an extension of traditional staff notation, neither of them is
particularly good individually, because both of them contain design
flaws that make them hard to use. The FJS, while loosely inspired by
both, mostly chooses a rather different approach to notating JI music,
one that seeks to eliminate the disadvantages of both Helmholtz-Ellis
and Johnston notation as much as possible.

I should note that while it appears as though the FJS is a
haphazard mixture of elements from both Helmholtz-Ellis and Johnston
notation, and the only truly innovative aspect is its algorithm, in fact
the FJS was constructed "from scratch", based exclusively on the idea
that regular staff notation should be Pythagorean and accidentals should
be used for extended JI. The ideas to use prime numbers for accidentals,
to start with the Pythagorean scale, to not force all commas positive,
all of these were my own ideas that I developed independently, rather
than inheriting parts from other existing notation systems.

I believe that the FJS has achieved the goal of being an
easy-to-use system for writing and reading JI music, and I hope to see
the FJS used for JI note naming and notation in future microtonal works.

## Appendix 1: The FJS Algorithm in C++

\#include \<iostream\>

\#include \<math.h\>

using namespace std;

int shn(int k) {

if (k % 2) {

return -(k + 1) / 2; //*replace this line with "return (k + 1) / 2;"...*

} else {

return k / 2; //...*and this line with "return –k / 2;" to change shn
into shp*

}

}

double red(double x) {

return x \* exp(log(2) \* (-floor(log2(x))));

}

int main() {

short unsigned p; //*p is the prime; must be a prime greater than 3*

short k = -1;

double g, h, l; //*l is the radius of tolerance; must be a real number
greater than 1*

bool i, j;

cin \>\> p;

cin \>\> l; //*replace this line with "l = ..." for a fixed l*

do {

k++;

g = red(p \* pow(3,shn(k)));

h = g / 2;

i = (pow(log(g),2) \< pow(log(l),2));

j = (pow(log(h),2) \< pow(log(l),2));

} while (!(i \|\| j));

cout \<\< -shn(k) \<\< endl; //*the program outputs gen(p) first, then
pol(p), finally comma(p)*

if (i) {

cout \<\< 1 \<\< endl \<\< g;

}

if (j) {

cout \<\< -1 \<\< endl \<\< h;

}

return 0;

}

[]{#_Toc5182877 .anchor}**Algorithm** **2. The FJS algorithm,
implemented in C++**

## Appendix 2: The Comma Function

Below are values of the *gen*, *pol*, and *comma* functions as outputs
of the FJS algorithm, tabulated for inputs ranging from 5 to 127, for
both $L$ and $l$ as the choices of the radius of tolerance.

Note the long-term behaviors of my preferred choice $L$. It never
exceeds −6 or +6 for the *gen* function, as expected. However, what is
notable is that beyond the 17-limit, it never even exceeds −3 or +3, and
the only cases where it does is for 5 and 17! As a result, the ratios
represented are extremely simple since they are generated with very few
fifths. Many of the commas have simple ratios – the most complex ones
involve four-digit numbers – and a large portion of commas are the
simplest of all small ratios, i.e. superparticular ratios. The *shn* vs.
*shp* dilemma is next to no problem for this choice; 181 is the smallest
prime whose octave-reduced form is between the Pythagorean diminished
fifth and augmented fourth.

Below is the table for $L = \frac{256}{243}$, the Pythagorean diatonic
semitone.

| **p**   | **Target**   | **Pyth. Approx.**   | **gen**   | **pol**   | **comma**   |
| ------- | ------------ | ------------------- | --------- | --------- | :---------: |
| 5       | 5/4          | 81/64               | +4 (M3)   | −         | 80/81       |
| 7       | 7/4          | 16/9                | −2 (m7)   | −         | 63/64       |
| 11      | 11/8         | 4/3                 | −1 (P4)   | +         | 33/32       |
| 13      | 13/8         | 27/16               | +3 (M6)   | −         | 26/27       |
| 17      | 17/16        | 256/243             | −5 (m2)   | +         | 4131/4096   |
| 19      | 19/16        | 32/27               | −3 (m3)   | +         | 513/512     |
| 23      | 23/16        | 3/2                 | +1 (P5)   | −         | 23/24       |
| 29      | 29/16        | 16/9                | −2 (m7)   | +         | 261/256     |
| 31      | 31/16        | 2/1                 | 0 (P8)    | −         | 31/32       |
| 37      | 37/32        | 9/8                 | +2 (M2)   | +         | 37/36       |
| 41      | 41/32        | 4/3                 | −1 (P4)   | −         | 123/128     |
| 43      | 43/32        | 4/3                 | −1 (P4)   | +         | 129/128     |
| 47      | 47/32        | 3/2                 | +1 (P5)   | −         | 47/48       |
| 53      | 53/32        | 27/16               | +3 (M6)   | −         | 53/54       |
| 59      | 59/32        | 16/9                | −2 (m7)   | +         | 531/512     |
| 61      | 61/32        | 2/1                 | 0 (P8)    | −         | 61/64       |
| 67      | 67/64        | 2/1                 | 0 (P8)    | +         | 67/64       |
| 71      | 71/64        | 9/8                 | +2 (M2)   | −         | 71/72       |
| 73      | 73/64        | 9/8                 | +2 (M2)   | +         | 73/72       |
| 79      | 79/64        | 32/27               | −3 (m3)   | +         | 2133/2048   |
| 83      | 83/64        | 4/3                 | −1 (P4)   | −         | 249/256     |
| 89      | 89/64        | 4/3                 | −1 (P4)   | +         | 267/256     |
| 97      | 97/64        | 3/2                 | +1 (P5)   | +         | 97/96       |
| 101     | 11/64        | 3/2                 | +1 (P5)   | +         | 101/96      |
| 103     | 103/64       | 27/16               | +3 (M6)   | −         | 103/108     |
| 107     | 107/64       | 27/16               | +3 (M6)   | −         | 107/108     |
| 109     | 109/64       | 16/9                | −2 (m7)   | −         | 981/1024    |
| 113     | 113/64       | 16/9                | −2 (m7)   | −         | 1017/1024   |
| 127     | 127/64       | 2/1                 | 0 (P8)    | −         | 127/128     |   

[]{#_Toc5207170 .anchor}**Table** **6. The values of gen, pol, and comma
up to 127, for λ = L**

Below is the table for $l = \sqrt{\frac{256}{243}}$, half of the
Pythagorean diatonic semitone. The first two columns remain the same,
the others are different.

As opposed to the table above, these results are significantly more
"savage". The function reaches the boundary of its range (−8 to +8)
already at the 13-limit, and hits it two more times (at 79 and 103) in
the primes from 17 to 127. For 59, 67, 79, and 89, the commas exceed
four-digit numbers, with the most complex comma occurring for 79, with a
denominator of $524288 = 2^{19}$. Nevertheless, simple commas (even
superparticular ones) also occur from time to time, and some
representations are even better than those for a wider radius of
tolerance, e.g. the 23-, 31-, and 61-commas. At some points, including
the 5-, 7-, 17-, 19-, 29-, 43-, 47-, and 127-commas, both choices of the
radius of tolerance give the same values.

| **p**   | **Target**   | **Pyth. Approx.**   | **gen**   | **pol**   | **comma**       |
| ------- | ------------ | ------------------- | --------- | --------- | --------------- |
| 5       | 5/4          | 81/64               | +4 (M3)   | −         | 80/81           |
| 7       | 7/4          | 16/9                | −2 (m7)   | −         | 63/64           |
| 11      | 11/8         | 1024/729            | −6 (d5)   | −         | 8019/8192       |
| 13      | 13/8         | 6561/4096           | +8 (A5)   | +         | 6656/6561       |
| 17      | 17/16        | 256/243             | −5 (m2)   | +         | 4131/4096       |
| 19      | 19/16        | 32/27               | −3 (m3)   | +         | 513/512         |
| 23      | 23/16        | 729/512             | +6 (A4)   | +         | 736/729         |
| 29      | 29/16        | 16/9                | −2 (m7)   | +         | 261/256         |
| 31      | 31/16        | 243/128             | +5 (M7)   | +         | 248/243         |
| 37      | 37/32        | 32/27               | −3 (m3)   | −         | 999/1024        |
| 41      | 41/32        | 81/64               | +4 (M3)   | +         | 82/81           |
| 43      | 43/32        | 4/3                 | −1 (P4)   | +         | 129/128         |
| 47      | 47/32        | 3/2                 | +1 (P5)   | −         | 47/48           |
| 53      | 53/32        | 27/16               | +3 (M6)   | −         | 53/54           |
| 59      | 59/32        | 4096/2187           | −7 (d8)   | −         | 129033/131072   |
| 61      | 61/32        | 243/128             | +5 (M7)   | +         | 244/243         |
| 67      | 67/64        | 256/243             | −5 (m2)   | −         | 16281/16384     |
| 71      | 71/64        | 9/8                 | +2 (M2)   | −         | 71/72           |
| 73      | 73/64        | 9/8                 | +2 (M2)   | +         | 73/72           |
| 79      | 79/64        | 8192/6561           | −8 (d4)   | −         | 518319/524288   |
| 83      | 83/64        | 81/64               | +4 (M3)   | +         | 83/81           |
| 89      | 89/64        | 1024/729            | −6 (d5)   | −         | 64881/65536     |
| 97      | 97/64        | 3/2                 | +1 (P5)   | +         | 97/96           |
| 101     | 11/64        | 128/81              | −4 (m6)   | −         | 8181/8192       |
| 103     | 103/64       | 6561/4096           | +8 (A5)   | +         | 6592/6561       |
| 107     | 107/64       | 27/16               | +3 (M6)   | −         | 107/108         |
| 109     | 109/64       | 27/16               | +3 (M6)   | +         | 109/108         |
| 113     | 113/64       | 16/9                | −2 (m7)   | −         | 1017/1024       |
| 127     | 127/64       | 2/1                 | 0 (P8)    | −         | 127/128         |

[]{#_Toc5207171 .anchor}**Table** **7. The values of gen, pol, and comma
up to 127, for λ = l**

## Appendix 3: FJS Note Naming Examples

Below I have included examples of how the FJS behaves in practice when
naming just intonation notes in a few common JI contexts.

| C        | C        | G        | C       | E^5^     | G        | B♭^7^   | C       | 
| -------- | -------- | -------- | ------- | -------- | -------- | ------- | ------- |
| D        | E^5^     | F^11^    | G       | A^13^    | B♭^7^    | B^5^    | C       |
| D♭^17^   | D        | E♭^19^   | E^5^    | F^7^     | F^11^    | G^23^   | G       |
| G♯^25^   | A^13^    | A        | B♭^7^   | B♭^29^   | B^5^     | C^31^   | C       |
| C^11^    | D♭^17^   | D^35^    | D       | D^37^    | E♭^19^   | E^13^   | E^5^    |
| F^41^    | F^7^     | F^43^    | F^11^   | F♯^5^    | G^23^    | G^47^   | G       |
| A♭^49^   | G♯^25^   | A♭^17^   | A^13^   | A^53^    | A        | A^11^   | B♭^7^   |
| B♭^19^   | B♭^29^   | B♭^59^   | B^5^    | C^61^    | C^31^    | C^7^    | C       |

[]{#_Toc5207172 .anchor}**Table** **8. The overtone series 1-64 in the
FJS**

| Pythagorean major scale                                   |        |         |        |         |         |           |         |        |         |        |         |       |
| --------------------------------------------------------- | ------ | ------- | ------ | ------- | ------- | --------- | ------- | ------ | ------- | ------ | ------- | ----- |
| C                                                         | D      | E       | F      | G       | A       | B         | C       |        |         |        |         |       |
| 1/1                                                       | 9/8    | 81/64   | 4/3    | 3/2     | 27/16   | 243/128   | 2/1     |        |         |        |         |       |
| Zarlino 7-note quintal major scale (Ptolemaic sequence)   |        |         |        |         |         |           |         |        |         |        |         |       |
| C                                                         | D      | E^5^    | F      | G       | A^5^    | B^5^      | C       |        |         |        |         |       |
| 1/1                                                       | 9/8    | 5/4     | 4/3    | 3/2     | 5/3     | 15/8      | 2/1     |        |         |        |         |       |
| Zarlino 9-note quintal major scale (no wolf fifth)        |        |         |        |         |         |           |         |        |         |        |         |       |
| C                                                         | D^5^   | D       | E^5^   | F       | G       | A^5^      | A       | B^5^   | C       |        |         |       |
| 1/1                                                       | 10/9   | 9/8     | 5/4    | 4/3     | 3/2     | 5/3       | 27/16   | 15/8   | 2/1     |        |         |       |
| 12-note complete JI major scale                           |        |         |        |         |         |           |         |        |         |        |         |       |
| C                                                         | D^5^   | D       | E^5^   | E       | F^7^    | F         | G       | A^5^   | A       | B^5^   | C^7^    | C     |
| 1/1                                                       | 10/9   | 9/8     | 5/4    | 81/64   | 21/16   | 4/3       | 3/2     | 5/3    | 27/16   | 15/8   | 63/32   | 2/1   |

[]{#_Toc5207173 .anchor}**Table** **9. JI extensions of the major scale
in the FJS**

| **+ 7:4**   |        |        |        |     |             |
| ----------- | ------ | ------ | ------ | --- | ----------- |
| B♭^7^       | F^7^   | C^7^   | G^7^   |     |             |
| C           | G      | D      | A      | E   |             |
| D~7~        | A~7~   | E~7~   |        |     | **+ 3:2**   |

[]{#_Toc5207174 .anchor}**Table** **10. La Monte Young\'s Well-Tuned
Piano tuning in the FJS**

| **+ 7:4**   |         |        |        |        |     |     |             |
| ----------- | ------- | ------ | ------ | ------ | --- | --- | -----------
| E♭^7^       | B♭^7^   | F^7^   | C^7^   | G^7^   |     |     | 
| F           | C       | G      | D      | A      | E   | B   | **+ 3:2**

[]{#_Toc5207175 .anchor}**Table** **11. Michael Harrison\'s Revelation
tuning in the FJS**

| **+ 5:4**   |          |          |          |         |             |
| ----------- | -------- | -------- | -------- | ------- | ----------- |
|             | A♯^25^   | E♯^25^   | B♯^25^   |         |             |
| B^5^        | F♯^5^    | C♯^5^    | G♯^5^    | D♯^5^   |             |
| G           | D        | A        | E        |         | **+ 3:2**   |

[]{#_Toc5207176 .anchor}**Table** **12. Terry Riley\'s New Albion tuning
in the FJS**

| D                                         | F^7^    | $$G_{11}^{7}$$                             | $${\mathrm{A}\mathrm{\flat}}_{5}^{7}$$    | B♭^7^   | C^7^    |
| ----------------------------------------- | ------- | ------------------------------------------ | ----------------------------------------- | ------- | ------- |
| B~7~                                      | D       | E~11~                                      | F~5~                                      | G       | A       |
| $$A_{7}^{11}$$                            | C^11^   | D                                          | $${\mathrm{E}\mathrm{\flat}}_{5}^{11}$$   | F^11^   | G^11^   |
| $${\mathrm{G}\mathrm{\sharp}}_{7}^{5}$$   | B^5^    | $${\mathrm{C}\mathrm{\sharp}}_{11}^{5}$$   | D                                         | E^5^    | F♯^5^   |
| F♯~7~                                     | A       | B~11~                                      | C~5~                                      | D       | E       |
| E~7~                                      | G       | A~11~                                      | B♭~5~                                     | C       | D       |

[]{#_Toc5207177 .anchor}**Table** **13. Harry Partch\'s 11-limit
tonality diamond on D in the FJS**

| **Ratio**       | **Young**   | **Helmholtz-Ellis**   | **Ben Johnston**   | **FJS**   |
| --------------- | ----------- | --------------------- | ------------------ | --------- |
| **1/1**         | E♭          | E♭                    | E♭                 | D~7~      |
| **567/512**     | E           | F7−                   | F7++               | E         |
| **9/8**         | F           | F                     | F+                 | E~7~      |
| **147/128**     | F♯          | G♭77−                 | G77♭+              | F^7^      |
| **1323/1024**   | G♯          | A♭77−                 | A77♭++             | G^7^      |
| **21/16**       | G           | A♭7−                  | A7♭+               | G         |
| **189/128**     | A           | B♭7−                  | B7♭+               | A         |
| **3/2**         | B♭          | B♭                    | B♭                 | A~7~      |
| **49/32**       | B           | C♭77−                 | C77♭+              | B♭^7^     |
| **441/256**     | C♯          | D♭77−                 | D77♭+              | C^7^      |
| **7/4**         | C           | D♭7−                  | D7♭                | C         |
| **63/32**       | D           | E♭7−                  | E7♭+               | D         |

[]{#_Toc5207178 .anchor}**Table** **14. Young\'s Well-Tuned Piano in
different notation systems**

This final example is a comparison of how well Helmholtz-Ellis, Johnston
notation and the FJS all cope with writing down Young's *Well-Tuned
Piano* scale. Notice how compact and clearly legible the FJS notation
is: at least as compact, if not more at some places, as compared to
Young's original keyboard mapping. Notice how badly Johnston notation
performs, especially with its septimal commas placed between a note and
its Pythagorean accidental. In Helmholtz-Ellis, "7−" and "77−" were used
to represent the upside-down septimal arrow, and the upside-down double
septimal arrow, respectively. Also, note how all systems write the tonic
with E♭, but the FJS writes it with D~7~, its proper name according to
how that note is tuned rather than which key on a 12-tone keyboard it
corresponds to.

## Appendix 4: FJS Notation Example

The following example shows a rendition of Johann Sebastian Bach's
*Prelude No. 1* (BWV 846) from *The Well-Tempered Clavier* into JI.

From the original score, written for a keyboard instrument with only 12
notes per octave, I have extrapolated a plausible JI meaning, and used
it to demonstrate how the FJS performs in notation. To preserve the
harmonic meaning while extending the pitch palette, I have used
4-5-6(-15) for the major triad (seventh chord), 10-12-15(-18) for the
minor triad (seventh chord), 4-5-6-7 for the dominant seventh chord, and
finally 10-12-14-17 for the diminished seventh chord.

The features of the FJS used within this example are as follows:

-   An FJS key signature is used: B5 E5 A5 E(♭)17 A(♭)17, meaning that
    every B, E, and A is by default +5, and every E♭ and A♭ is by
    default +17.

-   The cross is used a few times to clone a +5 or +7 accidental.

-   In a few places, 1 is used as an accidental to turn A^5^ into A.

-   The black dot is used in mm. 12–13 to temporarily add +5 to all
    notes, since the pitch D^5^ is briefly tonicized. The white dot is
    used in m. 14 to cancel this.

Notice how the black dot is used: it appears as 5●7. This means "apply
+5, clone this +5 to all upcoming notes, and then still apply +7 to this
note, but don't clone the +7". This means that the notes of the
diminished seventh chord in m. 12 are all based on a fundamental of
A^5^: they are C♯^25^, E^5^, G^35^, and B♭^5.17^ which are 10-12-14-17
ratios above A^5^. Similarly, the white dot appears as ○7, meaning
"cancel the black dot and make this note Pythagorean, but then apply +7"
so that the notes in m. 14 are all based on G: they are B^5^, D, F^7^,
and A♭^17^.

## List of Figures

[**Table 1. Selected JI intervals and their ratios** 3](#_Toc5207165)

[**Table 2. The values of gen, pol, and comma for a tolerance of L**
21](#_Toc5207166)

[**Table 3. The Pythagorean scale with 11 intervals** 22](#_Toc5207167)

[**Table 4. The Pythagorean scale with 17 intervals** 23](#_Toc5207168)

[**Table 5. The values of gen, pol, and comma for a tolerance of l**
23](#_Toc5207169)

[**Table 6. The values of gen, pol, and comma up to 127, for λ = L**
48](#_Toc5207170)

[**Table 7. The values of gen, pol, and comma up to 127, for λ = l**
49](#_Toc5207171)

[**Table 8. The overtone series 1-64 in the FJS** 50](#_Toc5207172)

[**Table 9. JI extensions of the major scale in the FJS**
50](#_Toc5207173)

[**Table 10. La Monte Young\'s Well-Tuned Piano tuning in the FJS**
51](#_Toc5207174)

[**Table 11. Michael Harrison\'s Revelation tuning in the FJS**
51](#_Toc5207175)

[**Table 12. Terry Riley\'s New Albion tuning in the FJS**
51](#_Toc5207176)

[**Table 13. Harry Partch\'s 11-limit tonality diamond on D in the FJS**
51](#_Toc5207177)

[**Table 14. Young\'s Well-Tuned Piano in different notation systems**
52](#_Toc5207178)

[**Algorithm 1. The FJS algorithm** 19](#_Toc5182876)

[**Algorithm 2. The FJS algorithm, implemented in C++**
46](#_Toc5182877)

## Bibliography

Benson, David. *Music: A Mathematical Offering*. Cambridge University
Press, 2007.

Blackwood, Easley. *The Structure of Recognizable Diatonic Tunings*.
Princeton University Press, 1985.

Bowling, Daniel L.; Purves, Dale. "A biological rationale for musical
consonance." *PNAS* 112 (2015), pp. 11155-11160.

Duffin, Ross W. *How Equal Temperament Ruined Harmony (and Why You
Should Care)*. W. W. Norton & Company, 2008.

Duffin, Ross W. "Just Intonation in Renaissance Theory and Practice."
*Music Theory Online*.
http://www.mtosmt.org/issues/mto.06.12.3/mto.06.12.3.duffin.html
(accessed November 3, 2018).

Erlich, Paul. "Tuning, Tonality, and Twenty-Two-Tone Temperament."
*Xenharmonikôn* 17 (1998).

Fonville, John. "Ben Johnston's Extended Just Intonation: A Guide for
Interpreters." *Perspectives of New Music* 29 (1991), pp. 106-137.

Forster, Cristiano. "Musical Mathematics: Meyer's Diamond." *Chrysalis
Foundation*. http://www.chrysalis-foundation.org/Meyer-s\_Diamond.htm
(accessed April 2, 2019).

Gann, Kyle. "Combatting Anti-Just-Intonation Propaganda." *Kyle Gann's
Home Page*. https://www.kylegann.com/AntiJI.html (accessed November 3,
2018).

Gann, Kyle. "How to Use Ben Johnston's Just Intonation Notation." *Kyle
Gann's Home Page*. https://www.kylegann.com/\~kylegann/BJNotation.html
(accessed April 2, 2019).

Gann, Kyle. "Just Intonation Explained." *Kyle Gann's Home Page*.
https://www.kylegann.com/tuning.html (accessed November 3, 2018).

Gann, Kyle. "La Monte Young's The Well-Tuned Piano." *Kyle Gann's Home
Page*. https://www.kylegann.com/wtp.html (accessed November 3, 2018).

Gann, Kyle. "La Monte Young's The Well-Tuned Piano." *Perspectives of
New Music* 31 (1993), pp. 134-162.

Gann, Kyle. "My Idiosyncratic Reasons for Using Just Intonation." *Kyle
Gann's Home Page*. https://www.kylegann.com/JIreasons.html (accessed
November 3, 2018).

Gill, Kamraan Z. "A Biological Rationale for Musical Scales." *PLoS ONE*
4 (2009).

Haack, Joel K. "The Mathematics of the Just Intonation Used in the Music
of Terry Riley." *Bridges* 2 (1999), pp. 101-110.

Harrison, Michael. "Just Intonation Harmonic Piano." *Michael Harrison's
Home Page*. http://michaelharrison.com/Pure\_piano.aspx (accessed
November 3, 2018).

Harrison, Michael. "Music in Just Intonation." *Michael Harrison's Home
Page*. http://michaelharrison.com/Just\_intonation.aspx (accessed
November 3, 2018).

Helmholtz, Hermann*. On the Sensations of Tone as a Physiological Basis
for the Theory of Music*. Translated by Alexander J. Ellis. Longmans,
Green, and Co., 1875.

Kopiez, Reinhard. "Intonation of Harmonic Intervals: Adaptability of
Expert Musicians to Equal Temperament and Just Intonation." *Music
Perception* 20 (2003), pp. 383-410.

Krumhansl, Carol L. "Music Psychology: Tonal Structures in Perception
and Memory." *Annual Review of Psychology* 42 (1991), pp. 277-303.

Loosen, Franz. "Tuning of diatonic scales by violinists, pianists, and
nonmusicians." *Perception & Psychophysics* 56 (1994), pp. 221-226.

Monzo, Joe. "Johnston notation." *Tonalsoft: encyclopedia of microtonal
music theory*. http://www.tonalsoft.com/enc/j/johnston.aspx (accessed
April 3, 2019).

Partch, Harry. *Genesis of a Music*. University of Wisconsin Press,
1949.

Polansky, Larry; et al. "A Mathematical Model for Optimal Tuning
Systems." *Perspectives of New Music* 47 (2009), pp. 69-110.

Russell, Jim. "Towards a Difference Limen of Musical Scale Perception."
*21harmony*.
http://www.21harmony.com/blog/towards-a-difference-limen-of-musical-scale-perception
(accessed June 28, 2018).

Sabat, Marc. "On Ben Johnston's Notation and the Performance Practice of
Extended Just Intonation." *Marc Sabat's Home Page*.
http://www.marcsabat.com/pdfs/EJItext.pdf (accessed November 3, 2018).

Sabat, Marc. "The Extended Helmholtz-Ellis JI Pitch Notation." *Marc
Sabat's Home Page*. http://www.marcsabat.com/pdfs/notation.pdf (accessed
November 3, 2018).

Secor, George D. "The 17-tone Puzzle – And the Neo-medieval Key That
Unlocks It." *Xenharmonikôn* 18 (2006).

Secor, George D.; Keenan, David C. "Sagittal: A Microtonal Notation
System." *Xenharmonikôn* 18 (2006).
