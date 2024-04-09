import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from '../portfolio';
import { TranslationsService } from '../../../core/translations.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css'],
})
export class PortfolioItemComponent implements OnInit {
  @Input() public i18nPath!: string;
  public portfolios: Array<Portfolio> = [];

  constructor(private readonly transloco: TranslationsService) {}

  public ngOnInit(): void {
    this.portfolios = this.transloco.buildUpInterface<Array<Portfolio>>(
      this.i18nPath,
      'project',
      6
    );
  }
}
