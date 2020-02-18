import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tutorial-wizard',
  templateUrl: './tutorial-wizard.component.html',
  styleUrls: ['./tutorial-wizard.component.scss']
})
export class TutorialWizardComponent implements OnInit {
  isLinear = false;
  stepControl: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.stepControl = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
