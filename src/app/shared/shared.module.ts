import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDownloaderComponent } from './resume/resume-downloader.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { TranslocoDirective } from '@ngneat/transloco';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [ResumeDownloaderComponent, MainTitleComponent, TitleComponent],
  imports: [CommonModule, TranslocoDirective],
  exports: [ResumeDownloaderComponent, MainTitleComponent, TitleComponent],
})
export class SharedModule {}
