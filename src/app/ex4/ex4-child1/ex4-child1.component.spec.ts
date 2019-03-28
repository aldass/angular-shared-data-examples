import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4Child1Component } from './ex4-child1.component';
import { Ex4SharedDataService } from '../ex4-shared-data-service/ex4-shared-data.service';

describe('Ex4Child1Component', () => {
  let component: Ex4Child1Component;
  let fixture: ComponentFixture<Ex4Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex4Child1Component ],
      providers: [Ex4SharedDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex4Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
