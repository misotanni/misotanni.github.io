---
title: The Functional Just System
---

> *Such is the advantage of a well-constructed language that its simplified notation often becomes the source of profound theories.*
>
> — Pierre-Simon Laplace

---

# Welcome

Welcome to the website of the Functional Just System (FJS)!

## What is the FJS?

The **Functional Just System** (or **FJS**) is a new revolutionary notation system for music in **Just Intonation** (**JI**). It uses an extension of traditional staff notation to notate any Just Intonation based tuning system. With its beauty, ingenuity and simplicity, it outmatches existing notation systems for this purpose, including both Helmholtz-Ellis notation and Ben Johnston notation; it is my greatest invention and proudest accomplishment so far in the domain of microtonal music.

The Functional Just System:

- is a means of **translation** between the raw ratios of Just Intonation and the musical language understood universally by all musicians - staff notation;
- is **extremely easy** to learn to read and write, and its simplicity far surpasses that of other Just Intonation notation systems;
- provides a **bijection** or isomorphism between notation and sound, every tone can be notated in exactly one way and can be written and read unambiguously;
- can notate **all of the infinity** of Just Intonation, not only up to a certain fixed prime limit, and can hence express a **superset** of the meanings possible in other notation systems;
- has **infinite resolution**, thus each tone is notated "pitch perfect", not only up to a certain fixed precision;
- is **procedurally generated** at every step by an algorithm, and so it is perfect for usage in computer music, and can be completely automated without the need for memorization or look-up tables. (This website contains several calculators for these purposes.)

**What will the FJS mean for you?**

## What Is Just Intonation?

If you have to ask this question, then you are probably in the wrong place!

Most modern music relies on a tuning system known as **twelve-tone equal temperament** (or simply **equal temperament**), which divides the octave into twelve equal intervals. **Just Intonation** (**JI**) is a method of tuning which differs significantly from this mainstream tuning system. Its principles of tuning are based on the harmonic series and the natural acoustic properties of sound. Although JI is no longer used in conventional music, it remains important to music theory because it was commonplace in ancient cultures and the Middle Ages, is still widely used in traditional music of non-Western cultures, and has been employed in avant-garde music. (Not mentioning its aesthetic merit, of course.)

A basic level of familiarity with, and understanding of, Just Intonation is required (in addition to elementary music theory) to be able to understand and use the FJS effectively. In general, **more experience** with Just Intonation leads to **higher proficiency and fluency** in using the FJS.

For the most basic acquaintance with Just Intonation, I recommend [Just Intonation Explained](https://www.kylegann.com/tuning.html) by Kyle Gann.

## How Simple Is the FJS?

The following seven rules are all the components needed to express everything required to notate an arbitrary piece of Just Intonation music in the FJS. That's right - only seven rules.

1. All notes with conventional accidentals represent Pythagorean tuning. All octaves are 2/1 and all perfect fifths are 3/2.

2. Every prime interval above 3/2 (that is, 5/4, 7/4, 11/8, etc.) is given a unique Pythagorean approximation according to the FJS master algorithm. This algorithm finds the simplest Pythagorean approximation that is within the radius of tolerance of the target. The difference between them is assigned a unique accidental for that prime, and the prime number itself is used as the symbol.

3. All FJS accidentals are positive in the direction in which the Pythagorean approximation becomes the target prime interval, and negative otherwise. Positive is not always upward and negative is not always downward; positive is always otonal, while negative is always utonal.

4. Compound accidentals are represented by multiplying the otonal parts and multiplying the utonal parts, so a double +5 is +25. Otonal and utonal are always written separately. If the numbers are too large, the factors may be written out with commas in between.

5. For note names, the positive compound accidental is added as a superscript and the negative compound accidental is added as a subscript to the right of the conventional name.

6. For staff notation, the positive compound accidental is written first (if any), then the negative compound accidental with a minus sign in front (if any), then any conventional accidental, then the note.

7. All else is shorthand.

## Why the FJS?

Why even the need for the FJS? What is the motivation that drove me to create this notation system? What benefits for musicians are tied to the usage of this system? Why use it, and how does it help with composing and analyzing Just Intonation music? Why even try to map Just Intonation onto staff notation in the first place? After all, staff notation is designed for music revolving around the circle of fifths and the diatonic scale, while Just Intonation is a bunch of ratios connected in beautiful, but musically alien, ways. Just Intonation music works very differently from the music we are used to notating, and so any attempt to present Just Intonation music in such a way seems like it should be clunky and unnatural.

Why, then, did I choose to pursue this idea despite this difficulty? The reason is because staff notation is a language for communication between musicians, and while it is not perfect, it is universal - every musician can communicate in it. Furthermore, as musicians, we are accustomed to thinking in its terms. Wouldn't it be very useful to translate the beautiful and regular, but quite unintuitive, language of Just Intonation into the old, familiar language of staff notation? Wouldn't it allow musicians to comprehend Just Intonation with more intuition, and extend its tools to all the processes - composition, analysis, and performance - of conventional music?

**Indeed, it would.**

The FJS is much more than just a notation system for Just Intonation. The construction of the FJS not only allowed me to make sense of the seemingly shapeless mess that Just Intonation first presented to me. It also showed me that staff notation is much more logical and much more connected to Just Intonation than I ever would have thought. I invite you, as well, to comprehend the beauty and simplicity of the FJS, and understand how its inner musical cogs connect the workings of two concepts that seem completely alien to each other.

One concept I would compare the FJS to is Lojban: a constructed language that was created to see what would happen to people's thinking when the language they used was completely logical and actually made sense. I believe the FJS to be a Lojban for microtonal music. I think that, in the same way Lojban makes people think in logic terms, the FJS will help musicians *think* in JI, and their composition, analysis, and performance will be able to blend in much better with their existing knowledge of music theory, as the FJS allows existing music theory to be intertwined with JI music theory.

## What Now?

- Go here for a [crash course](crash.html) in the FJS. With a mediocre understanding of JI, learning the FJS takes mere minutes.
- Read the [complete formal description](rules.html) for a reference of the exact rules when in doubt.
- Read the [original article](guide.html) on the FJS.
- See the [mathematics](math.html) behind the FJS. Go here for the proof that the FJS is bijective and the proofs of its many beautiful properties.
- See a [comparison](compare.html) of the FJS with two competing notation systems: Helmholtz-Ellis and Ben Johnston notation, and understand why the FJS exceeds both of them.
- Use the website's [calculators](calc.html) to automatically perform FJS-related calculations. Advice: bookmark these immediately.
- See many more [examples](examples.html) of the FJS in usage.

**Start discovering the Functional Just System now!**
