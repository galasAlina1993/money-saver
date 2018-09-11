import {Action} from '@ngrx/store';
import {IMonthDetail, IMonthShort} from '../../shared/models/statistic.model';

export enum StatisticActionTypes {
  GetStatisticShort = '[TravelTypes] Load Statistic requested',
  GetStatisticShortSuccess = '[TravelTypes] Load Statistic succeeded',
  GetStatisticExpandedById = '[TravelTypes] Load Statistic expanded by id requested',
  GetStatisticExpandedByIdSuccess = '[TravelTypes] Load Statistic expanded by id succeeded',
}

export class GetStatisticShort implements Action {
  readonly type = StatisticActionTypes.GetStatisticShort;
  constructor() {}
}

export class GetStatisticShortSuccess implements Action {
  readonly type = StatisticActionTypes.GetStatisticShortSuccess;
  constructor(public payload: IMonthShort[]) {}
}

export class GetStatisticExpandedById implements Action {
  readonly type = StatisticActionTypes.GetStatisticExpandedById;
  constructor(public payload: number) {}
}

export class GetStatisticExpandedByIdSuccess implements Action {
  readonly type = StatisticActionTypes.GetStatisticExpandedByIdSuccess;
  constructor(public payload: IMonthDetail) {}
}

export type StatisticActionsUnion =
  | GetStatisticShort
  | GetStatisticShortSuccess
  | GetStatisticExpandedById
  | GetStatisticExpandedByIdSuccess;
