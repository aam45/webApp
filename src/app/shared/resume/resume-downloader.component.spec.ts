import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDownloaderComponent } from './resume-downloader.component';

describe('MyComponentComponent', () => {
  let component: ResumeDownloaderComponent;
  let fixture: ComponentFixture<ResumeDownloaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeDownloaderComponent],
    });
    fixture = TestBed.createComponent(ResumeDownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
