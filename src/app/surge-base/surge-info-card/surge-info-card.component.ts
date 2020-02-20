import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../../models/userModel';

@Component({
  selector: 'app-surge-info-card',
  templateUrl: './surge-info-card.component.html',
  styleUrls: ['./surge-info-card.component.scss']
})
export class SurgeInfoCardComponent implements OnInit {
  @Input()
  User: UserModel;

  constructor() {
  }

  ngOnInit() {
  }

}
