import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4Stranger1Component } from './ex4-stranger1.component';
import { Ex4SharedDataService } from '../ex4-shared-data-service/ex4-shared-data.service';

describe('Ex4Stranger1Component', () => {
  let component: Ex4Stranger1Component;
  let fixture: ComponentFixture<Ex4Stranger1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex4Stranger1Component ],
      providers: [Ex4SharedDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex4Stranger1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
