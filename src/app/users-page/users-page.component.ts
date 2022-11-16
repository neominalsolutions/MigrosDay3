import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {


  users$!:Observable<User[]>;

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.users$ = this.userService.getUser();



  }

}
