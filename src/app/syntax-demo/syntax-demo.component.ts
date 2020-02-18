import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-syntax-demo',
  templateUrl: './syntax-demo.component.html',
  styleUrls: ['./syntax-demo.component.scss']
})
export class SyntaxDemoComponent implements OnInit {
  @Input()
  Title: string;
  @Input()
  SubTitle: string;
  @Input()
  Body: string;
  @Input()
  FeatureImage: string;

  constructor() {
  }

  ngOnInit() {
  }

}
