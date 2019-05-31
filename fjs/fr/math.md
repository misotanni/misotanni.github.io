# Les mathématiques du FJS

Cette page contient des théorèmes mathématiques dont la vérité est nécessaire pour garantir que le FJS fonctionne avec toutes ces qualités dont j'ai parlé, mais qui n'apparaissent pas du tout hors FJS. La plupart des mathématiques sur cette page est une grande mission pour prouver que le FJS a une bijection (que chaque représentation FJS correspond à un seul rapport JI et inversement).

## Théorème 1

**Pour additionner deux intervalles on multiplie ses rapports.**

Considérez trois fréquences:

$$f_1, f_2, f_3$$

Considérez qu'elles forment deux intervalles adjacents:

$$d_{1,2}=\frac{f_2}{f_1}, d_{2,3}=\frac{f_3}{f_2}$$

La somme de ces intervalles est définie comme:

$$d_{1,3}=\frac{f_3}{f_1}$$

Ce qui égale aussi:

$$\frac{f_3}{f_1}=\frac{f_2 \cdot f_3}{f_1 \cdot f_2}=\frac{f_2}{f_3} \cdot \frac{f_1}{f_2}=d_{1,2} \cdot d_{2,3} \quad \blacksquare$$

**Corollaire.** La différence entre deux intervalles est un quotient des rapports.

## Théorème 2

