import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';

interface Jwt {
  access_token: string;
  token_type: string;
  expires_in: number;
  user_name: string;
  email: string;
}

@Injectable()
export class AuthService {

  private isUserLogged = false;
  @Output() usersignedin = new EventEmitter<User>();
  @Output() usersignedup = new EventEmitter<User>();
  @Output() userlogout = new EventEmitter();

  private APIAUTHURL = 'http://localhost:8000/api/auth/';
  constructor(private http: HttpClient) { }

  isUserLoggedIn() {
    this.isUserLogged = !!localStorage.getItem('token');
    return this.isUserLogged;
  }
  signIn(email: string, password: string) {
    this.http.post(this.APIAUTHURL + 'login', {
      email: email,
      password: password
    }).subscribe(
      (payload: Jwt) => {
        localStorage.setItem('token', payload.access_token);
        localStorage.setItem('user', JSON.stringify(payload));
        const user = new User();
        user.name = payload.user_name;
        user.email = payload.email;
        this.usersignedin.emit(user);
        return true;
      },
      (error: any) => {
        console.log(error);
      }

    );
  }
  signUp(username: string, email: string, password: string) {
    localStorage.setItem('token', email);
    const user = new User();
    user.name = username;
    user.email = email;
    this.usersignedup.emit(user);
    return true;
  }
  logout() {
    localStorage.removeItem('token');
    this.userlogout.emit();
    this.isUserLogged = false;
  }
}
