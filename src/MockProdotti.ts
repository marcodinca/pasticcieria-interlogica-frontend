import { Prodotto } from './models/Prodotto';

export const Prodotti: Prodotto[] = [
  {
    id: 0,
    nome: 'Torta al cioccolato',
    descrizione: 'mazonna che buona! Questa è una descrizione molto lunga che se non viene troncata non saprò cosa fare!!!!',
    prezzoPieno: 100,
    prezzoAttuale: 80,
    sconto: 20,
    immagine: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftorte.roma.it%2Fwp-content%2Fgallery%2Frealizzazioni%2Fchocolate-ganache-torte-3.jpg&f=1&nofb=1',
    ingredienti: [
      {
        id: 0,
        nome: 'Farina',
        quantita: 100,
        um: 'gr'
      },
      {
        id: 1,
        nome: 'Magia',
        quantita: 20,
        um: 'cl'
      }
    ],
    dataProduzione: new Date()
  },
  {
    id:1,
    nome: 'Torta al limone',
    descrizione: 'meh!',
    prezzoPieno: 100,
    prezzoAttuale: 20,
    sconto: 80,
    immagine: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FjI5nHlnARvU%2Fmaxresdefault.jpg&f=1&nofb=1',
    ingredienti: [
      {
        id: 0,
        nome: 'Farina',
        quantita: 100,
        um: 'gr'
      },
      {
        id: 1,
        nome: 'Schifo',
        quantita: 20,
        um: 'cl'
      }
    ],
    dataProduzione: new Date()
  },
];
