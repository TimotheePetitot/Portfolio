# Instructions Front

## Objectifs
Réaliser une fiche d'un produit d'un site marchand en matériel informatique / électronique.

- Faire le code le plus propre possible
- Valider le code sur https://validator.w3.org/ (à minima, pas d'érreur)
- Adopter et utiliser les bonnes pratiques de codage
- Utiliser une nomenclature en CSS
- Utiliser des variables natives CSS
- Ajouter des éléments d'accessibilité (alt dans images / menu focus / outline / roles)
- Créer sa propre font-icon sur IcoMoon App
- Utiliser un sprite (pour les images des options de paiement)
- Combiner du HTML du CSS et du code Javascript pour réaliser les éléments intéractifs réutilisables

## Recommandations
- Utiliser normalize.css
- Utiliser box-sizing: border-box
- Utiliser l'unité rem pour les fonts
- Utiliser des variables CSS
- Structurer la feuille de style avec des commentaires et regrouper les déclaration par ordre d'apparition ET/OU par composant (une classe qui pourrait être réutilisée dans un autre projet)
- Utiliser une nomenclature comme BEM
- Nommer les classes et les ID en anglais
- Utiliser uniquement les ID pour le Javascript et pour les ancres / pas d'ID dans la feuille de style
- Ne pas oublier de liens (utiliser href="#" dans les liens du menu)
- Valider le code sur https://validator.w3.org/ (à minima, pas d'érreur)

## Méthode pour convertir rapidement le texte donné en tableau HTML
Utiliser les expressions régulières dans rechercher/remplacer pour formater rapidement votre tableau HTML.
- rechercher '\n- ' remplacer par '</td></tr>\n<tr><td>'
- rechercher ':\t' remplacer par '</td><td>'

On peut aussi utiliser la sélection multiple

## Charactères UNICODE spéciaux (à copier)
A utiliser dans le champ de recherche et dans le fil d'Ariane: ❯

## Responsive Web Design
Rendre la page responsive pour bureau, tablette et mobile

Points de rupture
- entre mobile et tablette: 480px
- entre tablette et bureau: 960px

## Spécifications

Utiliser des variables CSS à minima pour les valeurs suivantes

### Généralités
- largeur max du container (zone de lecture): 1140px
- taille du texte par défaut: 1.5rem
- taille du texte des titres 1: 3.6rem
- taille du texte des titres 2: 2.4rem
- taille du texte des titres 3: 1.8rem
- hauteur de ligne: 2.0rem

### Fonts
- défaut: Open Sans
- titres: Raleway

### Couleurs
- fond de la page: #eee
- fond des éléments gris: #eee
- fond de l'entête (header) : #0c6588 (+ image de fond)
- fond du menu: #e2f7ff
- fond du contenu principal (main): #fff
- fond du pied de page (footer): #333
- titres: #333
- texte: #555
- texte de l'entête: #e2f7ff
- texte du pied de page: #ddd
- liens / boutons: #0c6588
- liens / boutons survolés: #000
- liens du pied de page: #eee

### Bordures
- sm: 1px solid #eee
- md: 1px solid #ddd
- lg: 2px solid #ccc

### Ombres
- sm: 0 0 1px rgba(0,0,0,0.2)
- md: 0 0 3px rgba(0,0,0,0.3)
- lg: 0 0 5px rgba(0,0,0,0.4)
- xl: 0 10px 20px rgba(0,0,0,0.5)

## Spécial

### Zone de recherche
Placer la zone de recherche dans un formulaire
Ajouter un SELECT avec comme otions les différentes boutiques:
- Ordinateurs
- Péripheriques & composants
- Téléphones
- Objets connectés

### Icônes
La font-icon est à préparer et télécharger sur IcoMoon App. Ne prendre que les icones nécéssaires à la page.
1. Aller sur https://icomoon.io/app/
2. Cliquer le sur le bouton rouge en bas "Add Icons From Library…"
3. Identifier la librarie d'icônes "Linecons", cliquer sur "Add"
4. Sélectionner les icônes présents sur la maquette
5. Cliquer sur "Generate Font" (en bas à droite) puis sur "Download"
6. Intégrer la feuille de style téléchargée via une balise LINK et ajouter aussi le dossier fonts
7. Vérifier/corriger les chemins vers les fonts (dans la feuille de style)

### Images des options de paiement
Utiliser un sprite pour les images des options de paiement

## Accessibilité

### Options d'affichage
Ajout de 4 boutons pouvant modifier le thème (ajout de classes dans l'éléments body)

Thème sombre contrasté avec les valeurs suivantes:
- fond de la page: #222
- fond des éléments gris: #444
- fond du menu: #0c6588
- fond du contenu principal (main): #333
- fond du pied de page (footer): #333
- titres: #fff
- texte: #ddd
- liens / boutons: #e2f7ff
- liens / boutons survolés: #fff
- bordure sm: 1px solid #666;
- bordure md: 1px solid #555;
- bordure lg: 2px solid #444;

Interlignage plus grand:
- taille du texte par défaut: 1.6rem
- line-height: 3.0rem

### Images
Bien ajouter une description complête à cahcune des images

### Menu (focus)
Prévoir un menu d'accessibilité caché mais visible via la touche tab comprenant les liens suivants (ancres):
- Haut de page => cible le haut de la page
- Recherche => cible le champ de recherche
- Mon compte => cible le lien "Mon compte"
- Menu principal => cible le menu
- Sommaire => cible le sommaire (TOC: Table Of Contents) sous le nom du produit

### Outline
Prévoir un contour (outline) de 2px solide noir lors de l'utilisation de la touche tab

# Bonus

## Rôles des éléments principaux (accessibilité)
Ajouter si possible les rôles de chaque éléments importants (attribut role)

https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA/Techniques_ARIA

## Boite de recherche
Ajouter une ombre XL à la boite de recherche quand on la survole ou quand il y a le focus dans un des éléments enfant

## Méga-menu
Réalisation d'un menu déroulant tout en CSS. Utiliser seulement une seule classe CSS

## Décoration des titres
Les points gris à droite des titres de section sont à réalise entièrement en CSS en utilisant ::after et les dégradés

## Keywords
Étiquettes sous la description à réaliser tout en CSS en utilisant :: before et ::after

## Open Graph
Ajouter les méta-données "Open Graph", à minima og:description, og:title, og:image et og:url

https://ogp.me/

## Fenêtre modal
Une classe Javascript permet d'ouvrir et de fermer plusieurs fenêtres sur la même page
- Une fenêtre pour le compte utilisateur (click sur le bouton "Mon compte") => affichage du formulaire de connexion
- Une fenêtre pour le panier (click sur le bouton "Mon panier") => affichage dynamique de la liste des articles du panier (et du nombre d'articles ainsi que le prix total)
- Une fenêtre pour le zoom de l'image du produit (click sur l'image principale) => affichage d'une galerie avec une image encore plus grande

## Galerie intéractive
Une classe Javascript permet d'afficher plusieurs galeries intéractive sur la même page

## Panier
Une classe Javascript permet de configurer un panier:
- Un bouton permet d'afficher le contenu du panier, c'est à dire la liste des articles, leur quantité, leur prix, le total des article et le prix total
- Le bouton "Ajouter au panier" permet d'ajouter plusieurs fois un article au panier
- Le bouton "Ajouter à ma liste d'envie" permet d'ajouter le même article à ladite liste (non visible dans le corrigé)
- L'ajout d'articles au panier déclanche l'affichage d'un badge avec le nombre d'article sur le bouton du panier (le prix total est visible également)
