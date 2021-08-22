import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  categories = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Study'},
  ];


submit(f){
  console.log(f)
}

  log(event){
    console.log(event)
  }

}
