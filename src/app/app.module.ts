import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { UserCardPageComponent } from './user-card-page/user-card-page.component';
import { PipeDemoPageComponent } from './pipe-demo-page/pipe-demo-page.component';
import { OrderStatusPipe } from './order-status.pipe';
import { OrderBgColorDirective } from './order-status.directive';

// Component dışında Pipes da declarationa ekleniyor.
// Component dışında directive de declarationa ekleniyor
@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    UserCardPageComponent,
    PipeDemoPageComponent,
    OrderStatusPipe,
    OrderBgColorDirective 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
