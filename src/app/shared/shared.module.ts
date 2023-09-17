import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDownloaderComponent } from './resume/resume-downloader.component';
import { TranslocoRootModule } from '../transloco-root.module';
import { MainTitleComponent } from './main-title/main-title.component';

@NgModule({
  declarations: [ResumeDownloaderComponent, MainTitleComponent],
  imports: [CommonModule, TranslocoRootModule],
  exports: [ResumeDownloaderComponent, MainTitleComponent],
})
export class SharedModule {}
