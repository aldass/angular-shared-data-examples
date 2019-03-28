import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4Child2Component } from './ex4-child2.component';
import { Ex4SharedDataService } from '../ex4-shared-data-service/ex4-shared-data.service';

describe('Ex4Child2Component', () => {
  let component: Ex4Child2Component;
  let fixture: ComponentFixture<Ex4Child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex4Child2Component ],
      providers: [Ex4SharedDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex4Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
