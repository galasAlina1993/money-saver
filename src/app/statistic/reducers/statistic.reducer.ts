import {IMonthShort} from '../../shared/models/statistic.model';
import {StatisticActionTypes, StstisticActionsUnion} from '../actions/statistic-actions';

export interface State {
  statistics: IMonthShort[];
}


const initialState: State = {
  statistics: []
};

export function reducer(
  state = initialState,
  action: StstisticActionsUnion): State {
  switch (action.type) {
    case StatisticActionTypes.GetStatisticShortSuccess: {
      return {
        ...state,
        statistics: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