**Chaque nombre rationnel positif peut être factorisé en nombres premiers dont les exposants sont des entiers relatifs.** («Théorème fondamental de l'harmonie»)

Pour la démonstration, nous commençons avec le théorème fondamental de l'arithmétique, donc la faculté de factoriser chaque entier positif en nombres premiers dont les exposants sont des entiers naturels. La notation p⁡(*n*) signifie ici le *n*-ième nombre premier, donc $$\text{p}(1)=2$$.

$$\displaystyle a=\prod_{i=1}^{n} \text{p}(i)^{\alpha _i}, a\in \mathbb{Z}_+, n, \alpha _i \in \mathbb{N}$$

Considérez un intervalle en intonation juste, qui peut alors être représenté comme quotient de deux entiers positifs. Factorisez les deux en utilisant le théorème fondamental de l'arithmétique.

$$\frac{a}{b}=\frac{\prod_{i=1}^{n} \text{p}(i)^{\alpha _i}}{\prod_{j=1}^{m} \text{p}(j)^{\beta _j}}$$

Considérez maintenant $$t=\text{max}(n,m)$$ et rallongez au plus un de ces produits jusqu'à la longueur *t*, en multipliant par des nombres premiers avec un exposant de zéro. Puis, simplifiez.

$$\frac{a}{b}=\frac{\prod_{i=1}^{t} \text{p}(i)^{\alpha _i}}{\prod_{j=1}^{t} \text{p}(j)^{\beta _j}}=\prod_{k=1}^{t} \text{p}(k)^{\gamma _k}$$

Grâce au théorème fondamental de l'arithmétique, les exposants sont maintenant des différences de deux entiers naturels. Ces différences ne sont pas toujours des entiers naturels, mais elles sont toujours des entiers relatifs. Donc il n'y a qu'une seule représentation de chaque intervalle en intonation juste dans ce format, est la proposition est vraie. $$\blacksquare$$

## Théorème 3

**Soient *p*, *q* deux nombres premiers différents. Dans ce cas $$p^n\neq q^m$$ pour tous entiers relatifs *n*, *m* qui ne sont pas zéro.**

Nous utilisons la démonstration par l'absurde. Supposons que oui, il y a deux nombres premiers différents *p*, *q* et deux entiers relatifs *n*, *m* pour lesquels:

$$p^n=q^m$$

Les nombres *p*, *q* sont déjà premiers, donc ce sont déjà leurs factorisations d'après le théorème fondamental de l'arithmétique.

C'est une contradiction tout de suite, parce que le théorème fondamental de l'arithmétique dit que la factorisation de chaque entier positif doit être unique, et ici nous avons deux factorisations différentes du même entier positif. Ce n'est pas une contradiction seulement si *n*, *m* sont zéro (on a alors le nombre 1), mais c'est une contradiction contre la supposition que les deux entiers relatifs ne sont pas zéro. $$\blacksquare$$

**Corollaire.** Pour *p* = 2, *q* = 3, nous obtenons la proposition à propos des octaves et douzièmes (quintes) justes. Cela signifie qu'il n'y pas de cycle de quintes justes 3/2.

## Théorème 4

**Il y a une bijection entre l'accord pythagoricien et la notation de portée.**

Considérez l'échelle diatonique sur Do, arrangée par quintes:

Fa, Do, Sol, Ré, La, Mi, Si

Cela est un fragment d'une ligne de quintes centrée sur Ré:

−3, −2, −1, 0, +1, +2, +3

Ces entiers relatifs signifient le nombre de quintes autour de cette spirale infinie de quintes; les nombres positifs signifient l'addition de quintes, et les nombres négatifs en signifient la soustraction.

Mais remarquez que nous savons déjà comment étendre cette chaîne. Le dièse et le bémol sont définis comme altérations qui causent les identités: Si♭–Fa = Si–Fa♯ = quinte juste. Lorsqu'on ajoute une copie diésée et bémolisée de l'échelle diatonique, on obtient une chaîne jusqu'à −10 à gauche et +10 à droite:

Fa♭, Do♭, Sol♭, Ré♭, La♭, Mi♭, Si♭, Fa, Do, Sol, Ré, La, Mi, Si, Fa♯, Do♯, Sol♯, Ré♯, La♯, Mi♯, Si♯

−10, −9, −8, −7, −6, −5, −4, −3, −2, −1, 0, +1, +2, +3, +4, +5, +6, +7, +8, +9, +10

L'utilisation des double-dièses et double-bémols étendra la chaîne jusqu'à 17, les triples l'étendront jusqu'à 24, etc.

*La chaîne ne formera jamais un cycle*, ce qui nous avons prouvé dans le troisième théorème. Elle est alors infinie dans les deux directions, donc chaque note correspondera à un entier relatif, qui lui-même correspond à un nombre de quintes 3/2. $$\blacksquare$$

**Corollaire.** Chaque rapport pythagoricien correspond à exactement un type d'intervalle conventionnel, de la même manière que le FJS les associe.

## Théorème 5

**Définition:** Un *nombre pont* pour un nombre premier *p* est un nombre de la forme $$2^a\cdot 3^b\cdot p$$ où *p* est un nombre premier au-delà de 3 et *a*, *b* sont des entiers relatifs.

**Théorème: Pour chaque liste infinie de nombres ponts connus, exactement un nombre pont pour chaque nombre premier, on peut représenter chaque interval JI d'une seule façon comme le produit d'un intervalle pythagoricien et des nombres ponts dont les exposants sont des entiers relatifs.** (Théorème fondamental du FJS)

Nous utilisons la récurrence, avec *p* = 5 pour l'initialisation.

Soit $$C_p=2^{a_p}\cdot 3^{b_p}\cdot p$$ le nombre pont choisi pour le nombre premier *p* avec des entiers relatifs particuliers *a*<sub>*p*</sub>, *b*<sub>*p*</sub>. C'est un intervalle arbitraire mais connu.

Pour l'initialisation, considérez un nombre pont connu pour 5: $$C_5=2^{a_5}\cdot 3^{b_5}\cdot 5$$, et un intervalle JI du 5-limite avec une factorisation unique connue: $$d=2^{\alpha _2} \cdot 3^{\alpha _3} \cdot 5^{\alpha _5}$$.

$$d=2^{\alpha _2} \cdot 3^{\alpha _3} \cdot 5^{\alpha _5}$$

$$d=2^{\alpha _2 + \alpha_5 a_5 - \alpha_5 a_5} \cdot 3^{\alpha _3 + \alpha_5 b_5 - \alpha_5 b_5} \cdot 5^{\alpha _5}$$

$$d=2^{\alpha _2 - \alpha_5 a_5} \cdot 2^{\alpha _5 a_5} \cdot 3^{\alpha _3 - \alpha_5 b_5} \cdot 3^{\alpha _5 b_5} \cdot 5^{\alpha _5}$$

$$d=(2^{a_5} \cdot 3^{b_5} \cdot 5)^{\alpha _5} \cdot 2^{\alpha _2 - \alpha_5 a_5} \cdot 3^{\alpha _3 - \alpha_5 b_5}$$

$$d=(C_5)^{\alpha _5} \cdot 2^{\alpha _2 - \alpha_5 a_5} \cdot 3^{\alpha _3 - \alpha_5 b_5}$$

Cela est une représentation unique comme un rapport pythagoricien, donc un rapport dans le 3-limite dont les exposants sont des entiers relatifs, multiplié par le nombre pont pour 5 dont l'exposant, lui, est aussi un entier relatif. L'initialisation est complète.

Pour l'hérédité, on suppose la vérité pour $$\text{p}(n)$$ et prouve que cela garantit la vérité pour $$\text{p}(n+1)$$.

Soit *g* un intervalle JI avec des facteurs jusqu'à $$\text{p}(n+1)$$ (inclu). Cela signifie qu'il peut être factorisé en nombres premiers jusqu'à ce nombre premier:

$$\displaystyle g=\prod_{i=1}^{n+1} \text{p}(i)^{\alpha _{\text{p}(i)}}$$

Triez le produit et nommez $$\text{p}(n+1)$$ tout simplement *q*:

$$\displaystyle g=\prod_{i=1}^n \text{p}(i)^{\alpha _{\text{p}(i)}} \cdot q^{\alpha _q}$$

Grâce à l'hérédité, on peut maintenant tout de suite représenter le produit à gauche avec des nombres ponts. Ici, *x*, *y* sont des entiers relatifs arbitraires dûs à la conversion en nombres ponts jusqu'à $$\text{p}(n)$$.

$$\displaystyle g=(2^x \cdot 3^y \cdot \prod_{i=3}^n (C_{\text{p}(i)})^{\alpha _{\text{p}(i)}}) \cdot q^{\alpha _q}$$

Écrivons γ pour le produit des nombres ponts, on obtient alors:

$$g=2^x \cdot 3^y \cdot \gamma \cdot q^{\alpha _q}$$

Considérez maintenant un nombre pont connu pour *q*: $$C_q=2^{a_q}\cdot 3^{b_q}\cdot q$$. Nous récrivons donc *g* en fonction de ce nombre pont.

$$g=\gamma \cdot 2^x \cdot 3^y \cdot q^{\alpha _q}$$

$$g=\gamma \cdot 2^{x + \alpha _q a_q - \alpha _q a_q} \cdot 3^{y + \alpha _q b_q - \alpha _q b_q} \cdot q^{\alpha _q}$$

$$g=\gamma \cdot 2^{x - \alpha _q a_q} \cdot 2^{\alpha _q a_q} \cdot 3^{y - \alpha _q b_q} \cdot 3^{\alpha _q b_q} \cdot q^{\alpha _q}$$

$$g=\gamma \cdot (2^{a_q} \cdot 3^{b_q} \cdot q)^{\alpha _q} \cdot 2^{x - \alpha _q a_q} \cdot 3^{y - \alpha _q b_q}$$

$$g=\gamma \cdot (C_q)^{\alpha _q} \cdot 2^{x - \alpha _q a_q} \cdot 3^{y - \alpha _q b_q}$$

Nous remplaçons γ et *q*:

$$g=2^{x - \alpha _q a_q} \cdot 3^{y - \alpha _q b_q} \cdot \prod_{i=3}^n (C_{\text{p}(i)})^{\alpha _{\text{p}(i)}}) \cdot (C_{\text{p}(n+1)})^{\alpha _{\text{p}(n+1)}}$$

$$g=2^{x - \alpha _q a_q} \cdot 3^{y - \alpha _q b_q} \cdot \prod_{i=3}^{n+1} (C_{\text{p}(i)})^{\alpha _{\text{p}(i)}}$$

Cela est une représentation unique de l'intervalle JI avec des facteurs jusqu'à $$\text{p}(n+1)$$ en fonction des facteurs jusqu'à $$\text{p}(n)$$. L'hérédité est complète.

Puisque la proposition est aussi vraie pour l'initialisation $$\text{p}(n)=5$$, elle est alors vraie pour tous les nombres premiers au-delà de 3 grâce au principe de la récurrence. $$\blacksquare$$

**Corollaire.** Puisqu'un comma formel est toujours un nombre pont, pour chaque liste de commas formels – un comma pour chaque nombre premier – on peut représenter chaque rapport JI d'une seule façon comme rapport pythagoricien multiplé par des commas formels dont les exposants sont des entiers relatifs. Le FJS fait exactement cela.
