import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {
  }

  getFood(): Array<string> {
    return ['Burger', 'Pizza', 'Chicken'];
  }
}
