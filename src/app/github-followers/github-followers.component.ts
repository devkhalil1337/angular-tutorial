import { Component, OnInit } from '@angular/core';
import { PostService } from '../posts/post.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {


  posts:any;

  constructor(private service: PostService) {  }


  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.service.getPosts().subscribe(response => {
      this.posts = response.json();
    });
  }

  createPost(post: HTMLInputElement){
    console.log(post.value)
    let postData = {title:post.value}
    this.service.createPost(postData).subscribe(response => {
      console.log(response);
      // this.getPosts();
    })
  }
  
  




}
