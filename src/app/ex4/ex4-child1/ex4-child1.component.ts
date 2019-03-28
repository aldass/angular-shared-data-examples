import { Component, OnInit, Input } from '@angular/core';
import { Ex4SharedDataService } from '../ex4-shared-data-service/ex4-shared-data.service';

@Component({
  selector: 'app-ex4-child1',
  templateUrl: './ex4-child1.component.html',
  styleUrls: ['./ex4-child1.component.css']
})
export class Ex4Child1Component implements OnInit {

  @Input() ex4Child1Message: string;

  constructor(private sharedDataService: Ex4SharedDataService) { }

  ngOnInit() {
  }

  public changeMessage() {
    this.sharedDataService.changeMessage(`This message was sent from Child1 ${Date.now()}`);
  }
}
