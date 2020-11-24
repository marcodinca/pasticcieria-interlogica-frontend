# Progetto pasticcieria interlogica - frontend

Questo progetto è stato creato usando [Angular CLI](https://github.com/angular/angular-cli) versione 11.0.2.

## Come eseguire/publicare l'applicazione

1. Installare i pacchetti node usando il comando 'npm install' nella cartella del progetto (richiede node CLI).

2. Prima di eseguire/pubblicare l'applicazione, impostare l'url del server backend nel file ./src/assets/config.json, con la seguente pattern: https://[serverUrl]:[porta]/[istanzaIIS]/api/

3a. Se si desidera avviare l'applicazione utilizzando Angular serve, avviare il server angular con il comando 'ng serve' nella cartella del progetto (richiede Angular CLI v11.0.2), dopodichè navigare all'url localhost:4200

3b. Se si desidera pubblicare l'applicazione per poi accedervi tramite un webserver, eseguire il comando 'ng build' nella cartella del progetto (richiede Angular CLI v11.0.2), la build verrà creata nella cartella ./dist/interlogica-frontend/
