import { Component, OnInit } from '@angular/core';
import { Ex4SharedDataService } from '../ex4-shared-data-service/ex4-shared-data.service';

@Component({
  selector: 'app-ex4-stranger1',
  templateUrl: './ex4-stranger1.component.html',
  styleUrls: ['./ex4-stranger1.component.css']
})
export class Ex4Stranger1Component implements OnInit {

  public message: string;

  constructor(private sharedDataService: Ex4SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.currentMessage.subscribe(msg => this.message = msg);
  }

  public changeMessage() {
    this.sharedDataService.changeMessage(`This message was sent from Stranger1 ${Date.now()}`);
  }

}
