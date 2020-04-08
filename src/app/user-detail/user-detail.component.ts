import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {User} from '../classes/user';
import {UserService} from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.user = new User();
    this.route.params.subscribe (
      (params) => {
        if (!params.id) {
          return;
        }
        this.userService.getUser(+params.id).subscribe(
          reponse => this.user = reponse['data']
        );
      }
    );
  }

  saveUser() {
    if (this.user.id > 0) {
      this.updateUser(this.user);
    } else {
      this.createUser(this.user);
    }
  }
  createUser(user: User) {
    this.userService.createUser(this.user).subscribe(response => {
      if (response['success']) {
        alert('User ' + this.user.name + ' modificato correttamente');
      } else {
        alert(response['message']);
      }
      this.router.navigate(['users']);
    }
  );
  }

updateUser(user: User){
  this.userService.updateUser(this.user).subscribe(response => {
    if (response['success']) {
      alert('User ' + this.user.name + ' modificato correttamente');
    } else {
      alert(response['message']);
    }
    this.router.navigate(['users']);
  }
);

}
  resetForm(form) {

    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }
  }
  backToUsers() {
    this.router.navigate(['users']);
  }
}
