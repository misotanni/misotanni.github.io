# Sommaire du FJS

Le Système fonctionnel de l'intonation juste (FJS) est un système de notation pour l'intonation juste (JI) qui utilise une extension de la notation traditionelle de portée. Comme la notation de Helmholtz-Ellis ou celle de Johnston, cette extension utilise des altérations additionnelles. Le FJS trouve la représentation **unique** de chaque intervalle JI comme intervalle conventionnel avec des altérations FJS en utilisant un processus automatique.

Les objectifs du FJS :

- Pouvoir convertir des rapports en intervalles et inversement avec un processus automatique, contrairement aux altérations arbitrairement choisies chez Helmholtz-Ellis ou Johnston. Il n'y a pas de symboles arbitraires pour ces altérations ou aucune liste arbitraire de ces altérations. Il est possible de construire tout le FJS à partir de rien, avec une calculatrice ou aussi le calcul mental.
- Pouvoir représenter toute l'intonation juste sans aucun doute, pas seulement jusqu'à une limite fixe (comme la 61-limite chez Helmholtz-Ellis ou la 31-limite chez Johnston) ou jusqu'à une limite de précision (comme Sagittal).
- Être beaucoup plus facile (à lire et à écrire) que les autres systèmes de notation.
- Être optimal pour l'utilisation dans des logiciels de musique puisque toutes ses altérations peuvent être automatiquement construites. 

Le cœur du FJS est **l'algorithme principal** dont l'entrée peut être chaque nombre premier au-delà de 3 et qui utilise une constante appelée **rayon de tolérance** (dont la valeur normale est le moyen géométrique de 33/32 et 32/31, donc $$\sqrt{\frac{33}{31}}$$), pour trouver l'approximation la plus simple de ce nombre premier d'entre les rapports de la 3-limite dans les limites du rayon de tolérance. (*La plus simple* signifie que le **déplacement de quintes**, l'exposant de 3, a une valeur absolue minimale.) La différence devient ainsi un **comma formel** pour ce nombre premier, toujours dans la direction originale, avec le facteur du nombre premier dans le numérateur.

On peut ainsi représenter l'intonation juste :

- Tous les intervalles de la 3-limite reçoivent un intervalle conventionnel, puisqu'il y a une bijection entre l'accord pythagoricien et la notation de portée (voir la [page mathématique](math.html)).
- Pour tous les autres intervalles :
	- Chaque nombre premier n'a qu'un comma formel, avec n'importe quel rayon de tolérance. (Ce comma formel est le résultat de l'algorithme pour ce nombre premier.) Chaque comma formel reçoit deux altérations: une otonale et une utonale.
	- Depuis la 5-limite, on peut représenter chaque rapport JI avec un rapport de la 3-limite multiplié par des nombres appelés nombres ponts avec des entiers relatifs comme exposants et avec exactement un nombre pont pour chaque nombre premier (voir la [page mathématique](math.html)). Un nombre pont est un nombre qui égale 2 avec un entier relatif comme exposant, multiplié par 3 avec un entier relatif comme exposant, multiplié par un autre nombre premier avec +1 comme exposant.
	- Chaque comma formel est un nombre pont, puisqu'ils sont tous une différence entre un nombre premier et un rapport de la 3-limite.
	- Ainsi, chaque intervalle au-delà de la 3-limite peut être représenté comme un rapport de la 3-limite (qui correspond a un intervalle conventionnel) multiplié par des commas formels (qui ont des altérations FJS) avec des entiers relatifs comme exposants.

L'algorithme principal du FJS trouve deux valeurs pour chaque nombre premier : le déplacement de quintes et le comma formel. Bien que les deux soient utiles pour une description complète, il vous faut seulement une pour pouvoir calculer l'autre sans utiliser l'algorithme ou le rayon de tolérance (voir la [description formelle](math.html)).

Vous voyez ici l'algorithme principal du FJS.

> 1. Entrez le nombre premier. Nommez-le *p*.
> 2. Soit *k* = 0.
> 3. Considérez l'intervalle construit de *k* quintes pythagoriciennes. Nommez-le *P*.
> 4. Est-ce que la différence entre *p* et *P* s'élève à moins que le rayon de tolérance ?
> 5. Si oui, *k* égale le déplacement de quintes. Fin.
> 6. Si non, avancez au *k* suivant dans la séquence : (0, 1, −1, 2, −2, 3, −3, …), et retournez à l'étape 3.
>
> Dans l'étape 4, la différence dont on parle, c'est la **valeur absolue** du nombre de cents de la différence entre les octaves de *p* et *P* choisies pour que cette différence soit minimale. Il y a une explication plus détaillée dans la [description formelle](math.html).
