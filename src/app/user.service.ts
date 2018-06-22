import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {
    this.selectedUser = this.users[0];
  }
  selectedUser: User;
  users = [
    {
      id: 0,
      name: 'Aisha Eichmann',
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/malykhinv/128.jpg',
      jobTitle: 'Customer Division Assistant'
    },
    {
      id: 1,
      name: 'Calista Skiles',
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/nessoila/128.jpg',
      jobTitle: 'Dynamic Solutions Orchestrator'
    },
    {
      id: 2,
      name: 'Kristofer Hermiston',
      image:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ernestsemerda/128.jpg',
      jobTitle: 'Dynamic Markets Planner'
    }
  ];
}
