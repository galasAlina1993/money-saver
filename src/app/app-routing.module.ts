import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {AuthGuard} from './core/guards/auth.guard';

const routesWithLazyLoading: Routes = [
  { path: '', redirectTo: '/statistic', pathMatch: 'full' },
  { path: 'statistic', loadChildren: './statistic/statistic.module#StatisticModule', canActivate: [AuthGuard]}, // Лениво грузим StatisticModule
  { path: 'review', loadChildren: '../app/review/review.module#ReviewModule', canActivate: [AuthGuard] },
  { path: 'planning', loadChildren: '../app/planning/planning.module#PlanningModule', canActivate: [AuthGuard]},
  { path: 'auth', loadChildren: '../app/auth/auth.module#AuthModule', canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routesWithLazyLoading)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

