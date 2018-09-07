import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class ReviewResolver implements Resolve<Observable<string>> {
  constructor() {}

  resolve() {
    return of('Hello From Resolver!').pipe(
      delay(2000)
    );
  }
}
