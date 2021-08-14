import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  post:any;
  constructor(private activatedRoute: ActivatedRoute,private http: Http) { 
  }
  

  getPostById(id){
    this.http.get("https://jsonplaceholder.typicode.com/posts/"+id).subscribe(response => {
      this.post = response.json();
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.getPostById(id);
    });
  }

}
