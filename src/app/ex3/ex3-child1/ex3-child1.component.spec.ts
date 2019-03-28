import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3Child1Component } from './ex3-child1.component';

describe('Ex3Child1Component', () => {
  let component: Ex3Child1Component;
  let fixture: ComponentFixture<Ex3Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex3Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
