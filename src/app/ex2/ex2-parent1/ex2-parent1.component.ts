import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Ex2Child1Component } from '../ex2-child1/ex2-child1.component';

@Component({
  selector: 'app-ex2-parent1',
  templateUrl: './ex2-parent1.component.html',
  styleUrls: ['./ex2-parent1.component.css']
})
export class Ex2Parent1Component implements OnInit {

  @ViewChild(Ex2Child1Component) ex2Child1;

  message: string;

  constructor() { }

  ngOnInit() {
    this.updateMessageFromEx2Child1Component();
  }

  public updateMessageFromEx2Child1Component() {
    this.message = this.ex2Child1.message;
  }
}
