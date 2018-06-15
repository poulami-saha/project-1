import { Component, OnInit } from '@angular/core';
import { Login } from "../shared/login.model";
import { UserService } from "../shared/user.service";
import {ToastrService} from 'ngx-toastr';
import { Profile } from "../shared/profile.model";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  isUserLoggedIn:boolean;
  allProfiles
  constructor(private userService:UserService, private toastr:ToastrService) { }

  ngOnInit() {
    this.allProfiles=[
      new Profile('dev','Developer'),
      new Profile('man', 'Manager'),
      new Profile('dir','Director')
    ]
  }
  login(formvalue){
    console.log(formvalue);
    var login:Login={
      UserName:formvalue.UserName,
      Password:formvalue.Password,
      Gender:formvalue.Gender,
      IsAccepted:formvalue.IsAccepted,
      Profile:formvalue.Profile
    }
    this.userService.login(login).subscribe((data:any)=>{
      this.isUserLoggedIn=data;
      if(this.isUserLoggedIn==true)
        this.toastr.success("You are authorized");
      else 
        this.toastr.error("You are not authorized");
    });
  }
}
