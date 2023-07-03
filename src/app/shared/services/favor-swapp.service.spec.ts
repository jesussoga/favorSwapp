import { TestBed } from '@angular/core/testing';

import { FavorSwappService } from './favor-swapp.service';

describe('FavorSwappService', () => {
  let service: FavorSwappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavorSwappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
