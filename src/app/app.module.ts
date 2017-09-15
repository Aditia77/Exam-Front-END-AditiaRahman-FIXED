import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';


import { MyDataService } from "./my-data.service";
import { UserListComponent } from './user-list/user-list.component';
import { AddListComponent } from './add-list/add-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddListComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot([
      {path : "", component: AddListComponent},
      {path : "UserList", component : UserListComponent},
    ])
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
