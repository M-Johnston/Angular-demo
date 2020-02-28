import {Component, Input, OnInit} from '@angular/core';
import {FoodService} from '../../services/food/food.service';

@Component({
  selector: 'app-syntax-demo',
  templateUrl: './syntax-demo.component.html',
  styleUrls: ['./syntax-demo.component.scss']
})
export class SyntaxDemoComponent implements OnInit {
  @Input()
  Title: string;
  @Input()
  SubTitle: string;
  @Input()
  Body: string;
  @Input()
  FeatureImage: string;

  showFood = false;
  foodList: Array<string>;

  constructor(private foodService: FoodService) {
  }

  ngOnInit() {
    this.foodList = this.foodService.getFood();
  }

  onShowFoodClick() {
    this.showFood = true;
  }

}
