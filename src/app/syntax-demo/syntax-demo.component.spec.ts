import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntaxDemoComponent } from './syntax-demo.component';

describe('SyntaxDemoComponent', () => {
  let component: SyntaxDemoComponent;
  let fixture: ComponentFixture<SyntaxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyntaxDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntaxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
