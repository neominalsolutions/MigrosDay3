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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MaterialComponentsPageComponent } from './material-components-page/material-components-page.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
// Component dışında Pipes da declarationa ekleniyor.
// Component dışında directive de declarationa ekleniyor

// MatNativeDateModule Datepicker JS Api ile çalışarak Date tipi üzerinden tarih ile ilgili ayarları componentin algılamasını sağlar

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    UserCardPageComponent,
    PipeDemoPageComponent,
    OrderStatusPipe,
    OrderBgColorDirective,
    MaterialComponentsPageComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
