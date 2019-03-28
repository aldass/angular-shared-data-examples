import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3-parent1',
  templateUrl: './ex3-parent1.component.html',
  styleUrls: ['./ex3-parent1.component.css']
})
export class Ex3Parent1Component implements OnInit {

  public message: string;

  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.message = $event;
  }
}
