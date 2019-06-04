# Porównanie FJS-u z innymi systemami

FJS to nie jedyny istniejący system zapisu JI. Wielu kompozytorów pisze muzykę mikrotonalną na własną rękę, co spowodowało stworzenie wielu szczególnych dla nich systemów dla wielu skal mikrotonalnych. Większość tych systemów jest jednak zaprojektowana z myślą o szczególnych rodzajach mikrotonalności, na przykład konkretnego mikrotonalnego podziału oktawy, zatem jest niezdatna do użycia przy JI.

FJS stworzyłem specjalnie dla JI, więc jest on dobrze dostosowany do jego zapisu. Niestety nie potrafi zapisać czegokolwiek innego. **Istnieją dwa inne szeroko używane systemy o podobnych zamierzeniach:** Helmholtza-Ellisa i Bena Johnstona. (Jest także jeszcze inny system – Sagittal – przeznaczony do notowania wszelkiej muzyki mikrotonalnej. Nie będziemy jednak go rozważać, ponieważ jest oparty na przedstawianiu wysokości, a więc niezależnie od dokładności wartości reprezentowanych przez znaki zawsze będzie niedokładny w zapisie JI, ponieważ interwały JI są nieskończenie dokładne, jak ułamki naturalne).

System Helmholtza-Ellisa (czasem rozszerzany do „HEWM” – Helmholtza-Ellisa-Wolfa-Monzo) to pierwsza próba rozszerzenia zapisu nutowego do JI. [Najnowszy stworzony dodatek](http://www.marcsabat.com/pdfs/notation.pdf) do HE, który mogłem znaleźć, jest autorstwa Marca Sabata i potrafi przedstawić 61-limit.

Z drugiej strony mamy system stworzony przez jednego człowieka – kompozytora JI Bena Johnstona. [Najbardziej szczegółowa rozprawa o tym systemie](https://www.jstor.org/stable/833435) wypisuje znaki aż do 31-limitu; tak samo jest w [poradniku Kyle'a Ganna](https://kylegann.com/BJNotation.html).

Od teraz będę porównywał obydwa te systemy z FJS-em.

## Wysokości niealterowane

HE, podobnie jak FJS, zakłada, że zwykły zapis pięcioliniowy przedstawia strój pitagorejski. W ten sposób – tak jak w FJS – każdy pitagorejski interwał odpowiada dokładnie jednemu interwałowi – każda kwinta strojona jest na 3/2. Do tego momentu HE i FJS są identyczne. Tak jak w FJS-ie sprzyja to spójności, naturalności i notowaniu opartym na interwałach, a nie z góry ustalonych wysokościach.

BJ, z drugiej strony, opiera się na czymś bardziej… innowacyjnym. Różni się definicjami niealterowanych dźwięków i alteracji. Zwyczajny zapis nutowy u BJ ma następujące znaczenie:

- *f*–*c*–*g*–*d* to ciąg kwint 3/2.
- *f*–*a*, *c*–*e* i *g*–*h* to naturalne tercje wielkie, czyli 5/4.
- Standardowe krzyżyki i bemole przedstawiają przesunięcie o 25/24, czyli Pitagorejski półton chromatyczny minus dwa komaty syntoniczne = 1&lt;<sup>25</sup>.

(Komat syntoniczny to 81/80).

Zakładam, że tak zrobiono, by *c*–*e*–*g*, *f*–*a*–*c* i *g*–*h*–*d* wszystkie były durowymi 4:5:6, a *c*–*es*–*g*, *f*–*as*–*c* i *g*–*b*–*d* – molowymi 10:12:15. Uzyskano więc w *c*–*d*–*e*–*f*–*g*–*a*–*h*–*c* intensywną skalę diatoniczną Ptolemeusza, czyli naturalną skalę durową, a w *c*–*d*–*es*–*f*–*g*–*as*–*b*–*c* naturalną molową.

Mniemam, że celem tego zabiegu było ułatwienie notacji 5-limitowej opartej na harmonii diatonicznej, kosztem dosłownie całej reszty systemu.

Ale i to się nie zgadza – nawet 5-limitową harmonię diatoniczną trudno w ten sposób zapisać. *d*–*a* to nie kwinta czysta – to 40/27. To oznacza, że BJ-owskie znaki dla komatu syntonicznego (plus i minus odpowiednio w górę i w dół) są rozsiane po całej pięciolinii. Joe Monzo pisze w [definicji](http://www.tonalsoft/enc/j/johnston.aspx) BJ w encyklopedii muzyki mikrotonalnej Tonalsoftu następująco:

> *Niektórzy teoretycy strojów uważają, że pomysł notacyjny Johnstona jest dobry, ale że mógłby być lepszy, gdyby tylko użyć do konstrukcji systemu skali pitagorejskiej zamiast 5-limitowej.*

W rzeczywistości brak spójności w niealterowanych wysokościach powoduje lawinę problemów w BJ – nie zdziw się więc, jeżeli będę się odnosił do tego głównego problemu z BJ praktycznie przez całą resztę tej strony.

Stroje niezawierające piątki – na przykład ten z „Dobrze nastrojonego fortepianu” La Monte Younga (który wsławił się używaniem jedynie czynników pierwszych 2, 3 i 7) – wymagają ogromnej ilości korekcji komatem syntonicznym w BJ, pomimo że nawet jeden czynnik 5 nie pojawia się w stroju. To po prostu absurdalne. (Na dole tej strony wyliczam różne tego typu porównania).

To wręcz niewykonalne zadanie przetransponować utwór w BJ. Utwór zapisany HE lub FJS można z łatwością przetransponować o kwintę 3/2, przesuwając pitagorejskie części nazw wysokości, a zostawiając alteracje mikrotonalne bez zmian. Da się to samo osiągnąć i przy niepitagorejskiej transpozycji, jak np. 5/4 – po prostu najpierw przesuń (pitagorejsko) o 81/64, a potem dodaj +5 do wszystkich nut. W BJ tak nie jest – transpozycja o interwał 3- czy 5-limitowy (o dalszych nie wspominając) jest o wiele bardziej skomplikowana. Jeżeli utwór jest w *G*-dur, przełożenie go na *D*-dur wymagałoby dodania komatu syntonicznego (plusa) przy każdym *a*, ponieważ *g*–*d* (3/2) to nie ten sam interwał, co *d*–*a* (40/27), a także jego odwrotności (minusa) do każdego *f*, ponieważ *g*–*b* (6/5) to nie to samo, co *d*–*f* (32/27). Partie instrumentów transponujących musiałyby zostać przepisane w zupełności z ogromną liczbą dodatkowych plusów i minusów, nawet jeżeli interwał, o który transponują, to coś tak prostego, jak mocny cały ton (9/8). To łatwo zauważyć w poradniku Kyle'a Ganna, który rozpisuje **siedem** różnych wersji szeregu alikwotowego od 16. do 32., zależnie od podstawy!

NB. *Kyle Gann napisał ciekawą kontrargumentację dot. tego problemu w swoim poradniku BJ. Udzielam na nią odpowiedź na dole tej strony.*

Punkt dla HE i FJS-u.

> **FJS: 1, HE: 1, BJ: 0.**

## Dobór znaków chromatycznych

I HE, i BJ tak jak FJS zapisują całą resztę JI za pomocą znaków chromatycznych przedstawiających skoki komatyczne. 

Oto lista aż do komatu 61. dla HE:

- 81/80, czyli komat 5.
- 64/63, czyli komat 7.
- 33/32, czyli komat 11.
- 27/26, czyli komat 13.
- 256/255, czyli komat 17. z dodanym czynnikiem pięciu.
- 513/512, czyli komat 19.
- 736/729, czyli komat 23.
- 145/144, czyli komat 29. z dodanym czynnikiem pięciu.
- 1024/1023, czyli komat 31. z dodanym czynnikiem jedenastu.
- 297/296, czyli komat 37. z dodanym czynnikiem jedenastu.
- 6561/6560, czyli komat 41. z dodanym czynnikiem pięciu.
- 129/128, czyli komat 43.
- 2304/2303, czyli komat 47. z dodanym czynnikiem czterdziestu dziewięciu.
- 160/159, czyli komat 53. z dodanym czynnikiem pięciu.
- 768/767, czyli komat 57. z dodanym czynnikiem trzynastu.
- 1281/1280, czyli komat 61. z dodanym czynnikiem siedmiu i pięciu.

Kilka z tych alteracji brzmi znajomo: 5., 7., 11., 19., 23. i 43. Pokrywają się one z FJS-owymi.

W oczy rzuca się fakt, że większość pozostałych alteracji – 17., 29., 31., 37., 41., 47., 53., 57. i 61. – zawierają oprócz 2, 3 i danej liczby pierwszej inne czynniki. Tak naprawdę jedyne komaty w HE, które mają formę liczb mostów, to te pierwsze plus 13. (Spośród liczb pierwszych pomiędzy 32 a 64 tylko jeden, 43., ma taką formę).

(Termin „liczba most” pochodzi ze [strony matematycznej](math.html)).

Dlaczego uważam, że ten fakt jest problematyczny? Otóż chociaż komaty pierwsze można wciąż wyrazić, wymaga to dwóch osobnych alteracji, co jest niepotrzebnie mylące. Wydaje się, że wszystkie komaty po 23. zostały dobrane ze zbioru ułamków postaci \\(\frac{n+1}{n}\\), często kosztem złożonego rozkładu na czynniki pierwsze. (Warto zauważyć, że taka postać nie gwarantuje, że powstały komat jest mały. Jednym dobrze znanym komatem w teorii mikrotonalnej muzyki jest 1029/1024 – różnica pomiędzy kwintą 3/2 a trzema septymowymi całymi tonami (8/7) – czyli liczba nie o takiej postaci, a jednak wyjątkowo drobna).

HE, odrzucając te komaty, wykorzystuje niektóre liczby pierwsze więcej niż raz i niepotrzebnie komplikuje reprezentacje bardziej złożonych interwałów JI. Na przykład 17/16 wymaga zapisania 16/15 przesuniętego o 256/255, a 16/15 samo w sobie to 256/243 przesunięte o 81/80. Używanie dwóch znaków przygodnych dla prostego interwału pierwszego? Na całe szczęście zlitowano się nad nami i żaden interwał pierwszy z 61-limitu nie wymaga *trzech* lub więcej znaków.

Jest też duża różnorodność wielkości komatów: komat 13., 27/26, jest ogromny w porównaniu do 41. – 6561/6560.

A co w takim razie z BJ? Oto lista aż do 31.:

- 81/80, komat 5., niemający zupełnie takiej samej funkcji, co inne; to bardziej znak do dostrajania (ponieważ utwóry zapisane w BJ są obficie posypane komatami syntonicznymi).
- 35/36, czyli komat 7. z dodanym czynnikiem pięciu.
- 33/32, czyli komat 11.
- 65/64, czyli komat 13. z dodanym czynnikiem pięciu.
- 51/50, czyli komat 17. z dodanym czynnikiem dwudziestu pięciu.
- 95/96, czyli komat 19. z dodanym czynnikiem pięciu.
- 46/45, czyli komat 23. z dodanym czynnikiem pięciu.
- 145/144, czyli komat 29. z dodanym czynnikiem pięciu.
- 31/30, czyli komat 31. z dodanym czynnikiem pięciu.

Jak widać, wszystkie te alteracje – oprócz 11. – zawierają czynnik 5, a 17. ma nawet podwójną 5. To prawdopodobnie korekcja służąca przeciwdziałaniu wszechobecnych piątek w BJ – zupełnie tak, jakby te czynniki były próbą skorygowania błędu, jakim było przypisanie 

Of course, all of these accidentals save the 11-comma have factors of five, and the 17-comma even has a double factor of five. This is probably an adjustment for the abundance of factors of five in Johnston's notation, so it's almost as if these commas are an attempt at correcting Johnston's mistake of mapping the natural notes to the Ptolemaic sequence. The abundance of superparticular commas is also notable, but seems to be coincidental in this case.

These factors cannot receive quite the same criticism as they do in Helmholtz-Ellis; they are quite logical in the context of the illogical choice of natural notes. 65/64 maps 8/5 to 13/8; 51/50 maps 25/24 to 17/16; 46/45 maps 45/32 to 23/16. They map simple 5-limit intervals to the primes.

The FJS is similar to Johnston in this respect; it always maps Pythagorean tuning to the primes, without any extraneous factors.

One point for Johnston and the FJS.

> **FJS: 2, HE: 1, Johnston: 1.**

## Origin of Accidentals

Where do these accidentals come from, then?

The answer is quite simple: neither Helmholtz-Ellis nor Johnston give any reason.

Helmholtz-Ellis has 81/80 (the **syntonic comma**) and 64/63 (the **celestial comma**, as named by Michael Harrison), which I assume are due to their historical importance. 33/32 and 27/26 also seem familiar as quarter-tone-esque intervals typical for the 11- and 13-limit respectively. The 17- and 19-comma are based on superparticular coincidences with powers of 2: 256/255 and 513/512 respectively. The 23-comma and 43-comma are the same as in the FJS. The rest of the commas seem quite random, like the result of a blind search for superparticular ratios within the harmonic series.

Johnston has 81/80 obviously to counter its own inconsistency, but the remaining commas are not recognizable, since they are mappings from the 5-limit to the prime intervals, and some of these mappings are indeed quite odd. One would think that a comma such as 256/255 would rather show up in Johnston than in Helmholtz-Ellis; but no, Johnston uses 51/50, which maps the *chromatic* rather than the diatonic semitone to 17/16.

Why is the question of the origin of accidentals important at all? In the FJS, all the commas are generated by an algorithm. Not so in Helmholtz-Ellis or Johnston. This means that the list must be memorized, or else constantly looked up. Having no access to these lists, one cannot even start.

For the FJS, this is one of the three most important advantages from using an algorithm. This is the equivalent of being "culturally neutral" in that respect.

One point for the FJS, half a point for Helmholtz-Ellis.

> **FJS: 3, HE: 1.5, Johnston: 1.**

## Form of Accidentals

Let's have a look at how to actually write these accidentals, then.

Helmholtz-Ellis has a dedicated list by Marc Sabat and Wolfgang von Schweinitz, [which can be seen here](http://www.marcsabat.com/pdfs/fulllegendE.pdf).

What's this? A unique glyph for each limit that has nearly no relation at all to the limit itself? Gee, yet another series of arbitrary shapes to memorize or constantly look up...

The only relation I could find between these shapes and the commas they represent was by inspection. Helmholtz-Ellis divides its accidentals into four categories by size, descending: third-tones, quarter-tones, commas, and schismas. There only is one third-tone (27/26) and only one quarter-tone (33/32); these take alterations of the traditional quarter-tone accidentals. Schismas up to the 31-limit take slashes and backslashes, or pluses and minuses, while commas take arrows. From 32 to 64, curly brackets are used around existing accidentals, again with no visible relationship.

5-limit accidentals additionally behave completely differently from the rest. Instead of being independent, they attach to Pythagorean accidentals. This means that it's impossible to indicate a 5-limit accidental without also writing a Pythagorean one. This is a little inconvenient, but not too much. In C major, writing a natural in front of an E just to attach a downward arrow to it seems a little weird, but it's not a huge downside.

Ben Johnston performs much, much better. While his commas remain a fixed list, the symbols for these commas are predictable from the 13-limit onwards. Only the following accidental forms are arbitrary: the 5-limit uses a plus and minus for a syntonic comma, the 7-limit uses a digit 7 shaped arrow (the same as in Helmholtz-Ellis) for 35/36, and the 11-limit uses an up or down arrow for 33/32. (Johnston's 7-limit accidental can also attach to sharps and flats, but unlike with Helmholtz-Ellis, this is not a disadvantage because this combination is not mandatory.)

Every accidental from the 13-limit onwards uses just the prime number itself for the positive adjustment... (yay, off to such a good start!)

...and the prime number *upside down* for the negative adjustment. Seriously? The only reason why this is not a **very serious** problem is because the 11-limit is notated with a special accidental and not the number "11", which looks the same when written upside down if the digit 1 is written as a vertical line. If not, then the first prime with this problem is 686989.

The FJS uses the number itself to represent all accidentals, and they are merged by multiplication. I assume Johnston's accidentals would merge simply by concatenation (which cannot be split unambiguously; 1097 is prime, and the concatenation of the prime numbers 109 and 7). However, I have never seen a note in Johnston's writings that had to be modified by more than one numerical accidental.

One point for the FJS, half a point for Johnston.

> **FJS: 4, HE: 1.5, Johnston: 1.5.**

## Behavior of Accidentals

Let's look at how the accidentals themselves behave. In other words, how do they modify the notes they precede?

In Helmholtz-Ellis, all positive accidentals are upward and all negative accidentals are downward. This is a generalization of the notion that a sharp raises the pitch and a flat lowers it.

In Ben Johnston, excluding 81/80, all positive accidentals are otonal and all negative accidentals are utonal. This is a generalization of the notion that a sharp adds fifths to a pitch and a flat subtracts some.

In the FJS, positive accidentals are always otonal and negative accidentals are always utonal.

This might be the most controversial section in this comparison, because this particular point is where I cannot provide direct evidence for why I believe an otonality/utonality indication is better than a direction indication. All I can say is that after having invented the FJS (which initially used the positive-upward, negative-downward system) and used it to think about and analyze JI tunings, at some point I have suddenly arrived at the conclusion that the positive-upward, negative-downward system overcomplicates things and that I will immediately change it to positive-otonal, negative-utonal. It has drastically simplified my thinking in the FJS and has stayed that way ever since then. Therefore I may merely hope that you, the reader, will arrive at the same conclusion with experience.

Ben Johnston would be nearly tied with the FJS on this point, except the really annoying fact that 81/80 is exempt from its own rule. But due to the fact that 81/80 works differently from the other accidentals and is seen as an adjustment instead, and due to the fact that pluses and minuses really convey the idea of up and down, I will overlook this minor sin.

(If you think positive-upward and negative-downward is better, you may give Helmholtz-Ellis the point, instead of the FJS and Johnston. It won't make a big difference for determining the winner in the end.)

One point for Johnston and the FJS.

> **FJS: 5, HE: 1.5, Johnston: 2.5.**

## Note Naming

We will now look at another aspect: note naming (and by extension, interval naming). While both Helmholtz-Ellis and Johnston give this aspect minimal importance, the FJS actually *starts* from here and builds up to staff notation from note naming.

Given its arbitrary glyphs, note naming is practically impossible in Helmholtz-Ellis, unless one were to use either a completely different system or type using the dedicated Helmholtz-Ellis font. I have not seen any such attempt so far.

As for Johnston, its accidentals look promising to allow something like this. But Johnston notation also has a strange system of arbitrary division of its accidentals when it is used to name notes. Some Johnston accidentals are written between the diatonic pitch class and a Pythagorean accidental, but there is no rule which ones. For example, representing a celestial comma below E♭ requires one to write E7♭+ (sic). The septimal accidental goes between the E and the ♭, while the + required to adjust is then written after the ♭. What is most hurtful is that the deviation downwards by a celestial comma is, in Johnston notation, expressed using two accidentals, as "downwards by a syntonic plus celestial comma, but then upwards by a syntonic comma again".

Johnston also has an elaborate system of pronunciation for its note names, which parallels that of the FJS but is much more complicated due to the 5-, 7-, and 11-commas having special glyphs. Kyle Gann gives "G-sharp-up-arrow-double-sub-seven-minus" as a possible note name. This is far more complicated than the most complicated possible note name in the FJS, consisting always of exactly (Pythagorean part)-(optional "super")-(otonal)-("sub")-(utonal), in that order. Gann writes that the combinations of accidentals have not been standardized in Johnston notation.

Still, this system is better than nothing. Sigh.

Neither system has any evidence of interval naming, which is a direct translation of tonic-less JI ratios.

One point for the FJS, half a point for Johnston.

> **FJS: 6, HE: 1.5, Johnston: 3.**

## Scope and Precision

All three systems notate JI pitch-perfectly, there is no arbitrary precision. (This is why I did not consider Sagittal in this analysis. Sagittal, being a universal language for all microtonality, has fixed precision and anyway it is based on completely different principles, as it is not limited to JI.)

As for scope, I could say that the FJS comes in at first place, Helmholtz-Ellis second, and Johnston third. But this is pretty pointless; just comparing the raw numbers as of now. It's insignificant that Helmholtz-Ellis can represent the 61-limit, but Johnston can only do the 31-limit, because Johnston could easily assign additional commas to extend his notation all the way to the 127-limit if he wanted. What is significant is that the FJS can represent **all** of Just Intonation and that it can do it **now**. Moreover, following the current design, neither Helmholtz-Ellis nor Johnston will *ever* be able to represent as much JI as the FJS can. Extending the scope for those notation systems requires someone to sit down, inspect the harmonic series, and actually do the work. The FJS does this automatically, meaning it will always be ahead.

This is the second extremely important advantage that the FJS has from using an algorithm: it literally has no limits.

(Still, given how far ahead Helmholtz-Ellis is, it can have half a point.)

One point for the FJS, half a point for Helmholtz-Ellis.

> **FJS: 7, HE: 2, Johnston: 3.**

## Automatization

The third, and final, advantage from using an algorithm is that the FJS can be automated. Writing any JI ratio allows the FJS representation to be calculated given only the radius of tolerance. This will allow the FJS to be integrated into music software in the future.

Helmholtz-Ellis can also do this. The only minor complication is the fact that sometimes two accidentals must be used for one purpose. But it is possible to fully automate it without any problems. There even exists an [online calculator](https://www.plainsound.org/HEJI/) that does this.

As for Johnston? The same website has a [Johnston to HE converter](https://www.plainsound.org/HEJI/johnston.html), which works if you want to let a computer do it. But often when composing music, we don't want to have to use a calculator all the time.

One of the merits of the FJS is that its algorithms are easy to implement in your head and carry out instantly without any external tools, which makes using it much faster. But if you wanted to do the same in Johnston's notation...

> *For every 5 in the numerator: Ascend one major 3rd. (Add plus if starting on a D.)*
>
> *For every 7 in the numerator: Ascend one minor seventh and add a 7. (Add plus if starting on a G, B, or D.)*
>
> *For every 9 in the numerator: Ascend one major second. (Add plus if starting on an E, G, B, or D.)*
>
> *For every 11 in the numerator: Ascend one perfect fourth and add ↑. (Add minus if starting on an A or F.)*
>
> *For every 13 in the numerator: Ascend one minor sixth and add a 13. (Add minus if starting on an F.)*
>
> *For every 17 in the numerator: Add a sharp and a 17.*
>
> *For every 19 in the numerator: Ascend a minor third and add a 19. (Add plus if starting on a D.)*

This is just a fragment of the long list of rules required to derive the notation from JI ratios in Johnston notation, as given in Kyle Gann's guide.

What's especially agitating is the presence of extra rules for adding pluses or minuses if starting on very specific notes, which are different for every prime. (I do understand there is a deterministic relation between the interval and the notes on which pluses/minuses have to be added for said interval, but it still doesn't change the fact that this is a huge overcomplication!)

And yes, this is just an *excerpt* of the Johnston notation equivalent of something that can be summarized in a single concise algorithm in the FJS.

One point for Helmholtz-Ellis and the FJS.

> **FJS: 8, HE: 3, Johnston: 3.**

## Examples

All right, you may think, here's all this abstract analysis, but what about actual examples? How do the three systems perform *in practice*?

Below I've provided examples of actual common JI contexts, so it can be seen how all three systems compare in their efficiency within these contexts. (To name notes in Helmholtz-Ellis, I just use +5, +7, etc. for upward accidentals, and −5, −7, etc. for downward accidentals, to reflect its pitch notation.)

### The Harmonic Series 1-32

**FJS.** This table took me about a minute to write.

| C               | C               | G               | C              | E<sup>5</sup>   | G              | B♭<sup>7</sup>  | C |
| D               | E<sup>5</sup>   | F<sup>11</sup>  | G              | A♭<sup>13</sup> | B♭<sup>7</sup> | B<sup>5</sup>   | C |
| D♭<sup>17</sup> | D               | E♭<sup>19</sup> | E<sup>5</sup>  | F<sup>7</sup>   | F<sup>11</sup> | F♯<sup>23</sup> | G |
| G♯<sup>25</sup> | A♭<sup>13</sup> | A               | B♭<sup>7</sup> | B♭<sup>29</sup> | B<sup>5</sup>  | B<sup>31</sup>  | C |

**Helmholtz-Ellis.** This table took me roughly two minutes to write, being initially uncertain of my results. I used the calculator to verify them.

| C       | C    | G     | C    | E−5     | G    | B♭−7    | C |
| D       | E−5  | F+11  | G    | A−13    | B♭−7 | B−5     | C |
| D♭+5−17 | D    | E♭+19 | E−5  | F−7     | F+11 | F♯+23   | G |
| G♯−5−5  | A−13 | A     | B♭−7 | B♭+5+29 | B−5  | C−11−31 | C |

**Ben Johnston.** This table took roughly three minutes, given that I have actually seen this fragment of the harmonic series in Johnston's system before.

| C    | C    | G    | C   | E    | G   | B7♭   | C |
| D    | E    | F↑   | G   | A♭13 | B7♭ | B     | C |
| C♯17 | D    | E♭19 | E   | F7+  | F↑  | F♯23+ | G |
| G♯   | A♭13 | A+   | B7♭ | B♭29 | B   | B31   | C |

### La Monte Young's "Well-Tuned Piano"

**Young's notation.** (I write the scale as ascending, not as a sequence of keys on the keyboard, so G♯ comes before G as it is a lower pitch.)

E♭, E, F, F♯, G♯, G, A, B♭, B, C♯, C, D, E♭.

**FJS.** Exactly as concise as Young, without relying on an arbitrary keyboard mapping. Also notates the tonic as its true pitch with reference to A = 440 Hz, the tuning of Young's piano.

D<sub>7</sub>, E, E<sub>7</sub>, F<sup>7</sup>, G<sup>7</sup>, G, A, A<sub>7</sub>, B♭<sup>7</sup>, C<sup>7</sup>, C, D, D<sub>7</sub>.

Here is what it would be if it used E♭ to notate the tonic; a little less concise.

E♭, F<sup>7</sup>, F, G♭<sup>49</sup>, A♭<sup>49</sup>, A♭<sup>7</sup>, B♭<sup>7</sup>, B♭, C♭<sup>49</sup>, D♭<sup>49</sup>, D♭<sup>7</sup>, E♭<sup>7</sup>, E♭.

**Helmholtz-Ellis.** Just as concise as the FJS on E♭.

E♭, F−7, F, G♭−7−7, A♭−7−7, A♭−7, B♭−7, B♭, C♭−7−7, D♭−7−7, D♭−7, E♭−7, E♭.

**Ben Johnston.** Very inconcise. Also note the abundance of syntonic comma accidentals, in a tuning with no factor of five.

E♭, F7++, F+, G77♭+, A77♭++, A7♭+, B7♭+, B♭, C77♭+, D77♭+, D7♭, E7♭+, E♭.

### Terry Riley's "Harp of New Albion"

**Riley's notation.**

C♯, D, D♯, E, E♯, F♯, G, G♯, A, A♯, B, B♯, C♯.

**FJS.** The Pythagorean pitch classes match Riley's.

C♯<sup>5</sup>, D, D♯<sup>5</sup>, E, E♯<sup>25</sup>, F♯<sup>5</sup>, G, G♯<sup>5</sup>, A, A♯<sup>25</sup>, B<sup>5</sup>, B♯<sup>25</sup>, C♯<sup>5</sup>.

**Helmholtz-Ellis.** On par with the FJS. Virtually identical.

C♯−5, D, D♯−5, E, E♯−5−5, F♯−5, G, G♯−5, A, A♯−5−5, B−5, B♯−5−5, C♯−5.

**Ben Johnston.** Allegedly optimized for 5-limit harmony. This sequence took me about three minutes to correctly derive.

C♯−, D−−, D♯−, E−, E♯−, F♯−, G−−, G♯−, A−, A♯−, B−−, B♯−, C♯−.

### Notation Comparison

This [comparison](../assets/comparison.pdf) of the three systems in practice uses a 12-bar harmonization of a medieval melody in the Dorian mode on D in 5-limit just intonation. The fact that it's 5-limit should give Johnston's system an unfair advantage... well, see for yourself.

Listen to it:

<audio controls><source src="../assets/audio_6.mp3" type="audio/mpeg"></audio>

## Verdict

Unsurprisingly, the FJS is the best existing notation system for Just Intonation. Helmholtz-Ellis notation, unsurprisingly, is quite bad, being the first attempt at such a task. Johnston notation, given its absurd choice of the natural notes, is considerably worse than even Helmholtz-Ellis; its equal score is a result of figurative transfer error. The FJS significantly exceeds both Helmholtz-Ellis and Johnston notation in its task of notating JI.

## A Note to Kyle Gann

As mentioned, Kyle Gann's guide for Ben Johnston's system contains an addendum where he explains why he prefers Johnston over Helmholtz-Ellis despite its very inconvenient choice of natural notes.

You explain that finding the value of B♭ in the key of C is easier in Johnston than in Helmholtz-Ellis. In Johnston, C to B is 15/8, and adding a flat lowers it by 25/24, resulting in 9/5. In Helmholtz-Ellis, however, C to B is 243/128, and adding a flat lowers it by 2187/2048, and only a calculator can tell you that this results in 16/9. Considering consistency as one of the less important virtues, you dismiss Helmholtz-Ellis because apparently it will force you to constantly multiply and divide by four-digit numbers.

I respond to this argument because it relies on the fact that Helmholtz-Ellis notation, like the FJS, is based on the Pythagorean scale. So if this argument works against Helmholtz-Ellis, it should also work against the FJS.

I also respond because this argument is a non-sequitur.

Ben Johnston notation does force the user to constantly multiply and divide, because even the simplest notes are made of many factors of five juggled back and forth and adjusted for with pluses and minuses. Because the 5-limit scale is not consistent, it also forces the user to always think in terms of the seven diatonic pitches, rather than intervals.

When you attempt to use Helmholtz-Ellis notation, you automatically assume the same restrictions that you were bound to with Ben Johnston notation: trying to figure out the value of a minor seventh using a major seventh minus a chromatic semitone. You criticize Helmholtz-Ellis for the fact that one of these intervals now requires four-digit numbers to represent, while Johnston usually works with up to two-digit numbers.

The minor seventh is right next to you on the circle of fifths; it's just two perfect fourths, both 4/3 (again, unlike in Johnston, where C-F is 4/3 but F-B♭ is 27/20). Why would you go up five fifths (major seventh) to then immediately return seven fifths back (chromatic semitone)? Would you travel from North Carolina to South Carolina stopping by in Maine? Just because C writes its minor seventh with a flat doesn't mean that you have to think of it in those terms; you do this because Johnston forces you to. Take a modulation to D. There, the minor seventh is a natural note, but unlike in Johnston notation, it still has the same size nonetheless.

Your guide to figuring out the ratios from notation does indeed start at looking at the natural notes and figuring out the interval between them. This is because this interval *depends* on the natural notes in Johnston notation, so there indeed is no other way to figure it out. For example, D to E is 10/9, which is different from C to D, 9/8. Helmholtz-Ellis and the FJS do not have this absurd restriction. Every major second is 9/8. This allows a composer to be freed from the restriction of the diatonic scale when thinking in JI, and it allows one to translate interval names directly to ratios.

You could have arrived at the fact that C to B♭ is 16/9 in so many different (and easier) ways than 243/128 times 2048/2187; in fact, you probably chose the most inconvenient possible way to arrive at 16/9 (the equivalent of the only possible way to arrive at 9/5 in Johnston).

For example, you could have noticed that both C and B♭ have no microtonal accidentals, so by the definition of the natural notes, the minor seventh between them is Pythagorean, hence 16/9. Or you could have noticed that it is two 4/3 fourths, hence 16/9. Or you could have noticed that it is the inversion of a 9/8 whole tone, hence 16/9. The FJS gives you such a freedom of quickly and efficiently reading and writing, as opposed to the slow, tedious process that Johnston enforces.

The way I see it, you are used to handcuffed maneuvers in Johnston notation, and are paralyzed when Helmholtz-Ellis (or the FJS) free you, because you got used to the handcuffs over the years of being handcuffed.

Switch to the FJS. It will make the math and notation part of your compositional pursuit **so much easier**.

Or don't, and continue juggling syntonic commas.

Others may have different criteria.
