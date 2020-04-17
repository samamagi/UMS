import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { logging } from 'protractor';
import { Router } from '@angular/router';
import { User } from '../classes/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onNewUser = new EventEmitter();
  public isUserLOggedIn = false;
  public username: string;
  constructor(private auth: AuthService, private router: Router) { 
    auth.usersignedin.subscribe(
      (user: User) => {
        this.username = user.name;
        this.isUserLOggedIn = true;
      }
    );
    auth.userlogout.subscribe(
      () => {
        this.username = '';
        this.isUserLOggedIn = false;
      }
    );
    auth.usersignedup.subscribe(
      (user: User) => {
        this.username = user.name;
        this.isUserLOggedIn = true;
      }
    );
  }

  showMenu = false;

  ngOnInit() {
    this.isUserLOggedIn = this.auth.isUserLoggedIn();
    if (this.isUserLOggedIn) {
      const user = this.auth.getUser();
      this.username = user.name;
    }
  }

  newUser() {
    this.onNewUser.emit();
  }

  logout(e) {
    e.preventDefault();
    this.auth.logout();
    this.router.navigate(['login']);
  }
  signIn(e) {
    e.preventDefault();
    this.router.navigate(['login']);
  }
  signUp(e) {
    e.preventDefault();
    this.router.navigate(['signup']);
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
