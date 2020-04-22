import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import { User } from '../classes/user';

interface Jwt {
  access_token: string;
  token_type: string;
  expires_in: number;
  user_name: string;
  email: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private  auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }
  signIn(form: NgForm) {
    if (!form.valid) {
      return false;
    }
    this.auth.signIn(form.value.email, form.value.password)
    .subscribe(
      (payload: Jwt) => {
        alert('login successful');
        this.router.navigate(['']);
      },
        ({error}) => {
          alert(error.error);
          console.log(error);
        }

    );

  }
}
