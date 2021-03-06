﻿# Häufig gestellte Fragen

<style>h2 { font-weight: normal; font-size: 100%; }</style>

## Kann das FJS zur Notation gleichstufiger Stimmungen verwendet werden?

Die kurze Antwort lautet: nein.

Die Naturtonstimmung – und dadurch auch das FJS – verlassen sich auf der absoluten Einfachheit der Arithmetik von Brüchen. Das Mathematikniveau erforderlich, um Theorie der Naturtonstimmung kennenzulernen, überschreitet das des Gymnasiums nicht – keine Logarithmen oder Wurzeln und auf keinen Fall Integrale sind erforderlich (Logarithmen braucht man nur, um Cent-Größen von Intervallen zu berechnen, was eher eine Bequemlichkeit als Teil des Systems ist). Du kannst den Großteil der Arithmetik im Kopf durchführen, und den Rest deinem treuen Vier-Funktionen-Rechner vertrauen, ohne zu bemerken, dass er eine Taste für Quadratwurzel besitzt.

Gleichstufig temperierte Stimmungen sind dagegen (meistens) gleichstufige Aufteilungen der Oktave. Vorsicht aber, bevor du verallgemeinerst: 1200¢ / 12 = 100¢ sieht zwar auf den ersten Blick einfach aus, aber die Einheit Cent ist nur eine Darstellung der zugrundeliegenden Frequenzverhältnissen. Während manche von uns hier mit der Theorie aufhören, gedenke, dass sobald du diese angeblich reine Cent-Werte in Frequenzwerte umrechnest, musst du das Ganze in eine Exponentialfunktion reintun, die dir für (fast) alle rationalen Eingaben irrationale Zahlen ergibt. Ohne den Gegenteil zu erwähnen; der reine, dem Ohr (per Definition des „Ohrs“) angenehme Klang einer Naturquinte (3/2) – so wichtig, dass die ganze moderne Harmonielehre auf ihm basiert – hat einen irrationalen Cent-Wert von etwa 701.95500086…¢, welchen die temperierte Stimmung grob ausgleicht. (Das heißt nicht, dass temperierte Stimmungen schlecht sind, sondern, dass die Einführung von ihnen in den JI-Rahmen Chaos verursachen wurde.)

