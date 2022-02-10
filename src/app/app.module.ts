import { MensagemComponent } from './componentes/mensagem/mensagem.component';
import { MensagemModule } from './componentes/mensagem/mensagem.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    // HomeModule, irá renderizar por meio do lazyLoad
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MensagemModule //para usar o componente generico de mensagem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
