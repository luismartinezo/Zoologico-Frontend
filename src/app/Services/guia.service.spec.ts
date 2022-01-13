/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GuiaService } from './guia.service';

describe('Service: Guia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuiaService]
    });
  });

  it('should ...', inject([GuiaService], (service: GuiaService) => {
    expect(service).toBeTruthy();
  }));
});
