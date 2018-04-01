import { TestBed, inject } from '@angular/core/testing';

import { IzmeniService } from './izmeni.service';

describe('IzmeniService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IzmeniService]
    });
  });

  it('should be created', inject([IzmeniService], (service: IzmeniService) => {
    expect(service).toBeTruthy();
  }));
});
