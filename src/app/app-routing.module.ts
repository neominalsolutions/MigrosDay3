import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCardPageComponent } from './user-card-page/user-card-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [
  {
   path:'users',
   component:UsersPageComponent
  },
  {
    // routing örneği
    path:'user-card/:id', // dışardan id parametresi gelecek
    component:UserCardPageComponent
  },
  {
    // query String örneği
    path:'user-card', // dışardan id parametresi gelecek
    component:UserCardPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
