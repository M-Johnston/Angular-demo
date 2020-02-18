import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-data-bindings',
  templateUrl: './data-bindings.component.html',
  styleUrls: ['./data-bindings.component.scss']
})
export class DataBindingsComponent implements OnInit {
  @Input()
  isRouteDemo = false;
  inputValue = '';
  bidirectionalInputValue = '';

  constructor(public route: ActivatedRoute, public router: Router) {
  }

  ngOnInit() {
  }

  clear() {
    this.inputValue = '';
    this.router.navigate(['/home']);
  }

  onChange(event: Event) {
    this.inputValue = event.target['value'];
  }
}
