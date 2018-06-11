import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

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
  selectUser() {

  }
}
