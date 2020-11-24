import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IngredientiComponent} from './ingredienti/ingredienti.component';
import {ProdottiComponent} from './prodotti/prodotti.component';
import {AreaPrivataComponent} from './area-privata.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AreaPrivataComponent, children: [
      { path: 'ingredienti', component: IngredientiComponent},
      { path: 'prodotti', component: ProdottiComponent },
      { path: '',   redirectTo: '/area-privata/ingredienti', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AreaPrivataModule { }
