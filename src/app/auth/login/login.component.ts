import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../../shared/models/login.model';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {} as UserLogin;
  submitted = false;

  onSubmit(e, loginForm) {
    this.submitted = true;
    this.auth.regiterUser({...loginForm.value, token: loginForm.value.password}).subscribe(res => {
      this.auth.setToken(res.token);
      this.router.navigateByUrl('/');
    })
  }

  clearForm(loginForm) {
    console.log(loginForm);
    this.model = {} as UserLogin;
  }

  get diagnostic() { return JSON.stringify(this.model); }


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }


}
