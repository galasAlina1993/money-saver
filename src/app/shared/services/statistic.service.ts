import { Injectable } from '@angular/core';
import { IMonthShort } from '../models/statistic.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StatisticService {

  constructor(private http: HttpClient) {} // inject http client provider;

  public getStatisticShort () {
    return this.http.get<IMonthShort[]>('http://localhost:3000/statisticShort'); //[HTTP][METHOD]([URL], [OPTIONS]?);
  }
}
