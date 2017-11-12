import { TestBed, inject } from '@angular/core/testing';

import { SearchProfileService } from './search-profile.service';

describe('SearchProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchProfileService]
    });
  });

  it('should be created', inject([SearchProfileService], (service: SearchProfileService) => {
    expect(service).toBeTruthy();
  }));
});
