import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-tag',
  templateUrl: './custom-tag.component.html',
  styleUrls: ['./custom-tag.component.scss']
})
export class CustomTagComponent implements OnInit {
  @Input()
  Enabled: boolean;
  @Input()
  text: string;
  constructor() { }

  ngOnInit() {
  }

}
