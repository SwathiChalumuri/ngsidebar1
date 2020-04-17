import { TestBed } from '@angular/core/testing';

import { Serv1Service } from './serv1.service';

describe('Serv1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Serv1Service = TestBed.get(Serv1Service);
    expect(service).toBeTruthy();
  });
});
