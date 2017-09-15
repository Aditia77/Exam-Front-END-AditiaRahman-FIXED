import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MyDataService {
    Name : string ="";
    Email : string ="";
    Phone : string ="";
    Address : string ="";
    UserList : object[] = [];
    constructor (private http:Http){}
    LoadData(){
        this.http.get( 'https://jsonplaceholder.typicode.com/users').subscribe(
            result => {
                for (var i = 0; i < result.json().length; i++){
                    var user = result.json()[i];
                    var UserObj = {
                        'id' : user.id, 
                        'Name': user.name,
                        'Email': user.email,
                        'Address': user.address.street,
                        'Phone' : user.phone
                    };
                    this.UserList.push(UserObj);
                }
            },
            error =>{
                console.log(error);
            }
        )
    };
    RemoveData(id){
        for (var i = 0; i < this.UserList.length; i++){
            if(this.UserList[i]["id"]==id){
                this.UserList.splice(i,1);
            }
        }
    }
}