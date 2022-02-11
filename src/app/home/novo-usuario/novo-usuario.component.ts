import { NovoUsuarioService } from './../novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {



  constructor(private service: NovoUsuarioService, private fb: FormBuilder) { }

  novoUsuarioForm!: FormGroup;

  ngOnInit(): void {
    this.novoUsuarioForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      fullName: ['',[ Validators.required, Validators.minLength(5)]],
      userName: [''],
      password: ['']
    })
  }
  cadastrar(){
    console.log('works')
  }

}
