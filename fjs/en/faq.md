# Frequently Asked Questions

<style>h2 { font-weight: normal; font-size: 100%; }</style>

## Can the FJS be used to notate equal temperament tunings?

The short answer is no.

Just Intonation – and consequently, the FJS – relies on the dumb simplicity of manipulating fractions. The level of mathematics required to comprehend Just Intonation theory is no higher than that of junior high school – no logarithms, *n*<sup>th</sup> roots, or – God forbid – integrals are needed (logarithms are only needed when calculating cent values for intervals, which is more of a convenience rather than part of the system). You can carry out most of the calculations in your head, and you can entrust the rest to your trusty four-operation pocket calculator which you'll never again notice has a square root button.

Equal Temperament, on the other hand, is based on equal divisions of the octave (in most cases). Be careful, though, when you generalize, for 1200¢ / 12 = 100¢ might seem too simple at first – cents are merely a representation of the underlying proportions that arise between frequencies, and while some of us might be content with leaving all theory there, the moment you want to convert the seemingly pure cent values into frequency values, you will have to toss all that in an exponential function which returns irrational values for (almost) all rational choices of inputs. Not to mention that the pure, pleasant to the ear (by the definition of ‘ear’) sound of a Just Intonation fifth (3/2) – so significant that all modern harmony was built on it – has an irrational cent value 701.95500086…¢, which ET gets around by approximating more or less crudely. (This is not to say that ET is bad, but that the slightest attempt at introducing it into a JI framework would immediately cause total chaos and hell would break loose.)

This being said, I think that ET doesn't need an FJS to be usable. *n*-EDOs for lower values of *n* can be notated in their entire beauty – without give-and-take – on a regular staff, provided that the pitches, together with accidentals, are well-defined. If *n* is a bit larger, define a couple new accidentals; if *n* goes into the hundreds – or if you want absolute flexibility – you can [borrow](http://musictheory.zentral.zone/huntsystem1.html) from [others](http://sagittal.org/). Or you could make up a new kind of staff and continue from there…

No matter which way you choose, you'll eventually find out that the FJS would have been of zero help to you… Unless you want to build a frankentone tuning.

## Where is the table of fifth shifts and formal commas?

You don't need one! Let the [calculators](calc.html) handle that.

## Why has 3/2 been chosen as the only implied interval and not, for example, 5/4?

I've outlined some of my reasoning on the [comparison](compare.html) page.

## Why is 65/63 the radius of tolerance?

I've explained this briefly in the [crash course](crash.html): what I really cared about was that the radius of tolerance be greater than 33/32 but less than 32/31. Why then 65/63 in particular? It is the mediant of these two, therefore the simplest possible number between them. As a matter of fact, for a long time the radius of tolerance used to be their geometric mean instead: the square root of 33/31. I would like to thank Kite Giedraitis, the creator of [color notation](http://tallkite.com/), for pointing out to me the simpler possibility of 65/63. The tiny difference does not break anything; in fact, it should be completely unnoticeable as the first prime number affected is 35617 (used to be m2<sup>35617</sup>, now A1<sup>35617</sup>). In terms of cents: the radius used to be 54.1**1**868538…¢ and now is 54.1**0**546743…¢.

The radius of tolerance used to be many other strange things in the past… including 256/243, and even the square root of 256/243 (yuck!). Each of these numbers has had its rationalization, but it probably cannot get more rational than 65/63 (pun intended).

## Why the fuss if I can define my pitches at the top of a score?

Sure, you can do that, but there are a few things you'll be missing out on:

- the ability to modulate to any foreign ‘key’ of your choice as you go, without the need for convoluted reassignments or cumbersome or verbose annotations;
- the ‘one size fits all’ property of the FJS which, with very little notational overhead, allows you to use the same system for *all* JI, making way for an intuitive and firm understanding of the FJS's – and JI's – inner workings and mental shortcuts;
- preservation of interval arithmetic – intervals still add up just as you would expect them to, which they wouldn't if you just accommodated all your pitches in the available note space haphazardly;
- thinking within the system – in other notation systems, the ratio-to-note transform is only used to accommodate the music on a staff, and all the thinking must be done by transforming note-to-ratio and back, whereas in the FJS, you can think in the notes, which is way easier and faster – like adding two binary numbers in binary instead of converting to decimal, adding, and converting the result back into binary;
- quick sightreading – even across scores.

If you care about none of these, the FJS might not be the right choice for you. I recommend you give it a chance anyway.

## What is this Just Intonation and natural tuning that you're so concerned about? Does that have anything to do with the New Age movement?

No.

Just Intonation is mathematics, and a theory of pitches and frequencies based on demonstrable acoustic properties of sound, as well as a form of music which uses these relations as the foundation of the chromatic palette that a piece uses, rather than equal divisions of the octave or what have you. The FJS is a formal system that facilitates intuitive understanding of the acoustic relations that JI researches.

New Age is neither a science nor a theory, so you perhaps should look into such ‘sciences’ and ‘theories’ such as [this](https://attunedvibrations.com/432hz/) alternative tuning that is ‘mathematically’ ‘in tune’ with ‘the universe’… Or maybe don't.
