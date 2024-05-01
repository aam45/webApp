import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDownloaderComponent } from './resume/resume-downloader.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { TranslocoDirective } from '@ngneat/transloco';
import { TitleComponent } from './title/title.component';
import { ReadMoreComponent } from './readmore/read-more.component';
import { ReadingTimeComponent } from './reading-time/reading-time.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ContentFilterComponent } from './content-filter/content-filter.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ResumeDownloaderComponent, MainTitleComponent, TitleComponent, ReadMoreComponent, ReadingTimeComponent, SearchbarComponent, ContentFilterComponent],
    imports: [CommonModule, TranslocoDirective, FormsModule],
  exports: [ResumeDownloaderComponent, MainTitleComponent, TitleComponent, ReadMoreComponent, SearchbarComponent, ContentFilterComponent],
})
export class SharedModule {}
