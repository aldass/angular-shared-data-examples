import { Component, OnInit } from '@angular/core';
import { Ex4SharedDataService } from '../ex4-shared-data-service/ex4-shared-data.service';

@Component({
  selector: 'app-ex4-parent1',
  templateUrl: './ex4-parent1.component.html',
  styleUrls: ['./ex4-parent1.component.css']
})
export class Ex4Parent1Component implements OnInit {

  public message: string;

  constructor(private sharedDataSevice: Ex4SharedDataService) { }

  ngOnInit() {
    this.sharedDataSevice.currentMessage.subscribe(msg => this.message = msg);
  }
}
