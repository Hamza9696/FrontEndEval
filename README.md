# Evaluation pratique du module IHM Web

Dans cette évaluation, vous allez mettre en oeuvre et un projet d'application frontend de gestion de clients et de factures destiné aux indépendants et aux commerçants.

## Conseils pour le développement

Dans le dossier `cypress/integration` vous trouverez les tests fonctionnels détaillés qui expriment les éléments que l'on doit pouvoir trouver sur la page et les dynamismes attendus ainsi que les URLs qui doivent exister dans votre système de navigation.

Vous pouvez lancer la procédure de tests fonctionnels grâce à `npm run cy:open` (ou `npm run cy:run` pour lancer les tests sans ouvrir de navigateur autoguidé et rester dans la console).

**Attention : dans le fichier `utils.js` de Cypress, prenez soin de faire matcher la variable BASE_URL avec celle que vous choisissez pour ouvrir l'application dans le navigateur ! Changez aussi les informations relatives à SUPABASE**

Ces tests sont par défaut en mode _watch_, ce qui veut dire que vous pouvez développer tout en gardant les tests ouverts et constater de votre avancée dessus.


