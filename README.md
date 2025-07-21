# Rapport de débogage - React Debug Checkpoint

## Problème 1 : Propriété manquante
### Composant : Child
- Symptôme : `count` affichait "undefined".
- Cause : La prop `count` n'était pas transmise depuis `Parent`.
- Solution : Ajout de `count={count}` dans l'appel du composant `<Child />`.

## Problème 2 : Accès à un état non initialisé
### Composant : Profile
- Symptôme : erreur "Cannot read properties of undefined".
- Solution : Initialiser correctement l’état avec un objet vide.

## Outils utilisés
- React Developer Tools (extension Chrome)
- Console du navigateur
