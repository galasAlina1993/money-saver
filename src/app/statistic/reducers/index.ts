import * as fromRoot from '../../reducers';
import * as fromStatistic from './statistic.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';


export interface StatisticState {
  statisticData: fromStatistic.State
}
export interface State extends fromRoot.State {
  statisticStore: StatisticState;
}

export const reducers: ActionReducerMap<StatisticState> = {
  statisticData: fromStatistic.reducer
};

export const getStatisticState = createFeatureSelector<State, StatisticState>('statisticStore');

export const getStatisticsSelector = createSelector(
  getStatisticState,
  state => state.statisticData.statistics
);
export const getStatisticFullSelector = createSelector(
  getStatisticState,
  state => state.statisticData.statisticFull
);
