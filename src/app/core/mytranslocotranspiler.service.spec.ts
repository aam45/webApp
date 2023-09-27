import { TestBed } from '@angular/core/testing';

import { MytranslocotranspilerService } from './mytranslocotranspiler.service';

describe('MytranslocotranspilerService', () => {
  let service: MytranslocotranspilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MytranslocotranspilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
