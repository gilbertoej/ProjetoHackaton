import { TestBed } from '@angular/core/testing';

import { InstituicoesApiService } from './instituicoes-api.service';

describe('InstituicoesApiService', () => {
  let service: InstituicoesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstituicoesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
