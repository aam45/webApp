import {Component} from '@angular/core';

@Component({
  selector: 'app-content-filter',
  templateUrl: './content-filter.component.html',
  styleUrls: ['./content-filter.component.scss']
})
export class ContentFilterComponent {
  isOpen = false;
  options = ['Instagram', 'Twitter', 'Github', 'Youtube'];
  selectedOption = 'Youtube';

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string): void {
    this.selectedOption = option;
    this.isOpen = false;
  }
}
