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
  searchValue: string;
  public filteredUserItems;

  public userItems = [new UserModel('M Johnston', '/assets/avatar.png', 'Presenting'),
    new UserModel('N Jooste', '/assets/avatar.png', 'Starving...'),
    new UserModel('M Wheeler', '/assets/avatar.png', 'At Deloitte'),
    new UserModel('N le Roux', '/assets/avatar.png', 'At the chiropractor'),
    new UserModel('J de Klerk', '/assets/avatar.png', 'Researching Algorithms')];
  activeUser: UserModel = new UserModel('', '', '');

  constructor() {
  }

  ngOnInit() {
    this.searchValue = '';
    this.filteredUserItems = this.userItems;
    if (this.activeTab == null || this.activeTab === '') {
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

  onTabItemClicked(tab: string) {
    this.activeTab = tab;
  }

  onSearchUser(name: string) {
    this.filteredUserItems = this.userItems.filter(x => x.name.includes(name));
  }

}
