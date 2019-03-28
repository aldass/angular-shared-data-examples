import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-ex2-child1',
  templateUrl: './ex2-child1.component.html',
  styleUrls: ['./ex2-child1.component.css']
})
export class Ex2Child1Component implements OnInit, AfterViewInit {

  public message: string = 'This is Luke, who is my father? ' + Date.now();

  constructor() { }

  ngOnInit(): void {
    this.updateMessage();
  }

  ngAfterViewInit(): void {
    // Note that you can't update 'message' in the ngAfterViewInit function b/c
    // it will throw a ExpressionChangedAfterItHasBeenCheckedError exception.
    // Go ahead and try it for yourself (uncomment out the line below)

    // this.updateMessage();
  }

  public updateMessage() {
    this.message = 'This is Luke, who is my father? ' + Date.now();
  }
}
