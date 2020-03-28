import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() onNewUser = new EventEmitter();
  constructor() { }

  showMenu = false;

  ngOnInit() {
  }

  newUser() {
    this.onNewUser.emit();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
