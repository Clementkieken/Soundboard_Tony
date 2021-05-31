# SOUNDBOARD

## HTML/CSS/JS Clément + Loïc.
La page affichée est écrite en HTML, stylysée en CSS et animée en JS, simplement, comme on l'a vu en cours.

Le JS est assez *simple* dans le sens où quand on clique sur une des différentes images, le son se lance. On ne peut pas (encore) mettre le son en pause ou le remettre au début. Pour arrêter le son ou en lancer un autre : **obligé de refresh la page**.

## HTML/CSS/JS Germain.
Là c'est différent. La page HTML est générée **DANS** le JavaScript. Il y a un bouton "PAUSE" qui annule le son. En plus, quand on clique sur une image alors qu'il y a déjà un son en cours, le premier son s'arrête pour que le deuxième puisse se lancer.

*Franchement j'ai rien bité à son code JS*.

## Lancer l'un ou l'autre script.
Pour lancer le script de Clément + Loïc, il suffit de commenter la ligne 55 de l'HTML afin de le rendre "off".

Pour lancer le script de Germain, il faut commenter la ligne 54 ET de la ligne 23 à 44 comprises de l'HTML.

Par défaut, c'est le JS de Germain qui se lance parce que c'est quand même franchement stylé.