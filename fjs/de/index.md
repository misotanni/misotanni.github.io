---
title: Das Naturtonfunktionssystem
---

> *Derjenige ist der Vorteil einer gut konstruierten Sprache, dass mithilfe ihrer vereinfachten Notation tiefgründige Theorien entstehen.*
>
> — Pierre-Simon Laplace

---

<img src="../assets/impression.png" alt="So sieht das FJS aus!">

# Willkommen

Willkommen auf der Webseite des Naturtonfunktionssystems (FJS)!

## Was ist das FJS?

Das **Naturtonfunktionssystem** (englisch: Functional Just System, **FJS**) ist ein neues, wegweisendes Notationssystem für Musik in sog. **Naturtonstimmung** (auch "reiner Stimmung", eng. Just Intonation, **JI**). Es benutzt eine Erweiterung der traditionellen Notenschrift, um alle möglichen Formen der Naturtonstimmung beschreiben zu können. Es übertrifft bestehende Notationssysteme in diesem Zweck (darunter sowohl die Helmholtz-Ellis-Notation, als auch die Notation von Ben Johnston), indem es viel einfacher, einfallsreicher und schöner ist. Im Bereich der mikrotonalen Musik ist es bisher die Erfindung, auf die ich am stolzesten bin.

Das Naturtonfunktionssystem:

- ermöglicht das **Übersetzen** von den bloßen Frequenzverhältnissen der Naturtonstimmung in die Universalsprache aller Musiker, also die Notenschrift, und zurück;
- ist **extrem einfach** zu lesen und zu schreiben, seine Einfachheit übertrifft stark die der anderen Notationssysteme der Naturtonstimmung;
- liefert eine **bijektive Zuordnung** zwischen Notation und Klang, jeder Ton kann nur auf eine Weise aufgeschrieben werden und kann dadurch eindeutig geschrieben und gelesen werden;
- kann das **gesamte Unendlich** der Naturtonstimmung notieren, nicht nur bis zu einem festgesetzten Primzahllimit, und kann daher Töne notieren, die in anderen JI-Notationssystemen **nicht möglich sind**;
- hat **unendliche Präzision**, d.h. durch die Notation geht die genaue Tonhöhe nie verloren;
- ist auf jedem Schritt mithilfe eines Algorithmus **prozedural generiert**, daher ist es perfekt für die Anwendung in computerisierter Musik, und kann komplett automatisiert werden, ohne Merken oder Nachschauen. (Dafür gibt es auf dieser Webseite einige Rechner.)

## Was ist Naturtonstimmung?

Du bist wahrscheinlich am falschen Ort, falls du dich das fragst!

Die überwiegende Mehrheit der heutigen Musik benutzt die **zwölfstufige gleichstufig temperierte Stimmung** (auch einfach **gleichstufige Stimmung** genannt), die die Oktave in zwölf gleiche Halbtöne teilt. Die **Naturtonstimmung** oder **reine Stimmung** (**JI**) ist eine Stimmung, die stark davon abweicht. Ihre Prinzipe basieren auf der Naturtonreihe und den natürlichen Eigenschaften des Klangs. Obwohl JI nicht mehr in üblicher Musik verwendet wird, bleibt sie für die Musiktheorie wichtig, weil sie gebräuchlich in antiken Kulturen und im Mittelalter war, weil sie noch oft in nicht-europäischer traditioneller Musik vorkommt, und weil die Musik der Avantgarde sie gebraucht. (Oder einfach weil sie sich gut anhört!)

Vorausgesetzt wird ein elementares Wissen und Verständnis der Naturtonstimmung (zusätzlich zu Grundlagen der Musiktheorie), um das FJS verstehen und effektiv benutzen zu können. Im Allgemeinen bedeutet **mehr Erfahrung** mit JI eine **höhere Geläufigkeit** mit dem FJS.

