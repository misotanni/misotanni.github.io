# Die komplette formale Erläuterung

Diese Seite ist *de facto* ein Handbuch des FJS. Es enthält alle Regeln, die du brauchst, um den FJS zu benutzen, Kurzschrift einbezogen. Es wird dir aber nicht besonders nützlich sein, es sei denn, du hast schon den [Crash-Kurs](crash.html) gelesen.

Alles, was experimentelle Elemente angeht, ist mit dem Symbol (\*) markiert.

## Reduzierte Formen

> Die übliche reduzierte Form beträgt $$\text{red}(d)=d \cdot 2^{-\lfloor\log_2 d\rfloor}$$
>
> Die ausgeglichene reduzierte Form beträgt $$\text{reb}(d)=\frac{1}{\sqrt{2}} \text{red}(\sqrt{2} \cdot \text{red}(d))$$

## Der FJS-Master-Algorithmus

> 1. Lese die eingegebene Primzahl und nenne sie *p*.
> 2. Fange an mit *k* = 0.
> 3. Betrachte das Intervall aus *k* pythagoreischen Quinten und nenne es *P*.
> 4. Beträgt die Differenz zwischen *p* und *P* weniger als der Toleranzradius?
> 5. Falls ja, dann ist *k* die Generatorfunktion. Ende.
> 6. Falls nicht, gehe zum nächsten *k* in der folgenden Reihe: (0, 1, −1, 2, −2, 3, −3, ...) und wiederhole ab dem 3. Schritt.
>
> Beim 4. Schritt ist die gemeinte Differenz der **Betrag** der Cent-Größe von $$\text{reb}\left( \frac{p}{3^k} \right)$$

## Das formale Komma

> Das formale Komma einer Primzahl *p* mit Generatorfunktion *g* ist:
>
> $$\text{comma} (p)=\text{reb}\left( \frac{p}{3^g} \right)$$

## Die Umrechnung jedes JI-Verhältnisses in die entsprechende FJS-Form

> 1. Faktorisiere.
> 2. Für jede Primzahl *p* größer als 3 mit einer Potenz α<sub>*p*</sub>, speichere die α<sub>*p*</sub> für jede *p* und multipliziere das JI-Verhältnis mit
>
> 	$$(\text{comma} (p))^{-\alpha _p}$$
>
>	wobei $$\text{comma}(p)$$ das formale Komma von *p* ist.
>
> 3. Das Ergebnis wird stets pythagoreisch sein. Rechne es in die FJS-Form um.
> 4. Füge jetzt die α<sub>*p*</sub> als Versetzungszeichen hinzu – positiv heißt otonal, negativ utonal.
> 5. Reduziere, und reguliere die Oktave.

## Die Umrechnung jeder FJS-Darstellung in das entsprechende Frequenzverhältnis

> 1. Rechne den pythagoreischen (üblichen) Teil des Intervalls in ein pythagoreisches Verhältnis um.
> 2. Für jedes otonale Versetzungszeichen *p*, multipliziere mit dem formalen Komma von *p*. Für utonale Versetzungszeichen dividiere.
> 3. Reduziere, und reguliere die Oktave.

## FJS Interval Arithmetic

> - Die Summe zweier FJS-Intervalle zweier Frequenzverhältnisse ist die FJS-Darstellung des Produktes der Verhältnisse.
> - Die Differenz zweier FJS-Intervalle zweier Frequenzverhältnisse ist die FJS-Darstellung des Quotients der Verhältnisse.
> - Die Umkehrung eines FJS-Intervalls eines Frequenzverhältnisses ist die FJS-Darstellung des Kehrwertes des Verhältnisses.
> - Um zwei FJS-Intervalle zueinander zu addieren, addiere die pythagoreischen Teile (die üblichen Intervallteile) und verbinde die FJS-Versetzungszeichen.
> - Um FJS-Intervalle zu subtrahieren, subtrahiere die pythagoreischen Teile, dann vertausche das Otonale mit dem Utonalen bei dem zweiten Intervall, dann verbinde. Ein Intervall zu subtrahieren ist dasselbe, als seine Umkehrung zu addieren.
> - Um ein FJS-Intervall umzukehren, kehre den pythagoreischen Teil um, dann vertausche das Otonale mit dem Utonalen.
> - Du kannst auch ein Intervall zu einer Note addieren, oder eine Note von einer anderen Note subtrahieren.

