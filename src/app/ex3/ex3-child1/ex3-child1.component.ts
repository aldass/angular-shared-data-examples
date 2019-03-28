import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ex3-child1',
  templateUrl: './ex3-child1.component.html',
  styleUrls: ['./ex3-child1.component.css']
})
export class Ex3Child1Component implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();
  public message  = 'Initial msg value.';

  constructor() { }

  ngOnInit() {
    this.updateAndEmitMessage();
  }

  public updateAndEmitMessage() {
    this.message = 'This is Luke, where is my mother? ' + Date.now();
    this.messageEvent.emit(this.message);
  }
}
