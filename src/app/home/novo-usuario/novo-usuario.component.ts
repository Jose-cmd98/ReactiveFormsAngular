import { Router } from '@angular/router';
import { NovoUsuarioService } from './../novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from '../novo-usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  public email!: string;
  public fullName!: string;
  public userName!: string;
  public password!: string;


  constructor(private service: NovoUsuarioService, private fb: FormBuilder, private router: Router) { }

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
    if(this.novoUsuarioForm.valid){
      // const novoUsuario: NovoUsuario = {
      //   email: this.email,
      //   fullName: this.fullName,
      //   userName: this.userName,
      //   password: this.password
      // };
      const NovoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.service.cadastrarNovoUsuario(NovoUsuario).subscribe(()=>{
        this.router.navigate(['home']);
      })
    }
      (error: any) =>{
        console.log(error)
      }

  }

}