## Regeln für das Erzeugen von FJS-Notennamen

1. Für übliche Notenschrift benutzt das FJS die pythagoreische Stimmung. D.h. C–E ist 81/64, C–Des ist 256/243, Des–Cis ist 531441/524288, usw.

2. Ein einziges Komma der Primzahl *p* (größer als 3) wird die Zahl „p“ selbst (am besten hochgestellt) benutzen, um eine Abweichung um dieses Komma **in der Originalrichtung** darzustellen. Z.B. E<sup>5</sup> ist um 81/80 **niedriger** als E (da das Komma von 5 80/81 beträgt); F<sup>11</sup> ist um 33/32 **höher** als F (da das Komma von 11 33/32 beträgt). Diese Notennamen spricht man aus, indem die Zahl dazugeklebt wird: „E-fünf“, „F-elf“. Dazu kann optional das Präfix „super“ hinzugefügt werden, um die Trennung zu betonen. Gedenke, dass die Originalrichtung erhalten bleibt.

3. Ein einziges Komma der Primzahl *p* wird die Zahl „p“ tiefgestellt benutzen, um eine Abweichung um diese Komma **in der Gegenrichtung der Originalrichtung** darzustellen. Z.B. Es<sub>5</sub> ist um 81/80 höher als Es; A<sub>19</sub> ist um 513/512 niedriger als A. Diese Notennamen spricht man mithilfe des Präfix „sub“ aus: „Es-sub-fünf“, „A-sub-neunzehn“.

4. Um verbundene Komma-Abweichungen **in derselben Orientation** (also alle otonal oder alle utonal) darzustellen, **multipliziere** die Zahlen der Kommas (nicht: addiere oder verkette). Diese Zahlen sind alle Primzahlen. Eine Summe oder Verkettung von Primzahlen kann nicht zurück in ihre Bestandteile zerlegt werden, aber wegen des Fundamentalsatzes der Arithmetik, ein Produkt schon. Wir können also eindeutig sagen, welche Primzahlen multipliziert waren, und die Reihenfolge macht keinen Unterschied. Z.B. Gis<sup>25</sup> ist um zweimal 81/80 niedriger als Gis und es gibt keine andere Interpretation, da 25 = 5 × 5 und es gibt keine andere Primfaktorzerlegung.

5. Das Produkt ermöglicht meistens eine Primfaktorzerlegung im Kopf. Die allermeisten häufigen Produkte sind alle bekannt: 25, 35, 49, 125, 625, 343, 55, 77, 65, 121. Ist es aber gar nicht klar, was für Primfaktoren eine Zahl hat, z.B. 119 = 7 × 17, kann man eine alternative Notation benutzen, wobei alle Faktoren nacheinander geschrieben werden, dazwischen Kommas (im Sinne: Satzzeichen). Das obere Beispiel kann man z.B. als Gis<sup>5,5</sup>, und beide Schreibweisen sind korrekt. Falls Kommas nacheinander geschrieben werden, ist es üblich, sie in nicht-absteigender Reihenfolge zu schreiben. D.h. D<sup>119</sup> ist eher D<sup>7,17</sup> als D<sup>17,7</sup>. Diese zwei Extremen kann man auch beliebig kombinieren, wobei manche der Faktoren multipliziert werden, d.h. G<sup>11,125</sup> ist eine korrekte Darstellung von G<sup>1375</sup>. Die Aussprache ist wie üblich: „G-elf-einhundertfünfundzwanzig“

