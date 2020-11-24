import {ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import { ProductService } from '../../../services/product.service';
import {Ingrediente} from '../../../models/Ingrediente';

@Component({
  selector: 'app-ingredienti',
  templateUrl: './ingredienti.component.html',
  styleUrls: ['./ingredienti.component.css']
})
export class IngredientiComponent implements OnInit {
  ingredienti: Array<Ingrediente>;
  ingredienteSelezionato: Ingrediente;
  mode = 'VIEW';
  editableId: number;
  @ViewChild('newIngredientName') newIngredientName: ElementRef;
  @ViewChild('newIngredientUm') newIngredientUm: ElementRef;
  constructor(public productService: ProductService,
              public zone: NgZone) {
    this.getIngredienti();
  }

  ngOnInit(): void {
  }
  getIngredienti(): void {
    this.productService.getIngredienti().subscribe(result => {
      this.ingredienti = result;
    });
  }
  newIngredient(): void {
    console.log('new');
    this.mode = 'NEW';
  }
  saveIngrediente(): void {
    const newIngrediente: Ingrediente = {
      id: 0,
      nome: this.newIngredientName.nativeElement.value,
      um: this.newIngredientUm.nativeElement.value,
      quantita: 0
    };
    const alredyPresent = this.ingredienti.find(i => {
      return i.nome === newIngrediente.nome && i.um === newIngrediente.um;
    });
    if (!alredyPresent) {
      this.productService.postIngrediente(newIngrediente).subscribe(result => {
        this.ingredienti.push(newIngrediente);
        this.mode = 'VIEW';
        this.getIngredienti();
      }, error => {
        alert('Errore nel salvataggio dell\'ingrediente');
      });
    } else {
      alert('Ingrediente già presente nella lista!');
    }
  }
  enableEditIngredient(i: Ingrediente): void {
    this.zone.run(() => {
      this.mode = 'EDIT';
      this.editableId = i.id;
    });
  }
  editIngredient(i: Ingrediente): void {
   this.productService.putIngrediente(i).subscribe(result => {
     this.mode = 'VIEW';
     this.editableId = null;
   }, error => {
     alert('Errore nell\'update dell\'ingrediente');
   });
  }
  deleteIngredient(i: number): void {
    this.productService.deleteIngrediente(i).subscribe(result => {
      this.ingredienti = this.ingredienti.filter(ingrediente => ingrediente.id !== i);
    }, error => {
      alert('Errore nell\'eliminazione dell\'ingrediente');
    });
  }
  updateNome(id: number, event): void {
    this.ingredienti.find(i => i.id === id).nome = event.target.value;
    console.log(this.ingredienti);
  }
  updateUm(id: number, event): void {
    this.ingredienti.find(i => i.id === id).um = event.target.value;
  }
}
