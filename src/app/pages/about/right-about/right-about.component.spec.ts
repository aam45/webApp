import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightAboutComponent } from './right-about.component';

describe('RightAboutComponent', () => {
  let component: RightAboutComponent;
  let fixture: ComponentFixture<RightAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightAboutComponent]
    });
    fixture = TestBed.createComponent(RightAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