6. Produkte positiver und negativer Kommas sind voneinander unabhängig. Sie werden gleichzeitig hoch- und tiefgestellt geschrieben, z.B. F<sup>7</sup><sub>5</sub> bedeutet F erniedrigt um 64/63 und dann erhöht um 81/80 (oder anders herum: zuerst erhöht um 81/80 und dann erniedrigt um 64/63, das Ergebnis bleibt gleich). Die Produkte für die positiven und negativen Kommas werden immer zueinander teilerfremd sein: falls nicht, dann gibt es Faktoren, die gekürzt werden können; \*C<sup>35</sup><sub>5</sub> ist das Gleiche wie C<sup>7</sup>.

7. Die Zahl 1 bedeutet das Auflösen aller mikrotonalen Versetzungszeichen, genauso wie das Auflösungszeichen in üblicher Notenschrift. Sie kann man entweder hoch- oder tiefgestellt schreiben. Z.B. Die Abfolge C – D – E<sup>5</sup> – E<sup>1</sup> (oder einfach C – D – E<sup>5</sup> – E) bedeutet 1/1, 9/8, 5/4, 81/64 von C.

8. Intervalle können dieselben Modifikatoren als Noten besitzen.

## Regeln für die Anwendung von FJS-Notennamen in Notenschrift

1. Um positive Kommas zu einer Note zu addieren, schreibe die Zahl des verbundenen Versetzungszeichens vor der Note. Der Konsistenz halber werden sie vor, nicht nach, der Note geschrieben, genauso wie übliche Versetzungszeichen. (Wenn es auch ein übliches Versetzungszeichen gibt, dann auch vor ihm.)

2. Um negative Kommas zu einer Note zu addieren, schreibe die Zahl des verbundenen Versetzungszeichens vor der Note, mit einem Minus-Zeichen (z.B. „−35“).

3. Falls sowohl positive als auch negative Kommas vorkommen, wird das verbundene positive zuerst geschrieben, dann das Minus-Zeichen, dann das verbundene negative.

4. *Pythagoreische Versetzungszeichen teilen Noten desselben Stammtons (C, D, E, F, G, A, H) in pythagoreische Töne auf. Deshalb gilt ein pythagoreisches Versetzungszeichen für alle Noten desselben Stammtons und derselben Oktave in demselben Takt, bis sie überschrieben oder aufgelöst werden.* Ebenso funktionieren auch mikrotonale Versetzungszeichen: sie teilen Noten desselben pythagoreischen Tons in die absoluten Tonhöhen auf. Deshalbt gelten sie für alle Noten desselben pythagoreischen Tons und derselben Oktave in demselben Takt, bis sie überschrieben oder aufgelöst werden. Wenn das erste E in einem Takt ein +5 erhält, erhalten es auch alle andere E in derselben Oktave in demselben Takt (bis es mit einem +1 aufgelöst wird), ein Es aber nicht, genauso wie ein D oder ein F auch nicht, auch in demselben Takt.

5. Das Versetzungszeichen „1“ bedeutet das Auflösen aller mikrotonalen Versetzungszeichen für den pythagoreischen Ton, wo er angewendet wird.

## Regeln für die Anwendung von FJS-Vorzeichen (\*)

1. FJS-Vorzeichen funktionieren genauso wie pythagoreische, sind von ihnen unabhängig, und werden nach pythagoreischen Vorzeichen, wenn beide gleichzeitig vorhanden sind, geschrieben.

2. FJS-Vorzeichen können standardmäßig nur dort mikrotonale Versetzungszeichen hinfügen, wo die Töne bereits in einer Tonart diatonisch sind. Z.B. ein Stück in A-Dur, das die Vorzeichen Fis–Cis–Gis besitzt, kann normalerweise nur für die Noten A, H, Cis, D, E, Fis und Gis FJS-Vorzeichen erhalten. Weil diese Vorzeichen bereits normwidrig sind, gibt es keine vorgesetzte Reihenfolge, in der sie vorkommen müssen. Wegen des pythagoreischen Wesens des FJS kommt es aber oft vor, dass sie doch Fragmente der Reihenfolgen FCGDAEH oder HEADGCF enthalten.

