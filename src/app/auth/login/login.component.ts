import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../../shared/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {} as UserLogin;
  submitted = false;

  onSubmit(e) {
    this.submitted = true;
  }

  clearForm(loginForm) {
    console.log(loginForm)
    this.model = {} as UserLogin;
  }

  get diagnostic() { return JSON.stringify(this.model); }


  constructor() { }

  ngOnInit() {
  }


}
