import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AreaPrivataComponent } from './area-privata/area-privata.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { IngredientiComponent } from './area-privata/ingredienti/ingredienti.component';
import { ProdottiComponent } from './area-privata/prodotti/prodotti.component';
import { HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'area-privata', loadChildren: () => import(`./area-privata/area-privata.module`).then(m => m.AreaPrivataModule) },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AreaPrivataComponent,
    IngredientiComponent,
    ProdottiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
