import { TestBed } from '@angular/core/testing';

import { ServicostorageService } from './servicostorage.service';

describe('ServicostorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicostorageService = TestBed.get(ServicostorageService);
    expect(service).toBeTruthy();
  });
});
