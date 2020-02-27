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

  public userItems = [new UserModel('M Johnston', 'michael@email.com', 'Presenting', '012 345 6789'),
    new UserModel('N Jooste', 'ruan@email.com', 'Starving...', '012 345 6789'),
    new UserModel('M Wheeler', 'micheal@email.com', 'At Deloitte', '012 345 6789'),
    new UserModel('N le Roux', 'nic@email.com', 'At the chiropractor', '012 345 6789'),
    new UserModel('J de Klerk', 'james@email.com', 'Researching Algorithms', '012 345 6789')];
  activeUser: UserModel = new UserModel('', '', '', '');

  constructor() {
  }

  ngOnInit() {
    this.searchValue = '';
    this.filteredUserItems = this.userItems;
    if (this.activeTab == null || this.activeTab === '') {
      this.activeTab = 'Users';
    }
    this.activeTabItem = this.userItems[0];
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
    this.filteredUserItems = this.userItems.filter(x => x.name.toLowerCase().includes(name.toLowerCase()));
  }

}
