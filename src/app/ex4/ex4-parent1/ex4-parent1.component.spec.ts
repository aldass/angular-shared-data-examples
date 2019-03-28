import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4Parent1Component } from './ex4-parent1.component';
import { Ex4SharedDataService } from '../ex4-shared-data-service/ex4-shared-data.service';
import { Ex4Child1Component } from '../ex4-child1/ex4-child1.component';

describe('Ex4Parent1Component', () => {
  let component: Ex4Parent1Component;
  let fixture: ComponentFixture<Ex4Parent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex4Parent1Component, Ex4Child1Component ],
      providers: [Ex4SharedDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex4Parent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
