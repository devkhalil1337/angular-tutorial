import { Component, ViewEncapsulation } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {


  courses = [];


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
