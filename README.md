# covidAlessandria.help

Il progetto Covid19Alessandria.help, ispirato alla piattaforma nazionale Covid19Italia.help, è un progetto no-profit promosso da alcune realtà locali per condividere informazioni utili durante l’emergenza e facilitare l’attivazione di persone ed organizzazioni nella città di Alessandria.

# Come contribuire al progetto

## Linux / Mac 

Clonare il repository 

    $ git clone git@github.com:lab121/covid19alessandria.help.git

Installare hugo di sistema oppure usare il binario già presente

    $ tar vfxz hugo_0.68.3_Linux-64bit.tar.gz

Installare Node.js oppure creare una immagine docker in questa maniera ( se si decide per Node.js di sistema bastan installare i pacchetti listati nel file *docker/Dockerfile )

    $ cd docker/
    $ docker build . -t covidale-node-8 

Ad ogni modifica degli stili o Javascript è necessario ricompilarli con node.js.

Con Docker

    $ docker run --rm -v /home/work/devel/covid19alessandria.help/themes/bootstrap:/user/app -w /user/app covidale-node-8 npm run build

Senza Docker 

    $ cd /home/work/devel/covid19alessandria.help/themes/bootstrap
    $ npm run build

## Development server con Hugo ##

Per far partire un server locale per lo sviluppo

    $ hugo server -D 

## Deploy del progetto ##

[WIP]

