import { Component, OnInit } from '@angular/core';
import { TRANSLOCO_ALIAS_HOME } from './home-scope.transloco';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public readonly i18nPath: string = `${TRANSLOCO_ALIAS_HOME}.pages.home`;

  public constructor(private readonly translocoService: TranslocoService) {}

  public ngOnInit(): void {
    console.log(
      this.translocoService.translate(`${this.i18nPath}.developer.greetings`)
    );
  }
}
