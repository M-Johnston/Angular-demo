import { Component, OnInit } from '@angular/core';

export interface PermissionItem {
  name: string;
  description: string;
}

@Component({
  selector: 'app-access-card',
  templateUrl: './access-card.component.html',
  styleUrls: ['./access-card.component.scss']
})
export class AccessCardComponent implements OnInit {

  permissionItems: PermissionItem[] = [
    {
      name: 'Deloitte',
      description: 'Full Access',
    },
    {
      name: 'Engen',
      description: 'Restricted Access',
    },
    {
      name: 'OneView',
      description: 'Restricted Access',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
