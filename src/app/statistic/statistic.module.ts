import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './general-statistic/statistic.component';
import { StatisticService } from '../shared/services/statistic.service';
import {SharedModule} from '../shared/module';
import {StatisticRouterModule} from './statistic-routing.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {StatisticsEffects} from './effects/statistic-effects';
import {StatisticInfoComponent} from './statistic-info/statistic-info.component';

const Components = [StatisticComponent, StatisticInfoComponent];
const Exports = [StatisticComponent];
const Providers = [StatisticService];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StatisticRouterModule,
    StoreModule.forFeature('statisticStore', reducers),
    EffectsModule.forFeature([StatisticsEffects])
  ],
  providers: Providers,
  declarations: Components,
  exports: Exports
})
export class StatisticModule { }
