import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4Component } from './ex4.component';
import { Ex4Parent1Component } from './ex4-parent1/ex4-parent1.component';
import { Ex4Parent2Component } from './ex4-parent2/ex4-parent2.component';
import { Ex4Parent3Component } from './ex4-parent3/ex4-parent3.component';
import { Ex4Child1Component } from './ex4-child1/ex4-child1.component';
import { Ex4Child2Component } from './ex4-child2/ex4-child2.component';
import { Ex4Stranger1Component } from './ex4-stranger1/ex4-stranger1.component';
import { Ex4SharedDataService } from './ex4-shared-data-service/ex4-shared-data.service';

describe('Ex4Component', () => {
  let component: Ex4Component;
  let fixture: ComponentFixture<Ex4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Ex4Component,
        Ex4Parent1Component,
        Ex4Parent2Component,
        Ex4Parent3Component,
        Ex4Child1Component,
        Ex4Child2Component,
        Ex4Stranger1Component ],
        providers: [Ex4SharedDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
