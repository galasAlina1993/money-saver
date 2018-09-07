import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  buttons: Array<{}> = [
    {value: 'Запланировать месяц', data: {desc: 'Запланировал на месяц'}, url: '/planning'},
    {value: 'Отчёт за день', data: {desc: 'Отчет за день/месяц'}, url: '/review'},
    {value: 'Статистика', data: {desc: 'Статистика за день/месяц'}, url: '/statistic'}];

  constructor() { }

  ngOnInit() {
  }

  btnHandler(e) {

  }

}
