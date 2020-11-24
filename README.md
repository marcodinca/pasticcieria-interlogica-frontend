# Progetto pasticcieria interlogica - frontend

Questo progetto è stato creato usando [Angular CLI](https://github.com/angular/angular-cli) versione 11.0.2.

## Come installare - wwwroot

Compreso nel repository è una build del progetto, situata nella cartella dist/interlogica-frontend/
Piazzare i contenuti della cartella interlogica-frontend nel wwwroot del server, poi navigare all'url '[serverUrl]/index.html'

## Come eseguire usando Angular cli

1. Installare i pacchetti node usando il comando 'npm install' nella cartella del progetto (richiede node CLI).

2. Avviare il server angular con il comando 'ng serve' nella cartella del progetto (richiede Angular CLI v11.0.2)

3. Navigare all'url http://localhost:4200 (di default)

Se si desidera buildare la propria versione del progetto, utilizzare il comando 'ng build' nella cartella del progetto

## Come configurare la connessione al Back-end

Nella cartella 'assets' della build è presente il file 'config.json', basta modifcare il suo contenuto con l'indirizzo del server desiderato.

Nota: è necessario avere la dicitura /api/ all fine della path, in questo modo: https://[serverIp/serverUrl]:[porta]/[istanza]/api/
