import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from './mensagem.component';



@NgModule({
  declarations: [
    MensagemComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    MensagemComponent
  ] //usado exports para que outros componentes possam ver o componente generico
})
export class MensagemModule { }
