import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username:string="";
password:string="";

  constructor(private service: AuthService, private router:Router){
    
}
login(){
  let credentials = {
    "username":this.username,
    "password":this.password
  };
  this.service.login(credentials).subscribe(res => {
    if(res && res.token){
      localStorage.setItem("token",res.token);
      this.router.navigate(["courses"]);
    }
  },
  error => console.log(error));
  
}
}
