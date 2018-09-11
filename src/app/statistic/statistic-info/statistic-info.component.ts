import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {getStatisticFullSelector, StatisticState} from '../reducers';
import {Observable, Subscription} from 'rxjs';
import {IMonthDetail} from '../../shared/models/statistic.model';
import {GetStatisticExpandedById} from '../actions/statistic-actions';
import { ActivatedRoute } from '@angular/router';
import {SubscribeOnObservable} from 'rxjs/internal-compatibility';

@Component({
  templateUrl: 'statistic-info.component.html'
})
export class StatisticInfoComponent implements OnInit {
  statisticFull: Observable<IMonthDetail>;
  routerSubscription: Subscription;
  constructor(private store: Store<StatisticState>, private router: ActivatedRoute) {
    this.statisticFull = store.pipe(select(getStatisticFullSelector));
  }
  ngOnInit() {
    this.routerSubscription = this.router.params.subscribe(params => this.store.dispatch(new GetStatisticExpandedById(params.id)));
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
