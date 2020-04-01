import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {UserService} from '../services/user.service';
import {UserInterface} from '../interfaces/user';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  // inputs: ['user:user-data']
})
export class UserComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('user-data') user: UserInterface;
  // tslint:disable-next-line: no-output-rename
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  // tslint:disable-next-line: no-output-rename
  @Output('onSelectUser') onUserSelect = new EventEmitter();


  constructor(private userService: UserService, private route: Router) {
  }

  ngOnInit() {
  }

  deleteUser() {

    this.userDeleted.emit(this.user);


  }

  updateUser() {
    this.route.navigate(['users', this.user.id, 'edit']);
    this.onUserSelect.emit(this.user);

  }
}
