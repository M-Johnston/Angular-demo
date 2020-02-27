import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TrelloItem} from "../../../models/trelloItem";
import {UserModel} from "../../../models/userModel";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  originalUser: UserModel;

  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserModel) {
    this.originalUser = new UserModel(data.name, data.email, data.description, data.phoneNumber);
  }

  ngOnInit() {
  }

}