3. FJS-Vorzeichen können nicht-diatonische Töne auch modifizieren, indem sie auf dem korrekten Stammton geschrieben werden, und ihnen ein in Klammern geschriebenes pythagoreisches Versetzungszeichen folgt. Die Klammern sind notwendig, um zu wissen, dass das pythagoreische Versetzungszeichen selbst nicht gilt. Stattdessen ist die Bedeutung: wenn das pythagoreische Versetzungszeichen folgt, dann wird auch das mikrotonale Versetzungszeichen dazu angewendet. Die FJS-Vorzeichen für C-Dur harmonisch könnten so aussehen: H<sup>5</sup> E<sup>5</sup> A<sup>5</sup> As<sub>5</sub>. D.h. alle H, E, und A erhalten ein +5, und alle As erhalten ein −5. A wird nicht zu As; *wenn* es As ist, *dann* erhält es auch ein −5.

4. Wie bei üblichen Vorzeichen werden FJS-Vorzeichen mit FJS-Versetzungszeichen nicht „gemischt“. Versetzungszeichen überschreiben die, die aus Vorzeichen stammen würden. Ein E<sub>7</sub> wegen des Versetzungszeichens −7 bleibt E<sub>7</sub>, auch wenn die Vorzeichen E<sup>5</sup> sagen. (Gemeint wird auf jeden Fall nicht E<sup>5</sup><sub>7</sub>.)

5. Eine pythagoreische Vorzeichenänderung bedeutet nicht automatisch, dass die FJS-Vorzeichen sich auch ändern. Ein Stück, das mit den Vorzeichen Fis–Cis–Gis und F<sup>5</sup> C<sup>5</sup> G<sup>5</sup> beginnt, wird seine FJS-Vorzeichen nicht verlieren, wenn das Stück nach As-Dur moduliert (B–Es–As–Des). Da keine FJS-Vorzeichenänderung geschah, bedeutet das immer noch, das in diesem As-Dur jedes Fis ein +5 erhält. Das sieht auf den ersten Blick komisch aus, da ein Fis in As-Dur nie erwartet ist. Aber tatsächlich ist das sinnvoll, denn so kann man das Wiederholen der FJS-Vorzeichen vermeiden, wenn eine einfache Modulation geschieht (z.B. Fis–Cis–Gis zu Fis–Cis). Es wird wahrscheinlich erwartet, dass das Fis und das Cis (und auch das Gis, welches in D-Dur auch vorkommen kann) weiter +5 erhalten.

6. Eine FJS-Vorzeichenänderung wird alle Vorzeichen in der vorherigen immer auflösen. Falls die pythagoreischen sich auch verändert haben (das geschieht immer, bevor die FJS-Vorzeichen sich ändern), dann werden die neuen FJS-Vorzeichen natürlich in Bezug auf die neuen diatonischen Töne definiert. Z.B. Fis–Cis–Gis F<sup>5</sup> C<sup>5</sup> G<sup>5</sup> ist das ptolemäische A-Dur. Eine Veränderung der pythagoreischen Vorzeichen auf B–Es–As–Des bewirkt B–Es–As–Des Fis<sup>5</sup> Cis<sup>5</sup> Gis<sup>5</sup>. Aber wenn die FJS-Vorzeichen (geschrieben als F<sup>5</sup> C<sup>5</sup> G<sup>5</sup>) einfach nach dieser pythagoreischen Veränderung wiederholt werden (also es steht: B–Es–As–Des F<sup>5</sup> C<sup>5</sup> G<sup>5</sup>), verändert sich die Wirkung, denn die F, C, und G, die diatonisch in As-Dur sind, haben sich verändert: es sind jetzt F, C, und G, und nicht Fis, Cis, und Gis.

