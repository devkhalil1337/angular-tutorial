import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent {


  posts:any;

  constructor(http: Http) { 
    http.get("https://jsonplaceholder.typicode.com/posts").subscribe(response => {
      console.log(response)
      this.posts = response.json();
    })
    

  }

}
