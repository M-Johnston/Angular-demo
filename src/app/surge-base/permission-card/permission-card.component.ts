import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permission-card',
  templateUrl: './permission-card.component.html',
  styleUrls: ['./permission-card.component.scss']
})
export class PermissionCardComponent implements OnInit {

  permissions: string[] = ['Permission 1', 'Permission 2', 'Permission 3', 'Permission 4', 'Permission 5'];

  constructor() { }

  ngOnInit() {
  }

}
