import { TestBed } from '@angular/core/testing';

import { BaseGuardGuard } from './base-guard.guard';

describe('BaseGuardGuard', () => {
  let guard: BaseGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BaseGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