Für eine Grundkenntnis der Naturtonstimmung empfehle ich [Just Intonation Explained](https://www.kylegann.com/tuning.html), von Kyle Gann.

## Wie einfach ist das FJS?

Es gibt nur sieben Regeln, die alles, was man zur Notation jeglicher JI-Musik mithilfe des FJS braucht, beschreiben. Richtig, nur sieben.

1. Alle noten mit üblichen Versetzungszeichen stehen für die pythagoreische Stimmung. D.h. alle Oktaven stehen für 2/1 und alle reine Quinten stehen für 3/2.

2. Jedem Primzahlintervall über 3/2 (z.B. 5/4, 7/4, 11/8, usw.) wird nach dem Master-Algorithmus des FJS eine einzige pythagoreische Annäherung zugeordnet. Der Algorithmus findet die einfachste solche Annäherung, die sich innerhalb des sog. Toleranzradius befindet. Der Differenz dazwischen wird ein einziges Versetzungszeichen für diese Primzahl zugeordnet. Als Symbol für die Versetzung dient die Primzahl selbst.

3. Alle Versetzungszeichen des FJS sind positiv in der Richtung, in der die pythagoreische Annäherung eines Primzahlintervalls zum Intervall selbst wird. Das heißt, positiv ist nicht immer nach oben, und negativ ist nicht immer nach unten. Stattdessen ist positiv immer otonal und negativ immer utonal.

4. Versetzungszeichen kann man miteinander verbinden. Alle otonalen Teile werden dazu miteinander multipliziert, ebenso für die utonalen, z.B. +25 steht für eine verdoppelte +5. Das Otonale wird immer vom Utonalen getrennt. Falls die Zahlen zu groß werden, kann man die Faktoren auch voneinander mit Kommas trennen.

5. Für Notennamen gilt: das verbundene positive Versetzungszeichen wird hochgestellt, das negative tiefgestellt, nach dem üblichen Namen dazugeschrieben.

6. Für Notenschrift gilt: zuerst schreibt man das verbundene positive Versetzungszeichen (falls vorhanden), danach mit einem Minus-Zeichen das negative (falls vorhanden), danach übliche Versetzungszeichen, danach die Note selbst.

7. Alles andere ist Kurzschrift.

## Warum das FJS?

Warum brauchen wir es überhaupt? Was hat mich dazu motiviert, das FJS zu konstruieren? Was für Vorteile gibt es davon für Musiker? Warum soll man es benutzen, und wie hilft es mit der Komposition und Analyse von JI-Musik? Wieso überhaupt versuchen, die Naturtonstimmung der Notenschrift zuzuordnen? Die Notenschrift ist doch für Musik, die auf dem Quintenzirkel und den Stammtönen basiert, entworfen worden. Die Naturtonstimmung dagegen ist ein Netzwerk von Frequenzverhältnissen, die miteinander wunderschön, aber unkenntlich, verbunden sind. JI-Musik funktioniert komplett anders als die Musik, die wir gebräuchlich notieren. Ein Versuch, sie so zu repräsentieren, klingt wie eine verrückte und ungeschickte Idee.

Warum also habe ich mich trotzdem entschieden, diese Idee zu verwirklichen? Es liegt daran, dass die Notenschrift eine Kommunikationssprache für Musiker ist. Obwohl sie nicht perfekt ist, ist sie universal: sie umfasst alle Musiker. Darüber hinaus sind wir als Musiker dazu gewohnt, in Noten zu denken. Wäre es nicht nützlich, die schöne und regelmäßige, aber nicht wirklich intuitive, Sprache der Naturtonstimmung irgendwie in die bekannte Sprache der Notenschrift übersetzen zu können? Würde es Musikern nicht ermöglichen, die Naturtonstimmung intuitiv zu verstehen, und ihre Eigenschaften auf alle Prozesse – Komposition, Analyse, und Aufführung – üblicher Musik zu erweitern?

**In der Tat.**

Das FJS ist viel mehr als nur ein Notationssystem. Als ich das System entwurf, hat es mir ermöglicht, Sinn im scheinbaren Chaos der Naturtonstimmung zu sehen. Es hat mir auch gezeigt, dass die Notenschrift viel logischer und viel mehr mit JI verbunden ist, als ich zuerst dachte. Deshalb lade ich auch dich dazu ein. Lerne die Einfachheit und die Schönheit des FJS kennen, und verstehe, wie seine musikalischen Zahnräder zwei Ideen verbinden, die auf den ersten Blick sich komplett fremd ansehen.

Ich würde das FJS mit Lojban vergleichen. Lojban ist eine künstliche Sprache, die entworfen wurde, um zu sehen, wie das Denken sich verändert, wenn die Sprache komplett logisch ist und Sinn macht. Ich glaube, dass das FJS einem "Lojban der mikrotonalen Musik" entspricht. Genauso wie Lojban Leute zum logischen Denken bringt, bringt das FJS Musiker meiner Meinung nach zum JI-Denken. Dadurch werden ihre Komposition, Analyse, und Aufführung näher mit ihrer eigenen Kenntnis der Musiktheorie verbunden, da das FJS üblicher Musiktheorie die JI-Musiktheorie näher bringt.

## FAQ: Gibt es ein FAQ?

[Tatsächlich!](faq.html)

## Was jetzt?

- Hier befindet sich ein [Crash-Kurs](crash.html) des FJS. Mit einem gewissen Verständnis von JI kann man das FJS in wenigen Minuten lernen.
- Lese die [komplette formale Erläuterung](rules.html), um die genauen Regeln bei Zweifel nachzuschlagen.
- Sehe die [Mathematik](math.html), die dahinter steht. Hier findest du den Beweis, dass das FJS tatsächlich bijektiv ist, und tatsächlich viele schöne Eigenschaften besitzt.
- Hier [vergleiche](compare.html) ich das FJS mit zwei anderen konkurrierenden Notationssystemen: dem Helmholtz-Ellis-System und dem Ben-Johnston-System, und erkläre, wieso das FJS beide von ihnen überschreitet.
- Benutze die [Rechner](calc.html) der Webseite, um automatisch FJS-Berechnungen durchzuführen. **Vorschlag:** Speichere sie jetzt.
- Hier findest du mehr [Beispiele](examples.html) des FJS im Einsatz.

**Was wird das FJS für dich bedeuten?**
