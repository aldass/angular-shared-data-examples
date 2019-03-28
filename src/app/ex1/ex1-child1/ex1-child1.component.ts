import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ex1-child1',
  templateUrl: './ex1-child1.component.html',
  styleUrls: ['./ex1-child1.component.css']
})
export class Ex1Child1Component implements OnInit {

  @Input() ex1Child1Msg: string;

  constructor() { }

  ngOnInit() { }

}
