# Die Mathematik des FJS

Diese Seite enthält mathematische Sätze, dessen Wahrheit die Funktionsweise des FJS gewährleistet, und garantiert, dass das FJS alle Eigenschaften besitzt, von denen ich erzählt habe, aber die gleichzeitig außer dem FJS nicht vorkommen. Die Mehrheit dieser Mathematik ist eine große Bestrebung, um zu beweisen, dass das FJS bijektiv ist, also dass jede FJS-Darstellung genau einem JI-Frequenzverhältnis zugeordnet wird, und umgekehrt.

## 1. Satz

**Um zwei Intervalle zu addieren, multiplizieren wir die Verhältnisse.**

Stelle dir drei Frequenzen vor:

$$f_1, f_2, f_3$$

Lass sie zwei benachbarte Intervalle formen:

$$d_{1,2}=\frac{f_2}{f_1}, d_{2,3}=\frac{f_3}{f_2}$$

Die Summe dieser Intervalle beträgt:

$$d_{1,3}=\frac{f_3}{f_1}$$

Aber es ist auch gleich:

$$\frac{f_3}{f_1}=\frac{f_2 \cdot f_3}{f_1 \cdot f_2}=\frac{f_2}{f_3} \cdot \frac{f_1}{f_2}=d_{1,2} \cdot d_{2,3} \quad \blacksquare$$

**Folge.** Die Differenz zweier Intervalle ist der Quotient von Verhältnissen.

## 2. Satz

**Jede positive rationale Zahl kann auf nur eine Weise in Primfaktoren zerlegt werden, wobei die Exponenten ganze Zahlen sind.** ("Fundamentalsatz der Harmonie")

Für den Beweis beginnen wir mit dem Fundamentalsatz der Arithmetik, der Fähigkeit, jede positive ganze Zahl auf nur eine Weise in Primfaktoren zu zerlegen, wobei die Exponenten natürliche Zahlen sind. Die Notation p⁡(*n*) bedeutet hier wie üblich die *n*-te Primzahl, also $$\text{p}(1)=2$$.

$$\displaystyle a=\prod_{i=1}^{n} \text{p}(i)^{\alpha _i}, a\in \mathbb{Z}_+, n, \alpha _i \in \mathbb{N}$$

Stelle dir jetzt ein Intervall vor. Als JI-Intervall muss es möglich sein, es als Quotient zweier positiven ganzen Zahlen darzustellen. Erweitere beide Zahlen mithilfe des Fundamentalsatzes der Arithmetik.

$$\frac{a}{b}=\frac{\prod_{i=1}^{n} \text{p}(i)^{\alpha _i}}{\prod_{j=1}^{m} \text{p}(j)^{\beta _j}}$$

Berechne $$t=\text{max}(n,m)$$ und erweitere maximal eines der Produkte, bis beide die Länge *t* haben, einfach durch die Verkettung weiterer Primzahlen hoch null. Dann kürze.

$$\frac{a}{b}=\frac{\prod_{i=1}^{t} \text{p}(i)^{\alpha _i}}{\prod_{j=1}^{t} \text{p}(j)^{\beta _j}}=\prod_{k=1}^{t} \text{p}(k)^{\gamma _k}$$

Wegen des Fundamentalsatzes der Arithmetik sind die Exponenten jetzt Differenzen je zweier natürlichen Zahlen. Die natürlichen Zahlen sind selbst nicht bezüglich der Subtraktion abgeschlossen, die ganzen Zahlen sind aber deren kleinste Obermenge mit dieser Eigenschaft. Deshalb gibt es eine einzelne Darstellung jeder positiven rationalen Zahl als Produkt von Primzahlen mit ganzen Zahlen als Potenzen. $$\blacksquare$$

## 3. Satz

**Wenn *p* und *q* zwei verschiedene Primzahlen sind, dann gilt: $$p^n\neq q^m$$ für alle ganzen Zahlen *n*, *m* ungleich null.**

Wir nehmen an, dass solche zwei Primzahlen *p*, *q* und zwei ganze Zahlen *n*, *m* existieren, sodass:

$$p^n=q^m$$

Die Zahlen *p* und *q* sind bereits Primzahlen, das ist also auch schon die Primfaktorzerlegung.

Dies ist ein Widerspruch, denn der Fundamentalsatz der Arithmetik gibt an, dass es nur eine Weise gibt, jede positive ganze Zahl in Primfaktoren zu zerlegen. Hier haben wir angeblich zwei verschiedene Primfaktorzerlegungen derselben Zahl. Den Widerspruch kann man vermeiden, indem *n*, *m* beide gleich null sind (dann sind es zwei verschiedene Darstellungen der Zahl 1). Das aber ist wiederum ein Widerspruch mit der Annahme, dass *n*, *m* beide ungleich null sind. $$\blacksquare$$

