import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isLogedIn:boolean=true;

  /**
   *
   */
  constructor(private service:AuthService) {
  this.isLogedIn = service.isLogedIn();
    
  }
logout(){
  localStorage.removeItem("token");
}
}
