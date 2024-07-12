import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent {

  @Input() restaurant!: Restaurant;
  @Output() delete = new EventEmitter<number>();

  deleteRestaurant(): void {
    this.delete.emit(this.restaurant.id);
  }
}
