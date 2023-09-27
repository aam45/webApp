import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '../../shared/shared.module';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { TranslocoDirective } from '@ngneat/transloco';
import { TranslocoRootModule } from '../../transloco-root.module';

@NgModule({
  declarations: [PortfolioComponent, PortfolioItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranslocoRootModule,
    NgOptimizedImage,
    TranslocoDirective,
  ],
})
export class PortfolioModule {}
