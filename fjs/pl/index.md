---
title: FJS (Funkcyjny System Stroju Naturalnego)
---

> *Zaletą dobrze skonstruowanego języka jest to, że jego uproszczona notacja często staje się źródłem znaczących teorii.*
>
> — Pierre-Simon Laplace

---

<img src="../assets/impression.png" alt="Tak wygląda FJS!">

# Witamy

Witamy na stronie Funkcyjnego Systemu Stroju Naturalnego (FJS)!

## Czym jest FJS?

**Funkcyjny System Stroju Naturalnego** (lub: „Funkcyjny System Naturalny”; ang. „Functional Just System”, w skrócie **FJS**) to nowa, rewolucyjna notacja dla muzyki w strojach naturalnych (ang. „Just Intonation”, w skrócie **JI**). By móc odzwierciedlić dowolny taki strój, rozszerza ona tradycyjny zapis nutowy. Swoim pięknem, pomysłem i prostotą przewyższa istniejące systemy notacji dla JI – w to włączając te Helmoltza-Ellisa i Bena Johnstona – co jest moim dotychczas największym osiągnięciem w dziedzinie muzyki mikrotonalnej.

FJS:

- jest środkiem **wyrażenia** nieokiełznanych ułamków i proporcji występujących w strojach naturalnych za pomocą języka muzycznego, który rozumieją wszyscy muzycy – zapisu nutowego na pięciolinii;
- **wyjątkowo łatwo** nauczyć się go czytać i pisać, a jego prostota przerasta inne notacje JI-owe;
- stanowi **bijekcję**, względnie izomorfizm – czyli odwzorowanie jednoznaczne w obie strony – pomiędzy symbolem a dźwiękiem; każdemu dźwiękowi odpowiada dokładnie jeden zapis, który przedstawia dokładnie ten jeden dźwięk;
- pozwala zapisać **cały bezmiar** strojeń naturalnych – bez narzuconego z góry ograniczenia – przez co można w nim sformułować nie tylko to samo, ale i **więcej** niż to, co umożliwiają inne notacje;
- jest **nieskończenie dokładny**, tzn. każdy dźwięk odzwierciedla jedną liczbę wymierną, a nie liczbę o skończonej ilości cyfr po przecinku;
- jest **wygenerowany proceduralnie** przez algorytm, więc otwiera możliwości zapisu komputerowego, który może być w zupełności zautomatyzowany – niepotrzebne są tabele czy odgórne dane. (Na tej stronie znajdują się przeznaczone do tego kalkulatory).

## Czym jest strojenie naturalne?

Jeżeli zadajesz takie pytanie, dobrej odpowiedzi prawdopodobnie nie znajdziesz tu!

Przeważająca większość współczesnej (a także nowożytnej) muzyki opiera się na **(dwunastostopniowym) stroju równomiernie temperowanym**, czyli takim, który dzieli oktawę na 12 równych interwałów. **Stroje naturalne** są metodami strojenia i wyrażania wysokości dźwięków, które znacząco różnią się od tego ogólnie przyjętej równomiernej temperacji; opierają się one na seriach alikwotowych oraz nieodłącznych właściwościach akustycznych dźwięku. I choć JI nie używa się już w muzyce klasycznej (czy w większości nurtów muzyki współczesnej), nadal ma wagę dla teorii muzyki, ponieważ naturalne stroje były w kręgach dawnych kultur i w średniowieczu codzienną rzeczą, a dalej stanowią podstawę muzyki tradycyjnej poza Europą. Znajdują też swoje miejsce w muzyce awangardowej. (Nie wspominam już o aspekcie estetycznym tak strojonej muzyki).

By zrozumieć i móc sprawnie posługiwać się FJS, potrzebna jest podstawowa znajomość strojów naturalnych (oprócz niezaawansowanych zasad muzyki). **Im większe doświadczenie** ze strojami naturalnymi i muzyką tworzoną w tych strojach posiądziesz, **tym sprawniej i płynniej** będziesz operował FJS.

