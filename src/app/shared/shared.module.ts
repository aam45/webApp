import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDownloaderComponent } from './resume/resume-downloader.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { TranslocoDirective } from '@ngneat/transloco';
import { TitleComponent } from './title/title.component';
import { ReadMoreComponent } from './readmore/read-more.component';
import { ReadingTimeComponent } from './reading-time/reading-time.component';

@NgModule({
  declarations: [ResumeDownloaderComponent, MainTitleComponent, TitleComponent, ReadMoreComponent, ReadingTimeComponent],
  imports: [CommonModule, TranslocoDirective],
    exports: [ResumeDownloaderComponent, MainTitleComponent, TitleComponent, ReadMoreComponent],
})
export class SharedModule {}
