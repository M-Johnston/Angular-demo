import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialWizardComponent } from './tutorial-wizard.component';

describe('TutorialWizardComponent', () => {
  let component: TutorialWizardComponent;
  let fixture: ComponentFixture<TutorialWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
