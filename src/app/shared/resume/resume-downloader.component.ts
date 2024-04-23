import {Component, Input} from '@angular/core';
import {FileDownloadService} from "../../core/Downloader/file-download.service";

@Component({
  selector: 'app-resume-downloader',
  templateUrl: './resume-downloader.component.html',
  styleUrls: ['./resume-downloader.component.scss'],
})
export class ResumeDownloaderComponent {
  @Input() i18nPath!: string;

  constructor(private fileDownloadService: FileDownloadService) {
  }

  downloadFile(): void {
    const filePath: string = 'assets/sample.pdf'; // Path to your local PDF file

    this.fileDownloadService.downloadLocalFile(filePath).subscribe(blob => {
      const link: HTMLAnchorElement = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'sample.pdf'; // Set the file name
      link.click();
    });
  }
}
