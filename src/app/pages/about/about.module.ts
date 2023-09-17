import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslocoRootModule } from '../../transloco-root.module';
import { TRANSLOCO_SCOPE_ABOUT_PROVIDER } from './about-scope.transloco';
import { AboutItemsComponent } from './about-items/about-items.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { AboutStatsComponent } from './about-stats/about-stats.component';
import { RightAboutComponent } from './right-about/right-about.component';
import { ProgressBarComponent } from './about-stats/progress-bar/progress-bar.component';
import { AboutItemComponent } from './right-about/about-item/about-item.component';

@NgModule({
  declarations: [AboutComponent, AboutItemsComponent, TimelineItemComponent, AboutStatsComponent, RightAboutComponent, ProgressBarComponent, AboutItemComponent],
  imports: [CommonModule, TranslocoRootModule, SharedModule, NgOptimizedImage],
  providers: [TRANSLOCO_SCOPE_ABOUT_PROVIDER],
})
export class AboutModule {}
