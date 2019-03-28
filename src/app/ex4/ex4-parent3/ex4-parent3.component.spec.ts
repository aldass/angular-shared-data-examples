import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4Parent3Component } from './ex4-parent3.component';
import { Ex4SharedDataService } from '../ex4-shared-data-service/ex4-shared-data.service';

describe('Ex4Parent3Component', () => {
  let component: Ex4Parent3Component;
  let fixture: ComponentFixture<Ex4Parent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex4Parent3Component],
      providers: [Ex4SharedDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex4Parent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
