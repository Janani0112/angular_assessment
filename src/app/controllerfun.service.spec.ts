import { TestBed } from '@angular/core/testing';

import { ControllerfunService } from './controllerfun.service';

describe('ControllerfunService', () => {
  let service: ControllerfunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControllerfunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
