import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatisticComponent } from './general-statistic/statistic.component';

const routes: Routes = [
  { path: '', component: StatisticComponent },
  { path: '**', component: StatisticComponent }
];

export const StatisticRouterModule: ModuleWithProviders = RouterModule.forChild(routes);
