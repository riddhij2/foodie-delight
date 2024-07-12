import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './components/edit-restaurant/edit-restaurant.component';
import { ListRestaurantsComponent } from './components/list-restaurants/list-restaurants.component';

const routes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  { path: 'restaurants', component: ListRestaurantsComponent },
  { path: 'add-restaurant', component: AddRestaurantComponent },
  { path: 'edit-restaurant/:id', component: EditRestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
