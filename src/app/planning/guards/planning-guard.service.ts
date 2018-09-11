import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate } from '@angular/router';
import {PlanningFormComponent} from '../planning-form/planning-form.component';

@Injectable()
export class PlanningGuard implements CanActivate, CanActivateChild, CanDeactivate<PlanningFormComponent> {

  canActivate() {
    console.log('i am checking to see if you are logged in');
    return prompt('Enter password') === '0000';
  }

  canActivateChild() {
    console.log('checking child route access');
    return prompt('Enter password') === '1111';
  }

  canDeactivate(component: PlanningFormComponent ) {
    return prompt('Enter password') === '0000';
  }

}
