# Frequently Asked Questions

<style>h2 { font-weight: normal; font-size: 100%; }</style>

## What is this Just Intonation and natural tuning that you're so concerned about? Does that have anything to do with the New Age movement?

No.

Just Intonation is mathematics, and a theory of pitches and frequencies based on demonstrable acoustic properties of sound, as well as a form of music which uses these relations as the foundation of the chromatic palette that a piece uses, rather than equal divisions of the octave or what have you. The FJS is a formal system that facilitates intuitive understanding of the acoustic relations that JI researches.

New Age is neither a science nor a theory, so you perhaps should look into such ‘sciences’ and ‘theories’ such as [this](https://attunedvibrations.com/432hz/) alternative tuning that is ‘mathematically’ ‘in tune’ with ‘the universe’… Or maybe don't.

## Can the FJS be used to notate equal temperament tunings?

The short answer is no.

Just Intonation – and consequently, the FJS – relies on the dumb simplicity of manipulating fractions. The level of mathematics required to comprehend Just Intonation theory is no higher than that of junior high school – no logarithms, *n*<sup>th</sup> roots, or – God forbid – integrals are needed (logarithms are only needed when calculating cent values for intervals, which is more of a convenience rather than part of the system). You can carry out most of the calculations in your head, and you can entrust the rest to your trusty four-operation pocket calculator which you'll never again notice has a square root button.

Equal Temperament, on the other hand, is based on equal divisions of the octave (in most cases). Be careful, though, when you generalise, for 1200¢ / 12 = 100¢ might seem too simple at first – cents are merely a representation of the underlying proportions that arise between frequencies, and while some of us might be content with leaving all theory there, the moment you want to convert the seemingly pure cent values into frequency values, you will have to toss all that in an exponential function which returns irrational values for (almost) all rational choices of inputs. Not to mention that the pure, pleasant to the ear (by the definition of ‘ear’) sound of a Just Intonation fifth (3/2) – so significant that all modern harmony was built on it – has an irrational cent value 701.95500086…¢, which ET gets around by approximating more or less crudely. (This is not to say that ET is bad, but that the slightest attempt at introducing it into a JI framework would immediately cause total chaos and hell would break loose.)

This being said, I think that ET doesn't need an FJS to be usable. *n*-EDOs for lower values of *n* can be notated in their entire beauty – without give-and-take – on a regular staff, provided that the pitches, together with accidentals, are well-defined. If *n* is a bit larger, define a couple new accidentals; if *n* goes into the hundreds – or if you want absolute flexibility – you can [borrow](http://musictheory.zentral.zone/huntsystem1.html) from [others](http://sagittal.org/). Or you could make up a new kind of staff and continue from there…

No matter which way you choose, you'll eventually find out that the FJS would have been of zero help to you… Unless you want to approximate the key signature for your upcoming ET piece.

## Where is the table of generators and formal commas?

You don't need one! Let the [calculators](calc.html) handle that.

## Why has 3/2 been chosen as the only implied interval and not, for example, 5/4?

I've outlined some of my reasoning on the [comparison](compare.html) page.

## What about (Sagittal / the H-system / Kite's color notation / \[insert some other alternative notation system\])?

Again, consult the [comparison](compare.html).

## Why the fuss if I can define my pitches at the top of a score?

Sure, you can do that, but there are a few things you'll be missing out on:

- the ability to modulate to any foreign ‘key’ of your choice as you go, without the need for convoluted reassignments or cumbersome or verbose annotations;
- the ‘one size fits all’ property of the FJS which, with very little notational overhead, allows you to use the same system for *all* JI, making way for an intuitive and firm understanding of the FJS's – and JI's – inner workings and mental shortcuts;
- preservation of interval arithmetic – intervals still add up just as you would expect them to, which they wouldn't if you just accommodated all your pitches in the available note space haphazardly;
- instant recognizability – knowing that a M3<sup>5</sup> is 5/4 will allow you to instantly recognize a M6<sup>5</sup>, M2<sup>5</sup>, M7<sup>5</sup> and A4<sup>5</sup> as ‘derivatives’, the same is true for m7<sup>7</sup> allowing you to recognize a P4<sup>7</sup>, m3<sup>7</sup> and m6<sup>7</sup>;
- thinking within the system – in other notation systems, the ratio-to-note transform is only used to accommodate the music on a staff, and all the thinking must be done by transforming note-to-ratio and back, whereas in the FJS, you can think in the notes, which is way easier and faster – like adding two binary numbers in binary instead of converting to decimal, adding, and converting the result back into binary;
- quick sightreading – even across scores.

If you care about none of these, the FJS might not be the right choice for you. I recommend you give it a chance anyway.

---

## Hey, this whole FJS thing sounds very similar to Rational Comma Notation, what's up with that?

An unfortunate case of independent invention.

The [Rational Comma Notation](https://en.xen.wiki/w/Rational_Comma_Notation_(RCN)) is David Ryan's invention which happens to be very similar to the FJS.

I have only found out about RCN's existence when the FJS was already complete, after having made decisions about all its important aspects. There was nothing to take from RCN at that point as I noticed that it handles many issues worse than the FJS does:

- accidentals are notated very clumsily; E♭<sub>5</sub> or `Eb_5` becomes E♭\[1/5\];
- there is no evidence of interval naming, which is the exact translation of tonic-less JI ratios;
- there is no evidence of staff notation, only raw note names;
- the comma-finding algorithm is not based on an equilibrium between proximity and Pythagorean simplicity, but proximity and numerator-denominator simplicity, which is not a good choice since it makes it seem as if one were going to actually multiply by these fractions (about that, please read the note to Kyle Gann at the bottom of the [comparison](compare.html)) and therefore returns some quite clumsy intervals, e.g. C♯\[17\] instead of D♭\[17\] for 17/16 above C, or C\[31\] instead of B\[31\] for 31/16;
- the algorithm is really complicated, ruling out the possibility of carrying it out in your head, making the comma list actually another table or a dialogue with a computer;
- the system occurs in multiple different versions with completely different algorithms in each one, there is no well-defined standard as there is in the FJS.

Remember that although the FJS may have been created later than RCN (2015-2017; FJS: 2017-2019), it didn't take any inspiration from it – there was no reason to. It's not that difficult to get the idea of using the Pythagorean scale for natural notes (Helmholtz-Ellis already did that) or the idea of multiplying commas (after all, what else can you do to compound primes in a way that can be unambiguously reversed?)

Since RCN has not been used in any musical example, and therefore has no notation potential and its existence is not tied to any actual sheet music, let the FJS do (or have done) that.
