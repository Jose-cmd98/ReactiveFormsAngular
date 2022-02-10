import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', //always putFull to it
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: ()=>import('./home/home.module').then((m) => m.HomeModule) //retorna uma promisse
  },
  {
    path: 'animais',
    loadChildren: ()=> import ('./animais/animais.module').then((m)=> m.AnimaisModule)
  }
]


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
