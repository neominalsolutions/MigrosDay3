import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {


  users$!:Observable<User[]>;

  constructor(private userService:UserService, private titleService:Title) { }

  ngOnInit(): void {

    this.titleService.setTitle('UserPage');

    this.users$ = this.userService.getUser();



  }

}
