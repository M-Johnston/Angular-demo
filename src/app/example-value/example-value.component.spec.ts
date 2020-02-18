import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleValueComponent } from './example-value.component';

describe('ExampleValueComponent', () => {
  let component: ExampleValueComponent;
  let fixture: ComponentFixture<ExampleValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
