import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate } from '@angular/router';
import {PlanningFormComponent} from '../planning-form/planning-form.component';

@Injectable()
export class PlanningGuard implements CanActivate, CanActivateChild, CanDeactivate<PlanningFormComponent> {

  canActivate() {
    console.log('i am checking to see if you are logged in');
    return true;
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }

  canDeactivate(component: PlanningFormComponent ) {
    return true;
  }

}
