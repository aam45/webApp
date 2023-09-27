import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';
import { TimelineComponent } from './timeline-item/timeline.component';
import { StatsComponent } from './about-stats/stats.component';
import { RightAboutComponent } from './right-about/right-about.component';
import { ProgressBarComponent } from './about-stats/progress-bar/progress-bar.component';
import { AboutItemComponent } from './right-about/about-item/about-item.component';
import { TranslocoRootModule } from '../../transloco-root.module';
import { TimelineItemComponent } from './timeline-item/timeline-item/timeline-item.component';

@NgModule({
  declarations: [
    AboutComponent,
    TimelineComponent,
    TimelineItemComponent,
    StatsComponent,
    RightAboutComponent,
    ProgressBarComponent,
    AboutItemComponent,
  ],
  imports: [CommonModule, SharedModule, TranslocoRootModule, NgOptimizedImage],
})
export class AboutModule {}
