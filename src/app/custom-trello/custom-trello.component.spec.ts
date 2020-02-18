import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTrelloComponent } from './custom-trello.component';

describe('CustomTrelloComponent', () => {
  let component: CustomTrelloComponent;
  let fixture: ComponentFixture<CustomTrelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTrelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