**Folge.** Mit *p* = 2, *q* = 3 erhalten wir eine Aussage über Oktaven und reine Duodezimen, also Quinten. Das heißt, ein "Quintenzirkel" aus 3/2-Quinten schließt sich niemals.

## 4. Satz

**Die pythagoreische Stimmung ist der Notenschrift bijektiv.**

Stelle dir die C-Dur-Tonleiter als Quintenlinie vor:

F, C, G, D, A, E, H

Das ist ein Fragment einer Kette von Quinten mit D als Ursprung:

−3, −2, −1, 0, +1, +2, +3

Diese ganzen Zahlen stellen die Anzahl der Quintenschritte in dieser "Quintenspirale" dar; positive Zahlen bedeuten die Addition von Quinten und negative die Subtraktion.

Beachte aber, dass wir schon wissen, wie man diese Kette erweitern kann. Das Kreuz und das Be sind genau so definiert, dass B zu F eine reine Quinte ist, ebenso H zu Fis. Wir addieren also eine Kopie der Tonleiter mit Kreuzen und eine mit Be, und erhalten deswegen die Kette bis zu −10 und +10:

F♭, C♭, G♭, D♭, A♭, E♭, B♭, F, C, G, D, A, E, B, F♯, C♯, G♯, D♯, A♯, E♯, B♯

−10, −9, −8, −7, −6, −5, −4, −3, −2, −1, 0, +1, +2, +3, +4, +5, +6, +7, +8, +9, +10

Doppelkreuze und Doppel-Be ermöglichen eine Erweiterung bis zu 17, dreifache Kreuze und Be bis zu 24, usw.

*Die Kette wird sich niemals schließen und ein Zirkel bilden*, das haben wir bereits im 3. Satz bewiesen. Sie ist also in beiden Richtungen unendlich, jeder Note wird also genau eine ganze Zahl zugeordnet, eine Anzahl von Quintenschritten. $$\blacksquare$$

**Folge.** Jedes pythagoreische Frequenzverhältnis wird genau einem üblichen Intervall zugeordnet, genauso, wie das FJS es macht.

## 5. Satz

**Definition:** Eine *Brückenzahl* für eine Primzahl *p* ist eine Zahl der Form $$2^a\cdot 3^b\cdot p$$ wobei *p* eine Primzahl größer als 3 ist, und *a*, *b* sind ganze Zahlen.

**Satz: Für jede bekannte unendliche Liste von Brückenzahlen, genau eine Brückenzahl pro Primzahl, kann jedes JI-Intervall auf nur eine Weise als Produkt eines pythagoreischen Intervalls und Brückenzahlen mit ganzen Zahlen als Exponenten dargestellt werden.** (Hauptsatz des FJS)

Der Beweis erfolgt durch vollständige Induktion. Der Induktionsanfang ist *p* = 5.

Sei $$C_p=2^{a_p}\cdot 3^{b_p}\cdot p$$ die Brückenzahl für die Primzahl *p* mit bestimmten ganzen Zahlen *a*<sub>*p*</sub>, *b*<sub>*p*</sub>. Es ist ein bekanntes Intervall.

Für den Induktionsanfang, stelle dir eine bekannte Brückenzahl für 5 vor: $$C_5=2^{a_5}\cdot 3^{b_5}\cdot 5$$, und ein 5-Limit-Intervall mit einer bekannten einzigartigen Primfaktorzerlegung: $$d=2^{\alpha _2} \cdot 3^{\alpha _3} \cdot 5^{\alpha _5}$$.

$$d=2^{\alpha _2} \cdot 3^{\alpha _3} \cdot 5^{\alpha _5}$$

$$d=2^{\alpha _2 + \alpha_5 a_5 - \alpha_5 a_5} \cdot 3^{\alpha _3 + \alpha_5 b_5 - \alpha_5 b_5} \cdot 5^{\alpha _5}$$

$$d=2^{\alpha _2 - \alpha_5 a_5} \cdot 2^{\alpha _5 a_5} \cdot 3^{\alpha _3 - \alpha_5 b_5} \cdot 3^{\alpha _5 b_5} \cdot 5^{\alpha _5}$$

$$d=(2^{a_5} \cdot 3^{b_5} \cdot 5)^{\alpha _5} \cdot 2^{\alpha _2 - \alpha_5 a_5} \cdot 3^{\alpha _3 - \alpha_5 b_5}$$

