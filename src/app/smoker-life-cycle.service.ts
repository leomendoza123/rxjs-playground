import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class SmokerLifeCycleService {

  constructor() {
  }

  private Smoker: Observable<string> = new Observable((subscriber) => {
    setInterval(() => {
      subscriber.next(`I want to smoke`);
    }, 2000);
  });

  public smokeACigaret(): Observable<string> {
    return new Observable((subscriber) => {
      setTimeout ( () => {
      subscriber.next('PFF PFF');
      }, 3000);
    });
  }

  public smokeHabit(smoker$: Observable<string>) {
    return smoker$.
      map( (smoker: string) => {
        const smokeSubscriber = this.smokeACigaret().subscribe( (smoke) => {
          console.log ('fire and ' + smoke);
          if (smokeSubscriber) {
            smokeSubscriber.unsubscribe();
          } else {
            console.log('oh shut!');
          }
        });
        return smoker;
      })
    ;
  }

  public createSmoker (): Observable<string> {
    return this.Smoker.pipe(
      (smoker) => this.smokeHabit(smoker)
    );
  }

}
