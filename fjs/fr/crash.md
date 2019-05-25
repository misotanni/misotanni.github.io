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

Imaginez la séquence d'intervalles suivante: 11/10, 10/9, 9/8, 8/7. Écoutez:

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

### Exercice 1

1. Calculez les intervalles FJS qui correspondent à ces rapports pythagoriciens: 2187/2048, 1024/729, 8192/6561.
2. Calculez les rapports pythagoriciens qui correspondent à ces intervalles: septième diminuée, quinte augmentée, tierce diminuée.
3. Trouvez les rapports entre les degrés de cette gamme: <img src="../assets/exercise_1.png" alt="E–F♯–A–B–D–E">
4. Écrivez cette gamme dans le FJS avec la tonique Ré: 1/1, 81/64, 4/3, 3/2, 243/128, 2/1.
5. Calculez le rapport du comma pythagoricien (dans le FJS, une seconde diminuée).
6. (DIFFICILE!) Le rapport pythagoricien 3<sup>53</sup>/2<sup>84</sup> est minuscule: il ne compte qu'environ 3.6 cents. Trouvez sa représentation FJS.

Vous pouvez vérifier vos réponses [ici](solutions.html).

## <a name="lesson_2">Leçon 2: Les intervalles premiers</a>

Vous avez appris jusqu'à maintenant comment écrire l'accord pythagoricien. C'était sûrement un peu ennuyeux: l'accord pythagoricien ne diffère pas beaucoup de 12-EDO, et ce n'est pas assez pour pouvoir décrire toute l'intonation juste.

L'étape suivante: savoir représenter les intervalles premiers. Ce sont des intervalles dans l'échelle des harmoniques qui viennent des nombres premiers. Commençons avec la séquence des nombres premiers:

> 2, 3, 5, 7, 11, 13, 17, 19, ...

...et transformons-les en forme réduite:

> 1/1, 3/2, 5/4, 7/4, 11/8, 13/8, 17/16, 19/16, ...

Nous savons déjà représenter 2 et 3: ce sont l'octave et la quinte. À partir d'ici, quand je dis "intervalles premiers", cela signifie seulement ceux qui sont associés aux nombres premiers au-delà de 3.

Si vous avez déjà quelques connaissances en JI, vous avez déjà entendu parler de 5/4 comme une "tierce majeure juste" et de 7/4 comme une "septième mineure juste", donc des formes spéciales de la tierce majeure et la septième mineure. Cette langue ne vous semblait probablement pas bizarre. Il semble que ce soient simplement des extensions des idées d'une "tierce majeure" et une "septième mineure" pour inclure des intervalles proches.

En revanche, formalement, on trouve quelque chose d'étrange.

Supposons que nous l'acceptons d'abord. 5/4 est alors un genre de tierce majeure. Donc nous l'écrivons comme tierce majeure, *avec un symbole supplémentaire qui signifie la différence.* La différence entre 5/4 et la tierce majeure pythagoricienne (81/64) ne s'élève qu'à 81/80, soit environ 22 cents. Pourquoi est-ce que c'est problématique? Parce qu'il y a beaucoup d'approximations plus précises, par exemple la quarte diminuée pythagoricienne (8192/6561) qui diffère par seulement 32805/32768, soit environ 2 cents!

Écoutez la différence entre 81/64 et 5/4:

<audio controls><source src="../assets/audio_2.mp3" type="audio/mpeg"></audio>

Et celle entre 8192/6561 et 5/4:

<audio controls><source src="../assets/audio_3.mp3" type="audio/mpeg"></audio>

Pourquoi alors utiliser la tierce majeure, pas la quarte diminuée, pour 5/4? En raison de la simplicité, vous dites? La tierce majeure s'élève à +4 quintes pendant que la quarte diminuée à −8, donc beaucoup plus compliqué. D'après cela, pourquoi est-ce que nous n'utilisons pas la tierce *mineure* pour 5/4, qui est encore plus simple: seulement −3 quintes au lieu de +4. Maintenant, vous dites qu'elle est trop éloignée? Avez-*vous* l'autorité de décider l'équilibre correct entre simplicité et proximité?

