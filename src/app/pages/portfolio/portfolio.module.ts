import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { TranslocoRootModule } from '../../transloco-root.module';
import { SharedModule } from '../../shared/shared.module';
import { TRANSLOCO_SCOPE_PORTFOLIO_PROVIDER } from './portfolio-scope.transloco';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';

@NgModule({
  declarations: [PortfolioComponent, PortfolioItemComponent],
  imports: [CommonModule, TranslocoRootModule, SharedModule, NgOptimizedImage],
  providers: [TRANSLOCO_SCOPE_PORTFOLIO_PROVIDER],
})
export class PortfolioModule {}
