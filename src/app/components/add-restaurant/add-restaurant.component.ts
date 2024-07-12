import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  restaurantForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private router: Router
  ) {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      contact: ['', Validators.required],
      operatingHours: ['', Validators.required],
      cuisineType: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.restaurantForm.valid) {
      const newRestaurant: Restaurant = this.restaurantForm.value;
      this.restaurantService.addRestaurant(newRestaurant).subscribe(() => {
        this.router.navigate(['/restaurants']);
      });
    }
  }
}
