import { TestBed } from '@angular/core/testing';

import { LogicProvider } from './logic.service';

describe('LogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogicProvider = TestBed.get(LogicProvider);
    expect(service).toBeTruthy();
  });
});
