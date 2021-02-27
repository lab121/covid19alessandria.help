# covid19Alessandria.help

Il progetto Covid19Alessandria.help, ispirato alla piattaforma nazionale Covid19Italia.help, è un progetto no-profit promosso da alcune realtà locali per condividere informazioni utili durante l’emergenza e facilitare l’attivazione di persone ed organizzazioni nella città di Alessandria.

# Come contribuire al progetto

## Linux / Mac 

Clonare il repository 

    $ git clone git@github.com:lab121/covid19alessandria.help.git

Installare hugo di sistema oppure usare il binario già presente

    $ tar vfxz hugo_0.68.3_Linux-64bit.tar.gz

Installare Node.js 

    $ cd /home/work/devel/covid19alessandria.help/themes/bootstrap
    $ npm install
    $ npm run build

Con Docker

    $ docker run --rm -v /path_al_codice/covid19alessandria.help/themes/bootstrap:/user/app -w /user/app node:8 npm install
    $ docker run --rm -v /path_al_codice/covid19alessandria.help/themes/bootstrap:/user/app -w /user/app node:8 npm run build

# Troubleshooting 

In caso di errori con i package rimuovi la dir ``node_modules`` e riesegui install e build step di npm 

## Development server con Hugo ##

Per far partire un server locale per lo sviluppo

    $ hugo server -D 

## Deploy del progetto ##

[WIP]

