# Questions fréquemment posées

<style>h2 { font-weight: normal; font-size: 100%; }</style>

## Est-ce que le FJS peut être utilisé pour écrire des gammes tempérées ?

La réponse courte : non.

L'intonation juste – donc aussi le FJS – compte sur la simplicité absolue de la manipulation des fractions. Le niveau de mathématiques obligatoire pour pouvoir comprendre la théorie de JI ne dépasse pas celui du collège – pas de logarithmes, racines, et absolument pas d'intégrales ! (On n'a besoin que de logarithmes pour calculer des nombres de cents pour des intervalles, ce qui est lui-même une commodité plutôt qu'une partie du système.) Vous pouvez donc calculer la plupart mentalement, et transférer le reste à votre calculatrice de quatre fonctions, sans vous rendre compte qu'elle a une touche pour des racines carrées.

De l'autre côté, le tempérament égal est basée sur une division égale de l'octave (dans la plupart des cas). Mais ne généralisez pas trop vite ; 1200¢ / 12 = 100¢ pourrait sembler trop simple, mais n'oubliez pas que les cents, ce ne sont pas qu'une représentation des proportions entre fréquences. Et pendant que la majorité d'entre nous veut arrêter avec la théorie ici, dès que vous voulez convertir ces cents prétendument purs en rapports de fréquences, vous devez pousser tout cela dans une fonction exponentielle qui vous donnera des résultats irrationnels pour (presque) toutes les entrées rationnelles. Inversement, le ton pur et aimable d'une quinte juste (selon la définition d'une oreille musicale), qui est aussi important que toute l'harmonie moderne est basée sur lui, a un nombre de cents irrationnel : 701.95500086…¢, dont le tempérament égal fournit une approximation plus ou moins brute. (Cela ne signifie pas que le tempérament égal est mauvais, mais que l'essai de l'introduire dans un cadre JI causerait un chaos absolu.)

En raison de cela, je ne crois pas qu'un tempérament égal ait besoin d'un FJS. Pour un choix de *n* assez petit, un *n*-EDO peut être noté complètement sans aucun trou si les tons et les altérations sont bien définis. Pour un *n* un peu plus grand, définissez plus d'altérations ; pour un *n* d'environ 100, ou lorsque vous voulez une liberté absolue, vous pouvez [adapter](http://musictheory.zentral.zone/huntsystem1.html) des [autres](http://sagittal.org/) systèmes (ou inventer une nouvelle portée et une notation complètement différente…)

Avec n'importe quelle méthode, vous verriez que le FJS vous n'aiderait pas du tout… sauf si vous voulez construire une intonation de Frankenstein.

## Le tableau des déplacements et des commas formels, il est où ?

Vous n'en avez pas besoin ! Les [calculatrices](calc.html) servent à cela.

## Pourquoi est-ce que 3/2 est le seul intervalle implicite ? Pourquoi pas 5/4 par exemple ?

J'ai examiné ce sujet à la page de la [comparaison](compare.html).

## Pourquoi est-ce que le rayon de tolérance égale 65/63 ?

Il y a une explication courte dans le [cours intensif](crash.html). L'important pour moi, c'était d'avoir un rayon de tolérance plus grand que 33/32 mais plus petit que 32/31. Pourquoi donc 65/63 en particulier ? 65/63 est la médiante de ces deux nombres, ainsi, c'est le nombre le plus simple entre eux. Mais en fait, pour longtemps, le rayon de tolérance était leur moyenne géométrique : la racine carrée de 33/31. Je remercie Kite Giedraitis, le créateur de la [notation de couleurs](http://tallkite.com/), pour me montrer cette possibilité beaucoup plus simple. La différence est si petite que l'on ne remarquera rien ; 35617 est le nombre le plus petit entre les nombres premiers influencés (auparavant 2m<sup>35617</sup>, maintenant 1+<sup>35617</sup>). En ce qui concerne les cents : auparavant le rayon avait 54.1**1**868538…¢, alors que maintenant, 54.1**0**546743…¢.

Le rayon de tolérance avait eu beaucoup d'autres formes encore plus bizarres dans l'histoire du FJS… y compris 256/243, et même la racine carrée de 256/243 (beurk !). Mais chacun de ces nombres avait eu sa rationalisation. Cependant, je ne crois pas qu'il soit possible d'avoir un rayon plus rational que 65/63 (excusez le jeu de mots).

## Pourquoi est-ce que 4<sup>11</sup> au lieu de 4+<sup>11</sup> est la représentation de 11/8 ?

Je suis conscient que cela semble controversé, puisque les compositeurs JI ont de nombreuses opinions sur la notation optimale du onzième harmonique (en particulier, vu que le FJS n'utilise aucune altération de quart de ton). Mais je suis aussi innocent : ce n'était pas mon choix. En fait, il est **impossible** que 11/8 ait la représentation 4+<sup>11</sup> avec n'importe quel rayon de tolérance. Ceci est dû au fait que 4/3 (la quarte juste) est meilleure que 729/512 (la quarte augmentée) en *deux* aspects : premièrement, elle est plus proche (53.27…¢ au lieu de 60.41…¢), et deuxièmement, elle est plus simple (déplacement de −1 au lieu de +6). Donc, si l'on utilise un rayon de tolérance qui accepte la quarte augmentée comme approximation de 11/8, le même rayon va aussi accepter la quarte juste, et va choisir cette dernière, parce qu'elle est plus simple. C'est tout simplement la façon dont l'algorithme marche. (D'ailleurs, si l'on rejette la quarte juste, l'approximation la plus proche serait la quinte diminuée : ça, nous ne le voulons pas du tout.)

## Pourquoi s'en préoccuper si je peux définir tous les tons au-dessus d'une partition ?

Bien sûr que vous le pouvez, mais certaines choses vous manqueront :

- pouvoir moduler dans chaque tonalité quand vous voulez, sans devoir changer l'interpretation des notes ou écrire des annotations lourdes et verbeuses ;
- pouvoir noter tout dans un seul système : avec le FJS ; il ne faut que quelques symboles supplémentaires pour pouvoir noter *toute* l'intonation juste dans le même système, ce qui vous donnera plus d'intuition et une compréhension plus forte des raccourcis mentaux du FJS (et de JI) ;
- une arithmétique préservée – les intervalles sont encore aussi sages qu'avant, ce qui n'est pas toujours le cas si vous associez vos rapports JI à des notes par hasard ;
- la pensée en FJS – chez les autres systèmes de notation, on ne transforme les rapports JI en notes que pour les représenter sur la portée, pour toute la pensée, on doit donc retransformer en rapports, ce qui n'est pas le cas dans le FJS qui est ainsi beaucoup plus rapide et plus simple – comme l'addition de deux nombres binaires au lieu de les transformer en nombres décimaux et puis la somme de retour en nombre binaire ;
- pouvoir lire à vue, n'importe quelle partition.

Si tout cela vous n'intéresse pas, il est possible que le FJS ne soit pas le bon choix pour vous. Néanmoins, je conseille que vous lui donniez une chance.

## Qu'est-ce que cette intonation juste ou accord naturel dont vous êtes tellement préoccupé ? Est-ce que c'est une chose du New Age ?

Non.

L'intonation juste, ce sont des mathématiques. C'est aussi une théorie des fréquences, basée sur des qualités du son scientifiquement examinées. C'est aussi un genre de musique qui utilise ces relations pour la base de sa palette chromatique, au lieu d'une division de l'octave ou quelque chose d'autre. Le FJS est un système formel pour mieux comprendre ces relations acoustiques présentes dans JI.

En revanche, New Age n'est ni une science ni une théorie. Donc il vous vaudrait peut-être mieux de rechercher ces « sciences » et « théories » comme [cet](https://attunedvibrations.com/432hz/) accord alternatif qui est « mathématiquement en harmonie avec l'univers »… Ou peut-être non.
