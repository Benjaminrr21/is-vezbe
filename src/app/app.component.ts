import { Component } from '@angular/core';

@Component({ //@Component - dekorator
  selector: 'app-root', //id komponente (selektor), kada zelimo da prikazemo 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primer'; //svojstvo title
  putanja = 'https://th.bing.com/th/id/OIP.pMbaUypN-gfPjxsY6R0gLAHaFj?rs=1&pid=ImgDetMain';
  sirina = 500;
  isActive= true;
  email:any;

  onSave($event:any){
    console.log("Kliknuli ste na dugme Snimi promene.");
  }
  onKeyUp(ime:any){
    console.log("Uneli ste ime " + ime);
    

  }
}
