import { TestBed } from '@angular/core/testing';

import { MyComponentsService } from './my-components.service';

describe('MyComponentsService', () => {
  let service: MyComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
