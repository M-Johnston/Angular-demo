import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../models/userModel';

@Component({
  selector: 'app-surge-base',
  templateUrl: './surge-base.component.html',
  styleUrls: ['./surge-base.component.scss']
})
export class SurgeBaseComponent implements OnInit {
  activeTab: string;
  activeTabItem: UserModel;

  public userItems = [new UserModel('M Johnston', '/assets/avatar.png', 'Presenting'),
    new UserModel('N Jooste', '/assets/avatar.png', 'Starving...'),
    new UserModel('M Wheeler', '/assets/avatar.png', 'At Deloitte'),
    new UserModel('N le Roux', '/assets/avatar.png', 'At the chiropractor'),
    new UserModel('J de Klerk', '/assets/avatar.png', 'Researching Algorithms')];
  activeUser: UserModel = new UserModel('', '', '');

  constructor() {
  }

  ngOnInit() {
    if (this.activeTab == null || this.activeTab == ''){
      this.activeTab = 'Users';
    }
    this.activeTabItem = null;
  }

  setActiveTabItem(item: UserModel) {
    this.activeTabItem = item;
  }

  onUserClicked(name: UserModel) {
    this.activeUser = name;
  }

}
