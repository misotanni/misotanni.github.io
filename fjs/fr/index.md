﻿---
title: Le Système fonctionnel de l'intonation juste
---

> *L'avantage d'une langue bien construite est que sa notation simplifiée est souvent la source des théories profondes.*
>
> — Pierre-Simon Laplace

---

<img src="../assets/index/impression.svg" alt="Voici le FJS !">

# Bienvenue

Bienvenue sur le site Internet du Système fonctionnel de l'intonation juste (FJS) !

## Qu'est-ce que le FJS ?

[Regardez l'introduction en vidéo !](https://youtu.be/38I3cylJlW4)

Le **Système fonctionnel de l'intonation juste** (en anglais : Functional Just System, **FJS**) est un nouveau système de notation pour la musique en **intonation juste** (en anglais : Just Intonation, **JI**). Il est basé sur une augmentation de la notation contemporaine de la portée pour pouvoir exprimer toutes les formes possibles de l'intonation juste. Il dépasse les autres systèmes de notation actuels en ce qui concerne la simplicité, l'ingéniosité et la beauté (y compris la notation Helmholtz-Ellis et la notation de Ben Johnston). Dans le domaine de la musique microtonale, le FJS est l'invention dont je suis le plus fier.

Le Système fonctionnel de l'intonation juste :

- permet de **traduire** les proportions pures de l'intonation juste dans la langue universelle de tous les musiciens : la notation de portée, et inversement ;
- est **extrêmement facile** à apprendre à lire et à écrire ; sa simplicité dépasse de beaucoup celle des autres notations de l'intonation juste ;
- fournit une **bijection** entre la notation et le son, chaque ton n'a qu'une seule représentation, et peut donc être écrit et lu sans équivoque ;
- peut représenter **toute l'infinité** de l'intonation juste, pas seulement jusqu'à une limite fixe, et ainsi exprime des tons que les autres notations de l'intonation juste **ne peuvent pas exprimer** ;
- a une **précision infinie**, cela signifie que la hauteur absolue est préservée ;
- est géré par un **algorithme** et généré de **manière procédurale**, et de cette façon est adapté à l'utilisation dans la musique assistée par ordinateur, et peut être complètement automatisé, sans apprendre de nombres par cœur ou devoir les chercher. (Il y a plusieurs calculatrices sur ce site à cet usage.)

## Qu'est-ce que l'intonation juste ?

Si vous vous posez cette question, vous n'êtes probablement pas au bon endroit !

La majorité de la musique contemporaine utilise le **tempérament égal de douze notes** (aussi appelé tout simplement « tempérament égal ») qui divise l'octave en douze parties égales. **L'intonation juste** (**JI**) est une méthode d'intonation qui est très différente de ce courant dominant. Les principes de l'intonation juste proviennent des tons harmoniques et des qualités naturelles du son. Bien que JI ne soit plus utilisée dans la musique conventionnelle, elle reste importante pour la théorie de la musique, puisqu'elle était habituelle dans les cultures anciennes et au Moyen Âge, et elle est encore utilisée dans les cultures non européennes ainsi que dans la musique d'avant-garde. (Sans parler de ses valeurs esthétiques !)

Il est essentiel que vous ayez déjà une connaissance basique de l'intonation juste (et bien sûr un peu de théorie de la musique) pour pouvoir comprendre et effectivement utiliser le FJS. En général, **plus d'expérience** avec JI signifie **plus d'aisance** avec le FJS.

## Le FJS est-il simple ?

Il n'y a que sept règles pour tout ce dont on a besoin pour écrire toute l'intonation juste dans le FJS. C'est vrai, seulement sept.

1. Toutes les notes avec des altérations conventionnelles représentent l'accord pythagoricien. Toutes les octaves signifient 2/1 et toutes les quintes justes signifient 3/2.

2. Tous les intervalles premiers au-delà de 3/2 (donc 5/4, 7/4, 11/8, etc.) reçoivent une approximation pythagoricienne selon l'algorithme principal du FJS. L'algorithme trouve l'approximation la plus simple dans les limites d'une constante appelée rayon de tolérance. La différence entre eux reçoit une altération associée avec ce nombre premier. Le symbole pour cette altération est le nombre premier lui-même.

3. Toutes les altérations du FJS sont positives quand l'approximation pythagoricienne d'un intervalle premier devient l'intervalle premier lui-même. Cela signifie que le positif n'est pas toujours ascendant et le négatif n'est pas toujours descendant ; le positif est toujours otonal et le négatif est toujours utonal.

4. Les altérations du FJS peuvent être combinées. On multiplie les parties otonales, et on multiplie les parties utonales. Par exemple : +25 signifie un double +5. L'otonal et l'utonal sont toujours séparés. Lorsque les nombres deviennent trop grands, on peut écrire aussi des facteurs séparés par des virgules.

5. Pour nommer les notes, on écrit premièrement la partie conventionnelle du nom, puis l'altération positive combinée comme indice supérieur, puis la négative comme indice inférieur.

6. Pour écrire les notes sur la portée, on écrit d'abord l'altération positive combinée (s'il y en a), puis l'altération négative combinée (s'il y en a) avec une barre, puis les altérations conventionnelles, puis la note.

7. Tout le reste sont des abréviations.

## FAQ : Y a-t-il un FAQ ?

[Il y en a !](faq.html)

## Quoi maintenant ?

- Vous trouvez ici un [cours intensif](crash.html) du FJS. Avec une connaissance médiocre de JI, il ne faut que quelques minutes pour apprendre le FJS.
- Lisez un [sommaire](summary.html) du système entier.
- Lisez la [description formelle complète](rules.html) si vous avez un doute en ce qui concerne les règles exactes.
- Ici, je [compare](compare.html) le FJS à deux autres systèmes de notation en compétition : celui de Helmholtz-Ellis et celui de Ben Johnston, et j'explique pourquoi le FJS dépasse les deux.
- Utilisez les [calculatrices](calc.html) sur ce site pour faire des calculs FJS automatiquement. **Conseil :** Sauvegardez-les tout de suite.
- Trouvez beaucoup plus d'[exemples](examples.html) du FJS en usage.

<audio controls><source src="../assets/index/impression.mp3" type="audio/mpeg"></audio>
