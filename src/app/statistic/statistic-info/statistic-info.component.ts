import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {StatisticState} from '../reducers';

@Component({
  templateUrl: 'statistic-info.component.html'
})
export class StatisticInfoComponent implements OnInit {
  constructor(private store: Store<StatisticState>) {}
  ngOnInit() {}
}
