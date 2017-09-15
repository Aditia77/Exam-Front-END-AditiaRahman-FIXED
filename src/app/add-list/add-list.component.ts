import { Component, OnInit } from '@angular/core';
import { MyDataService } from "../my-data.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  NewUser = {
    'Id': Number,
    'Name': '',
    'Email': '',
    'Address': '',
    'Phone': ''
    
  };
  constructor(private MyData: MyDataService) { }

  ngOnInit() {
  }
  AddUser() {
    this.NewUser['Id'] = this.MyData.UserList[this.MyData.UserList.length - 1]['Id'] + 1;
    this.MyData.UserList.push(this.NewUser);
  }
}