import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent {
  isDarkMode: boolean = false;
  @Output() isLightMode: EventEmitter<boolean> = new EventEmitter<boolean>();

  public toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.isLightMode.emit(this.isDarkMode);
  }
}
