# Description

Le fichier Dockerfile doit être modifié

## Run instructions

Construire l'image :

    docker build -t testimage .

Parametrer une variable d'environnement `myhost` :

    docker run -e myhost=host1 testimage

Résultat attendu :

    host1

Lancer sans parametrer la variable d'environnement :

    docker run testimage

    testhost
