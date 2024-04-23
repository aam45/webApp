import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mode: boolean = false;

  constructor() {}

  public isLightMode(mode: boolean): void {
    this.mode = mode;
  }
}
