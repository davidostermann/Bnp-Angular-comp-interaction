import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private userService: UserService) {}

  users;

  ngOnInit() {
    // le composant est prêt !
    this.users = this.userService.users;
  }
  selectUser(u: User, e: MouseEvent) {
    e.preventDefault();
    this.userService.selectedUser = u;
  }
}
