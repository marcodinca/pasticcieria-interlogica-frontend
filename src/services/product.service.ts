import { Injectable } from '@angular/core';
import { Prodotto } from '../models/Prodotto';
import { Observable } from 'rxjs';
import { Ingrediente } from '../models/Ingrediente';
// @ts-ignore
import config from '../config/config.json';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(public httpClient: HttpClient) { }
  getProdotti(): Observable<any> {
    return this.httpClient.get(`${config.serverUrl}Prodotti`);
  }
  putProdotto(prodotto: Prodotto): Observable<any> {
    return this.httpClient.put(`${config.serverUrl}Prodotti`, prodotto);
  }
  postProdotto(prodotto: Prodotto): Observable<any> {
    return this.httpClient.post(`${config.serverUrl}Prodotti`, prodotto);
  }
  deleteProdotto(id: number): Observable<any> {
    return this.httpClient.delete(`${config.serverUrl}Prodotti/${id}`);
  }
  getIngredienti(): Observable<any> {
    return this.httpClient.get(`${config.serverUrl}Ingredienti`);
  }
  putIngrediente(ingrediente: Ingrediente): Observable<any> {
    return this.httpClient.put(`${config.serverUrl}Ingredienti`, ingrediente);
  }
  postIngrediente(ingrediente: Ingrediente): Observable<any> {
    return this.httpClient.post(`${config.serverUrl}Ingredienti`, ingrediente);
  }
  deleteIngrediente(id: number): Observable<any> {
    return this.httpClient.delete(`${config.serverUrl}Ingredienti/${id}`);
  }
}
