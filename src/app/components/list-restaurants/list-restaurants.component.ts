import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})
export class ListRestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe(data => {
      this.restaurants = data;
    });
  }

  onDelete(id: number): void {
    this.restaurantService.deleteRestaurant(id).subscribe(() => {
      this.loadRestaurants();
    });
  }
}
