import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDownloaderComponent } from './resume/resume-downloader.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { TranslocoDirective } from '@ngneat/transloco';

@NgModule({
  declarations: [ResumeDownloaderComponent, MainTitleComponent],
  imports: [CommonModule, TranslocoDirective],
  exports: [ResumeDownloaderComponent, MainTitleComponent],
})
export class SharedModule {}
