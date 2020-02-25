import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../../models/userModel';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input()
  user: UserModel;

  constructor() { }

  ngOnInit() {
  }

}
