import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from '../common/validator/username.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

form = new FormGroup({
  username:new FormControl('',
    Validators.required,
    UsernameValidator.shouldBeUnique
    ),
  password: new FormControl()
});

login(){
  this.form.setErrors({
    invalidUser:true
  })
}

get username(){
  return this.form.get('username');
}
  

}
