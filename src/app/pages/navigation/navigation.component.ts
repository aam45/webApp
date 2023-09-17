import { Component } from '@angular/core';
import { NavigationService } from '../../core/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  selectedTab: string = 'home';

  constructor(private readonly navigationService: NavigationService) {}

  public navigateToHome() {
    this.selectedTab = 'home';
    this.navigationService.home();
  }

  public navigateToAbout() {
    this.selectedTab = 'about';
    this.navigationService.about();
  }

  public navigateToPortfolio() {
    this.selectedTab = 'portfolio';
    this.navigationService.portfolio();
  }

  public navigateToBlogs() {
    this.selectedTab = 'blogs';
    this.navigationService.blogs();
  }

  public navigateToContact() {
    this.selectedTab = 'contact';
    this.navigationService.contact();
  }

  public navigateToEmpty() {
    this.navigationService.notFound();
  }
}
