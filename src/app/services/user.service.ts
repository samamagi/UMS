import { UserInterface } from './../interfaces/user';
import {Injectable} from '@angular/core';

@Injectable()
// users: Array<User> è la stessa cosa
  export class UserService {
    users: UserInterface[] = [
      {
          id: 1,
          name: 'Hidran1',
          lastname: 'Arias1',
          email: 'hidran1@gmail.com',
          fiscalcode: 'RSAHRN72M22Z444S',
          province: 'Torino1',
          phone: '454545455',
          age: 41

    },
    {
      id: 2,
      name: 'Hidran2',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      id: 3,
      name: 'Hidran3',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      id: 4,
      name: 'Hidran4',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    }
  ];

  constructor() {
  }

  getUsers() {
    return this.users;
  }
  getUser(id: number){
    return this.users[id];
  }

  deleteUser(user: UserInterface) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }

  }

  updateUser(user: UserInterface) {
    const idx = this.users.findIndex((v) => v.id === user.id);
    // alert(idx);
    if (idx !== -1) {
      this.users[idx] = user;
    }
  }


  createUser(user: UserInterface) {

    this.users.splice(0, 0, user);

  }
}

