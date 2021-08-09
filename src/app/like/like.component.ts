import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'Like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input() isLiked:boolean;
  @Input() count:number;

  doLikeOrUnLike(){
    this.isLiked = !this.isLiked;
    this.count = Number(this.isLiked);
  }




}
