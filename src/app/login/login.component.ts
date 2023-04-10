import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gestAuth= (): void => {
    if(this.userId === "Luca" && this.password === "luca"){
      this.autenticato = true
      this.route.navigate(['welcome',this.userId])
    }else{
      this.autenticato = false
    }
  }
}
