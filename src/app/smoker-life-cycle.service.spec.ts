import { TestBed, inject } from '@angular/core/testing';
import { SmokerLifeCycleService } from './smoker-life-cycle.service';
import { Observable, Scheduler } from 'rxjs';
import { async } from 'rxjs/scheduler/async';
import 'rxjs/add/observable/of';




describe('LifeCycleService', () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [  ]
    });
    service = new SmokerLifeCycleService();
  });

  it('should be created', inject([SmokerLifeCycleService], (_service: SmokerLifeCycleService) => {
    expect(_service).toBeTruthy();
  }));

  it('Smoker should smoke', () => {
      spyOn (service, 'smokeACigaret').and.returnValue(Observable.of('PFF', async));
        service.smokeHabit(Observable.of('Test smoker life')).subscribe((result) => {
        expect(result).toBeTruthy();
      });
  });

  class TestSmokerLifeCycleService extends SmokerLifeCycleService {
    constructor() {
      super();
    }
  }


});
