import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStatsComponent } from './about-stats.component';

describe('AboutStatsComponent', () => {
  let component: AboutStatsComponent;
  let fixture: ComponentFixture<AboutStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutStatsComponent]
    });
    fixture = TestBed.createComponent(AboutStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
