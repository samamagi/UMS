import {Injectable} from '@angular/core';
import {User} from '../classes/user';
import {HttpClient} from '@angular/common/http';

@Injectable()
// users: Array<User> è la stessa cosa
  export class UserService {
    private APIURL = 'http://localhost:8000/users';
    users: User[] = [];

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.APIURL);
  }
  getUser(id: number) {
    // return this.users.find(user => user.id === id);
    return this.http.get(this.APIURL + '/' + id);
  }

  deleteUser(user: User) {
    const DELETE = {_method: 'DELETE'};
    // user['_method'] = 'DELETE';
    return this.http.post(this.APIURL + '/' + user.id, DELETE);
  }

  updateUser(user: User) {
    user['_method'] = 'PUT';
    return this.http.post(this.APIURL + '/' + user.id, user);
  }


  createUser(user: User) {
    user['_method'] = 'POST';
    return this.http.post(this.APIURL, user);
  }
}

