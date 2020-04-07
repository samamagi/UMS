import { UserInterface } from './../interfaces/user';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
// users: Array<User> è la stessa cosa
  export class UserService {
    private APIURL = 'http://localhost:8000/users';
    users: UserInterface[] = [];

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.APIURL);
  }
  getUser(id: number) {
    // return this.users.find(user => user.id === id);
    return this.http.get(this.APIURL + '/' + id);
  }

  deleteUser(user: UserInterface) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }

  }

  updateUser(user: UserInterface) {
    user['_method'] = 'PUT';
    return this.http.post(this.APIURL + '/' + user.id, user);
  }


  createUser(user: UserInterface) {

    user.id = this.users.length + 1;
    this.users.splice(0, 0, user);

  }
}

