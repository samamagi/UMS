import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {User} from '../classes/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  // tslint:disable-next-line: no-output-rename
  @Output('exitDetail') exitDetail = new EventEmitter();

  private userCopy: User;
  // tslint:disable-next-line:variable-name
  private __user: User;

  @Input() set user(user: User) {
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  }

  get user() {
    return this.__user;
  }

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
  }

  resetForm(form) {

    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }
  }

  closeDetail() {
    this.exitDetail.emit(this.user);
  }

}
