import { Component } from "@angular/core";
import { CoursesServices } from "./courses.services";

@Component({
    selector:'courses',
    templateUrl:'./courses.component.html'
})

export class CoursesComponent{
    courses;

   constructor(service: CoursesServices){
       this.courses = service.getNames();
   }
}