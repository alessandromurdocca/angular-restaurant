import { TestBed } from '@angular/core/testing';

import { NumberAnimationService } from './number-animation.service';

describe('NumberAnimationService', () => {
  let service: NumberAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
