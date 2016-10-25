/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FireEventService } from './fire-event.service';

describe('Service: FireEvent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireEventService]
    });
  });

  it('should ...', inject([FireEventService], (service: FireEventService) => {
    expect(service).toBeTruthy();
  }));
});
