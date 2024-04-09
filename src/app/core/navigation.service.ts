import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../app.constants';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  public constructor(
    private readonly router: Router,
    private readonly zone: NgZone
  ) {}

  public home(): void {
    this.zone.run(() => this.router.navigate([APP_ROUTES.HOME]));
  }

  public about(): void {
    this.zone.run(() => this.router.navigate([APP_ROUTES.ABOUT]));
  }

  public portfolio(): void {
    this.zone.run(() => this.router.navigate([APP_ROUTES.PORTFOLIO]));
  }

  public blogs(): void {
    this.zone.run(() => this.router.navigate([APP_ROUTES.BLOGS]));
  }

  public blogDetails(id: number): void {
    this.zone.run(() =>
      this.router.navigate([APP_ROUTES.BLOGS_DETAILS], { queryParams: { id } })
    );
  }

  public contact(): void {
    this.zone.run(() => this.router.navigate([APP_ROUTES.CONTACT]));
  }

  public notFound(): void {
    this.zone.run(() => this.router.navigate([APP_ROUTES.NOT_FOUND]));
  }
}