7. Eine FJS-Vorzeichenänderung wird mit mindestens einem mikrotonalen Vorzeichen kenngezeichnet. Wenn man darstellen will, dass die vorherigen FJS-Vorzeichen alle aufgelöst sein sollen, kann man das mithilfe einer Serie von +1-Zeichen darstellen (das Äquivalent von Auflösungszeichen im FJS). Solche Auflösungen sind aber schon automatisch in jeder FJS-Vorzeichenänderung vorhanden. Gedenke, dass eine komplette Auflösung aller FJS-Vorzeichen ist nur sehr selten notwendig.

8. FJS-Vorzeichen kann man in Notensystemen nach dem ersten weglassen, weil es oft schwierig ist, sie in einer Notensoftware darzustellen.

## Regeln für die Anwendung von FJS-Transpositionslinien (\*)

1. Es gibt FJS-Transpositionslinien, die ähnlich wie übliche Oktavklammern funktionieren, aber anstatt einer Oktave ein FJS-Versetzungszeichen anwenden.

2. Ob eine FJS-Transpositionslinie alta oder bassa ist, macht keinen Unterschied.

3. Eine FJS-Transpositionslinie beginnt mit einem verbundenen FJS-Versetzungszeichen, genauso, wie man es bei einer Note schreiben würde. +5 erscheint also als „5“, +7−5 erscheint als „7−5“, usw. „loco“ danach zu schreiben, ist nicht notwendig.

4. Alle Noten unter einer FJS-Transpositionslinie **addieren** das Versetzungszeichen dieser Linie zu den üblichen Werten, die Versetzungszeichen und Vorzeichen bewirken.

## Mehr experimentelle Elemente (\*)

Ab hier ist das FJS Open Source! Erfinde neue Abkürzungen, falls du sie für nützlich hältst. Du kannst sogar ganze „Dialekte“ des FJS erfinden, mit normwidrigen Toleranzradien (dafür hat der Rechner eine Funktion), mit Kommas für jedes ungerade Limit, nicht nur Primzahllimit, oder mit Versetzungszeichen, die immer positiv erhöhen und negativ erniedrigen.

Ich bin kein sturer Originalerfinder, der niemandem sein Werk verändern lassen wird, auch wenn die Änderungen gut sind. Das FJS hatte einmal so viele schlechte Elemente, manche davon wurden nur im letzten Moment weggeschmissen oder verändert. Falls du denkst, dass du ein nützliches neues Element des FJS gefunden hast, teile es mit mir per E-Mail, und ich werde es gerne hier hinfügen.

## Das FJS und Notation außerhalb JI (\*)

Der FJS-Master-Algorithmus akzeptiert jede Zahl, nicht nur Primzahlen. Obwohl das FJS für diesen Zweck nicht gedacht war, kann die ganze Serie von Algorithmen auch für die allermeisten irrationalen Zahlen durchgeführt werden. Jede positive reelle Zahl passt, aber manche davon (darunter namentlich jede Zahl, die als Wurzel einer rationalen Zahl dargestellt werden kann) werden die wunderschöne und zerbrechliche Bijektion des FJS zerstören und sie in eine bloße Surjektion verändern. (Lesen ist also noch eindeutig, Schreiben aber nicht mehr.)

Das heißt: du kannst das FJS benutzen, um z.B. die 833-Cent-Tonleiter zu notieren, eine Tonleiter aus Faktoren von 2, 3, und φ (den Goldenen Schnitt). φ/1 wird als (kleine Sexte)<sup>φ</sup> im FJS dargestellt.

Das ist aber nicht alles: die tollen Eigenschaften des FJS bleiben bei so einer Erweiterung auch erhalten.

Das geht u.A. auch mit den folgenden irrationalen Konstanten:

