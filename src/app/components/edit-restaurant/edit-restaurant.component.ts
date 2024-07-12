import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

  restaurantForm: FormGroup;
  restaurantId!: number;

  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
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

  ngOnInit(): void {
    this.restaurantId = +this.route.snapshot.paramMap.get('id')!;
    this.restaurantService.getRestaurantById(this.restaurantId).subscribe(restaurant => {
      this.restaurantForm.patchValue(restaurant);
    });
  }

  onSubmit(): void {
    if (this.restaurantForm.valid) {
      const updatedRestaurant: Restaurant = {
        ...this.restaurantForm.value,
        id: this.restaurantId
      };
      this.restaurantService.updateRestaurant(updatedRestaurant).subscribe(() => {
        this.router.navigate(['/restaurants']);
      });
    }
  }
}
