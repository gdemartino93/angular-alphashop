import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId : string = ""
  password : string = ""
  autenticato : boolean = true
  consentito : boolean = false
  errorMsg : string = "Spiacente Id e Password non sono validi"
  authMsg : string = "Benvenuto"
  constructor() { }

  ngOnInit(): void {
  }

  gestAuth= (): void => {
    if(this.userId === "Luca" && this.password === "luca"){
      this.consentito = true
      this.autenticato = true
    }else{
      this.autenticato = false
      this.consentito = false
    }
  }
}
