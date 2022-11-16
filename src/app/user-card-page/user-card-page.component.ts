import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  templateUrl: './user-card-page.component.html',
  styleUrls: ['./user-card-page.component.scss']
})
export class UserCardPageComponent implements OnInit {

  routeParams$!:Observable<Params>;
  user$!:Observable<User>


  // urlden gönderilen değerleri queryParams veya routeParams şeklinde okumalıyız.
  // Bu işlemi activatedRoute servisi ile yapmaktayız.
  // ActivatedRoute sayfadaki aktif route üzerinden bazı bilgileri taşır
  constructor(private activatedRoute:ActivatedRoute, private userService:UserService, private router:Router) { }

  ngOnInit(): void {

    this.routeParams$ = this.activatedRoute.params;

    const routeParams:any = this.activatedRoute.snapshot.params;
    console.log('routeParams', routeParams);

    const queryParams:any = this.activatedRoute.snapshot.queryParams;
    console.log('queryParams', queryParams);


    if(routeParams.id != null) {
      this.user$ = this.userService.getUserById(routeParams.id);
    } 
    else {
      if(queryParams.username != null){
        this.user$ = this.userService.getUserByUserName(queryParams.username);

        // this.user$.subscribe((data) => {
        //   console.log('data', data);
        // })
      } 
    }


  }

  gotoUsers(){

    const extras:NavigationExtras = {
      queryParams:{username:'ali'}
    }

    // /user?username=ali
    // this.router.navigate(['users'],extras);
    this.router.navigate(['users']);
    // this.router.navigateByUrl('/users');
  }

}
