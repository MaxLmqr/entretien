# Description

Écrire un docker-compose qui créé deux containers :

- Une base de données mysql
- un backend express connecté à la base de données.

Test de succès : `curl http://localhost:3000` doit renvoyer `Hello world!`

## Squelette

Un script wait-for-it.sh est fourni. Il permet de savoir lorsqu'une base de données est prête à recevoir une connexion.

On retrouve dans le dossier app un script server.js, qui permet de se connecter à une base de données mysql lorsqu'il est lancé.

```docker-compose.yml
  version: "3.1"
  services:
    db:
      container_name: db
    backend:
      container_name: backend
```
