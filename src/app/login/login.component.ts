import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId = "Luca"
  password = ""
  constructor() { }

  ngOnInit(): void {
  }

  gestAut(){
    alert(this.userId)
  }
}