Calmez-vous. C'était une satire des autres notations de JI. Elles choisissent ces approximations sans aucune logique. Dans le FJS, la question "Comment choisissons-nous les approximations pour chaque intervalle premier?" a une réponse très simple: nous ne le faisons pas. Une constante fixe le fait pour nous: le **rayon de tolérance**. Après avoir expérimenté avec beaucoup de différents rayons et considéré les avantages et les inconvénients de chacun, j'ai décidé que la version courante du FJS utilisera le rayon suivant:

$$\displaystyle \lambda =\sqrt{\frac{33}{31}}$$

J'expliquerai ce choix plus tard.

Comment le FJS utilise-t-il ce nombre? L'étape suivante est l'élément le plus important de tout le FJS. C'est l'élément qui fait la différence entre le FJS et toutes les autres notations de JI. C'est l'**algorithme principal du FJS**. Ici, vous trouvez une forme lisible pour des humains, mais il existe aussi dans des langages de programmation, y compris une calculatrice sur ce site.

L'**algorithme principal du FJS** trouve la **fonction génératrice** pour chaque nombre premier en utilisant le rayon de tolérance. J'explique le but de l'algorithme, sa tâche, et le but de la fonction génératrice.

> ### L'algorithme principal du FJS
> 
> 1. Entrez le nombre premier en forme réduite.
> 2. Soit *k* = 0.
> 3. Considérez l'intervalle construit de *k* quintes pythagoriciennes, en forme réduite.
> 4. Est-ce que la différence entre cet intervalle et l'intervalle premier s'élève à moins que le rayon de tolérance?
> 5. Si oui, *k* égale la fonction génératrice. Fin.
> 6. Si non, avancez au *k* suivant dans la séquence: (0, 1, −1, 2, −2, 3, −3, ...), et retournez à l'étape 3.

Comme vous voyez, l'algorithme est assez simple que vous pouvez le réaliser mentalement (peut-être sauf la 4. étape qui est difficile jusqu'à ce que vous pouvez imaginer ou vous souvenir des dimensions approximatives de plusieurs intervalles).

L'algorithme trouve alors pour chaque intervalle premier l'approximation pythagoricienne la plus simple dans les limites du rayon de tolérance. La différence devient un **comma formel** et reçoit une altération FJS. Pour calculer le comma formel, on utilise la formule suivante:

> ### Le comma formel
>
> Le comma formel d'un nombre premier *p* dont la fonction génératrice est *g* égale:
>
> $$\text{comma} (p)=\frac{\text{red} (p)}{\text{red} (3^g)}$$

L'opération inverse est aussi possible: vous pouvez trouver la fonction génératrice d'un nombre premier sans utiliser l'algorithme ou savoir le rayon de tolérance, si vous connaissez le comma formel. (Cela est parfois utile, mais pas souvent.) Divisez la forme réduite de l'intervalle premier par le comma formel. Vous obtenez l'approximation pythagoricienne. Factorisez-la. L'exposant de 3 est alors la fonction génératrice. Par exemple, nous savons que le comma formel de 7 est 63/64. Nous divisons 7/4 par 63/64. Le résultat est (7/4) ÷ (63/64) = 16/9, l'approximation pythagoricienne. Nous la factorisons et obtenons 2<sup>4</sup> 3<sup>−2</sup>. Puisque l'exposant de 3 est −2, −2 est aussi la fonction génératrice de 7.

Comme avec le dièse et le bémol, il y a toujours deux altérations différentes pour chaque comma: soit positif, soit négatif. Le symbole des altérations est toujours basée sur le nombre premier lui-même, est diffère selon l'utilisation:

- Lorsqu'on nomme les notes, on écrit l'altération positive en indice supérieur et la négative en indice inférieur.
- Lorsqu'on les écrit sur la portée, on écrit l'altération positive comme le nombre lui-même et la négative avec un signe moins.

