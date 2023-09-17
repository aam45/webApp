import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutItemsComponent } from './about-items.component';

describe('AboutItemsComponent', () => {
  let component: AboutItemsComponent;
  let fixture: ComponentFixture<AboutItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutItemsComponent]
    });
    fixture = TestBed.createComponent(AboutItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
