[![forthebadge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ronald-fonlebeck)
[![forthebadge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://forthebadge.com)
[![forthebadge](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://forthebadge.com)
[![forthebadge](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

[![forthebadge](https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue)

## README :

### Projet :

Petit projet de gestion de l'authentification.

Chaque utilisateur cherche à connaitre les accès auxquels il aura droit pour un concert. Pour ce faire, il doit créer un compte, se connecter et à ce moment sera listé ses accès.

- La base de données utilisée est Postgres SQL version 14 dans un container docker.
- J'utilise Bcrypt ici pour chiffrer et décrypter le mot de passe.
- Pour les échanges avec la base de données, j'utilise Sequelize.

### Prérequis :

```
git@github.com:RonaldFK/authentification.git
```

### Installer les dépendances :

```bash
npm i
```

Cela installera Express, dotenv, sequelize, bcrypt et EJS..

### Installer les dépendances :

Utilise le script /data/initDb.sql

### Démarré le projet

```
npm start
```
