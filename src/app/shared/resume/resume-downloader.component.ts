import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-downloader',
  templateUrl: './resume-downloader.component.html',
  styleUrls: ['./resume-downloader.component.css'],
})
export class ResumeDownloaderComponent {
  @Input() i18nPath!: string;
}
