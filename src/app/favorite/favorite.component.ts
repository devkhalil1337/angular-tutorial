import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isFavorite = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeFav(){
    this.isFavorite = !this.isFavorite;
  }

}
