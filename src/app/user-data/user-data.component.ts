import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  private User: User;
  constructor(private route: ActivatedRoute, private userService: UserService ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (p) => {
        this.User = this.userService.getUser(+p.id);
      }
    );
  }
}
