import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeBaseComponent } from './surge-base.component';

describe('SurgeBaseComponent', () => {
  let component: SurgeBaseComponent;
  let fixture: ComponentFixture<SurgeBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgeBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
