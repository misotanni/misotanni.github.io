# Le Cours Intensif du FJS

Vous êtes alors curieux ou curieuse de ce que le FJS offre et vous voudriez l'apprendre.

Ce « cours intensif » a été créé pour juste ce but : pouvoir maîtriser tous les éléments obligatoires du FJS rapidement. Les abréviations du FJS ne sont pas mentionnées, puisque le système est complet aussi sans elles. Si vous avez déjà de l'expérience avec l'intonation juste, l'apprentissage du FJS vous semblera très facile, vous pouvez apprendre le système entier, avec sa beauté et élégance, en quelques minutes.

## Contenu

* [Introduction : Abandonnez l'enharmonie](#introduction)
* [Leçon 0 : Préliminaires](#lesson-0)
* [Leçon 1 : L'accord pythagoricien](#lesson-1)
* [Leçon 2 : Les intervalles premiers](#lesson-2)
* [Leçon 3 : Altérations composées](#lesson-3)
* [Da Capo Al Fine : Quoi d'autre ?](#da-capo-al-fine)

---

## <a name="introduction">Introduction : Abandonnez l'enharmonie</a>

Nous sommes tous habitués à la notation de portée conventionnelle, et à ses dièses et bémols. Mais nous ne voyons pas toujours que nous avons appris la notation de portée dans le contexte du tempérament égal omniprésent. (À partir d'ici, ce cours va utiliser l'abréviation 12-EDO, de l'anglais « Equal Divisions of the Octave »).

Par exemple, ici nous avons la gamme chromatique :

<img src="../assets/crash/chromatic-wrong.svg" alt="Do–Do♯–Ré–Ré♯–Mi–Fa–Fa♯–Sol–Sol♯–La–La♯–Si–Do">

Non, attendez. On l'écrit normalement comme ça :

<img src="../assets/crash/chromatic-right.svg" alt="Do–Do♯–Ré–Ré♯–Mi–Fa–Fa♯–Sol–Sol♯–La–Si♭–Si–Do">

Pour nous, bien sûr, il n'y a pas de différence entre La dièse et Si bémol. Nous savons que ce sont deux noms différents qui signifient deux notes différentes de hauteur identique. Le choix de la notation dépend donc de la lisibilité ou la cohérence ou la simplicité, selon le sens, mais les deux signifient le même.

Cette qualité, d'avoir une seconde diminuée de la même hauteur que l'unisson, a un nom : l'enharmonie. Des musiciens qui ne connaissent (ou sont conscients de) aucune intonation alternative ne savent peut-être pas que cette qualité n'est pas du tout universelle. Il n'y a que quelques intonations, y compris 12-EDO, qui en disposent. Dans d'autres, soit il n'y a aucune enharmonie, soit un autre intervalle que la seconde diminuée est équivalent à l'unisson. (Par exemple, en 19-EDO, c'est la seconde sous-diminuée, donc Mi dièse et Fa bémol sont équivalents.)

Mais n'oublions pas que la notation de portée fut inventée beaucoup avant l'idée (sans parler d'une domination) de 12-EDO. Cette notation a été basée sur la gamme diatonique qui a beaucoup de qualités simultanées dont une est importante pour nous : le fait qu'elle est construite d'une séquence de quintes justes (Fa–Do–Sol–Ré–La–Mi–Si). D'ailleurs, le *fait* que nous avons plusieurs moyens de décrire la même hauteur dans notre notation signifie que son origine était différent.

L'enharmonie est donc le seul aspect de 12-EDO dans la notation de portée. Le reste fonctionne aussi sans 12-EDO.

## <a name="lesson-0">Leçon 0 : Préliminaires</a>

Avant l'apprentissage du FJS, il y a encore quelques informations supplémentaires. Vous devez être bien confortable avec elles. Il me faut que je sois sûr.

- Savoir que l'intonation juste est définie comme une intonation où chaque intervalle entre n'importe quelles notes est un nombre rationnel.
- Reconnaître quelques rapports justes très fréquents, comme 2/1, 3/2, 5/4, 7/4.
- Savoir qu'on additionne des intervalles en multipliant les rapports, et les soustrait en divisant les rapports. On peut aussi renverser un intervalle en prenant le rapport inverse.
- Savoir utiliser le cent pour décrire la dimension précise d'un intervalle, et savoir que 100 cents égalent un demi-ton et 1200 cents égalent une octave.
- Savoir utiliser ces formules-ci pour obtenir le nombre de cents d'un intervalle dont le rapport est connu :
	
	$$\displaystyle \text{C}(d)=\frac{1200 \cdot \log d}{\log 2} \text{ , log en n'importe quelle base}$$
	
	$$\text{C}(d)=\log_c d \text{ , }c=\sqrt[1200]{2}$$

En outre, il y a trois autres idées mathématiques que vous devez connaître mais qui ne se produisent hors FJS.

Premièrement, vous devez pouvoir rapidement convertir **un intervalle conventionnel** (sans enharmonie) au **nombre de quintes** qui construisent cet intervalle. Une **seconde majeure** par exemple devient **+2** quintes puisqu'il en faut deux (dans le sens des aiguilles d'une montre) pour obtenir une seconde majeure : Do–Sol–Ré. De plus, une **tierce mineure** devient **−3** quintes puisqu'il faut trois quartes, donc trois quintes dans le sens inverse : Do–Fa–Si♭–Mi♭. Chaque intervalle conventionnel correspond exactement à un nombre de quintes. Il vous faut pouvoir convertir de l'un à l'autre et inversement, rapidement.

Deuxièmement, vous devez savoir factoriser un nombre rationnel. Vous savez que chaque **entier positif** peut être écrit d'une unique façon comme un produit de nombres premiers dont les exposants sont des **entiers naturels** (théorème fondamental de l'arithmétique). Par analogie, chaque **nombre rationnel positif** peut être écrit d'une unique façon comme un produit de nombres premiers dont les exposants sont des **entiers relatifs**. Avec humour, je vais appeler ce théorème le « théorème fondamental de l'harmonie ». Par exemple, 6/5 se factorise en 2<sup>1</sup> 3<sup>1</sup> 5<sup>−1</sup> et il n'y a que cette seule factorisation.

Troisièmement, vous devez pouvoir utiliser la forme réduite d'un intervalle. En pratique, pour la trouver, on doit soit multiplier, soit diviser par deux jusqu'à ce que l'intervalle est entre 1 (inclu) et 2 (exclu). C'est similaire au phénomène de *l'équivalence de l'octave*, selon laquelle nous percevons des hauteurs de ton comme équivalentes si elles diffèrent par un multiple de l'octave (2/1). Par exemple 7/1 se transforme en 7/4 et 1/6 en 4/3. La forme réduite peut être calculée selon la formule :

$$\text{red}(d)=d \cdot 2^{-\lfloor\log_2 d\rfloor}$$

On utilise aussi la forme réduite équilibrée ; ici, le résultat est entre $$\frac{1}{\sqrt{2}}$$ (inclu) et $$\sqrt{2}$$ (exclu). Elle est définie en fonction de la forme réduite classique :

$$\text{reb}(d)=\frac{1}{\sqrt{2}} \text{red}(\sqrt{2} \cdot \text{red}(d))$$

Ou avec cette définition, plus facile mentalement :

$$\text{reb}(d)=\text{red}(d) \text{ , } \text{red}(d) < \sqrt{2}$$

$$\text{reb}(d)=\frac{1}{2} \text{red}(d) \text{ , } \text{red}(d) \geq \sqrt{2}$$

C'est tout ce dont vous avez besoin. Commençons, alors !

## <a name="lesson-1">Leçon 1 : L'accord pythagoricien</a>

Vous pensez peut-être que l'élimination de l'enharmonie permet de représenter beaucoup plus de hauteurs qu'avant, et vous avez raison. Pourtant, l'élimination de l'enharmonie ne suffit pas pour représenter toute l'intonation juste d'une manière logique. Un avantage de l'intonation juste est qu'elle peut exprimer de petites différences de hauteur et donne donc de différentes couleurs aux différents intervalles.

Imaginez la séquence d'intervalles suivante : 11/10, 10/9, 9/8, 8/7. Écoutez :

<audio controls><source src="../assets/crash/seconds.mp3" type="audio/mpeg"></audio>

La plupart d'entre nous entend ici quatre « secondes environ majeures ». Mais ce serait injuste de les nommer égales et représenter toutes avec une seconde majeure sur la portée. Ce sont de différents intervalles. L'élimination de ces différences dans un système où elles comptent le plus est une erreur.

Vous pensez alors peut-être qu'il y a une position intermédiaire, une partie de l'intonation juste qui peut être assignée sans équivoque à la notation de portée sans enharmonie, et vous avez encore raison. Cette position intermédiaire est l'intonation juste à la 3-limite, aussi appelée accord pythagoricien.

Cela signifie que nous assignons le rapport 2/1 à l'octave (comme en 12-EDO) et le rapport 3/2 à la quinte juste. Avec cette attribution, on peut assigner chaque intervalle conventionnel à exactement un rapport pythagoricien. Il y a une bijection.

C'est aussi une manière dont nous pouvons même *définir* les notes de l'échelle diatonique. Fa, Do, Sol, Ré, La, Mi, et Si sont alors définis ainsi : Fa–Do est 3/2, aussi Do–Sol, etc. On remarque que Si–Fa devient 1024/729, qui est un peu plus petit que 3/2. Nous définissons donc le dièse et le bémol ainsi : Si–Fa♯ et Si♭–Fa sont 3/2. Vous verrez que le FJS étend ce principe : de petites différences sont annulées avec des altérations.

Remarquez que cette bijection a besoin de quelque chose dont peut-être quelques ne sont pas conscients : des dièses et bémols plus que doubles. Bien qu'ils soient très rares dans la musique conventionnelle, ils sont indispensables ici pour que la ligne de quintes soit infinie dans deux directions. Dans le FJS, vous pourriez voir aussi des triple- et quadruple-dièses et bémols, etc. Cela ne signifie pas du tout qu'ils sont fréquents, mais ne paniquez pas quand vous en avez besoin.

Vous êtes prêt ou prête pour apprendre les deux premières techniques FJS.

> ### Technique FJS \#1 : Convertir un rapport pythagoricien en forme FJS.
> 
> 1. Factorisez le rapport.
> 2. Ignorez l'exposant de 2.
> 3. Si l'exposant de 3 est positif, additionnez autant de quintes dans le sens des aiguilles d'une montre. Si négatif, dans le sens inverse. Vous obtenez un intervalle.
> 4. Réduisez, puis ajustez l'octave.
>
> **Exemple :** Pour convertir 9/8 en FJS, d'abord, nous factorisons : 2<sup>−3</sup> 3<sup>2</sup>. L'exposant de 3 est +2, donc nous additionnons deux quintes : Do–Sol–Ré. On obtient une seconde majeure.

> ### Technique FJS \#2 : Convertir une forme FJS en rapport pythagoricien.
> 
> 1. Ignorez d'abord les octaves.
> 2. Trouvez le nombre de quintes dont l'intervalle est composé, et nommez-le *n*.
> 3. Calculez $$\text{red}(3^n)$$.
> 4. Ajustez l'octave.
>
> **Exemple :** Pour convertir la tierce mineure dans le FJS en rapport pythagoricien, nous découvrons d'abord que la tierce mineure fait −3 quintes : Do–Fa–Si♭–Mi♭. $$\text{red}(3^{-3})$$ égale 32/27.

Ceux-ci sont les plus fréquents :

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

Mais vous n'avez pas du tout besoin d'apprendre ce tableau par cœur, non ! Pour utiliser le FJS, vous n'avez jamais besoin d'apprendre des nombres par cœur. Comme le calcul mental, ces résultats deviennent automatiques au fur et à mesure que vous utilisez le FJS. Vous devriez déjà pouvoir calculer ces rapports à partir des intervalles et inversement. N'ayez pas peur d'utiliser une calculatrice, elle sera très utile jusqu'à ce que vous n'avez plus besoin d'elle.

### Exercice 1

1. Calculez les intervalles FJS qui correspondent à ces rapports pythagoriciens : 2187/2048, 1024/729, 8192/6561.
2. Calculez les rapports pythagoriciens qui correspondent à ces intervalles : septième diminuée, quinte augmentée, tierce diminuée.
3. Trouvez les rapports entre les degrés de cette gamme : <img src="../assets/crash/pythagorean-scale.svg" alt="Mi–Fa♯–La–Si–Ré–Mi"> <audio controls><source src="../assets/crash/pythagorean-scale.mp3" type="audio/mpeg"></audio>
4. Écrivez cette gamme dans le FJS avec la tonique Ré : 1/1, 81/64, 4/3, 3/2, 243/128, 2/1.
5. Calculez le rapport du comma pythagoricien (dans le FJS, une seconde diminuée).
6. (DIFFICILE !) Le rapport pythagoricien 3<sup>53</sup>/2<sup>84</sup> est minuscule : il ne compte qu'environ 3.6 cents. Trouvez sa représentation FJS.

Vous pouvez vérifier vos réponses [ici](solutions.html).

## <a name="lesson-2">Leçon 2 : Les intervalles premiers</a>

Vous avez maintenant appris comment écrire l'accord pythagoricien. C'était sûrement un peu ennuyeux : l'accord pythagoricien ne diffère pas beaucoup de 12-EDO, et ce n'est pas assez pour pouvoir décrire toute l'intonation juste.

L'étape suivante : savoir représenter les intervalles premiers. Ce sont des intervalles dans l'échelle des harmoniques qui viennent des nombres premiers. Commençons avec la séquence des nombres premiers :

> 2, 3, 5, 7, 11, 13, 17, 19, …

…et transformons-les en forme réduite :

> 1/1, 3/2, 5/4, 7/4, 11/8, 13/8, 17/16, 19/16, …

Nous savons déjà représenter 2 et 3 : ce sont l'octave et la quinte. À partir d'ici, quand je dis « intervalles premiers », cela signifie seulement ceux qui sont associés aux nombres premiers au-delà de 3.

Si vous avez déjà quelques connaissances en JI, vous avez déjà entendu parler de 5/4 comme une « tierce majeure juste » et de 7/4 comme une « septième mineure juste », donc des formes spéciales de la tierce majeure et la septième mineure. Cette langue ne vous semblait probablement pas bizarre. Il semble que ce soient simplement des extensions des idées d'une « tierce majeure » et une « septième mineure » pour inclure des intervalles proches.

En revanche, formalement, on trouve quelque chose d'étrange.

Supposons que nous l'acceptons d'abord. 5/4 est alors un genre de tierce majeure. Donc nous l'écrivons comme tierce majeure, *avec un symbole supplémentaire qui signifie la différence.* La différence entre 5/4 et la tierce majeure pythagoricienne (81/64) ne s'élève qu'à 81/80, soit environ 22 cents. Pourquoi est-ce que c'est problématique ? Parce qu'il y a beaucoup d'approximations plus précises, par exemple la quarte diminuée pythagoricienne (8192/6561) qui diffère de seulement 32805/32768, soit environ 2 cents !

Écoutez la différence entre 81/64 et 5/4 :

<audio controls><source src="../assets/crash/big-comma.mp3" type="audio/mpeg"></audio>

Et celle entre 8192/6561 et 5/4 :

<audio controls><source src="../assets/crash/small-comma.mp3" type="audio/mpeg"></audio>

Pourquoi alors utiliser la tierce majeure et pas la quarte diminuée pour 5/4 ? En raison de la simplicité, vous dites ? La tierce majeure s'élève à +4 quintes pendant que la quarte diminuée à −8, donc beaucoup plus compliquée. D'après cela, pourquoi n'utilisons-nous pas la tierce *mineure* pour 5/4, qui est encore plus simple : seulement −3 quintes au lieu de +4. Maintenant, vous dites qu'elle est trop éloignée ? Avez-*vous* l'autorité de décider l'équilibre correct entre simplicité et proximité ?

Calmez-vous. C'était une satire des autres notations de JI. Elles choisissent ces approximations sans aucune logique. Dans le FJS, la question « Comment choisissons-nous les approximations pour chaque intervalle premier ? » a une réponse très simple : *nous*, nous ne le faisons pas. Une constante fixe le fait pour nous : le **rayon de tolérance**. Après avoir expérimenté avec beaucoup de différents rayons et considéré les avantages et les inconvénients de chacun, j'ai décidé que la version courante du FJS utilisera le rayon suivant :

$$\displaystyle \lambda =\frac{33}{31}$$

J'expliquerai ce choix plus tard.

Comment le FJS utilise-t-il ce nombre ? L'étape suivante est l'élément le plus important de tout le FJS. C'est l'élément qui fait la différence entre le FJS et toutes les autres notations de JI. C'est l'**algorithme principal du FJS**. Ici, vous trouvez une forme lisible pour des humains, mais l'algorithme existe aussi dans des langages de programmation, y compris une calculatrice sur ce site.

L'**algorithme principal du FJS** trouve le **déplacement de quintes** pour chaque nombre premier en utilisant le rayon de tolérance. J'explique le but de l'algorithme, sa tâche, et la fonction du déplacement de quintes.

> ### L'algorithme principal du FJS
> 
> 1. Entrez le nombre premier. Nommez-le *p*.
> 2. Soit *k* = 0.
> 3. Considérez l'intervalle construit de *k* quintes pythagoriciennes. Nommez-le *P*.
> 4. Est-ce que la différence entre *p* et *P* s'élève à moins que le rayon de tolérance ?
> 5. Si oui, *k* égale le déplacement. Fin.
> 6. Si non, avancez au *k* suivant dans la séquence : (0, 1, −1, 2, −2, 3, −3, …), et retournez à l'étape 3.
>
> **Exemple :** Vous voyez ici une démonstration de l'algorithme avec l'entrée 5. (On suppose que rayon de tolérance est λ = 65/63.) Les « Commas » sont des candidats pour le comma formel, on les obtient en divisant 5/4 par l'approximation pythagoricienne qui convient.
>
> | Déplacement | Pythagoricienne |   Comma   |     Taille | Résultat | Conclusion |
> |------------:|:---------------:|:---------:|-----------:|:---------|:-----------|
> |        0    |       1/1       |    5/4    |  386.31¢   | ≥ λ      | continuer  |
> |       +1    |       3/2       |    5/6    |  315.64¢   | ≥ λ      | continuer  |
> |       −1    |       4/3       |   15/16   |  111.73¢   | ≥ λ      | continuer  |
> |       +2    |       9/8       |   10/9    |  182.40¢   | ≥ λ      | continuer  |
> |       −2    |      16/9       |   45/32   |  590.22¢   | ≥ λ      | continuer  |
> |       +3    |      27/16      |   20/27   |  519.55¢   | ≥ λ      | continuer  |
> |       −3    |      32/27      |  135/128  |   92.18¢   | ≥ λ      | continuer  |
> |     **+4**  |    **81/64**    | **80/81** | **21.51¢** | < λ      | arrêter    |

Comme vous voyez, l'algorithme est assez simple que vous pouvez le réaliser mentalement (peut-être sauf la 4. étape qui est difficile jusqu'à ce que vous pouvez imaginer ou vous souvenir des dimensions approximatives de plusieurs intervalles).

Dans la 4. étape, on choisit les octaves de *p* et *P* pour que la *différence* entre eux soit minimale : la taille absolue du candidat pour le comma formel, donc la **valeur absolue** du nombre de cents. Formellement, la différence signifie $$\text{reb}\left( \frac{p}{3^k} \right)$$.

Bien que l'algorithme semble très long, en fait, il est très rapide, mentalement aussi. 5/4 est évidemment trop éloigné pour être une octave, quinte, quarte, seconde majeure, septième mineure, ou sixte majeure. Il ne faut que vérifier si elle pourrait être une tierce mineure. Sinon, elle devient alors une tierce majeure.

L'algorithme trouve alors pour chaque intervalle premier l'approximation pythagoricienne la plus simple dans les limites du rayon de tolérance. La différence devient un **comma formel** et reçoit une altération FJS. Pour calculer le comma formel, on utilise la formule suivante :

> ### Le comma formel
>
> Le comma formel d'un nombre premier *p* dont le déplacement est *g* égale :
>
> $$\text{comma} (p)=\text{reb}\left( \frac{p}{3^g} \right)$$

L'opération inverse est aussi possible : vous pouvez trouver le déplacement d'un nombre premier sans utiliser l'algorithme ou savoir le rayon de tolérance, si vous connaissez le comma formel. (Cela est parfois utile, mais pas souvent.) Trouvez le renversement du comma formel. Factorisez-le. L'exposant de 3 est alors le déplacement. Par exemple, nous savons que le comma formel de 7 est 63/64. Nous factorisons le renversement (64/63) et obtenons 2<sup>6</sup> 3<sup>−2</sup> 7<sup>−1</sup>. Puisque l'exposant de 3 est −2, −2 est aussi le déplacement de 7.

Comme avec le dièse et le bémol, il y a toujours deux altérations différentes pour chaque comma : soit positif, soit négatif. Le symbole des altérations est toujours basé sur le nombre premier lui-même, il diffère selon l'utilisation :

- Lorsqu'on nomme les notes, on écrit l'altération positive en indice supérieur et la négative en indice inférieur.
- Lorsqu'on les écrit sur la portée, on écrit l'altération positive comme le nombre lui-même et la négative avec une barre.

Remarquez que j'utilise délibérément les mots « positif » et « négatif » au lieu de « ascendant » et « descendant », parce que dans le FJS, des altérations positives ne sont pas toujours ascendantes, et les négatives ne sont pas toujours descendantes. Au lieu de cela, **le positif est toujours otonal** et **le négatif est toujours utonal**. Cela signifie quelque chose de très important : *une altération FJS est toujours positive lorsqu'une approximation pythagoricienne d'un intervalle premier devient l'intervalle premier lui-même.* Par exemple, pour écrire 5/4 sur Do, on écrit d'abord Mi (l'approximation, 81/64) et puis on le transforme en 5/4 en utilisant une altération +5, donc Mi<sup>5</sup>. Ce +5 modifie de 81/80 en *bas*, en fait.

Ceux qui connaissent le système de Ben Johnston vont reconnaître cette idée. Pour le reste, j'explique :

Il est vrai que cela semble trop compliquée, mais en fait, ça simplifie beaucoup. Par exemple : Une altération positive de +17 signifie toujours que son utilisation ajoute un facteur de 17 dans le numérateur. Si vous connaissez l'approximation pythagoricienne de 17/16 (c'est la seconde mineure), vous savez automatiquement que 17/16 s'écrit comme seconde mineure avec +17. Il ne vous faut pas savoir si l'approximation se trouve plus haut ou plus bas que la cible ! Ce principe basé sur l'otonalité et l'utonalité au lieu de la direction simplifie aussi la notation de plusieurs gammes et intonations. D'ailleurs, le FJS décrit que le comma formel de +5 est en fait 80/81, pas 81/80. En général, pour chaque nombre premier *p* > 3, chaque comma contient un facteur (positif) de *p* dans le numérateur. C'est aussi la raison pour laquelle le système s'appelle Système **fonctionnel** de l'intonation juste : il se concentre sur la représentation de la **fonction**, pas la hauteur.

Ici, je voudrais raconter une anecdote. Pendant que je développais un prototype du Système fonctionnel de l'intonation juste (même avant l'avoir nommé), au début, tous les commas formels positifs étaient ascendants et tous négatifs étaient descendants. Mais une fois, j'ai réfléchi sur quelques accords à la 5- et à la 7-limite, et tout à coup, je me suis rendu compte que cette règle est beaucoup trop compliquée, et que je vais la changer tout de suite, la nouvelle version étant positif-otonal, négatif-utonal. Après ce changement, mes pensées en FJS ont été beaucoup simplifiées, donc cela a continué. (Au début du FJS, il y avait beaucoup d'autres complications, et il me fallait beaucoup de temps pour les éliminer jusqu'à la forme extrêmement simple d'aujourd'hui…)

Voyez l'échelle harmonique sur La jusqu'au huitième harmonique :

> La, La, Mi, La, Do♯<sup>5</sup>, Mi, Sol<sup>7</sup>, La.

Sur la portée :

<img src="../assets/crash/overtone-short.svg" alt="La–La–Mi–La–Do♯5–Mi–Sol7–La">

Écoutez-la :

<audio controls><source src="../assets/crash/overtone-short.mp3" type="audio/mpeg"></audio>

Comme vous voyez, toutes les altérations dans l'échelle harmonique sont positives (cela est vrai pour toute l'échelle qui est infinie). N'est-il pas beaucoup plus propre que si nous utilisions la direction au lieu de l'otonalité ? Je comprends que vous pourriez être d'abord surpris ou surprise. Mais j'espère que vous verrez au fil du temps que le FJS est en fait plus simple et plus logique grâce à cette règle. Vous pouvez aussi voir une autre analogie : remarquez que le dièse additionne des quintes (il en additionne sept), et le bémol en soustrait (sept aussi).

Je voudrais maintenant expliquer comment ces altérations interagissent.

> ### La propagation des altérations FJS
>
> - Il est connu que les altérations pythagoriciennes trient les tons diatoniques (Do, Ré, Mi, Fa, Sol, La, Si) en leurs catégories pythagoriciennes correctes. C'est pourquoi elles s'appliquent à chaque note du même ton diatonique dans la même octave et la même mesure.
> - Par analogie, les altérations FJS trient les tons pythagoriciens (Do, Ré♭, Do♯, Ré, …) en leurs hauteurs absolues. C'est pourquoi elles, elles s'appliquent seulement à chaque note du même ton pythagoricien dans la même octave et la même mesure.

Pourquoi ? Parce que cette règle est plus logique et plus pratique. Voici une démonstration :

<img src="../assets/crash/accidentals.svg" alt="Do♯5–Do, Do♯5–Do1, Do♯5–Do♮, Do♯5–Do♮5">

<audio controls><source src="../assets/crash/accidentals.mp3" type="audio/mpeg"></audio>

- Dans la première mesure, nous avons un Do♯<sup>5</sup> puis un Do. Puisque c'est le même ton diatonique dans la même octave, il absorbe le dièse. Puisque c'est alors un Do♯ dans la même octave, il absorbe aussi le +5. Nous avons donc Do♯<sup>5</sup>, Do♯<sup>5</sup>.
- Dans la deuxième mesure, il y a un Do♯<sup>5</sup> puis un Do avec une altération +1. **+1 est l'équivalent d'un bécarre dans le FJS, il annule toutes les altérations FJS, mais rien d'autre.** Donc cela signifie Do♯<sup>5</sup>, Do♯.
- Dans la troisième mesure, il y a un Do♯<sup>5</sup> puis un Do bécarre. Puisque ce n'est plus le même ton pythagoricien, il n'absorbe plus le +5, donc cela signifie Do♯<sup>5</sup>, Do.
- Dans la quatrième mesure, il y a un Do♯<sup>5</sup> puis un Do bécarre avec +5. Nous avons ici Do♯<sup>5</sup>, Do<sup>5</sup> ; ce cas serait probablement le plus rare.

Encore une remarque : le FJS permet aussi d'ajouter ces altérations en indice supérieur et inférieur aux noms des intervalles (comme 3, 6m, 5°). C'est comment les rapports de l'intonation juste sont formellement nommés dans le FJS. Par exemple, 5/4 « s'appelle » 3<sup>5</sup>. Cela signifie soit Mi<sup>5</sup> de Do, soit La<sup>5</sup> de Fa, soit Si<sup>5</sup> de Sol, etc.

D'accord. C'est tout que vous devez savoir pour pouvoir écrire les intervalles premiers. Vous allez apprendre une nouvelle technique maintenant. Vous n'avez plus besoin du rayon de tolérance : il n'est utilisé que dans l'algorithme principal pour calculer le déplacement.

> ### Technique FJS \#3 : Convertir un intervalle premier otonal en forme FJS.
> 
> 1. Trouvez le déplacement du nombre premier.
> 2. Écrivez l'intervalle qui correspond à ce nombre de quintes.
> 3. Ajoutez une altération de ce nombre premier. Par exemple, 23/16 recevrait un +23.
>
> **Exemple :** Pour convertir 7/4 en forme FJS, nous trouvons d'abord le déplacement de 7 : −2. Nous écrivons l'intervalle de −2 quintes : Do–Fa–Si♭, donc une septième mineure. Finalement, nous ajoutons un +7 et on obtient 7m<sup>7</sup>. (Oui, ça peut sembler un peu bizarre.)

(La calculation inverse est banale : pour trouver le rapport d'un intervalle dans le FJS, si on sait qu'il s'agit d'un intervalle premier otonal, on prend tout simplement le nombre premier de l'altération en forme réduite !)

### Exercice 2

(À partir d'ici, supposez toujours que le rayon de tolérance est λ.)

1. Trouvez le déplacement pour les nombres premiers 11 et 13.
2. En savant que le déplacement pour 19 est −3, trouvez le comma formel pour 19.
3. En savant que le comma formel pour 47 est 47/48, trouvez le déplacement pour 47.
4. Écrivez cette gamme dans la tonique Mi : 1/1, 9/8, 5/4, 4/3, 3/2, 7/4, 2/1.
5. Écrivez l'échelle harmonique de La jusqu'au quatorzième harmonique.
6. (DIFFICILE !) Écrivez l'échelle *sous*-harmonique de La jusqu'au huitième sous-harmonique.

Vous pouvez vérifier vos réponses [ici](solutions.html).

## <a name="lesson-3">Leçon 3 : Altérations composées</a>

Vous savez maintenant écrire une grande partie de l'intonation juste dans le FJS. Vous savez représenter tout l'accord pythagoricien et tous les intervalles premiers. Mais nous n'avons pas encore terminé ; il nous manque tous les intervalles qui sont composés de plus qu'un nombre premier (3 inclu), comme 15/8 ou 25/16, et il nous manque les intervalles qui n'apparaissent pas du tout dans l'échelle harmonique, comme 5/3, 6/5, ou 9/7.

Dans ce cours, j'ai trié ces intervalles manquants en deux groupes :

- Des intervalles comme 15/8 ou 9/7 qui sont composés d'un intervalle pythagoricien et un intervalle premier, otonal ou utonal.
- Des intervalles comme 25/16 ou 7/5 qui sont composés de plus d'un intervalle premier.

Vous pouvez déjà représenter le premier groupe, même si vous ne le savez pas encore. Ceci est dû au fait que le FJS a beaucoup d'identités très pratiques qui vous permettront d'éviter des calculs complètement dans certaines situations. (N'oubliez pas qu'on additionne des intervalles en multipliant leurs rapports.)

> ### Identités de raccourci FJS
>
> - La somme de deux intervalles FJS de deux rapports égale l'intervalle FJS du produit de ces rapports.
> - La différence de deux intervalles FJS de deux rapports égale l'intervalle FJS du quotient de ces rapports.
> - Le renversement d'un intervalle FJS d'un rapport égale l'intervalle FJS de l'inverse du rapport.

Ces identités ont beaucoup de corollaires très pratiques pour devenir encore plus courant. Considérez par exemple que deux notes avec les mêmes altérations FJS sont toujours séparées par un intervalle pythagoricien. Mi<sup>5</sup> et Fa♯<sup>5</sup> ? Vous ne savez peut-être pas du tout ce qu'ils sont dans la tonalité de Si♭<sub>7</sub>, mais vous savez que l'intervalle entre eux est une seconde majeure pythagoricienne, alors 9/8. Élégant, n'est-ce pas ?

Vous pouvez aussi utiliser ces identités pour représenter le premier groupe d'intervalles manquants. Imaginez par exemple 15/8. Nous le divisons en deux parties : la pythagoricienne et le reste. Nous obtenons 3/2 et 5/4. Nous traduisons maintenant dans le FJS et puis nous additionnons les intervalles obtenus. 3/2 est une 5 et 5/4 est une 3<sup>5</sup>. La somme est une 7<sup>5</sup>. C'est tout simplement l'addition conventionnelle d'intervalles, mais nous ajoutons les altérations FJS, et nous obtenons vraiment la représentation de 15/8 dans le FJS !

D'une manière différente : Le quinzième harmonique est comme le cinquième harmonique dans la tonalité de dominante. Pour représenter 15/8 sur Do, nous commençons avec une « modulation imaginaire » vers Sol. Ici, notre cible est tout simplement le cinquième harmonique, alors Si<sup>5</sup>, ce qui est donc aussi la représentation de 15/8 sur Do.

Encore une manière différente : Vous ne savez peut-être pas comment on écrit 15/8 sur Do dans le FJS, mais vous savez comment on écrit 5/4 : c'est Mi<sup>5</sup>. Vous savez aussi que la différence entre 5/4 et 15/8 s'élève à 3/2, un intervalle pythagoricien. Cela signifie que 15/8 et 5/4 ont les mêmes altérations FJS. Vous savez aussi que cet intervalle pythagoricien est une quinte juste. Ces deux informations décrivent ensemble une seule note : Si<sup>5</sup>, donc la réponse correcte.

Essayez d'utiliser ces méthodes pour résoudre l'exercice suivant.

### Exercice 3

1. Trouvez les formes FJS des rapports suivants : 5/3, 6/5, 7/6, 9/5.
2. Trouvez les rapports correspondants aux formes FJS suivants : 2<sup>5</sup>, 3<sub>7</sub>, 3m<sup>11</sup>.
3. Écrivez dans le FJS, sur Do, l'échelle ptolémaïque dont les rapports sont : 1/1, 9/8, 5/4, 4/3, 3/2, 5/3, 15/8, 2/1.
4. (DIFFICILE !) Considérez l'échelle suivante. Est-elle un mode de celle ci-dessus ? <img src="../assets/crash/just-minor.svg" alt="Do–Ré–Mi♭_5–Fa–Sol–La♭_5–Si♭_5–Do"> <audio controls><source src="../assets/crash/just-minor.mp3" type="audio/mpeg"></audio>

Vous pouvez vérifier vos réponses [ici](solutions.html).

(À la fin de cette méthode, vous allez connaître des techniques pour pouvoir convertir *chaque* rapport possible en intervalle FJS et inversement. Mais c'est une bonne idée de connaître les méthodes ci-dessus aussi puisqu'elles sont beaucoup plus rapides et vous vous en servirez beaucoup plus. C'est similaire aux méthodes différentes de résoudre une équation du second degré. Il y a une formule pour cela qui fonctionne toujours, mais elle est la méthode la plus lente.)

Pendant que vous utilisiez ces identités pour résoudre cet exercice, vous vous êtes posé ou posée peut-être la question : « Comment est-ce que j'additionnerais deux 3<sup>5</sup> ? Qu'est-ce qui serait le résultat ? » Est-ce que ce serait une 5+<sup>5</sup> ? Non. Elle serait la somme d'une 3 et une 3<sup>5</sup>. Ici, nous additionnons une 3<sup>5</sup> à une autre 3<sup>5</sup>.

La réponse à cette question est aussi la méthode que le FJS utilise pour représenter le deuxième groupe d'intervalles manquants : des *altérations composées*.

Chaque note ou intervalle FJS peut avoir plus qu'une altération FJS – ils en peuvent avoir n'importe quel nombre. On sépare toujours les otonaux et les utonaux, mais des altérations de la même « tonalité » (otonalité ou utonalité) seront toujours composées. On les compose en les multipliant. Pourquoi ? Parce qu'elles sont tous des nombres premiers ; la multiplication (mais pas l'addition ou l'enchaînement en la base dix) assure que les facteurs peuvent être reconstruits d'une unique façon. Ceci est dû au théorème fondamental de l'arithmétique ainsi qu'au fait que l'ordre ne fait aucune différence.

Si les altérations composées sont assez grandes que vous ne reconnaissez plus les facteurs (par exemple, 119 = 7 × 17), vous pouvez aussi écrire les facteurs en séquence, avec des virgules entre nombres premiers. Un Ré<sup>7,17</sup> serait donc identique à un Ré<sup>119</sup>. Il est habituel d'écrire ces facteurs dans un ordre non décroissant, mais chaque ordre est correct. Vous pouvez aussi les multiplier comment vous voulez. Par exemple, écrire Sol<sup>11,125</sup> est correct (bien que je n'aie pas multiplié que certains facteurs).

Alors, la réponse à la question : La somme de deux 3<sup>5</sup> est une 5+<sup>25</sup> qui convient beaucoup à être la forme FJS du rapport 25/16. En sachant aussi que 7/4 est représenté par une 7m<sup>7</sup>, vous savez aussi tout de suite que 49/32 est une 6m<sup>49</sup> et 35/32 une 2<sup>35</sup>.

Comme j'ai déjà expliqué, l'otonalité et l'utonalité ne sont jamais mixtes. Si un Sol♭ aurait des altérations +7 et −5 simultanément, on aurait un Sol♭<sup>7</sup><sub>5</sub>. Les règles exactes sont suivantes :

- Lorsqu'on nomme les notes, on utilise un nombre en indice supérieur pour représenter l'altération positive composée et un nombre en indice inférieur pour la négative.
- Lorsqu'on écrit sur la portée, on écrit d'abord l'altération positive composée (s'il y en a), puis la négative (s'il y en a) avec une barre, puis les altérations conventionnelles (s'il y en a), puis la note.

Donc, les notes Sol♭<sup>7</sup><sub>5</sub> et Fa♯<sup>5</sup><sub>7</sub> (soit 7/5 et 10/7 sur Do) seraient représentés de la façon suivante :

<img src="../assets/crash/interval.svg" alt="Sol♭7_5–Fa♯5_7">

Écoutez-les :

<audio controls><source src="../assets/crash/interval.mp3" type="audio/mpeg"></audio>

Depuis que vous savez utiliser des altérations composées, vous pouvez faire beaucoup plus avec le FJS. Vous pouvez maintenant additionner, soustraire, et renverser des intervalles FJS comme vous voulez. Vous pouvez aussi additionner un intervalle à une note (Sol + 3<sup>5</sup> = Si<sup>5</sup>) et soustraire deux notes (Fa<sup>7</sup> − C = 4<sup>7</sup>). Donc vous pouvez maintenant utiliser les identités de l'addition, la soustraction et le renversement pour trouver vite les formes FJS des intervalles que vous ne pouviez pas représenter avant.

> ### Arithmétique des intervalles FJS
>
> - Pour additionner deux intervalles FJS, additionnez d'abord les parties pythagoriciennes (conventionnelles), puis composez les altérations FJS.
> - Pour soustraire deux intervalles FJS, soustrayez les parties pythagoriciennes, puis échangez l'otonal avec l'utonal pour le second intervalle, puis composez les altérations. Soustraire un intervalle signifie le même qu'additionner son renversement.
> - Pour renverser un intervalle FJS, renversez la partie pythagoricienne, puis échangez l'otonal avec l'utonal.
> - Vous pouvez aussi additionner un intervalle à une note ou soustraire deux notes.

Quand vous composez des altérations, vous pouvez (et devez) annuler des facteurs identiques dans l'otonal et l'utonal. Par exemple, si vous additionnez une 3<sup>5</sup> (5/4) et une 3m<sub>5</sub> (6/5), vous obtenez une « 5<sup>5</sup><sub>5</sub> », ce qui est identique à une quinte juste, ce que nous avons prévu (3/2). Un autre exemple : En additionnant une 2m<sup>49</sup> (49/48) et une 2<sub>7</sub> (8/7), on obtient une « 3m<sup>49</sup><sub>7</sub> » donc une 3m<sup>7</sup> (7/6).

Vous pouvez déjà utiliser l'arithmétique des intervalles pour représenter *n'importe quel* rapport JI dans le FJS et convertir *n'importe quelle* forme FJS en rapport JI. Pour ce but, vous pouvez utiliser les méthodes suivantes si les rapports ne sont pas trop compliqués.

Pour convertir un rapport simple en forme FJS : Factorisez d'abord le numérateur pour obtenir une partie pythagoricienne et des parties premières. Construisez un intervalle pythagoricien et chaque intervalle premier, puis additionnez. Répétéz pour le dénominateur. Finalement, trouvez la différence entre l'intervalle du numérateur et celui du dénominateur. Par exemple, pour convertir 36/25, nous construisons d'abord le numérateur : 36, donc 9/8, donc une seconde majeure. Puis le dénominateur : 25, donc 5 et 5, donc deux 3<sup>5</sup>, donc une 5+<sup>25</sup>. Finalement nous soustrayons : 2 − 5+ = 5°. Les altérations : (0) − (+25) = (−25). La réponse : 5°<sub>25</sub>.

Pour convertir un intervalle FJS en rapport JI : Essayez d'abord $$\frac{\text{altération otonale}}{\text{altération utonale}}$$. (Vous ne devez pas même factoriser l'altération, puisqu'elle est composée en multipliant.) Vous obtenez soit déjà la réponse correcte, soit une erreur pythagoricienne. Ajustez. Par exemple, nous essayons de convertir 1+<sup>5</sup><sub>7</sub>. Nous essayons d'abord 5/7, donc 10/7 ; après avoir utilisé la méthode ci-dessus, on obtient 4+<sup>5</sup><sub>7</sub>. L'erreur n'est qu'une quinte, donc nous additionnons une quinte pythagoricienne. La réponse : (3/2) × (5/7) = 15/14.

Pour 99% des calculs, c'est tout ce dont vous avez besoin pour lire et écrire dans le FJS. Ces méthodes sont très simples, comme vous voyez. Souvent, vous pouvez même éviter ces méthodes ; souvent, il ne vous faut que parcourir l'échelle harmonique pour convertir l'un à l'autre en quelques secondes. Par exemple, pour convertir 14/13 en FJS : vous savez que 13 est une sixte mineure et 14 une septième mineure, donc 14/13 sera une seconde majeure. En raison du 14 dans le numérateur, vous ajoutez un +7, et en raison du 13 dans le dénominateur, vous ajoutez un −13, et magiquement vous avez déjà trouvé la représentation correcte : 2<sup>7</sup><sub>13</sub>.

Mais : l'avantage le plus puissant du FJS est qu'il peut être complètement automatisé. Les méthodes ci-dessus peuvent souvent dépendre de l'intuition, et elles ne sont pas très utiles pour des intervalles complexes. Mais vous pouvez *toujours* convertir dans les deux directions en utilisant les techniques suivantes :

> ### Technique FJS \#4 : Convertir chaque rapport JI en sa forme FJS automatiquement.
>
> 1. Factorisez le rapport.
> 2. Pour chaque nombre premier *p* au-delà de 3, avec un exposant α<sub>*p*</sub>, enregistrez α<sub>*p*</sub> pour chaque *p* et multipliez le rapport par
>
> 	$$(\text{comma} (p))^{-\alpha _p}$$
>
>	où $$\text{comma}(p)$$ est le comma formel de *p*.
>
> 3. Le résultat sera toujours pythagoricien. Convertissez-le en forme FJS.
> 4. Ajoutez maintenant les α<sub>*p*</sub> comme altérations : positif-otonal, négatif-utonal.
> 5. Réduisez et ajustez l'octave.
>
> **Exemple :** Convertissons le demi-ton chromatique faible, 25/24, en FJS en utilisant cette technique. 25/24 = 2<sup>3</sup> 3<sup>−1</sup> 5<sup>2</sup>. En raison du 5<sup>2</sup> nous enregistrons 2 et multiplions par (80/81)<sup>−2</sup>. On obtient 2187/2048 qui est pythagoricien et devient une prime augmentée. Nous ajoutons maintenant un +5 double (en raison du 2) et obtenons alors la réponse : 1+<sup>25</sup>.

> ### Technique FJS \#5 : Convertir chaque représentation FJS en rapport JI automatiquement.
>
> 1. Convertissez la partie pythagoricienne (conventionnelle) de l'intervalle en rapport pythagoricien.
> 2. Pour chaque altération otonale de *p*, multipliez par le comma formel de *p*. Pour les utonales, divisez.
> 3. Réduisez et ajustez l'octave.
>
> **Exemple :** L'une des harmonies iconiques du *Well-Tuned Piano* de La Monte Young est représentée dans le FJS avec 3m<sup>49</sup>. Pour trouver le rapport, nous convertissons d'abord la tierce mineure en 32/27. L'altération +49 signifie une double multiplication par le comma formel de 7. Donc (32/27) × (63/64)<sup>2</sup> = 147/128.

Une dernière remarque est à propos de la prononciation et ASCII. Si vous voulez communiquer en FJS, il faudrait qu'il soit possible dans plus qu'un seul médium. Voici les règles de prononciation, simples et logiques :

> ### Prononciation FJS
>
> 1. Prononcez la partie conventionnelle (pythagoricienne) du nom de la note ou l'intervalle.
> 2. Ajoutez l'altération otonale composée (s'il y en a) : prononcez le nombre lui-même, avec un préfixe « super » qui est optionnel.
> 3. Ajoutez l'altération utonale composée (s'il y en a) : prononcez le nombre lui-même avec un préfixe « sub ».

Par exemple, on prononce Mi<sup>5</sup> comme « Mi-cinq » ou « Mi-super-cinq », et Mi♭<sub>5</sub> comme « Mi-bémol-sub-cinq ». Un intervalle comme 4<sup>7</sup><sub>11</sub> serait « quarte-juste-(super)-sept-sub-onze » où le mot « super » est optionnel, pour accentuer la séparation entre le nom conventionnel et le début des altérations FJS.

Si vous séparez les altérations, il n'y a aucune différence. La<sup>5,17</sup><sub>13</sub> serait « La-(super)-cinq-dix-sept-sub-treize ». Le mot « sub » est tout simplement un terminateur de la partie otonale. Il indique que les nombres suivants appartiennent à la partie utonale.

À propos d'ASCII : Ce serait problématique d'écrire ces noms avec un clavier conventionnel à cause des indices supérieurs et inférieurs. Alternativement, on peut indiquer l'utonal avec une barre de soulignement, comme d'habitude, et vous pouvez ainsi indiquer l'otonal avec un signe caret, mais vous n'en avez besoin que pour les intervalles majeurs et justes en français. Mi<sup>5</sup> serait `Mi^5` ou `Mi5` ; une (tierce majeure)<sup>5</sup> serait `3^5`, mais `35` serait 243/8.

**C'est tout !**

C'est tout ce dont vous avez besoin pour utiliser *tout* le FJS et représenter *toute* l'intonation juste ! Vous n'avez pas besoin d'apprendre aucuns nombres par cœur ou chercher dans des tableaux, rien ! L'un des plus grands avantages de ce système est qu'il est complètement portable. Tout ce dont vous avez besoin pour le construire à partir de zéro, c'est le rayon de tolérance et des calculs. Les techniques que vous avez appris peuvent être automatisées et le système entier peut être géré par un ordinateur.

Le FJS a encore beaucoup de belles qualités grâce auxquelles il est tellement logique. La plus importante, c'est qu'il crée une *bijection* à l'intonation juste ; chaque nombre rationnel n'a qu'une forme FJS, et chaque forme FJS ne correspond qu'à un nombre rationnel. Une autre qualité dont je vous ai déjà parlé : le FJS a un *isomorphisme* ; il n'y a aucune différence si vous composez des rapports JI puis les transformez en FJS, ou d'abord transformez en FJS puis composez les transformations ; le résultat est le même. Grâce à ces qualités, il est très facile de transposer dans le FJS. Pour transposer d'une 2<sup>5</sup>, on transpose d'abord d'une seconde majeure comme d'habitude, sans changer les altérations FJS, puis, on ajoute partout un +5 et compose (par exemple, pour que +5 devienne +25, ou +7 devienne +35, ou −5 devienne 1).

Il y a encore une chose que vous voudriez peut-être voir avant que vous mettiez vos nouvelles connaissances à l'essai. Ce sont encore des astuces ; vous auriez pu calculer ce tableau vous-même si vous aviez voulu (mais vous ne voudriez pas, donc je l'ai fait pour vous).

| Nombre | Génératrice | Comma formel |
|-------:|:-----------:|:------------:|
| 5      | +4          | 80/81        |
| 7      | −2          | 63/64        |
| 11     | −1          | 33/32        |
| 13     | −4          | 1053/1024    |
| 17     | −5          | 4131/4096    |
| 19     | −3          | 513/512      |
| 23     | +6          | 736/729      |
| 29     | −2          | 261/256      |
| 31     | +5          | 248/243      |

Vous pouvez maintenant découvrir pourquoi j'ai choisi 65/63 comme rayon de tolérance. Ce nombre est la médiante de 33/32 et 32/31, alors il est plus grand que 33/32 et plus petit que 32/31. Donc 33/32 serait accepté comme comma formel. Grâce à cela, 11/8 peut être représenté comme quarte juste (si elle était rejetée, la prochaine approximation serait la quinte diminuée, ce qui est ridicule). Mais en même temps, ce rayon rejette la représentation de 31/16 comme octave, parce que 32/31 est trop grand pour être un comma formel. N'est-ce pas ingénieux ?

### Exercice 4

1. Trouvez la forme FJS des rapports suivants, en utilisant n'importe quelle technique : 28/27, 15/13, 33/25.
2. Trouvez le rapport qui correspond aux représentations FJS suivantes, en utilisant n'importe quelle technique : 6<sub>7</sub>, 4°<sup>13</sup><sub>5</sub>, 3m<sub>25</sub>.
3. Écrivez une traduction de cette progression d'accords célèbre en Si♭ majeur. Vous voyez les rapports de chaque note sur Si♭ (sans octaves).
	- 10/9, 5/4, 4/3, 5/3, 1/1
	- 3/2, 9/8, 21/16, 27/16, 15/8
	- 1/1, 9/8, 5/4, 3/2, 15/8
4. Traduisez cette progression du FJS en rapports sur Mi♭, la tonique : <img src="../assets/crash/cadence.svg" alt="Mi♭–Si♭–Sol5–Mi♭, Do5–Do5–Sol5–Mi♭, La♭–Do5–La♭–Fa5, Si♭–Si♭–Fa1–Ré5, Mi♭–Si♭–Sol5–Mi♭"> <audio controls><source src="../assets/crash/cadence.mp3" type="audio/mpeg"></audio>
5. Écrivez le premier audio de ce cours dans le FJS. Vous le voyez ici : 11/10, 10/9, 9/8, 8/7. La tonique, c'est La.

	<audio controls><source src="../assets/crash/seconds.mp3" type="audio/mpeg"></audio>
	
6. (DIFFICILE !) Il y a une communité qui supporte la « musique 432 Hz », dont les membres affirment qu'un accord de la note La sur 432 Hz au lieu de 440 Hz améliore la qualité acoustique et spirituelle de la musique. (Cette question n'a aucune importance pour nous.) Trouvez l'intervalle FJS dont un morceau serait transposé si cet accord était adopté.
7. (DIFFICILE !) Le rayon de tolérance lui-même, 65/63, qu'est-ce qu'il égale dans le FJS?

Vous pouvez vérifier vos réponses [ici](solutions.html).

## <a name="da-capo-al-fine">Da Capo Al Fine : Quoi d'autre ?</a>

C'est *tout* dont vous avez besoin pour utiliser le FJS ! Vous pouvez maintenant écrire toute la musique en intonation juste dans le FJS. Le reste du FJS, ce sont des méthodes d'abréviation, y compris des armures FJS et des lignes de transposition, que j'ai créées pour pouvoir éviter d'écrire beaucoup d'altérations dans les cas les plus fréquents. Ces éléments n'apparaissent pas dans ce cours. Si vous voulez apprendre comment les utiliser, lisez la [description formelle complète](rules.html) du FJS, où vous trouverez aussi des règles exactes si vous avez un doute.

À part cela, c'est tout ! Vous avez déjà appris tout le FJS en quelques minutes. Que le FJS soit pour vous une simplification lorsque vous rencontrez l'intonation juste la prochaine fois.

**Fin.**
