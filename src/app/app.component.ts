import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = `Angular v${VERSION.major}.${VERSION.minor}.${VERSION.patch}`;
}