Deswegen meine ich, dass eine gleichstufige Stimmung kein FJS braucht. Ein *n*-EDO, wo *n* ausreichend klein ist, kann man ohne Probleme in ihrem vollen Potenzial in üblicher Notenschrift aufschreiben, solange die Tonhöhen und Akzidenzien gut definiert sind. Steigt *n* ein bisschen, so definiere ein paar neue Akzidenzien; bei einem *n* von über hundert, oder bei dem Bedarf für absolute Flexibilität, [kannst](http://musictheory.zentral.zone/huntsystem1.html) du von anderen [übernehmen](http://sagittal.org/). Oder du kannst eine ganz neue Notenschrift entwickeln…

Egal welche Methode du benutzt, wirst du erfahren, dass das FJS dir gar nicht helfen würde… Es sei denn, du willst eine Frankenstein-Stimmung konstruieren.

## Wo befindet sich die Tabelle der Verschiebungen und formaler Kommas?

So etwas brauchst du gar nicht! Dafür gibt es die [Rechner](calc.html).

## Wieso ist nur 3/2 ein vorausgesetztes Intervall, nicht z.B. 5/4?

Dazu erfahrst du vieles auf [dieser](compare.html) Seite.

## Warum ist 65/63 der Toleranzradius?

Der [Crash-Kurs](crash.html) enthält meine Denkprozesse dabei. Wirklich wichtig war mir, dass der Toleranzradius größer als 33/32, aber kleiner als 32/31 sei. Warum denn genau 65/63? 65/63 ist die Mediante der zwei oben genannten Zahlen, also die einfachste mögliche Zahl, die zwischen ihnen liegt. Das war es aber nicht immer. Es hat lange gedauert, bis das FJS von dem vorherigen Toleranzradius auf 65/63 umgestellt wurde: vorher war es der geometrische Mittelwert aus 32/31 und 33/32, also die Quadratwurzel von 33/31. Ich danke dabei Kite Giedraitis, dem Erfinder der [Farbennotation](http://tallkite.com), dafür, dass er mir diese einfachere Möglichkeit gezeigt hat. Der winzige Unterschied wird man gar nicht merken; die erste Primzahl, deren Quintenverschiebung sich ändert, ist 35617 (vorher 2−<sup>35617</sup>, jetzt 1+<sup>35617</sup>). In Cent: der Radius war vorher 54.1**1**868538…¢, jetzt 54.1**0**546743…¢.

In der Vergangenheit hatte der Toleranzradius viele merkwürdige Formen… darunter 256/243 und sogar dessen Quadratwurzel (igitt!). Jede von diesen Zahlen hatte ihre Begründung, aber mehr rational als 65/63 geht es wahrscheinlich nicht (entschuldige das Wortspiel).

## Warum wird 11/8 als 4<sup>11</sup>, nicht 4&lt;<sup>11</sup>, notiert?

Ich gebe zu, dass es umstritten ist, welche Notation von 11/8 intuitiver für mikrotonale Komponisten ist (besonders deshalb, dass das FJS keine Viertelton-Versetzungszeichen hat). Jedoch bin ich unschuldig, denn es war nicht meine Wahl. In Wirklichkeit ist es **unmöglich**, dass 4&lt;<sup>11</sup> die Darstellung von 11/8 sein könnte, und zwar *egal*, was der Toleranzradius beträgt. Das liegt daran, dass 4/3 (die reine Quarte) gegenüber 729/512 (der übermäßigen Quarte) *zwei* Vorteile hat: sowohl eine bessere Annäherung (53.27…¢ anstatt 60.41…¢) als auch eine einfachere Struktur (−1 anstatt +6 Quinten). Wenn also ein Toleranzradius die übermäßige Quarte als Quintenverschiebung für 11 akzeptiert, dann akzeptiert er auch die reine Quarte, und die letzte wird gewählt, weil sie einfacher ist. So funktioniert der Algorithmus. (Falls ein Toleranzradius die reine Quarte nicht akzeptiert, wäre die darauffolgende Annäherung die verminderte Quinte… das wollen wir auf keinen Fall!)

## Warum überhaupt, wenn ich die Tonhöhen am Anfang der Partitur definieren kann?

Das kannst du natürlich, aber ein paar Sachen werden dir dadurch fehlen:

- die Fähigkeit, zu jeder möglichen Tonart zu modulieren, wie du willst, ohne verwickelte Neudefinitionen oder unhandliche Anmerkungen;
- die Eigenschaft des FJS, dass mit sehr wenigen zusätzlichen Notationselementen die *ganze* Naturtonstimmung mit dem gleichen System funktioniert, was dir eine Intuition und gründliches Verständnis der Fähigkeiten und Abkürzungen ermöglicht;
- unveränderte Intervallarithmetik – Rechnen mit Intervallen funktioniert immer noch genauso wie üblich, was nicht bei einer zufälligen Zuordnung der Verhältnisse zu Noten der Fall ist;
- das Denken innerhalb des Systems selbst – bei anderen Notationssystemen verwandelt man Verhältnisse in Noten nur dazu, um die Musik darzustellen, das ganze Denken aber findet außerhalb dieser Noten statt, im FJS dagegen kannst du in den Noten denken, was viel einfacher und schneller ist – als würdest du zwei Binärzahlen direkt addieren, ohne die Umrechnung in die Basis zehn und dann wieder zurück;
- schnelles Blattspiel, mit verschiedenen Partituren.

Wenn du keinen Wert darauf legst, dann ist das FJS vielleicht nicht die richtige Wahl für dich. Ich empfehle, ihm trotzdem eine Chance zu geben.

## Was ist mit dieser „reinen Stimmung“ oder Naturtonstimmung, mit der du dich beschäftigst? Hat es etwas mit dem New-Age-Glauben zu tun?

Nein.

Die reine Stimmung ist eine Mathematik, und eine Theorie von Frequenzen, die auf wissenschaftlich bekannten Eigenschaften des Klangs basiert. Sie ist auch eine Musikform, die diese Mathematik als Basis ihres tonalen Wortschatzes benutzt, anstatt die Oktave zu zerteilen oder was sonst. Das FJS ist dabei ein formales System des einfachen Verständnisses dieser Mathematik, die JI bietet.

New Age ist dagegen weder eine Wissenschaft noch eine Theorie. Du solltest eher solche „Wissenschaften“ und „Theorien“ wie [diese](https://attunedvibrations.com/432hz/) alternative Stimmung, „mathematisch in Harmonie mit dem Universum“, recherchieren… Oder vielleicht eher nicht.
