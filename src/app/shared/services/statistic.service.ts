import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IMonthShort } from '../models/statistic.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StatisticService {

  constructor(private http: HttpClient) {} // inject http client





  public getStatisticShort () {
    return of([
      {
        date: '1517436000000',
        save: true,
        amount: 1500,
        positiveAreas: ['Непредвиденные расходы', 'Питание', 'Транспорт'],
        negativeAreas: ['Бытовые расходы', 'Коммунальные']
      },
      {
        date: '1519855200000',
        save: false,
        amount: 1000,
        positiveAreas: ['Непредвиденные расходы', 'Питание', 'Транспорт'],
        negativeAreas: ['Бытовые расходы', 'Коммунальные']
      },
      {
        date: '1522530000000',
        save: true,
        amount: 1000,
        positiveAreas: ['Непредвиденные расходы', 'Питание', 'Транспорт'],
        negativeAreas: ['Бытовые расходы', 'Коммунальные']
      },
      {
        date: '1525122000000',
        save: false,
        amount: 2000,
        positiveAreas: ['Непредвиденные расходы', 'Питание', 'Транспорт'],
        negativeAreas: ['Бытовые расходы', 'Коммунальные']
      },
      {
        date: '1527800400000',
        save: true,
        amount: 4000,
        positiveAreas: ['Непредвиденные расходы', 'Питание', 'Транспорт'],
        negativeAreas: ['Бытовые расходы', 'Коммунальные']
      }
    ]);
  }
}
