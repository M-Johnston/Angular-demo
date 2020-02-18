import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TrelloItem} from '../../models/trelloItem';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})

export class InfoModalComponent {
  originalMessage: TrelloItem;

  constructor(
    public dialogRef: MatDialogRef<InfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TrelloItem) {
    this.originalMessage = new TrelloItem(data.id, data.title, data.description);
  }

  onNoClick(): void {
    this.dialogRef.close(this.originalMessage);
  }

}
