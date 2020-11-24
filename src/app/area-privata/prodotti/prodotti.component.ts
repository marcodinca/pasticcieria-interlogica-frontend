import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder} from '@angular/forms';
import {Ingrediente} from '../../../models/Ingrediente';
import {ProductService} from '../../../services/product.service';
import {Prodotto} from '../../../models/Prodotto';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {
  modal;
  form;
  prodotti: Array<Prodotto>;
  ingredientiAggiunti: Array<Ingrediente> = [];
  ingredienti: Array<Ingrediente>;
  showNewIngredient = false;
  ingredienteInAggiunta: Ingrediente = { id: 0, nome: '', um: '', quantita: 0 };
  constructor(public modalService: NgbModal,
              public formBuilder: FormBuilder,
              public productService: ProductService) {
    this.getProdotti();
    productService.getIngredienti().subscribe(result => {
      this.ingredienti = result;
    });
  }

  ngOnInit(): void {
  }

  openAddModal(modal): void {
    this.form = this.formBuilder.group({
      nome: '',
      descrizione: '',
      prezzo: 0,
      immagine: ''
    });
    this.modal = this.modalService.open(modal, {size: 'xl'});
  }
  openEditModal(modal, i: Prodotto): void {
    this.form = this.formBuilder.group({
      id: i.id,
      nome: i.nome,
      descrizione: i.descrizione,
      prezzo: i.prezzo,
      immagine: i.immagine
    });
    this.ingredientiAggiunti = i.ingredienti;
    this.modal = this.modalService.open(modal, {size: 'xl'});
  }
  getProdotti(): void {
    this.productService.getProdotti().subscribe(result => {
      this.prodotti = result;
    });
  }
  changeIngredienteInAggiunta(event): void {
    this.ingredienteInAggiunta = this.ingredienti.find(i => i.id == event.target.value);
  }
  updateQuantitaIngredienteInAggiunta(event): void {
    this.ingredienteInAggiunta.quantita = Number(event.target.value);
  }
  addIngredient(): void {
    this.showNewIngredient = false;
    console.log(this.ingredienteInAggiunta);
    if (!this.ingredienteInAggiunta.nome) {
      this.ingredienteInAggiunta = {id: 0, nome: '', um: '', quantita: 0};
      return;
    }
    if (this.ingredientiAggiunti.find(i => i.nome == this.ingredienteInAggiunta.nome)) {
      alert('Ingrediente già presente nella lista!');
      return;
    }
    this.ingredientiAggiunti.push(this.ingredienteInAggiunta);
    this.ingredienteInAggiunta = {id: 0, nome: '', um: '', quantita: 0};
  }
  removeIngrediente(ingrediente: Ingrediente): void {
    this.ingredientiAggiunti = this.ingredientiAggiunti.filter(i => i !== ingrediente);
  }

  saveProdotto(data): void {
    const prodotto: Prodotto = {
      id: data.id || 0,
      nome: data.nome,
      descrizione: data.descrizione,
      dataProduzione: new Date(),
      prezzo: data.prezzo,
      prezzoAttuale: 0,
      sconto: 0,
      immagine: data.immagine,
      ingredienti: this.ingredientiAggiunti
    };
    if (prodotto.id == 0) {
      this.productService.postProdotto(prodotto).subscribe(result => {
        this.modal.dismiss();
        this.ingredientiAggiunti = [];
        this.getProdotti();
      }, error => {
        alert('Errore nel salvataggio del prodotto!');
      });
    } else {
      this.productService.putProdotto(prodotto).subscribe(result => {
        this.modal.dismiss();
        this.ingredientiAggiunti = [];
        this.getProdotti();
      }, error => {
        alert('Errore nel salvataggio del prodotto!');
      });
    }
  }

  deleteProdotto(id: number): void {
    this.productService.deleteProdotto(id).subscribe(result => {
      this.prodotti = this.prodotti.filter(p => p.id !== id);
    }, error => {
      alert('Errore nell\'eliminazione del prodotto!');
    });
  }
}
