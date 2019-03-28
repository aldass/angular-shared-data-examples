import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4Parent2Component } from './ex4-parent2.component';
import { Ex4Child2Component } from '../ex4-child2/ex4-child2.component';
import { Ex4SharedDataService } from '../ex4-shared-data-service/ex4-shared-data.service';

describe('Ex4Parent2Component', () => {
  let component: Ex4Parent2Component;
  let fixture: ComponentFixture<Ex4Parent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex4Parent2Component, Ex4Child2Component ],
      providers: [Ex4SharedDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex4Parent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
