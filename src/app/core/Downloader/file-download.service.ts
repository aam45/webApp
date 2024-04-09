import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor() {
  }

  downloadLocalFile(filePath: string): Observable<Blob> {
    return new Observable<Blob>(observer => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', filePath, true);
      xhr.responseType = 'blob';

      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            observer.next(xhr.response);
            observer.complete();
          } else {
            observer.error(xhr.statusText);
          }
        }
      };

      xhr.send();
    });
  }
}
