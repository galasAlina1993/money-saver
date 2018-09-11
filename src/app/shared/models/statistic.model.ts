export interface IMonthShort {
  id: number;
  date: Date | string;
  save: boolean;
  amount: number;
  positiveAreas: string[];
  negativeAreas: string[];
}

export interface IMonthDetail extends IMonthShort {
  dailyStatistic: IDailyItem[];
  areaStatistic: IAreaItem[];
}

export interface IDailyItem {
  date: Date;
  amount: number;
}

export interface IAreaItem {
  name: string;
  amount: number;
  save: boolean;
}
