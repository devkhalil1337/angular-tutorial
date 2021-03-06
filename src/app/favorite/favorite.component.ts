import { Component, OnInit , Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isFavorite = false;
  @Output('change') changeEventEmit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onChangeFav(){
    this.isFavorite = !this.isFavorite;
    this.changeEventEmit.emit({newValue:this.isFavorite});
  }

}

export interface FavoriteChangedEventArgs{
  isFav:boolean
}