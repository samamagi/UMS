import {Injectable} from '@angular/core';
import {User} from '../classes/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable()
// users: Array<User> è la stessa cosa
  export class UserService {
    // private APIURL = 'http://localhost:8000/users';
    private APIURL = environment.APIURL;
    users: User[] = [];

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders(
      {
        Authorization: 'Bearer ' + this.auth.getToken()
      }
    );
    return headers;
  }

  getUsers() {
    return this.http.get(this.APIURL, {
      headers: this.getAuthHeader()
    });
  }
  getUser(id: number) {
    // return this.http.get(this.APIURL + '/' + id, {
    return this.http.get(this.APIURL + id, {
      headers: this.getAuthHeader()
    });
  }

  deleteUser(user: User) {
    const DELETE = {_method: 'DELETE'};
    // return this.http.post(this.APIURL + '/' + user.id, DELETE, {
    return this.http.post(this.APIURL + user.id, DELETE, {
      headers: this.getAuthHeader()
    });
  }

  updateUser(user: User) {
    user['_method'] = 'PUT';
    // return this.http.post(this.APIURL + '/' + user.id, user, {
    return this.http.post(this.APIURL +   user.id, user, {
      headers: this.getAuthHeader()
    });
  }


  createUser(user: User) {
    user['_method'] = 'POST';
    return this.http.post(this.APIURL, user, {
      headers: this.getAuthHeader()
    });
  }
}

