import { Component, ViewEncapsulation } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {



  coursesObj = [{
    id:1,
    course:"English"
  },{
    id:2,
    course:"Computer"
  },{
    id:3,
    course:"Science"
  }]
  courses = ["English","Computer","Science"];



  onAdd(){
    this.coursesObj.push({id:4,course:"Maths"})
  }

  onRemove(course){
    let index = this.coursesObj.indexOf(course);
    this.coursesObj.splice(index,1);
  }






  viewMode = "map";





  tweet = {
    status: "this is an amazing tweet",
    isLiked:false,
    likesCount:0
  }


  title = 'hello-world';
  post = {
    isFavorite:false
  }

  isFavComponentCalled(args:FavoriteChangedEventArgs){
    console.log("fav component called",args)
  }
}
