import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3Component } from './ex3.component';
import { Ex3Parent1Component } from './ex3-parent1/ex3-parent1.component';
import { Ex3Child1Component } from './ex3-child1/ex3-child1.component';

describe('Ex3Component', () => {
  let component: Ex3Component;
  let fixture: ComponentFixture<Ex3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex3Component, Ex3Parent1Component, Ex3Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
