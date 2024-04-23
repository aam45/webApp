import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingTimeComponent } from './reading-time.component';

describe('ReadingTimeComponent', () => {
  let component: ReadingTimeComponent;
  let fixture: ComponentFixture<ReadingTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadingTimeComponent]
    });
    fixture = TestBed.createComponent(ReadingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
