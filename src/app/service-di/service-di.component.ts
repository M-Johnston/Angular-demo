import {Component, OnInit} from '@angular/core';
import {FoodService} from '../../services/food/food.service';

@Component({
  selector: 'app-service-di',
  templateUrl: './service-di.component.html',
  styleUrls: ['./service-di.component.scss']
})
export class ServiceDiComponent implements OnInit {
  foodService: FoodService;
  foodList: Array<string>;

  constructor(foodService: FoodService) {
    this.foodService = foodService;
  }

  ngOnInit() {

  }

  onGetFoodClick() {
    this.foodList = this.foodService.getFood();
  }
}
