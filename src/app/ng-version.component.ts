import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-version',
  template: `<h1>{{title}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class NgVersionComponent  {
  @Input() title: string;
}
