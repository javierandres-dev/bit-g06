import { TestBed } from '@angular/core/testing';

import { RegalosService } from './regalos.service';

describe('RegalosService', () => {
  let service: RegalosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegalosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
