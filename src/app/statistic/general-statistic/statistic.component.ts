import {Component, OnInit} from '@angular/core';
import { StatisticService } from '../../shared/services/statistic.service';
import { IMonthShort } from '../../shared/models/statistic.model';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as fromStatistics from '../reducers';
import {GetStatisticShort} from '../actions/statistic-actions';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit{
  public statistic$: Observable<IMonthShort[]>;


  public paramval = true;

  constructor(private statisticService: StatisticService,
              private store: Store<fromStatistics.State>) {
    this.statistic$ = store.pipe(select(fromStatistics.getStatisticsSelector));
  }

  ngOnInit() {
    this.store.dispatch(new GetStatisticShort())
  }
}
