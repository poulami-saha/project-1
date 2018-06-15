import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Login } from "./login.model";

@Injectable()
export class UserService{
    readonly  routeUrl='http://localhost:49690/';
    constructor(private http:HttpClient){}

    login(user:Login){
        var login:Login={
            UserName:user.UserName,
            Password:user.Password,
            Gender:user.Gender,
            IsAccepted:user.IsAccepted,
            Profile:user.Profile
        }
        return this.http.post(this.routeUrl+'api/login',login);
    }
}