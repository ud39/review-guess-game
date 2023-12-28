import { TestBed } from '@angular/core/testing';

import { ReviewSelectionService } from './review-selection.service';

describe('ReviewSelectionService', () => {
  let service: ReviewSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
