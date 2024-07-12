import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './components/edit-restaurant/edit-restaurant.component';
import { ListRestaurantsComponent } from './components/list-restaurants/list-restaurants.component';
import { RestaurantItemComponent } from './components/restaurant-item/restaurant-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantComponent,
    EditRestaurantComponent,
    ListRestaurantsComponent,
    RestaurantItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
