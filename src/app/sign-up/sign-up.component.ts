import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

form = new FormGroup({
  username:new FormControl('', Validators.required),
  password: new FormControl()
});

get username(){
  return this.form.get('username');
}
  

}
