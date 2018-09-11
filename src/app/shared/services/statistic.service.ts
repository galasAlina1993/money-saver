import { Injectable } from '@angular/core';
import {IMonthDetail, IMonthShort} from '../models/statistic.model';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class StatisticService {

  constructor(private http: HttpClient) {} // inject http client provider;

  public getStatisticShort () {
    return this.http.get<IMonthShort[]>('http://localhost:3000/statisticShort'); //[HTTP][METHOD]([URL], [OPTIONS]?);
  }

  public getStatisticExpanded(id: number) {
    // return this.http.get<IMonthDetail>(`http://localhost:3000/statisticFull/${id}`); // get by id;
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<IMonthDetail>(`http://localhost:3000/statisticFull`, {params}); // get by query param id;
  }
}
