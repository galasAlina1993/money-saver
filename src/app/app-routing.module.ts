import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';

const routesWithLazyLoading: Routes = [
  { path: '', redirectTo: '/statistic', pathMatch: 'full' },
  { path: 'statistic', loadChildren: './statistic/statistic.module#StatisticModule'}, // Лениво грузим StatisticModule
  { path: 'review', loadChildren: '../app/review/review.module#ReviewModule' },
  { path: 'planning', loadChildren: '../app/planning/planning.module#PlanningModule'},
  {path: 'auth', loadChildren: '../app/auth/auth.module#AuthModule'},
  { path: '**', component: PageNotFoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routesWithLazyLoading)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

