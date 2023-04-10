import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }


  autentica = (userid : string , password : string) : boolean => {
    let user = (userid === "luca" && password === "luca") ? true : false
    if(user){
      sessionStorage.setItem("Utente",userid);
    }
    return user;
  }
}
