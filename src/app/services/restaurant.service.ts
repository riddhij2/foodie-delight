import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Restaurant A',
      description: 'A description',
      location: 'Location A',
      contact: '1234567890',
      operatingHours: '9 AM - 9 PM',
      cuisineType: 'Italian'
    },
    {
      id: 2,
      name: 'Restaurant B',
      description: 'B description',
      location: 'Location B',
      contact: '0987654321',
      operatingHours: '10 AM - 10 PM',
      cuisineType: 'Chinese'
    }
  ];

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants);
  }

  getRestaurantById(id: number): Observable<Restaurant> {
    const restaurant = this.restaurants.find(r => r.id === id);
    return of(restaurant!);
  }

  addRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    restaurant.id = this.restaurants.length + 1;
    this.restaurants.push(restaurant);
    return of(restaurant);
  }

  updateRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    const index = this.restaurants.findIndex(r => r.id === restaurant.id);
    this.restaurants[index] = restaurant;
    return of(restaurant);
  }

  deleteRestaurant(id: number): Observable<void> {
    this.restaurants = this.restaurants.filter(r => r.id !== id);
    return of();
  }
}