Jeżeli życzysz sobie zapoznać się z podstawową teorią strojenia naturalnego, polecam [„Just Intonation Explained”](https://www.kylegann.com/tuning.html) autorstwa Kyle'a Ganna, twórcy wielu utworów w JI.

## Jak prosty jest FJS?

Te siedem reguł wystarczy, by móc zapisać dowolny utwór strojony naturalnie w FJS-ie. Tak jest – tylko siedem.

1. Wszystkie nuty bez FJS-owych alteracji (czyli liczb) przedstawiają strój pitagorejski – wszystkie oktawy są wielkości 2/1, a kwinty czyste – 3/2.

2. Każdemu interwałowi alikwotowemu związanego z liczbą pierwszą ponad 3 (tj. 5/4, 7/4, 11/8, itd.) przypisujemy dokładnie jedno przybliżenie pitagorejskie za pomocą „głównego algorytmu FJS”, który wynajduje najprostsze przybliżenie, które jest nie dalej niż o narzucony promień tolerancji (ang. „radius of tolerance”) od danego interwału. Alteracji odpowiadającej różnicy pomiędzy jednym a drugim przypisujemy znak chromatyczny, notowany właśnie tą liczbą pierwszą.

3. Dodatnie FJS-owe alteracje odpowiadają skokom od pitagorejskiego przybliżenia do podstawowych interwałów pierwszych, a ujemne – w drugą stronę. Dodatniość nie jest związana z kierunkiem skoku – dodatnie alteracje są zawsze otonalne, a ujemne są utonalne.

4. Alteracje składa się, wymnażając ze sobą osobno otonalne i utonalne skoki – +5 po podwojeniu stanie się więc +25. Otonalne i utonalne części zawsze są zapisywane osobno. Jeżeli iloczyn jest za duży, można zapisać po prostu same czynniki, przedzielając je przecinkami.

5. Wysokości nazywa się zwyczajnymi nazwami nutowymi, po których następują alteracje otonalne w indeksie górnym i utonalne w dolnym.

6. Na pięciolinii przed nutą i zwyczajnym znakiem przygodnym zapisuje się najpierw otonalne alteracje (jeżeli występują), następnie znak minus razem z utonalnymi alteracjami (jeżeli te występują).

7. Cała reszta to dodatkowe udogodnienia.

## Czemu FJS?

Skąd w ogóle potrzeba na taką notację, jak FJS? Co zmotywowało mnie do zaprojektowania jej? Jaką korzyść muzykom mogłaby przynieść? Po co jej używać, i jak mogłaby pomóc kompozytorom i teoretykom JI? Dlaczego nawet 

Why even the need for the FJS? What is the motivation that drove me to create this notation system? What benefits for musicians are tied to the usage of this system? Why use it, and how does it help with composing and analyzing Just Intonation music? Why even try to map Just Intonation onto staff notation in the first place? After all, staff notation is designed for music revolving around the circle of fifths and the diatonic scale, while Just Intonation is a bunch of ratios connected in beautiful, but musically alien, ways. Just Intonation music works very differently from the music we are used to notating, and so any attempt to present Just Intonation music in such a way seems like it should be clunky and unnatural.

Why, then, did I choose to pursue this idea despite this difficulty? The reason is because staff notation is a language for communication between musicians, and while it is not perfect, it is universal – every musician can communicate in it. Furthermore, as musicians, we are accustomed to thinking in its terms. Wouldn't it be very useful to translate the beautiful and regular, but quite unintuitive, language of Just Intonation into the old, familiar language of staff notation? Wouldn't it allow musicians to comprehend Just Intonation with more intuition, and extend its tools to all the processes – composition, analysis, and performance – of conventional music?

**Indeed, it would.**

The FJS is much more than just a notation system for Just Intonation. The construction of the FJS not only allowed me to make sense of the seemingly shapeless mess that Just Intonation first presented to me. It also showed me that staff notation is much more logical and much more connected to Just Intonation than I ever would have thought. I invite you, as well, to comprehend the beauty and simplicity of the FJS, and understand how its inner musical cogs connect the workings of two concepts that seem completely alien to each other.

One concept I would compare the FJS to is Lojban: a constructed language that was created to see what would happen to people's thinking when the language they used was completely logical and actually made sense. I believe the FJS to be a Lojban for microtonal music. I think that, in the same way Lojban makes people think in logic terms, the FJS will help musicians *think* in JI, and their composition, analysis, and performance will be able to blend in much better with their existing knowledge of music theory, as the FJS allows existing music theory to be intertwined with JI music theory.

## What Now?

- Go here for a [crash course](crash.html) in the FJS. With a mediocre understanding of JI, learning the FJS takes mere minutes.
- Read the [complete formal description](rules.html) for a reference of the exact rules when in doubt.
- See the [mathematics](math.html) behind the FJS. Go here for the proof that the FJS is bijective and the proofs of its many beautiful properties.
- See a [comparison](compare.html) of the FJS with two competing notation systems: Helmholtz-Ellis and Ben Johnston notation, and understand why the FJS exceeds both of them.
- Use the website's [calculators](calc.html) to automatically perform FJS-related calculations. **Advice:** bookmark these immediately.
- See many more [examples](examples.html) of the FJS in usage.

**What will the FJS mean for you?**
