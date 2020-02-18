import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material';
import {InfoModalComponent} from '../info-modal/info-modal.component';
import {TrelloItem} from '../../models/trelloItem';

@Component({
  selector: 'app-custom-trello',
  templateUrl: './custom-trello.component.html',
  styleUrls: ['./custom-trello.component.scss']
})
export class CustomTrelloComponent implements OnInit {
  private todo: TrelloItem[];
  private done: TrelloItem[];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.todo = [
      new TrelloItem(0, 'Scaffolding', 'Scaffolding description'),
      new TrelloItem(1, 'Integration', 'Integration description'),
      new TrelloItem(2, 'Services', 'Services description'),
      new TrelloItem(3, 'Tests', 'Tests description')
    ];

    this.done = [
      new TrelloItem(4, 'Check e-mail', 'Check e-mail description')
    ];
  }

  drop(event: CdkDragDrop<TrelloItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  openDialog(item: TrelloItem): void {
    const dialogRef = this.dialog.open(InfoModalComponent, {
      width: '550px',
      data: {item}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        console.log(result);
        let index = this.todo.findIndex(i => i.id === result.id);
        if (index >= 0) {
          this.todo[index] = result;
        } else {
          index = this.done.findIndex(i => i.id === result.id);
          this.done[index] = result;
        }
      }
    });
  }
}
