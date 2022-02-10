import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent implements OnInit {


  // para podermos usar o atributo mensagem, e assim atribuir valor a ele como desejar
  @Input() mensagem: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
