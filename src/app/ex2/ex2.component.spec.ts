import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2Component } from './ex2.component';
import { Ex2Parent1Component } from './ex2-parent1/ex2-parent1.component';
import { Ex2Child1Component } from './ex2-child1/ex2-child1.component';

describe('Ex2Component', () => {
  let component: Ex2Component;
  let fixture: ComponentFixture<Ex2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex2Component, Ex2Parent1Component, Ex2Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