Remarquez que j'utilise délibérément les mots "positif" et "négatif" au lieu de "ascendant" et "descendant", parce que dans le FJS, des altérations positives ne sont pas toujours ascendantes, et les négatives ne sont pas toujours descendantes. Au lieu de cela, **le positif est toujours otonal** et **le négatif est toujours utonal**. Cela signifie quelque chose de très important: *une altération FJS est toujours positive lorsqu'une approximation pythagoricienne d'un intervalle premier devient l'intervalle premier lui-même.* Par exemple, pour écrire 5/4 sur Do, on écrit d'abord Mi (l'approximation, 81/64) et puis on le transforme en 5/4 en utilisant une altération +5, donc Mi<sup>5</sup>. Ce +5 modifie par 81/80 en *bas*, en fait.

Ceux qui connaissent le système de Ben Johnston vont reconnaître cette idée. Pour le reste, j'explique:

Il est vrai que cela semble trop compliquée, mais en fait, ça simplifie beaucoup. Par exemple: Une altération positive de +17 signifie toujours que son utilisation ajoute un facteur de 17 dans le numérateur. Si vous connaissez l'approximation pythagoricienne de 17/16 (c'est la seconde mineure), vous savez automatiquement que 17/16 s'écrit comme seconde mineure avec +17. Il ne vous faut pas savoir si l'approximation se trouve plus haut ou plus bas que la cible! Ce principe basé sur l'otonalité et l'utonalité au lieu de la direction simplifie aussi la notation de plusieurs gammes et intonations. D'ailleurs, le FJS décrit que le comma formel de +5 est en fait 80/81, pas 81/80. En général, une liste de commas formels pour chaque nombre premier *p* > 3 contient dans chaque comma un facteur de *p* dans le numérateur. C'est aussi la raison pour laquelle le système s'appelle Système **fonctionnel** de l'intonation juste: il se concentre sur la représentation de la **fonction**, pas la hauteur.

Ici, je voudrais raconter une anecdote. Pendant que je développais un prototype du Système fonctionnel de l'intonation juste (même avant l'avoir nommé), au début, tous les commas formels positifs étaient ascendants et tous négatifs étaient descendants. Mais une fois, j'ai réfléchi sur quelques accords au 5- et au 7-limite, et tout à coup, je me suis rendu compte que cette règle est beaucoup trop compliquée, et que je vais la changer tout de suite, la nouvelle version étant positif-otonal, négatif-utonal. Après ce changement, mes pensées en FJS ont été beaucoup simplifiés, donc cela a continué. (Au début du FJS, il y avait beaucoup d'autres complications, et il me fallait beaucoup de temps pour les éliminer jusqu'à la forme extrêmement simple d'aujourd'hui...)

Voyez l'échelle harmonique sur La jusqu'à le huitième harmonique:

> La, La, Mi, La, Do♯<sup>5</sup>, Mi, Sol<sup>7</sup>, La.

Sur la portée:

<img src="../assets/example_3.png" alt="A–A–E–A–C♯5–E–G7–A">

Écoutez-la:

<audio controls><source src="../assets/audio_4.mp3" type="audio/mpeg"></audio>

Comme vous voyez, toutes les altérations dans l'échelle harmonique sont positives (cela est vrai pour toute l'échelle qui est infinie). N'est-il pas beaucoup plus propre que si nous utilisions la direction au lieu de l'otonalité? Je comprends que vous pourriez être d'abord surpris ou surprise. Mais j'espère que vous verrez au fil du temps que le FJS est en fait plus simple et plus logique grâce à cette règle. (Vous pouvez aussi voir une autre analogie: remarquez que le dièse additionne des quintes, et le bémol en soustrait.)

Je voudrais maintenant expliquer comment ces altérations interagissent.

> ### La propagation des altérations FJS
>
> - Il est connu que les altérations pythagoriciennes trient les tons diatoniques (Do, Ré, Mi, Fa, Sol, La, Si) en leurs catégories pythagoriciennes correctes. C'est pourquoi elles s'appliquent à chaque note du même ton diatonique dans la même octave et la même mesure.
> - Par analogie, les altérations FJS trient les tons pythagoriciens (Do, Ré♭, Do♯, Ré, ...) en leurs hauteurs absolues. C'est pourquoi elles, elles s'appliquent seulement à chaque note du même ton pythagoricien dans la même octave et la même mesure.

