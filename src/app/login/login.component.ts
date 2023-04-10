import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId : string = ""
  password : string = ""
  autenticato : boolean = true
  errorMsg : string = "Spiacente Id e Password non sono validi"
  titolo : string = "Accesso & Autenticazione"
  sottotitolo : string = "Inserisci ID e Password"
  show : boolean = true;

  constructor(private route: Router, private BasicAuth : AuthappService ) { }

  ngOnInit(): void {
  }

  gestAuth= (): void => {
    if(this.BasicAuth.autentica(this.userId,this.password)){
      this.autenticato = true
      this.route.navigate(['welcome',this.userId])
    }else{
      this.autenticato = false
    }
  }
}
