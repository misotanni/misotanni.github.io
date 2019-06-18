# Eine Zusammenfassung des FJS

Das Naturtonfunktionssystem (FJS) ist ein Notationssystem für die Notation der Naturtonstimmung (JI) durch eine Erweiterung traditioneller Notenschrift. Wie auch die Helmholtz-Ellis-Notation oder die Johnston-Notation geschieht das mit einer zusätzlichen Liste von Versetzungszeichen. Das FJS benutzt einen deterministischen Prozess, um jedes mögliche JI-Verhältnis **zweifelsfrei** in ein übliches Intervall mit zusätzlichen FJS-Zeichen umzurechnen.

Die Ziele des FJS:

- Den Prozess der Umrechnung in beide Richtungen automatisch und deterministisch zu konstruieren, im Gegensatz zu den zufällig ausgewählten Versetzungszeichen bei Helmholtz-Ellis und Johnston. Es gibt keine zufälligen Symbole für diese Versetzungen und keine zufällig definierte Liste deren Werte. Das ganze FJS kann man aus dem Nichts ausrechnen, sowohl mit Rechnern, als auch einfach im Kopf.
- Die ganze Naturtonstimmung mit zweifelsfreier Präzision darzustellen, nicht nur bis zu einem voreingestellten Primzahllimit (wie 61 bei Helmholtz-Ellis oder 31 bei Johnston) oder bis zu einem Präzisionslimit (wie Sagittal).
- Viel benutzerfreundlicher zu sein (sowohl beim Lesen, als auch beim Schreiben) als andere Notationssysteme.
- Optimal zur Verknüpfung mit Musik-Notationssoftware zu sein, da alle Versetzungszeichen automatisch generiert werden können.

Am Herz des FJS liegt der **FJS-Master-Algorithmus**, der jede Primzahl größer als 3 akzeptiert, und mithilfe des sog. **Toleranzradius** (einer Konstante, deren Standardwert $$\sqrt{\frac{33}{31}}$$ beträgt, also der geometrische Mittelwert von 33/32 und 32/31) die einfachste Annäherung im 3-Limit dieser Primzahl sucht, die sich weniger als um den Toleranzradius unterscheidet. (*Einfachste* bedeutet: der Betrag der **Quintenverschiebung**, also der Potenz von 3, ist minimal). Die Differenz ist nun der Wert des **formalen Kommas** für diese Primzahl, und zwar immer in der Originalrichtung, wo der Faktor der Primzahl im Zähler steht.

Dann wird die Naturtonstimmung folgendermaßen notiert:

- Alle Intervalle des 3-Limits werden direkt unveränderten Intervallen zugeordnet, da es eine Bijektion zwischen der pythagoreischen Stimmung und der Notenschrift gibt (sehe die [Mathematikseite](math.html)).
- Für alle höhere Intervalle gilt:
	- Jede Primzahl hat genau ein formales Komma für jeden möglichen Toleranzradius (es ist das Ergebnis des Algorithmus für diese Primzahl) und jedes formale Komma bekommt genau zwei Versetzungszeichen, ein otonales und ein utonales.
	- Jedes Verhältnis ab dem 5-Limit kann auf genau eine Weise als Verhältnis des 3-Limits mal sog. Brückenzahlen mit Ganzzahlpotenzen dargestellt werden, wobei es genau eine Brückenzahl für jede Primzahl größer als 3 gibt (sehe die [Mathematikseite](math.html)). Eine Brückenzahl ist eine Ganzzahlpotenz von 2, mal eine Ganzzahlpotenz von 3, mal genau eine andere Primzahl mit einer Potenz von +1.
	- Jedes formale Komma ist eine Brückenzahl, denn es handelt sich immer um das Intervall zwischen einer Primzahl und einem 3-Limit-Verhältnis.
	- Deshalb kann man jedes höhere Intervall als 3-Limit-Verhältnis (welches eine Intervalldarstellung hat) mal formale Kommas mit Ganzzahlpotenzen (welche FJS-Versetzungszeichen haben) darstellen.

Der FJS-Master-Algorithmus findet für jede Primzahl zwei Werte: die Quintenverschiebung und das formale Komma. Obwohl beide nützlich sind, um das FJS vollständig zu beschreiben, ist nur einer notwendig, um den anderen berechnen zu können, ohne den Master-Algorithmus oder den Toleranzradius zu benutzen (sehe die [formale Beschreibung](rules.html)).

Hier steht der FJS-Master-Algorithmus.

> 1. Lese die eingegebene Primzahl und nenne sie *p*.
> 2. Fange an mit *k* = 0.
> 3. Betrachte das Intervall aus *k* pythagoreischen Quinten und nenne es *P*.
> 4. Beträgt die Differenz zwischen *p* und *P* weniger als der Toleranzradius?
> 5. Falls ja, dann ist *k* die Quintenverschiebung. Ende.
> 6. Falls nicht, gehe zum nächsten *k* in der folgenden Reihe: (0, 1, −1, 2, −2, 3, −3, …) und wiederhole ab dem 3. Schritt.
>
> Beim 4. Schritt ist die gemeinte Differenz der **Betrag** der Cent-Größe des Intervalls zwischen so gewählten Oktaven von *p* und *P*, damit dieses Intervall minimal ist. Mehr Details gibt es dazu in der [formalen Beschreibung](rules.html).
