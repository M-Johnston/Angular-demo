import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeInfoCardComponent } from './surge-info-card.component';

describe('SurgeInfoCardComponent', () => {
  let component: SurgeInfoCardComponent;
  let fixture: ComponentFixture<SurgeInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgeInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgeInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
