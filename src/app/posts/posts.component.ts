import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts;
  url = "https://jsonplaceholder.typicode.com/posts/";
  constructor(private http:Http) { 
    http.get(this.url).subscribe(response => {
      this.posts = response.json();
    })
  }


  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value = '';
    this.http.post(this.url,JSON.stringify(post)).subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0,0,post);
    });
  }

  updatePost(topic: HTMLInputElement){
    console.log(topic.value)
    let post = {title:topic.value}
    this.http.put(this.url + "/1",JSON.stringify(post)).subscribe(response => {

    });
  }

  deletePost(post){
    this.http.delete(this.url +"/"+ post.id).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    });
  }
  


}
