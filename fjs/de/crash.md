# Der FJS-Crash-Kurs

Also, du bist neugierig, was das FJS so bietet. Du möchtest lernen, es zu benutzen.

Dieser "Crash-Kurs" ist genau in diesem Zweck gedacht: um alle notwendige Elemente des FJS schnell zu beherrschen. Die Kurzschrift des Systems wird nicht behandelt, da das System ohne ihr sowieso komplett ist. Falls du schon Erfahrung mit Naturtonstimmung hast, wird es dir sehr leicht fallen. Du kannst das ganze auf einmal in ein paar Minuten lernen. Seine Eleganz steht direkt vor dir.

## Inhalt

* [Einleitung: Gib die Enharmonie auf!](#introduction)
* [Lektion 0: Vorbereitung](#lesson_0) 
* [Lektion 1: Die pythagoreische Stimmung](#lesson_1)
* [Lektion 2: Die Primzahlintervalle](#lesson_2)
* [Lektion 3: Verbundene Versetzungszeichen](#lesson_3)
* [Da Capo Al Fine: Was sonst?](#da_capo_al_fine)

---

## <a name="introduction">Einleitung: Gib die Enharmonie auf!</a>

Wir sind alle an die gewöhnliche Notenschrift gewohnt, und an ihre üblichen Kreuze und Be. Was wir aber nicht immer sehen, ist, dass uns Notenschrift im Zusammenhang mit der allgegenwärtigen gleichstufigen Stimmung beigebracht wird. (Ab jetzt wird dieser Kurs die Abkürzung 12-EDO benutzen, aus dem Englischen "Equal Divisions of the Octave").

Hier zum Beispiel steht die chromatische Tonleiter:

<img src="../assets/example_1.png" alt="C–C♯–D–D♯–E–F–F♯–G–G♯–A–A♯–B–C">

Ähm, nein. Normalerweise sieht sie so aus:

<img src="../assets/example_2.png" alt="C–C♯–D–D♯–E–F–F♯–G–G♯–A–B♭–B–C">

Ob dort Ais oder B steht, macht für uns natürlich keinen Unterschied. Wir wissen, dass das zwei unterschiedliche Namen für zwei Noten derselben Tonhöhe sind. Ob wir jetzt Ais oder B verwenden, kommt auf die Lesbarkeit oder Einheitlichkeit oder Einfachheit, je nach Kontext, aber sie bedeuten das Gleiche.

Diese Eigenschaft, dass eine verminderte Sekunde genauso groß ist wie eine reine Prime, hat einen Namen: enharmonische Verwechslung. Musiker, denen alternative Stimmungen nicht bekannt (oder bewusst) sind, wissen vielleicht gar nicht, dass diese Eigenschaft nicht universal ist. 12-EDO ist eine der wenigen Stimmungen, die sie hat. In anderen Stimmungen gibt es keine Enharmonie, oder es gibt ein anderes Intervall der Größe einer reinen Prime. (Zum Beispiel ist es die *doppelt* verminderte Sekunde in 19-EDO. Das heißt, Eis und Fes haben die gleiche Tonhöhe.)

Vergessen wir aber nicht, dass die Notenschrift selbst die Idee von 12-EDO (geschweige denn deren Herrschaft) deutlich vordatiert. Die Notenschrift basierte ursprünglich auf der Stammtonreihe, die viele Eigenschaften gleichzeitig besitzt, aber eine davon ist uns wichtig: dass sie aus einer Reihe reiner Quinten herkommt (F–C–G–D–A–E–H). Die *Tatsache* selbst, dass unsere Notenschrift viele Namen für dieselbe Tonhöhe besitzt, deutet darauf an, dass sie ursprünglich für etwas anderes gedacht war.

Die enharmonische Äquivalenz ist das einzige Merkmal von 12-EDO in der Notenschrift. Alles andere funktioniert auch ohne 12-EDO.

## <a name="lesson_0">Lektion 0: Vorbereitung</a>

Bevor du beginnst, über das FJS zu lernen, gibt es ein paar zusätzliche Informationen. Ich muss sicher sein, dass sie dir gut bekannt sind.

- Du weißt, dass die Naturtonstimmung per Definition eine Stimmung ist, wo jedes Intervall zwischen beliebigen zwei Noten eine rationale Zahl ist.
- Du erkennst bekannte JI-Frequenzverhältnisse, z.B. 2/1, 3/2, 5/4, 7/4.
- Du weißt, dass Intervalle addiert oder subtrahiert werden, indem man ihre Verhältnisse multipliziert bzw. dividiert, und dass man die umgekehrte Form des Intervalls durch das Kehrwert des Verhältnisses erhält.
- Du kannst die Einheit Cent benutzen, um die Größe von Intervallen zu messen, und du weißt, dass ein Halbton 100 Cent und eine Oktave 1200 Cent beträgt.
- Du kannst die Cent-Größe eines beliebigen Intervalls mithilfe einer dieser Formeln berechnen:
	
	$$\displaystyle \text{C}(d)=\frac{1200 \cdot \log d}{\log 2} \text{ , log zu einer beliebigen Basis}$$
	
	$$\text{C}(d)=\log_c d \text{ , }c=\sqrt[1200]{2}$$

Dazu gibt es auch noch drei mathematische Konzepte, die dir bekannt sein müssen, aber außerhalb des FJS nicht vorkommen.

Erstens musst du schnell **ein übliches Intervall** (ohne enharmonische Verwechslung) in **eine Anzahl von Quintenschritten** und zurück umrechnen können. Eine **große Sekunde** zum Beispiel entspricht **+2** Quinten, denn man braucht zwei Quintenschritte im Uhrzeigersinn, um die große Sekunde zu erreichen: C-G-D. Ebenso entspricht eine **kleine Terz −3** Quinten, denn dazu braucht man drei Quartenschritte, also Quintenschritte gegen den Uhrzeigersinn: C-F-B-Es. Jedes übliche Intervall entspricht genau einer Anzahl von Quintenschritten. Du musst diese Umrechnung sowohl vorwärts als auch rückwärts durchführen können, dazu am besten schnell.

Zweitens musst du wissen, wie man eine rationale Zahl faktorisiert. Genauso wie jede **positive ganze Zahl** auf nur eine Weise in Primfaktoren zerlegt werden kann, wobei die Potenzen **natürliche Zahlen** sind, kann man jede **positive rationale Zahl** auf nur eine Weise in Primfaktoren zerlegen, wobei die Potenzen **ganze Zahlen** sind. Nach dem Fundamentalsatz der Arithmetik werde ich diesen Satz humorvoll den Fundamentalsatz der Harmonie nennen. Beispielsweise lässt sich 6/5 in 2<sup>1</sup> 3<sup>1</sup> 5<sup>−1</sup> zerlegen, und es gibt keine andere Zerlegung. (Weil dies ein Crash-Kurs ist, werde ich die mathematischen Genauigkeiten weglassen, natürlich sind sie aber für [neugierige Leser](math.html) vorhanden. Überall, wo in diesem Kurs ein mathematischer Satz vorkommt, findest du einen Beweis auf der Mathematikseite.)

Drittens brauchst du die sog. reduzierte Form eines Intervalls. In der Praxis multipliziert oder dividiert man dazu eine Zahl mit bzw. durch 2, bis das Ergebnis zwischen 1 (einbezogen) und 2 (ausgeschlossen) liegt. Dieses Verfahren ähnelt der sog. *Oktaväquivalenz*, wobei wir Tonhöhen als gleichwertig empfinden, wenn sie sich nur um ein Vielfaches der Oktave (2/1) unterscheiden. Dadurch ändert sich beispielsweise 7/1 in 7/4 und 1/6 in 4/3. Die reduzierte Form findet man mithilfe der Formel:

$$\text{red}(d)=d \cdot 2^{-\lfloor\log_2 d\rfloor}$$

Das ist alles, was du brauchst. Fangen wir also an!

## <a name="lesson_1">Lektion 1: Die pythagoreische Stimmung</a>

Du denkst vielleicht, dass durch die Entnahme der Enharmonie sich viel mehr mögliche Tonhöhen beschreiben lassen. Da hättest du Recht. Die Entnahme der Enharmonie reicht aber nicht selbst aus, um die ganze Naturtonstimmung logischerweise darzustellen. Ein Vorteil der Naturtonstimmung ist, dass sie sehr kleine Unterschiede in Tonhöhe gut ausdrückt, und dadurch verschiedenen Intervallen verschiedene Farben gibt.

Stelle dir die folgende Intervallreihe an: 11/10, 10/9, 9/8, 8/7. Hör zu:

<audio controls><source src="../assets/audio_1.mp3" type="audio/mpeg"></audio>

Die allermeisten hören hier vier "etwa große Sekunden". Es wäre aber falsch, alle von ihnen als große Sekunden aufzuschreiben. Sie sind unterschiedliche Intervalle. Die Unterdrückung der Vielfalt dort, wo sie am meisten zählt, widerspricht JI selbst.

Du denkst also vielleicht, dass es einen Mittelweg gibt, einen Teil der ganzen Naturtonstimmung, der genau eindeutig dieser Notenschrift ohne Enharmonie zugeordnet werden kann. Da hättest du auch Recht. Dieser Mittelweg ist genau die Naturtonstimmung bis zum 3-Limit, auch pythagoreische Stimmung genannt.

Das heißt, dass wir die Oktave dem Frequenzverhältnis 2/1 zuordnen, genauso wie bei 12-EDO, und dass wir die reine Quinte dem Frequenzverhältnis 3/2 zuordnen. Damit können wir jedes mögliche Intervall der Notenschrift genau ein mögliches Intervall der pythagoreischen Stimmung zuordnen. Es gibt eine bijektive Zuordnung.

Damit können wir die Menge der Stammtöne sogar *definieren*: F, C, G, D, A, E, und H sind alle so definiert, dass F–C 3/2 beträgt, ebenso C–G, usw. Wir bemerken dann, dass H–F 1024/729 beträgt. Dieses Intervall ist ein Tick kleiner als 3/2. Deshalb definieren wir dann das Kreuz und das Be, um diesen Unterschied aufzuheben, also betragen H–Fis und B–F per Definition auch 3/2. Das FJS funktioniert, indem es dieses Prinzip erweitert: Unterschiede werden durch Versetzungszeichen annulliert.

Bemerken wir, dass diese Bijektion etwas benötigt, das vielleicht nicht allen bewusst ist: mehr als nur doppelte Kreuze und Be. Obwohl sie sehr selten in üblicher Musik vorkommen, sind sie hier erforderlich, damit die Quintenlinie auf beiden Seiten unbegrenzt ist. Im FJS können dreifache, vierfache, usw. Kreuze und Be auch vorkommen. Das heißt gar nicht, dass sie oft vorkommen. Aber keine Panik, falls du sie benutzen musst.

Du bist jetzt bereit, die ersten zwei FJS-Techniken zu lernen.

> ### FJS-Technik \#1: Ein pythagoreisches Frequenzverhältnis in seine FJS-Darstellung umrechnen.
> 
> 1. Faktorisiere das Verhältnis.
> 2. Ignoriere zunächst die 2er-Potenz.
> 3. Beachte die 3er-Potenz, und mache so viele Quintenschritte (im Uhrzeigersinn oder gegen, je nachdem, ob die Potenz positiv oder negativ ist). Dadurch entsteht das entsprechende Intervall.
> 4. Reguliere die Oktave.
>
> **Beispiel:** Um 9/8 in das FJS umzurechnen, faktorisieren wir zunächst: 2<sup>−3</sup> 3<sup>2</sup>. Wir ignorieren die 2er-Potenz. Die 3er-Potenz beträgt +2, also gehen wir zwei Quinten im Uhrzeigersinn: C–G–D. Die Antwort lautet also: große Sekunde.

> ### FJS-Technik \#2: Eine FJS-Darstellung eines pythagoreischen Frequenzverhältnisses zurück umrechnen.
> 
> 1. Ignoriere zunächst Oktaven.
> 2. Bestimme die Anzahl der Quintenschritte, aus denen sich das Intervall ergibt, und nenne sie *n*.
> 3. Berechne $$\text{red}(3^n)$$.
> 4. Reguliere die Oktave.
>
> **Beispiel:** Um die kleine Terz im FJS in ein Verhältnis umzurechnen, bestimmen wir zuerst, dass die kleine Terz −3 Schritte benötigt: C–F–B–Es. $$\text{red}(3^{-3})$$ beträgt 32/27.

Die folgenden sind am meisten verbreitet:

| Intervall      | Schritte | Verhältnis  |
|:---------------|:--------:|:------------|
| kleine Sekunde | −5       | 256/**243** |
| kleine Sexte   | −4       | 128/**81**  |
| kleine Terz    | −3       | 32/**27**   |
| kleine Septime | −2       | 16/**9**    |
| reine Quarte   | −1       | 4/**3**     |
| reine Quinte   | +1       | **3**/2     |
| große Sekunde  | +2       | **9**/8     |
| große Sexte    | +3       | **27**/16   |
| große Terz     | +4       | **81**/64   |
| große Septime  | +5       | **243**/128 |

Du brauchst dir diese Tabelle gar nicht merken! Um das FJS zu benutzen, brauchst du dir überhaupt keine Zahlen merken. Es ist ähnlich wie beim Kopfrechnen. Du sollst schon jetzt selber diese Verhältnisse aus den Intervallen berechnen können, und zurück, mithilfe der zwei Techniken. Fürchte nicht, einen Taschenrechner zu benutzen. Einer wird dir sicher sehr hilfreich sein, bis du dich mit dem FJS so gut auskennst, dass du die Ergebnisse einfach weißt.

### Aufgabe 1

1. Berechne die FJS-Intervalle, die folgenden Frequenzverhältnissen entsprechen: 2187/2048, 1024/729, 8192/6561.
2. Berechne die Frequenzverhältnisse, die folgenden Intervallen entsprechen: verminderte Septime, übermäßige Quinte, verminderte Terz.
3. Finde die Verhältnisse zwischen aufeinanderfolgenden Schritten dieser Tonleiter: <img src="../assets/exercise_1.png" alt="E–F♯–A–B–D–E">
4. Notiere die folgende Tonleiter im FJS mit D als Grundton: 1/1, 81/64, 4/3, 3/2, 243/128, 2/1.
5. Bestimme das Frequenzverhältnis des sog. pythagoreischen Kommas (eine verminderte Sekunde im FJS).
6. (SCHWIERIG!) Nur etwa 3.6 Cent beträgt das winzige pythagoreische Intervall 3<sup>53</sup>/2<sup>84</sup>. Stelle es im FJS dar.

Du kannst die Antworten [hier](solutions.html) nachschlagen.

## <a name="lesson_2">Lektion 2: Die Primzahlintervalle</a>

Also bisher hast du gelernt, die pythagoreische Stimmung aufzuschreiben. Bis jetzt war es ein bisschen langweilig. Die pythagoreische Stimmung weicht gar nicht so viel von 12-EDO ab. Es reicht auch gar nicht aus, um die ganze Naturtonstimmung aufschreiben zu können.

Der nächste Schritt ist die Fähigkeit, sog. Primzahlintervalle darzustellen. Das sind Intervalle der Obertonreihe, die aus Primzahlen bestehen. Wir nehmen also die Reihe der Primzahlen:

> 2, 3, 5, 7, 11, 13, 17, 19, ...

...und wir verwandeln alle in ihre reduzierte Formen:

> 1/1, 3/2, 5/4, 7/4, 11/8, 13/8, 17/16, 19/16, ...

Wir wissen schon, wie die ersten zwei Primzahlen aussehen: die Oktave und die Quinte. Ab jetzt, wenn ich "Primzahlintervalle" sage, meine ich nur die, die Primzahlen über 3 zugeordnet sind.

Falls du dich mit JI auskennst, hast du schon gehört, dass 5/4 als "Naturterz" und 7/4 als "Naturseptime" bezeichnet werden – also Sonderformen der großen Terz bzw. der kleinen Septime. Diese Sprache fiel dir wahrscheinlich erstens nicht auf. Es sieht sich so an, als wären es einfach Erweiterungen der Begriffe "große Terz" und "kleine Septime", um Intervalle einzubeziehen, die nah sind.

Auf einem formalen Niveau aber geschieht etwas Merkwürdiges.

Nehmen wir an, wir akzeptieren das zunächst. 5/4 ist eine Art große Terz. Wir notieren es also als eine große Terz, *mit einem Zusatzzeichen, der für den Unterschied stehen wird.* Die Differenz zur pythagoreischen großen Terz (81/64) beträgt nur 81/80, etwa 22 Cent. Wieso sollte das ein Problem sein? Deswegen, dass es *viel* bessere Annäherungen gibt, zum Beispiel die pythagoreische verminderte Quarte (8192/6561). Sie liegt nur um 32805/32768, nur etwa 2 Cent, entfernt!

Hör dir den Unterschied zwischen 81/64 und 5/4 an:

<audio controls><source src="../assets/audio_2.mp3" type="audio/mpeg"></audio>

Und den Unterschied zwischen 8192/6561 und 5/4:

<audio controls><source src="../assets/audio_3.mp3" type="audio/mpeg"></audio>

Wieso sollten wir also die große Terz, und nicht die verminderte Quarte, als 5/4 benutzen? Einfachheit, sagst du? Die große Terz beträgt nur +4 Quinten, während die verminderte Quarte −8 anbietet, also viel komplizierter. Wieso benutzen wir also nicht die *kleine* Terz als 5/4? Sie ist doch einfacher, nur −3 statt +4 Quinten. Ach, jetzt ist sie nicht nah genug? Wieso bestimmst *du* das richtige Gleichgewicht zwischen Einfachheit und Nähe?

Keine Panik. Das war eine Satire anderer JI-Notationssysteme; sie wählen nämlich selbst diese Annäherungen ohne jede Logik. "Wie wählen wir also die Annäherungen für jedes Primzahlintervall?" Im FJS lautet die Antwort: Wir tun es nicht. Stattdessen tut es für uns eine bestimmte Konstante: der **Toleranzradius**. Nachdem ich mit mehreren Möglichkeiten experimentiert habe, und die Vorteile und Nachteile berücksichtigte, habe ich mich entschieden, dass die Standardversion des FJS den folgenden Radius benutzen wird:

$$\displaystyle \lambda =\sqrt{\frac{33}{31}}$$

Wieso, erkläre ich später.

Wie benutzt das FJS diese Zahl? Der nächste Schritt ist das wichtigste Element des ganzen FJS. Es ist dasjenige Element, das das FJS von allen anderen JI-Notationssystemen unterscheidet. Es ist der **FJS-Master-Algorithmus**. Hier steht er lesbar für Menschen. Andere Formen in Programmiersprachen, darunter auch ein Rechner auf dieser Webseite, gibt es auch.

Der **FJS-Master-Algorithmus** findet die sog. **Generatorfunktion** für jede Primzahl mithilfe des Toleranzradius. Ich erkläre, was der Algorithmus so tut, wie er benutzt wird, und wozu die Generatorfunktion dient.

> ### Der FJS-Master-Algorithmus
> 
> 1. Lese die eingegebene Primzahl in reduzierter Form.
> 2. Fange an mit *k* = 0.
> 3. Betrachte das Intervall aus *k* pythagoreischen Quinten, in reduzierter Form.
> 4. Beträgt die Differenz zwischen diesem Intervall und dem Primzahlintervall weniger als der Toleranzradius?
> 5. Falls ja, dann ist *k* die Generatorfunktion. Ende.
> 6. Falls nicht, gehe zum nächsten *k* in der folgenden Reihe: (0, 1, −1, 2, −2, 3, −3, ...) und wiederhole ab dem 3. Schritt.

Wie du siehst, ist der Algorithmus so einfach, dass du ihn im Kopf durchführen kannst (vielleicht außer dem 4. Schritt, der schwierig ist, bis du die Größe vieler Intervalle ungefähr auswendig weißt, ob als Cent oder du kannst sie dir vorstellen).

Der Algorithmus findet also die einfachste mögliche pythagoreische Annäherung jedes Primzahlintervalls, die innerhalb des Toleranzradius liegt. Die Differenz wird dann **formales Komma** genannt, und ihm wird ein FJS-Versetzungszeichen gegeben. So wird das formale Komma berechnet:

> ### Das formale Komma
>
> Das formale Komma einer Primzahl *p* mit Generatorfunktion *g* ist:
>
> $$\text{comma} (p)=\frac{\text{red} (p)}{\text{red} (3^g)}$$

Es geht auch anders herum: du kannst aus dem formalen Komma die Generatorfunktion einer Primzahl bestimmen, ohne den Algorithmus zu benutzen oder den Toleranzradius zu kennen. (Das ist manchmal nützlich, aber kommt nicht oft vor.) Dividiere das reduzierte Primzahlintervall durch das formale Komma. Der Quotient ist die pythagoreische Annäherung. Faktorisiere sie. Die 3er-Potenz davon ist die Generatorfunktion. Beispielsweise ist uns gegeben, dass das formale Komma von 7 63/64 beträgt. Wir dividieren das Primzahlintervall 7/4 durch 63/64. Das Ergebnis ist (7/4) ÷ (63/64) = 16/9, die pythagoreische Annäherung. Wir faktorisieren sie und erhalten 2<sup>4</sup> 3<sup>−2</sup>. Da die 3er-Potenz −2 beträgt, ist das auch die Generatorfunktion für 7.

Genauso wie das Kreuz und das Be gibt es je zwei Versetzungszeichen für jedes Komma: positiv oder negativ. Das Symbol für das Versetzungszeichen basiert stets auf der Primzahl selbst. Die Form variiert, je nachdem du Notennamen oder Notenschrift schreibst:

- Bei Notennamen werden positive Versetzungszeichen hochgestellt und negative tiefgestellt.
- Bei Notenschrift werden positive Versetzungszeichen als einfach die Primzahl, negative als die Primzahl mit einem Minus-Zeichen geschrieben.

Bemerke, dass ich mit Absicht die Worte "positiv" und "negativ" statt "aufwärts" und "abwärts" verwende. Deswegen eben, dass im FJS positive Versetzungszeichen nicht immer erhöhen, und negative nicht immer senken. Statt dessen heißt **positiv immer otonal** und **negativ immer utonal**. Das heißt Folgendes – und es ist ganz wichtig – *ein FJS-Versetzungszeichen ist immer positiv in der Richtung, wo eine pythagoreische Annäherung eines Primzahlintervalls zum Intervall selbst wird.* Beispielsweise, um 5/4 von C aufzuschreiben, schreiben wir zunächst E (die Annäherung, 81/64), dann verwandeln wir es in ein 5/4, indem wir ein +5 dazuschreiben, also E<sup>5</sup>. Dieses +5 versetzt es eigentlich um 81/80 nach *unten*.

Diejenigen von euch, denen das Ben-Johnston-System schon bekannt ist, ist diese Idee nicht fremd. Für den Rest von euch:

Es sieht zuerst überflüssig kompliziert aus. Tatsächlich ist es aber viel einfacher. Zum Beispiel: Ein positives Versetzungszeichen von +17 bedeutet immer, dass seine Anwendung einen Faktor von 17 zum Zähler hinzubringt. Solange du weißt, welche pythagoreische Annäherung 17/16 hat (es ist die kleine Sekunde), weißt du auch, dass 17/16 einfach als kleine Sekunde mit +17 geschrieben wird. Du brauchst dazu nicht zu wissen, ob die Annäherung höher oder niedriger als das Ziel ist! Dieses Prinzip, das auf Otonalität und Utonalität anstatt Richtung basiert, vereinfacht auch die Notation vieler Tonleitern und Stimmungssystemen. Im FJS ist das Versetzungszeichen +5 eigentlich als 80/81, nicht 81/80, beschrieben. In einer Liste formaler Kommas für jede Primzahl *p* > 3 wird das formale Komma einen Faktor von *p* immer im Zähler enthalten. Es ist auch der Grund, warum dieses System das Naturton**funktions**system heißt: sein Schwerpunkt ist, die **Funktion**, und nicht die Tonhöhe, wiederzugeben.

Ich möchte dazu gerne eine Anekdote erzählen. Während ich ein Prototyp des Naturtonfunktionssystems entwickelte (noch bevor es einen Namen hatte), ursprünglich waren alle formalen Kommas doch positiv aufwärts und negativ abwärts. Einmal dachte ich über einige 5-Limit- und 7-Limit-Stimmungen nach, und plötzlich fiel mir auf, dass diese Konvention überflüssig kompliziert ist, und ich habe mich sofort entschieden, sie auf die jetzige zu ändern: positiv-otonal, negativ-utonal. Nachdem ich dies getan habe, hat es mein Denken im FJS drastisch vereinfacht, also so blieb es. (Das ursprüngliche FJS hatte noch viele andere Unbequemlichkeiten, bevor ich es zur heutigen, extrem einfachen Form reduzieren konnte...)

So sieht die Obertonreihe von A bis zum achten Oberton im FJS aus:

> A, A, E, A, Cis<sup>5</sup>, E, G<sup>7</sup>, A.

So sieht sie in Notenschrift aus:

<img src="../assets/example_3.png" alt="A–A–E–A–C♯5–E–G7–A">

So hört sie sich an:

<audio controls><source src="../assets/audio_4.mp3" type="audio/mpeg"></audio>

Wie du siehst, alle Versetzungszeichen in der Obertonreihe sind positiv (und das gilt für die ganze, unendliche Obertonreihe). Ist das nicht viel sauberer, als wenn wir Richtung statt Otonalität benutzen würden? Ich verstehe, dass du zuerst verwirrt sein kannst. Mit der Zeit aber wirst du selbst sehen, dass es das FJS doch logischer und einfacher macht. (Du kannst dir auch eine andere Analogie vorstellen: anstatt das Kreuz als erhöhend und das Be als senkend zu betrachten, bemerke, dass das Kreuz Quinten addiert, und das Be Quinten subtrahiert.)

Jetzt möchte ich erklären, wie diese Versetzungszeichen miteinander interagieren.

> ### Propagierung der FJS-Versetzungszeichen
>
> - Wir wissen alle, dass pythagoreische Versetzungszeichen die einzelnen Stammtöne (C, D, E, F, G, A, H) in dessen korrekte pythagoreische Tonhöhen kategorisieren. Deshalb gelten sie für alle Noten desselben Stammtons in derselben Oktave in demselben Takt.
> - Ebenso kategorisieren FJS-Versetzungszeichen die pythagoreischen Töne (C, Des, Cis, D, ...) in dessen korrekte absolute Tonhöhen. Deshalb gelten sie für alle Noten desselben pythagoreischen Tons in derselben Oktave in demselben Takt.

Wieso? Weil es damit logischer und praktischer ist. Hier siehst du eine Veranschaulichung dieser Regel:

<img src="../assets/example_4.png" alt="C♯5–C, C♯5–C1, C♯5–C♮, C♯5–C♮5">

- Im ersten Takt haben wir ein Cis<sup>5</sup> und danach ein bloßes C. Weil es derselbe Stammton in derselben Oktave ist, absorbiert es das Kreuz. Weil es jetzt ein Cis in derselben Oktave ist, absorbiert es auch das +5. Wir haben also Cis<sup>5</sup>, Cis<sup>5</sup>.
- Im zweiten Takt gibt es ein Cis<sup>5</sup> und danach ein bloßes C mit einem Versetzungszeichen von +1. **+1 ist das FJS-Äquivalent des Auflösungszeichens. Es löst alle FJS-Versetzungszeichen auf, aber nichts sonst.** Deshalb heißt es Cis<sup>5</sup>, Cis.
- Im dritten Takt gibt es ein Cis<sup>5</sup> und danach ein aufgelöstes C. Weil es jetzt nicht mehr derselbe pythagoreische Ton ist, wird das +5 nicht mehr absorbiert, deshalb heißt es Cis<sup>5</sup>, C.
- Im vierten Takt gibt es ein Cis<sup>5</sup> und danach ein aufgelöstes C mit +5. Jetzt haben wir Cis<sup>5</sup>, C<sup>5</sup>; dieser Fall tritt wahrscheinlich am seltensten auf.

Noch eine Anmerkung: das FJS ermöglicht auch, Intervallnamen diese hoch- und tiefgestellten Versetzungszeichen anzuhängen. Auf diese Weise werden JI-Frequenzverhältnisse formal im FJS benannt. Zum Beispiel "heißt" 5/4 die (große Terz)<sup>5</sup>. Das wäre also E<sup>5</sup> von C, oder A<sup>5</sup> von F, oder H<sup>5</sup> von G, usw.

OK, das ist alles, was du wissen musst, um die Primzahlintervalle aufschreiben zu können. Unten findest du eine neue Technik. Den Toleranzradius brauchst du nicht mehr. Man benutzt ihn nur im Master-Algorithmus, wo die Generatorfunktion einer Primzahl bestimmt wird.

> ### FJS Technique \#3: Ein otonales Primzahlintervall ins FJS umrechnen.
> 
> 1. Finde die Generatorfunktion der Primzahl.
> 2. Schreibe das Intervall auf, das dieser Anzahl von Quintenschritten entspricht.
> 3. Addiere ein positives Versetzungszeichen der Primzahl selbst. Beispielsweise erhält 23/16 ein +23.
>
> **Beispiel:** Um 7/4 im FJS zu notieren, wir finden zuerst die Generatorfunktion von 7: −2. Wir schreiben das Intervall aus −2 Quinten auf: C–F–B, also eine kleine Septime. Als Letztes fügen wir ein +7 dazu, damit erhalten wir eine (kleine Septime)<sup>7</sup>. (Ja, es sieht auf den ersten Blick komisch aus.)

(Die Rückumrechnung ist trivial: um das Verhältnis eines Intervalls im FJS zu bestimmen, wenn gegeben ist, dass es ein otonales Primzahlintervall ist, nimmt man einfach die Primzahl, die auf dem Versetzungszeichen steht!)

### Aufgabe 2

(Ab jetzt nimm immer an, dass der Toleranzradius λ beträgt.)

1. Finde die Generatorfunktion für die Primzahlen 11 und 13.
2. Gegeben ist, dass die Generatorfunktion von 19 −3 beträgt. Finde daher das formale Komma für 19.
3. Gegeben ist, dass das formale Komma von 47 47/48 beträgt. Finde daher die Generatorfunktion für 47.
4. Notiere die folgende Tonleiter mit E als Grundton: 1/1, 9/8, 5/4, 4/3, 3/2, 7/4, 2/1.
5. Notiere die Obertonreihe von A bis zum vierzehnten Oberton.
6. (SCHWIERIG!) Notiere die *Unter*tonreihe von A bis zum achten Unterton.

Du kannst die Antworten [hier](solutions.html) nachschlagen.

## <a name="lesson_3">Lesson 3: Compound Accidentals</a>

You now know how to represent a large portion of Just Intonation using the FJS. You can notate all of Pythagorean tuning and all of the prime intervals. But that still doesn't cover everything; what about intervals built from more than one prime (including 3), like 15/8 or 25/16, and what about intervals that aren't in the harmonic series at all, like 5/3, 6/5, or 9/7?

For the purposes of this crash course, I've divided the intervals not yet covered into two groups:

- Intervals, like 15/8 or 9/7, which consist of a Pythagorean interval plus a single otonal or utonal prime interval.
- Intervals, like 25/16 or 7/5, which require more than one prime interval to be built.

When it comes to the first group, you can already write them – you just don't know that yet. This is because the FJS has a number of really useful identities that will often allow you to skip having to carry out the techniques I've given (remember that intervals are compounded by multiplying their ratios):

> ### FJS Shortcut Identities
>
> - The sum of the FJS representations of two JI ratios is the FJS representation of the product of these ratios.
> - The difference of the FJS representations of two JI ratios is the FJS representation of the quotient of these ratios.
> - The inversion of the FJS representation of a JI ratio is the FJS representation of the reciprocal of the ratio.

These identities have several really nice corollaries that are useful to keep in the back of your mind for fluency. For example, if you have two notes with identical FJS accidentals, you know that the interval between them must be Pythagorean. E<sup>5</sup> and F♯<sup>5</sup>? You may have no idea what they are in the key of B♭<sub>7</sub>, but you know the interval between them is a Pythagorean major second – that is, 9/8. Neat, huh?

These identities can also be used to write the first group of missing intervals. Take 15/8. Break it up into its Pythagorean part and the remainder: 3/2 and 5/4. Write each of these in the FJS in turn, and then add those representations together. 3/2 becomes P5, and 5/4 becomes M3<sup>5</sup>. The sum is M7<sup>5</sup>. You just add the intervals as you normally would, and affix the FJS accidentals at the end. This indeed is the representation of 15/8 in the FJS!

Another way to think about it is like so: the fifteenth harmonic is like the fifth harmonic in the dominant key. So to notate 15/8 in the key of C, you can start with an "imaginary modulation" to the key of G. There, your target is simply the fifth harmonic, which becomes B<sup>5</sup>. This is therefore also the representation of 15/8 in the key of C.

Yet another way to think about it: you may not know what 15/8 is in the FJS in the key of C, but you know what 5/4 is: it's E<sup>5</sup>. You also know that between 5/4 and 15/8 there's 3/2, a Pythagorean interval. So they must have the same FJS accidentals. You also know that this Pythagorean interval between them is a perfect fifth. That uniquely describes the note B<sup>5</sup>, which is correct.

Try using these methods to tackle the next exercise.

### Exercise 3

1. Write the FJS representations of the following: 5/3, 6/5, 7/6, 9/5.
2. Find the JI ratios of the following FJS intervals: M2<sup>5</sup>, M3<sub>7</sub>, m7<sup>11</sup>.
3. Notate Ptolemy's intense diatonic scale in the FJS on C. The ratios are: 1/1, 9/8, 5/4, 4/3, 3/2, 5/3, 15/8, 2/1.
4. (HARD!) Take the following scale. Is it a mode of the above? <img src="../assets/exercise_2.png" alt="C–D–E♭_5–F–G–A♭_5–B♭_5–C">

You can check your answers [here](solutions.html).

(At the end of this lesson, you will be provided with techniques to translate *any* ratio to an FJS representation and backwards. However it's useful to keep these methods in mind because they are much quicker and you will generally be using them instead. It's like choosing factorization over the quadratic formula to solve quadratics; it's much faster if you can.)

While you were using the identities you were given to tackle these questions, you may have asked yourself a question: "How would I add, for instance, two M3<sup>5</sup> intervals to each other? What would the result be?" Would it be A5<sup>5</sup>? No, that would be the result of adding M3 to M3<sup>5</sup>. Our case is different, it's adding M3<sup>5</sup> to another M3<sup>5</sup>.

The answer to this question happens to simultaneously be the way the FJS notates the second group of remaining JI intervals: *compound accidentals*.

Any FJS note or interval may have not just one, but any number of FJS accidentals appended to it. The otonal and utonal accidentals are always kept separate, but if there is more than one accidental of the same "x-tonality" (otonality or utonality), they are merged. FJS accidentals merge by multiplication. Why? Because they are all primes; multiplying them – as opposed to, say, adding or concatenating the digits in base ten – will never make you lose information about the original primes, because every positive integer can be uniquely factorized back into its primes, and order does not matter.

If the accidentals merge in such a way that you can't easily factorize them in your head (e.g. 119 = 7 × 17), you can write them out as a list with commas between each prime ("commas" being, of course, the punctuation mark, not a tiny musical interval). For example, D<sup>7,17</sup> would mean the exact same thing as D<sup>119</sup>. The convention is to write these primes in non-descending order, but any order is correct. You can also multiply in any combination, so for example you can write G<sup>11,125</sup>, multiplying only some of the factors.

So to answer the original question, the sum of two M3<sup>5</sup> is A5<sup>25</sup>, which neatly fits as the FJS name of the ratio 25/16. Similarly, given that a 7/4 is a m7<sup>7</sup>, you immediately know that a 49/32 will be a m6<sup>49</sup> and a 35/32 will be a M2<sup>35</sup>.

As mentioned, otonal and utonal do not mix. So if a note G♭ happened to have both +7 and −5 accidentals, it would be written as G♭<sup>7</sup><sub>5</sub>. The exact rules are as follows:

- In note naming, use one superscript representing the merged positive accidentals, followed by one subscript representing the merged negative accidentals.
- In music notation, the merged positive accidental is written first (if any), then the merged negative accidental with a minus sign in front (if any), then any conventional accidental, then the note.

So the notes G♭<sup>7</sup><sub>5</sub> and F♯<sup>5</sup><sub>7</sub> (respectively 7/5 and 10/7 in the key of C) would be written in staff notation like this:

<img src="../assets/example_5.png" alt="G♭7_5–F♯5_7">

Here is what they sound like, respectively:

<audio controls><source src="../assets/audio_5.mp3" type="audio/mpeg"></audio>

Once compound accidentals have been defined, you can do a lot more with the FJS. In particular, you can add, subtract, and invert any two FJS intervals. You can also add an interval to a note (e.g. G + M3<sup>5</sup> = B<sup>5</sup>) and you can subtract a note from another note (e.g. F<sup>7</sup> − C = P4<sup>7</sup>). That way, you can use the identities for addition, subtraction and inversion to quickly find many FJS representations of intervals you couldn't represent before.

> ### FJS Interval Arithmetic
>
> - To add two FJS intervals, add their Pythagorean parts (conventional interval classes) and merge the accidentals.
> - To subtract two FJS intervals, subtract their Pythagorean parts, then swap the otonal with the utonal accidental for the second interval, then merge. Subtracting an FJS interval is the same as adding its inverse.
> - To invert an FJS interval, invert its Pythagorean part and swap the otonal with the utonal accidental.
> - You can also add an FJS interval to an FJS note, or subtract an FJS note from another FJS note.

When you combine accidentals, you cancel out identical factors in the otonal and the utonal. For example, adding M3<sup>5</sup> (5/4) to m3<sub>5</sub> (6/5) gives "P5<sup>5</sup><sub>5</sub>" which reduces to P5, as expected (3/2). Adding m2<sup>49</sup> (49/48) to M2<sub>7</sub> (8/7) gives "m3<sup>49</sup><sub>7</sub>" which becomes m3<sup>7</sup> (7/6).

Using interval arithmetic, you can now in fact represent *any* JI ratio using the FJS, and decode any FJS interval back into a ratio. You can use the a few simple methods if the ratios in question don't involve many primes.

To convert a simple JI ratio quickly to an FJS representation: Factorize the numerator into a Pythagorean interval plus primes. Build the Pythagorean interval, and each prime as a prime interval, and add them up. Repeat for the denominator. Then, subtract the numerator's interval from the denominator's interval. For example, to convert 36/25, we first build the numerator: 36, which is 9/8, which is M2. Then we build the denominator: 25. It splits to 5 and 5, which is two M3<sup>5</sup>, which becomes A5<sup>25</sup>. Now we subtract; M2 − A5 = d5, and the accidentals are (0) − (+25) = (−25). So the final answer is d5<sub>25</sub>.

Similarly, you can also easily convert a simple FJS representation back into a JI ratio. Try $$\frac{\text{otonal accidental}}{\text{utonal accidental}}$$. (You don't even need to factorize the accidentals. That's a perk of using multiplication to merge them.) If you are off, then only by a Pythagorean interval. Adjust accordingly. For example, let's try to convert A1<sup>5</sup><sub>7</sub>. We try 5/7, which is 10/7; when we apply Technique 6 to this, we obtain A4<sup>5</sup><sub>7</sub>, which isn't too far off. We only need to adjust by one Pythagorean fifth upwards. So the correct answer is actually (3/2) × (5/7) = 15/14.

These methods will, 99% of the time, be enough to read and write in the FJS, and as you can see, they are easy to use. In fact, much of the time, you don't even have to use these; skimming the harmonic series is often enough to perform forwards and backwards conversions in mere seconds. Want to convert 14/13 into the FJS? You know that 13 is a m6 and 14 is a m7, so 14/13 must be a M2. Then because of 14 in the numerator you stick a +7, and because of 13 in the denominator you stick a −13, and voilà, you have found the correct FJS representation: M2<sup>7</sup><sub>13</sub>.

However, one of the virtues of the FJS is that it can be fully automated. The above methods may rely a little on intuition, and are not very useful for complex intervals. In the case of complex intervals, you can *always* perform the forward and backward conversions using these final two techniques:

> ### FJS Technique \#4: To convert any JI ratio automatically to an FJS representation.
>
> 1. Factorize the ratio.
> 2. For every prime *p* greater than 3 with an exponent of α<sub>*p*</sub>, remember the α<sub>*p*</sub> for every *p* and multiply the initial ratio by
>
> 	$$(\text{comma} (p))^{-\alpha _p}$$
>
>	where $$\text{comma}(p)$$ is the formal comma of *p*.
>
> 3. The result will be Pythagorean. Transform it into FJS form.
> 4. Now add the α<sub>*p*</sub> as accidentals – if positive, then otonal; if negative, then utonal.
> 5. Take the reduced form and adjust octaves as required.
>
> **Example:** Let's convert the weak just chromatic semitone, 25/24, into FJS form using this technique. 25/24 = 2<sup>3</sup> 3<sup>−1</sup> 5<sup>2</sup>. Because of 5<sup>2</sup>, remember 2 and multiply by (80/81)<sup>−2</sup>. The result is 2187/2048, which is Pythagorean and converts to A1. Now we add a double +5 (because of the 2) and we get A1<sup>25</sup>.

> ### FJS Technique \#5: To convert any FJS representation automatically into a JI ratio.
>
> 1. Convert the Pythagorean part of the FJS interval into a Pythagorean ratio.
> 2. For every otonal accidental *p*, multiply by the formal comma of *p*. If utonal, then divide.
> 3. Take the reduced form and adjust octaves as required.
>
> **Example:** One of the most iconic harmonies of La Monte Young's *Well-Tuned Piano* is written m3<sup>49</sup> in the FJS. To find its ratio, we start by converting m3 to 32/27. Then, +49 means multiply by the formal comma of 7 twice. So (32/27) × (63/64)<sup>2</sup> = 147/128.

One final note is on pronunciation and ASCII. If you want to communicate using the FJS, that ought to be possible using more than just one medium. Here are the simple and logical pronunciation rules:

> ### FJS Pronunciation
>
> 1. Pronounce the conventional (Pythagorean) part of the note name, or the conventional (Pythagorean) interval.
> 2. Then, attach the compound otonal accidental (if any) pronounced simply as the number itself, optionally with a "super" prefix.
> 3. Then, attach the compound utonal accidental (if any) pronounced simply as the number itself with a "sub" prefix.

So for example, E<sup>5</sup> is pronounced "E-five" or "E-super-five", and E♭<sub>5</sub> is pronounced "E-flat-sub-five". An interval such as P4<sup>7</sup><sub>11</sub> would be pronounced "perfect fourth (super) seven sub eleven", where the word "super" is optional and is used to emphasize the division between the name of the interval and the start of the FJS accidentals.

As for ASCII, it might be problematic to type these names because of the super- and subscripts. You can alternatively indicate a subscript with a preceding underscore, like you usually would, and you can do the same for a superscript using a caret symbol. But you can usually omit the caret; it is only required if you're describing intervals to split the number describing the interval from the FJS accidental. So E<sup>5</sup> can be written E^5 or simply E5, but M3<sup>5</sup> can only be written M3^5 (not M35, obviously, as that would be a "major thirty-fifth", or a major seventh plus four octaves; M35 would be 243/8 in the FJS).

**That's it!**

This is all you need to know to use the *entirety* of the FJS and represent *any* JI you wish! There is no memorization to be done, no lookup tables to be bookmarked, nothing! One of the largest virtues of this system is that it's all completely portable; all you need to set it up anywhere is calculation and your radius of tolerance. The techniques you've just been given can be automated and the entire system can be handled by a computer.

The FJS has a lot of beautiful properties that make it incredibly logical. The most important property is that it is *bijective* to JI; every positive rational number has exactly one FJS representation, and every positive FJS representation has exactly one rational number it represents. Another property – which has already been given above – is that it is *linear*; it doesn't matter if you combine ratios and then transform them into the FJS, or first transform them, then combine; the result is the same. These properties make transposition in the FJS extremely easy. To transpose by, say, M2<sup>5</sup>, you would first transpose by a M2 (which is exactly the same as a normal transposition by a major second; the FJS accidentals remain unchanged) and then add a +5 accidental to every note, merging as necessary (so that e.g. +5 becomes +25, +7 becomes +35, −5 becomes 1).

There's one last thing that you might want before trying your accumulated skills at the last exercise. Again, this is just for reference; you could have calculated this table yourself if you wanted (which you wouldn't, so that's why I did it for you).

| Prime | Generator | Formal Comma |
|------:|:---------:|:------------:|
| 5     | +4        | 80/81        |
| 7     | −2        | 63/64        |
| 11    | −1        | 33/32        |
| 13    | −4        | 1053/1024    |
| 17    | −5        | 4131/4096    |
| 19    | −3        | 513/512      |
| 23    | +6        | 736/729      |
| 29    | −2        | 261/256      |
| 31    | +5        | 248/243      |

Now you can finally learn why the square root of 33/31 is my preferred choice for the radius of tolerance. This number is the geometric mean of 33/32 and 32/31, being strictly greater than the former and strictly less than the latter. So 33/32 is accepted as a possible formal comma, allowing the representation of 11/8 as a P4 (if this was rejected, the next nearest approximation would be an absurd d5). But at the same time, 32/31 is rejected, disallowing the just as absurd representation of 31/16 as a P8. Clever, huh?

### Exercise 4

1. Convert the following JI ratios into the FJS using any technique you like: 28/27, 15/13, 33/25.
2. Convert the following FJS representations into JI ratios using any technique you like: M6<sub>7</sub>, d4<sup>13</sup><sub>5</sub>, m3<sub>25</sub>.
3. Notate a JI rendition of the famous ii–V–I progression in the FJS in the key of B♭, given the following JI ratios from B♭:
	- ii chord: 10/9, 5/4, 4/3, 5/3, 1/1
	- V chord: 3/2, 9/8, 21/16, 27/16, 15/8
	- I chord: 1/1, 9/8, 5/4, 3/2, 15/8
4. Translate the following chord progression from the FJS back into ratios above E♭, the tonic:
	
	<img src="../assets/exercise_3.png" alt="E♭–B♭–G5–E♭, C5–C5–G5–E♭, A♭–C5–A♭–F5, B♭–B♭–F1–D5, E♭–B♭–G5–E♭">
	
5. Given that the base note is A, notate the first audio example in this crash course using the FJS. Here it is again: 11/10, 10/9, 9/8, 8/7.
	
	<audio controls><source src="../assets/audio_1.mp3" type="audio/mpeg"></audio>
	
6. (HARD!) There are supporters of the "432 Hz movement", which insists that re-tuning A down from 440 Hz to 432 Hz improves the physical and spiritual quality of music. (Whether or not this is true is insignificant here.) Determine the FJS representation of the interval by which a piece of music is transposed in the FJS when such a pitch shift is carried out.

You can check your answers [here](solutions.html).

## <a name="da_capo_al_fine">Da Capo Al Fine: What Else?</a>

This is *all* you need to use the FJS! You can write any JI music using the FJS now. The only remaining parts of the FJS are shorthand methods that I have invented to make you able to cut down on writing many FJS accidentals in common situations. These include FJS key signatures and transposition lines. These elements are not covered in this crash course. Instead, to learn about them, you should check out the [full formal description](rules.html) of the FJS (where you should also go for reference of any rules regarding the system).

Except for those, that's it! You have already learned the entirety of the FJS in mere minutes. Go now, and may the FJS simplify your thinking when you next encounter Just Intonation.

**The End.**
