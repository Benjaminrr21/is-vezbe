import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Validatori } from './sign-up.validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  
  constructor() {}
  form = new FormGroup({
    username: new FormControl('',[
      Validators.minLength(6),
      Validators.required,
      Validatori.neMozeRazmaci
    ],
    Validatori.zauzetoIme
    ),
    password: new FormControl('',Validators.required)
    })

    get Username() : FormControl{
      return (this.form.get('username') as FormControl) ?? new FormControl()
    }
    get Password() : FormControl{
      return (this.form.get('password') as FormControl) ?? new FormControl()
    }

    validateForm(){
      console.log(this.Username);
    }
  
}
