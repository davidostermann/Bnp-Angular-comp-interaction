import { UserService } from './../user.service';
import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements AfterContentChecked {

  constructor(public userService: UserService) { }

  user: User;

  ngAfterContentChecked() {
    this.user = this.userService.selectedUser;
  }

}
