import { TestBed } from '@angular/core/testing';

import { DoctorauthgaurdService } from './doctorauthgaurd.service';

describe('DoctorauthgaurdService', () => {
  let service: DoctorauthgaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorauthgaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
