import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../core/NavigationService/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  selectedTab!: string;

  constructor(
    private readonly navigationService: NavigationService,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    this.setActive();
  }

  public navigateToHome() {
    this.setActive();
    this.navigationService.home();
  }

  public navigateToAbout() {
    this.setActive();
    this.navigationService.about();
  }

  public navigateToPortfolio() {
    this.setActive();
    this.navigationService.portfolio();
  }

  public navigateToBlogs() {
    this.selectedTab = 'blogs';
    this.navigationService.blogs();
  }

  public navigateToContact() {
    this.setActive();
    this.navigationService.contact();
  }

  public navigateToEmpty() {
    this.navigationService.notFound();
  }

  private setActive() {
    setTimeout(() => {
      this.selectedTab = this.router.url.replace('/', '');
    }, 100);
  }
}
