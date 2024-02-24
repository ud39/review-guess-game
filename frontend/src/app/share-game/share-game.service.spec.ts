import { TestBed } from '@angular/core/testing';

import { ShareGameService } from './share-game.service';

describe('ShareGameService', () => {
  let service: ShareGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
