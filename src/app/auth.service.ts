import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://localhost:7098/api/';

  constructor(private http:HttpClient) {
      

   }
   login(credentials:any){
    return this.http.post<any>(this.url + "authorization/login/",credentials,
    {
      "headers":new HttpHeaders()
            .set("Content-type","application/json")
            .set("Access-Control-Allow-Origin","*")
    });
   
   }
   isLogedIn(){
      let jwtHelper = new JwtHelperService();
      let token = localStorage.getItem("token");
      if(!token) return false;
     // let expirationDateTime = jwtHelper.getTokenExpirationDate(token);

      let isExpired = jwtHelper.isTokenExpired(token);
      return !isExpired;  
    }
}
