import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Prodotto } from '../../models/Prodotto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prodotti: Array<Prodotto>;
  prodottoSelezionato: Prodotto;

  constructor(public productService: ProductService,
              public modalService: NgbModal) { }

  ngOnInit(): void {
   this.productService.getProdotti().subscribe(result => {
     this.prodotti = result;
     console.log(this.prodotti);
   });
  }

  viewDetails(p: Prodotto, modal): void {
    this.prodottoSelezionato = p;
    this.modalService.open(modal);
  }
}
