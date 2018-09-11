import {IMonthDetail, IMonthShort} from '../../shared/models/statistic.model';
import {StatisticActionTypes, StatisticActionsUnion} from '../actions/statistic-actions';

export interface State {
  statistics: IMonthShort[];
  statisticFull: IMonthDetail;
}


const initialState: State = {
  statistics: [],
  statisticFull: <IMonthDetail>{}
};

export function reducer(
  state = initialState,
  action: StatisticActionsUnion): State {
  switch (action.type) {
    case StatisticActionTypes.GetStatisticShortSuccess: {
      return {
        ...state,
        statistics: action.payload
      };
    }
    case StatisticActionTypes.GetStatisticExpandedByIdSuccess: {
      return {
        ...state,
        statisticFull: action.payload
      }
    }
    default: {
      return state;
    }
  }
}
