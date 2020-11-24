import {Ingrediente} from './Ingrediente';

export interface Prodotto {
  id: number;
  nome: string;
  descrizione: string;
  prezzo: number;
  prezzoAttuale: number;
  sconto: number;
  immagine: string;
  ingredienti: Array<Ingrediente>;
  dataProduzione: Date;
}
