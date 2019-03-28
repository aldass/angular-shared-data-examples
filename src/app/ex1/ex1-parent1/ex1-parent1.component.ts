import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ex1-parent1',
  templateUrl: './ex1-parent1.component.html',
  styleUrls: ['./ex1-parent1.component.css']
})
export class Ex1Parent1Component implements OnInit, AfterViewInit {

  public ex1Parent1Msg = 'This is the initial value';

  constructor() { }

  ngOnInit() {
    // If you didn't call this method here it would take the initial value of 'ex1Parent1Msg'
    // Go ahead and try it for yourself (comment out the line below)
    this.updateMessage();
  }

  ngAfterViewInit(): void {
    // Note that you can't update 'ex1Parent1Msg' in the ngAfterViewInit function b/c
    // it will throw a ExpressionChangedAfterItHasBeenCheckedError exception.
    // Go ahead and try it for yourself (uncomment out the line below)

    // this.updateMessage();
  }

  public updateMessage() {
    this.ex1Parent1Msg = 'Luke, I am you father! (and your mother is worried) ' + Date.now();
  }
}