$$d=(C_5)^{\alpha _5} \cdot 2^{\alpha _2 - \alpha_5 a_5} \cdot 3^{\alpha _3 - \alpha_5 b_5}$$

Dies ist eine einzigartige Darstellung als pythagoreisches Verhältnis, also ein 3-Limit-Intervall, multipliziert mit der gegebenen Brückenzahl mit einer ganzen Zahl als Exponent. Der Induktionsanfang gilt.

Für den Induktionsschritt nehmen wir die Wahrheit für $$\text{p}(n)$$ an, und beweisen, dass dies die Wahrheit für $$\text{p}(n+1)$$ gewährleistet.

Sei *g* ein JI-Intervall des Limits $$\text{p}(n+1)$$. Deshalb kann man es auf nur eine Weise in Primfaktoren bis zu dieser Primzahl zerlegen:

$$\displaystyle g=\prod_{i=1}^{n+1} \text{p}(i)^{\alpha _{\text{p}(i)}}$$

Wir spalten jetzt das Produkt und nennen $$\text{p}(n+1)$$ einfach *q*:

$$\displaystyle g=\prod_{i=1}^n \text{p}(i)^{\alpha _{\text{p}(i)}} \cdot q^{\alpha _q}$$

Wegen der Induktionsannahme können wir alle Terme vor *q* mit Brückenzahlen darstellen. Hier sind *x*, *y* ganze Zahlen, die zufällig durch diese Umwandlung in Brückenzahlen bis zu $$\text{p}(n)$$ entstanden sind.

$$\displaystyle g=(2^x \cdot 3^y \cdot \prod_{i=3}^n (C_{\text{p}(i)})^{\alpha _{\text{p}(i)}}) \cdot q^{\alpha _q}$$

Wir nennen jetzt das Produkt der Brückenzahlen einfach γ:

$$g=2^x \cdot 3^y \cdot \gamma \cdot q^{\alpha _q}$$

Stelle dir jetzt eine bekannte Brückenzahl für *q* vor: $$C_q=2^{a_q}\cdot 3^{b_q}\cdot q$$. Wir stellen jetzt *g* mithilfe dieser q-Brücke dar.

$$g=\gamma \cdot 2^x \cdot 3^y \cdot q^{\alpha _q}$$

$$g=\gamma \cdot 2^{x + \alpha _q a_q - \alpha _q a_q} \cdot 3^{y + \alpha _q b_q - \alpha _q b_q} \cdot q^{\alpha _q}$$

$$g=\gamma \cdot 2^{x - \alpha _q a_q} \cdot 2^{\alpha _q a_q} \cdot 3^{y - \alpha _q b_q} \cdot 3^{\alpha _q b_q} \cdot q^{\alpha _q}$$

$$g=\gamma \cdot (2^{a_q} \cdot 3^{b_q} \cdot q)^{\alpha _q} \cdot 2^{x - \alpha _q a_q} \cdot 3^{y - \alpha _q b_q}$$

$$g=\gamma \cdot (C_q)^{\alpha _q} \cdot 2^{x - \alpha _q a_q} \cdot 3^{y - \alpha _q b_q}$$

Wir erweitern jetzt γ und *q*:

$$g=2^{x - \alpha _q a_q} \cdot 3^{y - \alpha _q b_q} \cdot \prod_{i=3}^n (C_{\text{p}(i)})^{\alpha _{\text{p}(i)}}) \cdot (C_{\text{p}(n+1)})^{\alpha _{\text{p}(n+1)}}$$

$$g=2^{x - \alpha _q a_q} \cdot 3^{y - \alpha _q b_q} \cdot \prod_{i=3}^{n+1} (C_{\text{p}(i)})^{\alpha _{\text{p}(i)}}$$

Das ist eine einzigartige Darstellung des JI-Intervalls mit Faktoren bis zu $$\text{p}(n+1)$$ mithilfe der Faktoren bis zu $$\text{p}(n)$$. Der Induktionsschritt gilt.

Da der Satz auch für den Induktionsanfang $$\text{p}(n)=5$$ bewiesen wurde, gilt er auch für alle Primzahlen über 3 wegen der vollständigen Induktion. $$\blacksquare$$

**Folge.** Da ein formales Komma immer eine Brückenzahl ist, ist es möglich, für jede bekannte Liste formaler Kommas – eines für jede Primzahl – jedes JI-Verhältnis auf nur eine Weise als pythagoreisches Verhältnis multipliziert mit formalen Kommas mit ganzen Zahlen als Exponenten darzustellen. Das FJS tut genau das.
