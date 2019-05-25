# Le Cours Intensif du FJS

Vous êtes alors curieux ou curieuse de ce qui offert le FJS et vous voudriez l'apprendre.

Ce "cours intensif" a été créé pour juste ce but: pouvoir maîtriser tous les éléments obligatoires du FJS rapidement. Les abréviations du FJS ne sont pas mentionnées, puisque le système est complet aussi sans elles. Si tu as déjà de l'expérience avec l'intonation juste, l'apprentissage du FJS te semblera très facile, tu peux apprendre le système entier, avec sa beauté et élégance, en quelques minutes.

## Contenu

* [Introduction: Abandonnez l'enharmonie](#introduction)
* [Leçon 0: Préliminaires](#lesson_0)
* [Leçon 1: L'accord pythagoricien](#lesson_1)
* [Leçon 2: Les intervalles premiers](#lesson_2)
* [Leçon 3: Altérations composées](#lesson_3)
* [Da Capo Al Fine: Quoi d'autre?](#da_capo_al_fine)

---

## <a name="introduction">Introduction: Abandonnez l'enharmonie</a>

Nous sommes tous habitués à la notation de portée conventionnelle, et à ses dièses et bémols. Mais nous ne voyons pas toujours que nous avons appris la notation de portée dans le contexte du tempérament égal omniprésent. (À partir d'ici, ce cours va utiliser l'abréviation 12-EDO, de l'anglais "Equal Divisions of the Octave").

Par exemple, ici nous avons la gamme chromatique:

<img src="../assets/example_1.png" alt="C–C♯–D–D♯–E–F–F♯–G–G♯–A–A♯–B–C">

Non, attendez. On l'écrit normalement comme ça:

<img src="../assets/example_2.png" alt="C–C♯–D–D♯–E–F–F♯–G–G♯–A–B♭–B–C">

Pour nous, bien sûr, il n'y a pas de différence entre La dièse et Si bémol. Nous savons que ce sont deux noms différents qui signifient deux notes différentes de hauteur identique. Le choix de la notation dépend donc de la lisibilité ou la cohérence ou la simplicité, selon le sens, mais les deux signifient le même.

Cette qualité, d'avoir une seconde diminuée de la même hauteur que l'unisson, a un nom: l'enharmonie. Des musiciens qui ne connaissent (ou sont conscients de) aucune intonation alternative ne savent peut-être pas que cette qualité n'est pas du tout universelle. Il n'y a que quelques intonations, y compris 12-EDO, qui en disposent. Dans d'autres, soit il n'y a aucune enharmonie, soit un autre intervalle que la seconde diminuée est équivalent à l'unisson. (Par exemple, en 19-EDO, c'est la seconde sous-diminuée, donc Mi dièse et Fa bémol sont équivalents.)

Mais n'oublions pas que la notation de portée fut inventée beaucoup avant l'idée (sans parler d'une domination) de 12-EDO. Cette notation a été basée sur la gamme diatonique qui a beaucoup de qualités simultanées dont une est importante pour nous: le fait qu'elle est construit d'une séquence de quintes justes (Fa-Do-Sol-Ré-La-Mi-Si). D'ailleurs, le *fait* que nous avons plusieurs moyens de décrire la même hauteur dans notre notation signifie que son origine était différent.

L'enharmonie est donc le seul aspect de 12-EDO dans la notation de portée. Le reste fonctionne aussi sans 12-EDO.

## <a name="lesson_0">Leçon 0: Préliminaires</a>

Avant l'apprentissage du FJS, il y a encore quelques informations supplémentaires. Vous devez être bien confortable avec elles. Il me faut que je sois sûr.

- Savoir que l'intonation juste est définie comme une intonation où chaque intervalle entre n'importe quelles notes est un nombre rationnel.
- Reconnaître quelques rapports justes très fréquents, comme 2/1, 3/2, 5/4, 7/4.
- Savoir qu'on additionne des intervalles en multipliant les rapports, et les soustrait en divisant les rapports. On peut aussi renverser un intervalle en prenant le rapport inverse.
- Savoir utiliser le cent pour décrire la dimension précise d'un intervalle, et savoir que 100 cents égalent un demi-ton et 1200 cents égalent une octave.
- Savoir utiliser ces formules-ci pour obtenir le nombre de cents d'un intervalle dont le rapport est connu:
	
	$$\displaystyle \text{C}(d)=\frac{1200 \cdot \log d}{\log 2} \text{ , log en n'importe quelle base}$$
	
	$$\text{C}(d)=\log_c d \text{ , }c=\sqrt[1200]{2}$$

En outre, il y a trois autres idées mathématiques que vous devez connaître mais qui ne se produisent hors FJS.

Premièrement, vous devez pouvoir rapidement convertir **un intervalle conventionnel** (sans enharmonie) au **nombre de quintes** qui construisent cet intervalle. Une **seconde majeure** par exemple devient **+2** quintes puisqu'il en faut deux (dans le sens des aiguilles d'une montre) pour obtenir une seconde majeure: Do-Sol-Ré. De plus, une **tierce mineure** devient **−3** quintes puisqu'il faut trois quartes, donc trois quintes dans le sens inverse: Do-Fa-Si♭-Mi♭. Chaque intervalle conventionnel correspond exactement à un nombre de quintes. Il vous faut pouvoir convertir de l'un à l'autre et inversement, rapidement.

Deuxièmement, vous devez savoir factoriser un nombre rationnel. Vous savez que chaque **entier positif** peut être écrit d'une unique façon comme un produit de nombres premiers dont les exposants sont des **entiers naturels** (théorème fondamental de l'arithmétique). Par analogie, chaque **nombre rationnel positif** peut être écrit d'une unique façon comme un produit de nombres premiers dont les exposants sont des **entiers relatifs**. Avec humour, je vais appeler ce théorème le "théorème fondamental de l'harmonie". Par exemple, 6/5 se factorise en 2<sup>1</sup> 3<sup>1</sup> 5<sup>−1</sup> et il n'y a que cette seule factorisation. (Puisque c'est un cours intensif, j'élimine l'aspect mathématique, mais [il est disponible](math.html) pour les lecteurs curieux. Chaque fois que je mentionne un théorème, vous le trouverez là-bas.)

Troisièmement, vous devez pouvoir utiliser la forme réduite d'un intervalle. En pratique, pour la trouver, on doit soit multiplier, soit diviser par deux jusqu'à ce que l'intervalle est entre 1 (inclu) et 2 (exclu). C'est similaire à le phénomène de *l'équivalence de l'octave*, selon laquelle nous percevons des hauteurs de ton comme équivalentes si elles diffèrent par un multiple de l'octave (2/1). Par exemple 7/1 se transforme en 7/4 et 1/6 en 4/3. La forme réduite peut être calculée selon la formule:

$$\text{red}(d)=d \cdot 2^{-\lfloor\log_2 d\rfloor}$$

C'est tout dont vous avez besoin. Commençons, alors!

## <a name="lesson_1">Leçon 1: L'accord pythagoricien</a>

Vous pensez peut-être que l'élimination de l'enharmonie permet de représenter beaucoup plus de hauteurs qu'avant, et vous avez raison. Pourtant, l'élimination de l'enharmonie ne suffit pas pour représenter toute l'intonation juste d'une manière logique. Un avantage de l'intonation juste est qu'elle peut exprimer de petites différences de hauteur et donne donc de différentes couleurs aux différents intervalles.

Imaginez la séquence d'intervalles suivante: 11/10, 10/9, 9/8, 8/7. Écoute:

<audio controls><source src="../assets/audio_1.mp3" type="audio/mpeg"></audio>

La plupart d'entre nous entend ici quatre "secondes environ majeures". Mais ce serait injuste de les nommer égales et représenter toutes avec une seconde majeure sur la portée. Ce sont de différents intervalles. L'élimination de ces différences dans un système où elles comptent le plus est une erreur.

Vous pensez alors peut-être qu'il y a une position intermédiaire, une partie de l'intonation juste qui peut être assignée sans équivoque à la notation de portée sans enharmonie, et vous avez encore raison. Cette position intermédiaire est l'intonation juste au 3-limite, aussi appelée accord pythagoricien.

Cela signifie que nous assignons le rapport 2/1 à l'octave (comme en 12-EDO) et le rapport 3/2 à la quinte juste. Avec cette attribution, on peut assigner chaque intervalle conventionnel à exactement un rapport pythagoricien. Il y a une bijection.

C'est aussi une manière dont nous pouvons même *définir* les notes de l'échelle diatonique. Fa, Do, Sol, Ré, La, Mi, et Si sont alors définis ainsi: Fa–Do est 3/2, aussi Do–Sol, etc. On remarque que Si–Fa devient 1024/729, qui est un peu plus petit que 3/2. Nous définissons donc le dièse et le bémol ainsi: Si–Fa♯ et Si♭–Fa sont 3/2. Vous verrez que le FJS étend ce principe: des petites différences sont annulées avec des altérations.

Remarquez que cette bijection a besoin de quelque chose dont peut-être quelques ne sont pas conscients: des dièses et bémols plus que doubles. Bien qu'ils soient très rares dans la musique conventionnelle, ils sont indispensables ici pour que la ligne de quintes soit infinie dans deux directions. Dans le FJS, vous pourriez voir aussi des triple- et quadruple-dièses et bémols, etc. Cela ne signifie pas du tout qu'ils sont fréquents, mais ne paniquez pas quand vous en avez besoin.

Vous êtes prêt ou prête pour apprendre les deux premières techniques FJS.

> ### Technique FJS \#1: Convertir un rapport pythagoricien en forme FJS.
> 
> 1. Factorisez le rapport.
> 2. Ignorez l'exposant de 2.
> 3. Si l'exposant de 3 est positif, additionnez autant de quintes dans le sens des aiguilles d'une montre. Si négatif, dans le sens inverse. Vous obtenez un intervalle.
> 4. Réduisez, puis ajustez l'octave.
>
> **Exemple:** Pour convertir 9/8 en FJS, d'abord, nous factorisons: 2<sup>−3</sup> 3<sup>2</sup>. L'exposant de 3 est +2, donc nous additionnons deux quintes: Do-Sol-Ré. On obtient une seconde majeure.

> ### Technique FJS \#2: Convertir une forme FJS en rapport pythagoricien.
> 
> 1. Ignorez d'abord les octaves.
> 2. Trouvez le nombre de quintes dont l'intervalle est composé, et nommez-le *n*.
> 3. Calculez $$\text{red}(3^n)$$.
> 4. Ajustez l'octave.
>
> **Exemple:** Pour convertir la tierce mineure dans le FJS en rapport pythagoricien, nous découvrons d'abord que la tierce mineure fait −3 quintes: Do-Fa-Si♭-Mi♭. $$\text{red}(3^{-3})$$ égale 32/27.

Ceux-ci sont les plus fréquents:

| Intervalle       | Quintes | Rapport     |
|:-----------------|:-------:|:------------|
| seconde mineure  | −5      | 256/**243** |
| sixte mineure    | −4      | 128/**81**  |
| tierce mineure   | −3      | 32/**27**   |
| septième mineure | −2      | 16/**9**    |
| quarte juste     | −1      | 4/**3**     |
| quinte juste     | +1      | **3**/2     |
| seconde majeure  | +2      | **9**/8     |
| sixte majeure    | +3      | **27**/16   |
| tierce majeure   | +4      | **81**/64   |
| septième majeure | +5      | **243**/128 |

Mais vous n'avez pas du tout besoin d'apprendre ce tableau par cœur, non! Pour utiliser le FJS, vous n'avez jamais besoin d'apprendre des nombres par cœur. Comme le calcul mental, ces résultats deviennent automatiques au fur et à mesure que vous utilisez le FJS. Vous devriez déjà pouvoir calculer ces rapports à partir des intervalles et inversement. N'ayez pas peur d'utiliser une calculatrice, elle sera très utile jusqu'à ce que vous n'avez plus besoin d'elle.

### Exercice 1.

1. Berechne die FJS-Intervalle, die folgenden Frequenzverhältnissen entsprechen: 2187/2048, 1024/729, 8192/6561.
2. Berechne die Frequenzverhältnisse, die folgenden Intervallen entsprechen: verminderte Septime, übermäßige Quinte, verminderte Terz.
3. Finde die Verhältnisse zwischen aufeinanderfolgenden Schritten dieser Tonleiter: <img src="../assets/exercise_1.png" alt="E–F♯–A–B–D–E">
4. Notiere die folgende Tonleiter im FJS mit D als Grundton: 1/1, 81/64, 4/3, 3/2, 243/128, 2/1.
5. Bestimme das Frequenzverhältnis des sog. pythagoreischen Kommas (eine verminderte Sekunde im FJS).
6. (SCHWIERIG!) Nur etwa 3.6 Cent beträgt das winzige pythagoreische Intervall 3<sup>53</sup>/2<sup>84</sup>. Stelle es im FJS dar.

1. Calculez les intervalles FJS qui correspondent à ces rapports pythagoriciens: 2187/2048, 1024/729, 8192/6561.
2. Calculez les rapports pythagoriciens qui correspondent à ces intervalles: septième diminuée, quinte augmentée, tierce diminuée.
3. Trouvez les rapports entre les degrés de cette gamme: <img src="../assets/exercise_1.png" alt="E–F♯–A–B–D–E">
4. Écrivez cette gamme dans le FJS avec la tonique Ré: 1/1, 81/64, 4/3, 3/2, 243/128, 2/1.
5. Calculez le rapport du comma pythagoricien (dans le FJS, une seconde diminuée).
6. (DIFFICILE!) Le rapport pythagoricien 3<sup>53</sup>/2<sup>84</sup> est minuscule: il ne compte qu'environ 3.6 cents. Trouvez sa représentation FJS.

Vous pouvez vérifier vos réponses [ici](solutions.html).

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

> ### FJS-Technik \#3: Ein otonales Primzahlintervall ins FJS umrechnen.
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

## <a name="lesson_3">Lektion 3: Verbundene Versetzungszeichen</a>

Du weißt jetzt, wie ein Großteil der Naturtonstimmung im FJS notiert wird. Du kannst die ganze pythagoreische Stimmung und alle Primzahlintervalle aufschreiben. Wir sind aber noch nicht fertig; was mit den Intervallen, die aus mehr als einer Primzahl (3 einbezogen) gebaut sind, wie 15/8 oder 25/16, und was mit den Intervallen, die gar nicht in der Obertonreihe vorkommen, wie 5/3, 6/5, oder 9/7?

In diesem Crash-Kurs habe ich diese übrigen Intervalle in zwei Gruppen geteilt:

- Intervalle wie 15/8 oder 9/7, die aus einem pythagoreischen Intervall plus einem einzigen otonalen oder utonalen Primzahlintervall gebaut sind.
- Intervalle wie 25/16 oder 7/5, die mehr als ein Primzahlintervall benötigen.

Die erste Gruppe kannst du schon notieren – du weißt es nur noch nicht. Das FJS hat nämlich viele sehr praktische Identitäten, die dir oft ermöglichen werden, die gegebenen Techniken komplett zu überspringen. (Gedenke dabei, dass Intervalle addiert werden, indem man ihre Frequenzverhältnisse multipliziert.)

> ### FJS-Abkürzungsidentitäten
>
> - Die Summe zweier FJS-Intervalle zweier Frequenzverhältnisse ist die FJS-Darstellung des Produktes der Verhältnisse.
> - Die Differenz zweier FJS-Intervalle zweier Frequenzverhältnisse ist die FJS-Darstellung des Quotients der Verhältnisse.
> - Die Umkehrung eines FJS-Intervalls eines Frequenzverhältnisses ist die FJS-Darstellung des Kehrwertes des Verhältnisses.

Diese Identitäten haben ein paar nette logische Folgen, die nützlich zu wissen sind, um noch flüssiger zu werden. Wenn du zum Beispiel zwei Noten mit gleichen FJS-Versetzungszeichen hast, weißt du, dass das Intervall zwischen ihnen pythagoreisch sein muss. E<sup>5</sup> und Fis<sup>5</sup>? Du kannst zwar keine Ahnung haben, was sie in der Tonart B<sub>7</sub> sind, aber du weißt, dass das Intervall zwischen ihnen eine pythagoreische große Sekunde sein muss - also 9/8. Cool, oder?

Diese Identitäten kannst du auch schon benutzen, um die erste Gruppe fehlender Intervalle zu notieren. Betrachten wir z.B. 15/8. Wir spalten es in zwei Teile: den pythagoreischen und das, was übrig bleibt. Wir erhalten 3/2 und 5/4. Wir übersetzen jetzt ins FJS und addieren dann die Intervalle, die wir dabei erhalten. 3/2 wird zu einer (reinen Quinte), und 5/4 wird zu einer (großen Terz)<sup>5</sup>. Zusammen haben wir eine (große Septime)<sup>5</sup>. Wir addieren die Intervalle wie gewöhnlich, und kleben die Versetzungszeichen auf. Das ist wirklich die Darstellung von 15/8 im FJS!

Mal anders: Der fünfzehnte Oberton ist wie der fünfte Oberton in der Tonart der Dominante. Um 15/8 in der Tonart C zu notieren, wir können mit einer "imaginären Modulation" zur Tonart G anfangen. Dort ist dein Ziel einfach der fünfte Oberton, d.h. H<sup>5</sup>. Das ist deshalb auch die Darstellung von 15/8 in der Tonart C.

Noch mal anders: Du weißt vielleicht nicht, was 15/8 in der Tonart C im FJS ist, aber du weißt bereits, was 5/4 ist: es ist E<sup>5</sup>. Du weißt auch, dass die Differenz zwischen 5/4 und 15/8 3/2 beträgt, ein pythagoreisches Intervall. Deshalb müssen 15/8 und 5/4 dieselbe FJS-Versetzungszeichen haben. Du weißt auch, dass dieses pythagoreische Intervall eine reine Quinte ist. Die zwei Informationen beschreiben zusammen eine einzige Note: H<sup>5</sup>. Das ist die richtige Antwort.

Versuche diese Methoden, um die nächste Aufgabe zu lösen.

### Aufgabe 3

1. Schreibe die FJS-Darstellungen folgender Frequenzverhältnisse: 5/3, 6/5, 7/6, 9/5.
2. Finde die Frequenzverhältnisse folgender FJS-Intervalle: (große Sekunde)<sup>5</sup>, (große Terz)<sub>7</sub>, (kleine Septime)<sup>11</sup>.
3. Notiere die ptolemäische Tonleiter im FJS. Die Verhältnisse lauten: 1/1, 9/8, 5/4, 4/3, 3/2, 5/3, 15/8, 2/1.
4. (SCHWIERIG!) Betrachte die folgende Tonleiter. Ist sie ein Modus der oberen? <img src="../assets/exercise_2.png" alt="C–D–E♭_5–F–G–A♭_5–B♭_5–C">

Du kannst die Antworten [hier](solutions.html) nachschlagen.

(Am Ende dieser Lektion wirst du Techniken kennen, mit denen du *jedes* mögliche Frequenzverhältnis zu einem FJS-Intervall und zurück umrechnen kannst. Es ist aber eine gute Idee, diese Methoden auch im Kopf zu behalten, weil sie viel schneller sind, und du meistens sie benutzen wirst. Es ähnelt den verschiedenen Methoden zur Lösung einer quadratischen Gleichung. Die Formel wirkt immer, ist aber gleichzeitig die langsamste Methode.)

Während du diese Identitäten verwendetest, um die Aufgabe zu lösen, hast du dich vielleicht gefragt: "Wie würde ich beispielsweise zwei (große Terzen)<sup>5</sup> zueinander addieren? Was wäre das Ergebnis?" Wäre es eine (übermäßige Quinte)<sup>5</sup>? Nein, das wäre das Ergebnis, wenn man eine (große Terz) zu einer (großen Terz)<sup>5</sup> addiert. Bei uns ist es anders. Wir addieren eine (große Terz)<sup>5</sup> zu noch einer (großen Terz)<sup>5</sup>.

Die Antwort auf diese Frage ist zufällig auch die Methode, die das FJS für die zweite Gruppe der übrigen Intervalle benutzt: *verbundene Versetzungszeichen*.

Jeder FJS-Note oder jedem -Intervall kann man nicht nur eines, aber beliebig viele FJS-Versetzungszeichen hinzufügen. Die otonalen und utonalen sind immer getrennt, aber bei mehr als einem Versetzungszeichen derselben "Tonalität" (Otonalität oder Utonalität) verbindet man sie. Und zwar durch Multiplikation. Wieso? Weil sie alle Primzahlen sind; bei der Multiplikation (anders als z.B. bei der Addition oder Verkettung in der Basis zehn) geht die Information über die ursprünglichen Bestandteile nie verloren, denn jede positive ganze Zahl kann nur auf eine Weise wieder zerlegt werden, und die Reihenfolge macht keinen Unterschied.

Falls die Versetzungszeichen so verbunden werden, dass du nicht mehr auf den ersten Blick sehen kannst, wie sie sich faktorisieren (z.B. 119 = 7 × 17), kannst du sie auch getrennt hintereinander schreiben, mit Kommas zwischen jeder Primzahl (mit "Komma" wird hier natürlich das Satzzeichen, nicht ein kleines Intervall, gemeint). Das heißt, D<sup>7,17</sup> bedeutet genau dasselbe wie D<sup>119</sup>. Normalerweise sollten diese Primzahl in nicht-absteigender Reihenfolge geschrieben werden, aber jede Reihenfolge ist korrekt. Du kannst auch multiplizieren, wie du willst. Du kannst also z.B. G<sup>11,125</sup> schreiben, wobei du nur manche der Faktoren miteinander multiplizierst.

Um die Frage also zu beantworten: Die Summe zweier (großen Terzen)<sup>5</sup> ist eine (ubermäßige Quinte)<sup>25</sup>, die auch gut als der FJS-Name des Verhältnisses 25/16 passt. Wenn du dazu noch weißt, dass 7/4 als (kleine Septime)<sup>7</sup> dargestellt wird, weißt du sofort, dass 49/32 eine (kleine Sexte)<sup>49</sup> und 35/32 eine (große Sekunde)<sup>35</sup> ist.

Wie ich schon erwähnt habe, Otonalität und Utonalität mischt man nicht. Falls also ein Ges die Versetzungszeichen +7 und −5 gleichzeitig hätte, wäre es ein Ges<sup>7</sup><sub>5</sub>. Die genauen Regeln lauten:

- Bei Notennamen benutzt man eine hochgestellte Zahl, die für die verbundenen positiven Versetzungszeichen steht, dann eine tiefgestellte für die negativen.
- Bei Notenschrift schreibt man zuerst das verbundene positive Versetzungszeichen (falls vorhanden), dann das negative mit einem Minus-Zeichen davor (falls vorhanden), dann das übliche Versetzungszeichen (falls vorhanden), dann die Note selbst.

Die Noten Ges<sup>7</sup><sub>5</sub> und Fis<sup>5</sup><sub>7</sub> (also 7/5 bzw. 10/7 in der Tonart C) würde man so aufschreiben:

<img src="../assets/example_5.png" alt="G♭7_5–F♯5_7">

So hören sie sich an:

<audio controls><source src="../assets/audio_5.mp3" type="audio/mpeg"></audio>

Seitdem du verbundene Versetzungszeichen kennst, kannst du viel mehr mit dem FJS anfangen. Du kannst beliebige FJS-Intervalle addieren, subtrahieren, und umkehren. Du kannst auch ein Intervall zu einer Note addieren (z.B. G + (große Terz)<sup>5</sup> = H<sup>5</sup>) oder eine Note von einer anderen subtrahieren (z.B. F<sup>7</sup> − C = (reine Quarte)<sup>7</sup>). Du kannst jetzt also die Identitäten für Addition, Subtraktion und Umkehrung benutzen, um schnell die FJS-Darstellungen von Intervallen zu finden, die du vorher nicht finden konntest.

> ### FJS-Intervall-Arithmetik
>
> - Um zwei FJS-Intervalle zueinander zu addieren, addiere die pythagoreischen Teile (die üblichen Intervallteile) und verbinde die FJS-Versetzungszeichen.
> - Um FJS-Intervalle zu subtrahieren, subtrahiere die pythagoreischen Teile, dann vertausche das Otonale mit dem Utonalen bei dem zweiten Intervall, dann verbinde. Ein Intervall zu subtrahieren ist dasselbe, als seine Umkehrung zu addieren.
> - Um ein FJS-Intervall umzukehren, kehre den pythagoreischen Teil um, dann vertausche das Otonale mit dem Utonalen.
> - Du kannst auch ein Intervall zu einer Note addieren, oder eine Note von einer anderen Note subtrahieren.

Wenn du Versetzungszeichen verbindest, kannst (und sollst) du gleiche Faktoren im Otonalen und im Utonalen kürzen. Beispielsweise ergibt sich bei der Addition einer (großen Terz)<sup>5</sup> (5/4) zu einer (kleinen Terz)<sub>5</sub> (6/5) eine "(reine Quinte)<sup>5</sup><sub>5</sub>". Das ist dasselbe wie einfach eine reine Quinte. Das haben wir erwartet (3/2). Die Addition einer (kleinen Sekunde)<sup>49</sup> (49/48) zu einer (großen Sekunde)<sub>7</sub> (8/7) ergibt eine "(kleine Terz)<sup>49</sup><sub>7</sub>", also eine (kleine Terz)<sup>7</sup> (7/6).

Mit der Intervall-Arithmetik kannst du schon jetzt ein *beliebiges* JI-Verhältnis im FJS darstellen, und jedes FJS-Intervall zurück in ein Verhältnis umrechnen. Du kannst die folgenden Methoden anwenden, wenn die Verhältnisse nicht besonders primzahlkompliziert sind.

Um ein einfaches JI-Verhältnis in die FJS-Form umzurechnen: Faktorisiere den Zähler in ein pythagoreisches Intervall plus Primzahlen. Baue das pythagoreische Intervall, und jede Primzahl als Primzahlintervall, dann addiere sie alle. Wiederhole das Gleiche für den Nenner. Dann, bestimme die Differenz zwischen dem Intervall des Zählers und dem des Nenners. Beispielsweise, um 36/25 umzurechnen, bauen wir zunächst den Zähler: 36, also 9/8, also eine große Sekunde. Dann den Nenner: 25. Das spalten wir: 5 und 5, also zwei (große Terzen)<sup>5</sup>, also eine (übermäßige Quinte)<sup>25</sup>. Wir subtrahieren jetzt: (große Sekunde) − (übermäßige Quinte) = (verminderte Quinte). Und die Versetzungszeichen: (0) − (+25) = (−25). Die Antwort lautet also: (verminderte Quinte)<sub>25</sub>.

Um ein einfaches FJS-Intervall zurück in die JI-Form umzurechnen: Probiere zunächst Folgendes: $$\frac{\text{otonales Versetzungszeichen}}{\text{utonales Versetzungszeichen}}$$. (Du musst die Versetzungszeichen nicht einmal faktorisieren: ein Vorteil davon, dass sie durch Multiplizieren verbunden werden.) Du legst entweder schon richtig oder noch falsch; wenn falsch, dann nur um ein pythagoreisches Intervall. Reguliere. Probieren wir z.B. die (übermäßige Prime)<sup>5</sup><sub>7</sub>. Wir probieren 5/7, also 10/7; bei der Anwendung der oberen Methode erhalten wir die (übermäßige Quarte)<sup>5</sup><sub>7</sub>. Wir legen nur um eine Quinte falsch. Wir addieren also eine pythagoreische Quinte. Die Antwort lautet also (3/2) × (5/7) = 15/14.

Bei neunundneunzig Prozent der Fälle reicht das aus, um im FJS zu lesen und zu schreiben. Diese Methoden sind sehr einfach, wie du siehst. Eigentlich musst du selbst diese Methoden nicht benutzen; oft reicht es aus, die Obertonreihe einfach zu überfliegen, um vorwärts und rückwärts in wenigen Sekunden umzurechnen. Willst du 14/13 im FJS darstellen? Du weißt, dass 13 eine kleine Sexte, und 14 eine kleine Septime ist, also muss 14/13 eine große Sekunde sein. Wegen der 14 im Zähler addierst du ein +7, und wegen der 13 im Nenner ein −13, und voilà, du hast die korrekte FJS-Darstellung schon gefunden: (große Sekunde)<sup>7</sup><sub>13</sub>.

Aber: eine der großen Tugenden des FJS ist, dass man es komplett automatisieren kann. Die oberen Methoden können sich manchmal auf Intuition verlassen, und sind nicht sehr nützlich für komplexe Intervalle. Du kannst aber *immer* vorwärts und rückwärts mit den folgenden Techniken umrechnen:

> ### FJS-Technik \#4: Jedes JI-Verhältnis in die entsprechende FJS-Form automatisch umrechnen.
>
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
>
> **Beispiel:** Rechnen wir den schwachen chromatischen Halbton, 25/24, ins FJS mithilfe dieser Technik um. 25/24 = 2<sup>3</sup> 3<sup>−1</sup> 5<sup>2</sup>. Wegen 5<sup>2</sup>, speichern wir 2 und multiplizieren mit (80/81)<sup>−2</sup>. Das Ergebnis ist 2187/2048, was pythagoreisch ist und einer übermäßigen Prime entspricht. Wir fügen jetzt ein doppeltes +5 (wegen der 2) und die Antwort lautet (Übermäßige Prime)<sup>25</sup>.

> ### FJS-Technik \#5: Jede FJS-Darstellung zurück in ein JI-Verhältnis automatisch umrechnen.
>
> 1. Rechne den pythagoreischen (üblichen) Teil des Intervalls in ein pythagoreisches Verhältnis um.
> 2. Für jedes otonale Versetzungszeichen *p*, multipliziere mit dem formalen Komma von *p*. Für utonale Versetzungszeichen dividiere.
> 3. Reduziere, und reguliere die Oktave.
>
> **Beispiel:** Eine der ikonischen Zusammenklänge des *Well-Tuned Piano* von La Monte Young wird im FJS als (kleine Terz)<sup>49</sup> notiert. Um ihr Verhältnis zu finden, rechnen wir zunächst die kleine Terz in 32/27 um. Dann bedeutet +49: multipliziere zweimal mit dem formalen Komma von 7. Also (32/27) × (63/64)<sup>2</sup> = 147/128.

Eine letzte Anmerkung über Aussprache und ASCII. Wenn du mithilfe des FJS kommunizieren willst, soll das nicht nur in einem Medium möglich sein. Hier sind die einfachen und logischen Ausspracheregeln:

> ### FJS-Aussprache
>
> 1. Spreche den pythagoreischen (üblichen) Teil des Noten- oder Intervallnamens aus.
> 2. Dann füge das verbundene otonale Versetzungszeichen (falls vorhanden) an, ausgesprochen als die Zahl selbst, mit einem optionalen Präfix "super".
> 3. Dann füge das verbundene utonale Versetzungszeichen (falls vorhanden) an, ausgesprochen als die Zahl selbst, mit einem Präfix "sub".

Beispielsweise wird E<sup>5</sup> als "E-fünf" oder "E-super-fünf" ausgesprochen, und Es<sub>5</sub> als "Es-sub-fünf". Ein Intervall wie (reine Quarte)<sup>7</sup><sub>11</sub> wäre "reine Quarte-(super)-sieben-sub-elf", wobei das Wort "super" optional ist, eine Art Betonung der Trennung zwischen dem Intervallnamen und dem Beginn der FJS-Versetzungszeichen.

Falls du die Versetzungszeichen trennst, gibt es keinen Unterschied. A<sup>5,17</sup><sub>13</sub> wäre "A-(super)-fünf-siebzehn-sub-dreizehn". Das wort "sub" ist nur ein Terminator des otonalen Teils. Er markiert also, dass das Folgende zum utonalen Teil gehört.

Was ASCII angeht: Es wäre problematisch, diese Namen auf dem Computer zu tippen, wegen der hoch- und tiefgestellten Zahlen. Alternativ kannst du tiefgestellte Versetzungszeichen mit einem Unterstrich markieren, wie üblich, und du kannst in demselben Sinne das Einschaltungszeichen für hochgestellte Versetzungszeichen benutzen. Das Einschaltungszeichen brauchst du aber nie im Deutschen. E<sup>5</sup> wäre E^5 oder einfach E5, und eine (große Terz)<sup>5</sup> wäre eine (große Terz)^5 oder einfach eine (große Terz)5.

**Fertig!**

Das ist alles, was du brauchst, um das *ganze* FJS zu benutzen und die *ganze* Naturtonstimmung aufzuschreiben! Du musst dir keine Zahlen merken oder keine Wertetabellen speichern, überhaupt nichts! Einer der größten Vorteile dieses Systems ist, dass es komplett portabel ist. Alles, was du brauchst, um ihn überall aus dem Nichts herzustellen, ist der Toleranzradius und Rechnen. Die Techniken, die du gelernt hast, können ganz automatisiert werden, und das ganze System kann ein Computer beherrschen.

Das FJS hat auch viele schöne Eigenschaften, die es wahnsinnig logisch machen. Die wichtigste davon ist, dass es eine *Bijektion* zur Naturtonstimmung liefert; jede positive rationale Zahl hat genau eine FJS-Darstellung, und jede FJS-Darstellung hat genau eine rationale Zahl, die sie darstellt. Eine andere Eigenschaft, die ich schon vorher angegeben habe, ist, dass das FJS *linear* ist; es macht keinen Unterschied, ob du zuerst JI-Intervalle kombinierst und dann ins FJS umrechnest, oder zuerst umrechnest, dann kombinierst; das Ergebnis bleibt gleich. Diese Eigenschaften machen es extrem einfach, im FJS zu transponieren. Um beispielsweise um eine (große Sekunde)<sup>5</sup> zu transponieren, transponiert man zuerst um eine übliche große Sekunde (wie üblich, die FJS-Versetzungszeichen bleiben dabei unverändert) und dann fügt man überall ein +5 hinzu und verbindet (damit z.B. +5 zu +25 wird, und +7 zu +35, und −5 zu 1).

Es gibt noch eine Sache, die du vielleicht möchtest, bevor du deine neu erlernten Können bei der letzten Aufgabe ausprobierst. Das sind wieder nur Hinweise; du hättest diese Tabelle selbst ausrechnen können (aber das würde dir nicht gefallen, deshalb habe ich es für dich getan).

| Primzahl | Generator | Formales Komma |
|---------:|:---------:|:--------------:|
| 5        | +4        | 80/81          |
| 7        | −2        | 63/64          |
| 11       | −1        | 33/32          |
| 13       | −4        | 1053/1024      |
| 17       | −5        | 4131/4096      |
| 19       | −3        | 513/512        |
| 23       | +6        | 736/729        |
| 29       | −2        | 261/256        |
| 31       | +5        | 248/243        |

Du kannst jetzt auch erfahren, wieso ich die Quadratwurzel aus 33/31 für den Toleranzradius gewählt habe. Sie ist das geometrische Mittel von 33/32 und 32/31, dabei ist sie größer als 33/32 und kleiner als 32/31. Daher wird 33/32 als mögliches formales Komma akzeptiert, deshalb kann 11/8 als reine Quarte dargestellt werden (falls nicht, dann wäre es die verminderte Quinte; Unsinn). Aber gleichzeitig wird die genauso unsinnige Darstellung von 31/16 als reine Oktave verworfen, weil 32/31 nicht als formales Komma akzeptiert wird. Schlau, oder?

### Aufgabe 4

1. Rechne die folgenden JI-Verhältnisse ins FJS um, mithilfe einer beliebigen Technik: 28/27, 15/13, 33/25.
2. Rechne die folgenden FJS-Darstellungen zurück in JI-Verhältnisse um, mithilfe einer beliebigen Technik: (große Sexte)<sub>7</sub>, (verminderte Quarte)<sup>13</sup><sub>5</sub>, (kleine Terz)<sub>25</sub>.
3. Notiere eine JI-Wiedergabe der folgenden berühmten Progression im FJS in B-Dur. Was dir gegeben ist, sind die Verhältnisse jeder Note zu B (ohne Oktaven).
	- 10/9, 5/4, 4/3, 5/3, 1/1
	- 3/2, 9/8, 21/16, 27/16, 15/8
	- 1/1, 9/8, 5/4, 3/2, 15/8
4. Übersetze die folgende Progression aus dem FJS zurück in JI-Verhältnisse zu Es, dem Grundton:
	
	<img src="../assets/exercise_3.png" alt="E♭–B♭–G5–E♭, C5–C5–G5–E♭, A♭–C5–A♭–F5, B♭–B♭–F1–D5, E♭–B♭–G5–E♭">
	
5. Notiere das erste Hörbeispiel in diesem Crash-Kurs im FJS. Hier steht es noch mal: 11/10, 10/9, 9/8, 8/7. Dir ist gegeben, dass der Grundton A ist.
	
	<audio controls><source src="../assets/audio_1.mp3" type="audio/mpeg"></audio>
	
6. (SCHWIERIG!) Es gibt Anhänger der "432-Hz-Trends", die bestehen, dass eine Verstimmung der note A von 440 Hz unten auf 432 Hz sowohl die physische als auch die geistige Qualität der Musik verbessert. (Ob das jetzt wahr oder falsch ist, geht uns nicht an.) Bestimme die FJS-Darstellung des Intervalls, durch welches ein Musikstück im FJS transponiert wird, wenn so eine Verstimmung geschieht.

Du kannst die Antworten [hier](solutions.html) nachschlagen.

## <a name="da_capo_al_fine">Da Capo Al Fine: Was sonst?</a>

Das ist *alles*, was du brauchst, um das FJS nutzen zu können! Du kannst jede JI-Musik jetzt mithilfe des FJS notieren. Die verbleibenden Teil des FJS sind Kurzschriftmethoden, die ich entwickelt habe, damit du auf viele FJS-Versetzungszeichen in häufigen Situationen verzichten kannst. Darunter sind FJS-Vorzeichen und Transpositionslinien. Diese Elemente werden hier nicht berücksichtigt. Wenn du über sie lernen willst, dann lese die [komplette formale Erläuterung](rules.html) des FJS, welche du auch lesen solltest, falls du irgendwelche Zweifel zu den Regeln des Systems hast.

Außerdem ist das alles! Du hast schon das ganze FJS in ein paar Minuten gelernt. Möge das FJS jetzt dein Denken vereinfachen, wenn du das nächste Mal der Naturtonstimmung begegnest.

**Ende.**
