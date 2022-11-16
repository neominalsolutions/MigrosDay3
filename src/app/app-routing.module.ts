import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponentsPageComponent } from './material-components-page/material-components-page.component';
import { NgxBsComponentsPageComponent } from './ngx-bs-components-page/ngx-bs-components-page.component';
import { PipeDemoPageComponent } from './pipe-demo-page/pipe-demo-page.component';
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
  },
  {
    path:'pipes-demo',
    component:PipeDemoPageComponent
  },
  {
    path:'material-demo',
    component:MaterialComponentsPageComponent
  },
  {
    path:'bs-demo',
    component:NgxBsComponentsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
