import { Injectable } from '@angular/core';

const KEY = 'token'


@Injectable({
  providedIn: 'root'
})


export class TokenServiceService {

  constructor() { }

  returnToken(){
    return localStorage.getItem(KEY);
  }

  saveToken(token:string){
    return localStorage.setItem(KEY, token)
  }

  deleteToken(){
    return localStorage.removeItem(KEY)
  }
   haveToken(){
     return !! this.returnToken
   }
}
