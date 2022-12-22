[![forthebadge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ronald-fonlebeck)
[![forthebadge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://forthebadge.com)
[![forthebadge](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://forthebadge.com)
[![forthebadge](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](#)
[![forthebadge](https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue)](#)

## README :

### Projet :

Petit projet de gestion de l'authentification - formulaire d'inscription et de connexion.

L'idée est de créer un formulaire qui rassemble différentes bonnes pratiques que j'ai pu voir lors de ma monté en compétence sur le développement web ou de lecture d'articles - tout ne sera donc pas parfait et je reste ouvert aux conseils d'amélioration.

### Architecture du projet :

Architecture MVC

Insérer l'image de l'infra

### Outils :

- Sequelize pour les échanges avec la base de données.
- Docker pour exécuter les containers nécessaires.
- PostgresSQL pour le stockage des données de l'application.
- MongoDB pour le stockage des sessions.
- Bcrypt pour le chiffrage des mots de passe.
- Joi pour la validation des données ( pour le formulaire d'inscription ).
- NodeMailer pour l'envoi de mail ( notification de validation d'inscription ).

### Prérequis :

```
git@github.com:RonaldFK/authentification.git
```

### Installer les dépendances :

```bash
npm i
```

### Création des tables de la base de données :

Utilise le script /data/initDb.sql

### Démarré le projet

```
npm start
```