- π; (kleine Sexte)<sup>π</sup> (τ, die [echte Kreiskonstante](https://tauday.com/tau-manifesto), wird genauso dargestellt, denn sie beträgt 2π, also eine Oktave von π)
- *e*; (reine Quarte)<sup>*e*</sup>
- γ; (große Sekunde)<sup>γ</sup> (Euler-Mascheroni-Konstante)
- Ω; (große Sekunde)<sup>Ω</sup> (Omega-Konstante)

Es funktioniert bei jeder transzendenter Zahl.

Bisher gab es keinen Versuch, negative oder komplexe Zahlen im FJS darzustellen. :)

## Beispiele

Hier sieht man Ges<sup>7</sup><sub>5</sub> und Fis<sup>5</sup><sub>7</sub>.

<img src="../assets/example_5.png" alt="Ges7_5–Fis5_7">

Hier steht: Cis<sup>5</sup> Cis<sup>5</sup>; Cis<sup>5</sup> Cis; Cis<sup>5</sup> C; Cis<sup>5</sup> C<sup>5</sup>.

<img src="../assets/example_4.png" alt="Cis5–C, Cis5–C1, Cis5–C♮, Cis5–C♮5">

Das Folgende ist die A-Dur-Tonleiter; A, H, Cis<sup>5</sup>, D, E, Fis<sup>5</sup>, Gis<sup>5</sup>, A.

<img src="../assets/example_6.png" alt="Fis–Cis–Gis F5 C5 G5: A–H–C–D–E–F–G–A">

Das Folgende ist der Abschnitt 8 bis 16 der Obertonreihe in F; F, G, A<sup>5</sup>, B<sup>11</sup>, C, Des<sup>13</sup>, Es<sup>7</sup>, E<sup>5</sup>, F. (Die Vorzeichen sind nicht praktisch, aber möglich.)

<img src="../assets/example_7.png" alt="B–Des A5 E5 H11 D13 E(♭)7: F–G–A–H–C–D–Es–E♮–F">

Die folgende Progression enthält zwei verminderte Septakkorde der Stimmung 10:12:14:17 und zwei Dur-Dreiklänge der Stimmung 4:5:6, auf A, D, G, und C, in dieser Reihenfolge.

<img src="../assets/example_8.png" alt="E5 H5 F(♯)5 C(♯)5 B(♭)17 A(♭)17: Cis–B–E1–G7, D–A–D–Fis, H–As–D–F7, C–G–C–E">

Die folgende Progression zeigt die Nützlichkeit der Regel, dass eine pythagoreische Vorzeichenänderung nicht immer eine im FJS bewirkt. Hier steht: A-Dur, E-Dur, A-Dur, A-Dominantseptakkord, D-Dur, G-Dur, D-Dur 2. Umkehrung, E-Dur + A, A-Dominantseptakkord, D-Dur, wobei alle Dur-Dreiklänge 4:5:6 sind, und alle Dominantseptakkorde 4:5:6:7. Die FJS-Vorzeichen bleiben auch nach der Modulation gleich, was nützlich ist, weil man erwartet, dass das Gis auch in D-Dur ein +5 erhält.

<img src="../assets/example_9.png" alt="Fis–Cis–Gis F5 C5 G5: A–E–C–A, E–E–H–G, A–E–C–A, G7–E–C–A, Fis–Cis: F–A–D–A, G–H–D–G, A–A–D–F, A–H–E–Gis, A–Cis–E–G7, D–A–D–Fis">

Hier werden die acht Noten C, D, E<sup>5</sup>, F, G, A<sup>5</sup>, A, und H<sup>5</sup> ohne Vorzeichen benutzt.

<img src="../assets/example_10.png" alt="C–D–G–C–D–G–C–D–G, 5: E–A–H–E–A–H–E–A–H, loco: F–G–C–F–G–C–F–G–C, D–G–A–D–G–A–D–G–A">