Pourquoi? Parce que cette règle est plus logique et plus pratique. Voici une démonstration:

<img src="../assets/example_4.png" alt="C♯5–C, C♯5–C1, C♯5–C♮, C♯5–C♮5">

- Dans la première mesure, nous avons un Do♯<sup>5</sup> puis un Do. Puisque c'est le même ton diatonique dans la même octave, il absorbe le dièse. Puisque c'est alors un Do♯ dans la même octave, il absorbe aussi le +5. Nous avons donc Do♯<sup>5</sup>, Do♯<sup>5</sup>.
- Dans la deuxième mesure, il y a un Do♯<sup>5</sup> puis un Do avec une altération +1. **+1 est l'équivalent d'un bécarre dans le FJS, il annule toutes les altérations FJS, mais rien d'autre.** Donc cela signifie Do♯<sup>5</sup>, Do♯.
- Dans la troisième mesure, il y a un Do♯<sup>5</sup> puis un Do bécarre. Puisque ce n'est plus le même ton pythagoricien, il n'absorbe plus le +5, donc cela signifie Do♯<sup>5</sup>, Do.
- Dans la quatrième mesure, il y a un Do♯<sup>5</sup> puis un Do bécarre avec +5. Nous avons ici Do♯<sup>5</sup>, Do<sup>5</sup>; ce cas serait probablement le plus rare.

Encore une remarque: le FJS permet aussi d'ajouter ces altérations en indice supérieur et inférieur aux noms des intervalles. C'est comment les rapports de l'intonation juste sont formellement nommés dans le FJS. Par exemple, 5/4 "s'appelle" une (tierce majeure)<sup>5</sup>. Cela signifie soit Mi<sup>5</sup> de Do, soit La<sup>5</sup> de Fa, soit Si<sup>5</sup> de Sol, etc.

D'accord. C'est tout que vous devez savoir pour pouvoir écrire les intervalles premiers. Vous allez apprendre une nouvelle technique maintenant. Vous n'avez plus besoin du rayon de tolérance: il n'est utilisé que dans l'algorithme principal pour calculer la fonction génératrice.

> ### Technique FJS \#3: Convertir un intervalle premier otonal en forme FJS.
> 
> 1. Trouvez la fonction génératrice du nombre premier.
> 2. Écrivez l'intervalle qui correspond à ce nombre de quintes.
> 3. Ajoutez une altération de ce nombre premier. Par exemple, 23/16 recevrait un +23.
>
> **Exemple:** Pour convertir 7/4 en forme FJS, nous trouvons d'abord la fonction génératrice de 7: −2. Nous écrivons l'intervalle de −2 quintes: Do-Fa-Si♭, donc une septième mineure. Finalement, nous ajoutons un +7 et on obtient une (septième mineure)<sup>7</sup>. (Oui, ça peut sembler un peu bizarre.)

(La calculation inverse est banale: pour trouver le rapport d'un intervalle dans le FJS, si on sait qu'il s'agit d'un intervalle premier otonal, on prend tout simplement le nombre premier de l'altération en forme réduite!)

### Exercice 2

(À partir d'ici, supposez toujours que le rayon de tolérance est λ.)

1. Trouvez la fonction génératrice pour les nombres premiers 11 et 13.
2. En savant que la fonction génératrice pour 19 est −3, trouvez le comma formel pour 19.
3. En savant que le comma formel pour 47 est 47/48, trouvez la fonction génératrice pour 47.
4. Écrivez cette gamme dans la tonique Mi: 1/1, 9/8, 5/4, 4/3, 3/2, 7/4, 2/1.
5. Écrivez l'échelle harmonique de La jusqu'au quatorzième harmonique.
6. (DIFFICILE!) Écrivez l'échelle *sous*-harmonique de La jusqu'au huitième sous-harmonique.

Vous pouvez vérifier vos réponses [ici](solutions.html).

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
