import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {UserService} from '../services/user.service';
import {UserInterface} from '../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  title = 'Users';
  users: UserInterface[] = [];
  // tslint:disable-next-line: no-output-rename
  @Output('updateUser') updateUser = new EventEmitter<UserInterface>();

  constructor(private userService: UserService) {


  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      response => this.users = response['data'] );
  }

  onDeleteUser(user: UserInterface) {

    this.userService.deleteUser(user);
  }

  onSelectUser(user: UserInterface) {
    const userCopy = Object.assign({}, user);

    this.updateUser.emit(userCopy);
  }

}
