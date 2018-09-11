import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatisticComponent } from './general-statistic/statistic.component';
import {StatisticInfoComponent} from './statistic-info/statistic-info.component';

const routes: Routes = [
  { path: '', component: StatisticComponent, pathMatch: 'full'},
  { path: ':id/info', component: StatisticInfoComponent},
  { path: '**', component: StatisticComponent }
];

export const StatisticRouterModule: ModuleWithProviders = RouterModule.forChild(routes);
