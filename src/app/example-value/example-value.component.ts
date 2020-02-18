import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-example-value',
  templateUrl: './example-value.component.html',
  styleUrls: ['./example-value.component.scss', '../app.component.scss']
})
export class ExampleValueComponent implements OnInit {
  queryParam: string;

  constructor(public route: ActivatedRoute, router: Router) {
  }

  ngOnInit() {
    this.queryParam = this.route.snapshot.paramMap.get('value');
  }

}
