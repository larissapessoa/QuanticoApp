import { TestBed } from '@angular/core/testing';

import { Firestore } from './firestore.service';

describe('TasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Firestore = TestBed.get(Firestore);
    expect(service).toBeTruthy();
  });
});