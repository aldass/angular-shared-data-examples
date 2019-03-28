import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1Component } from './ex1.component';
import { Ex1Parent1Component } from './ex1-parent1/ex1-parent1.component';
import { Ex1Child1Component } from './ex1-child1/ex1-child1.component';

describe('Ex1Component', () => {
  let component: Ex1Component;
  let fixture: ComponentFixture<Ex1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex1Component, Ex1Parent1Component, Ex1Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
