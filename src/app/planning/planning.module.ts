import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningFormComponent } from './planning-form/planning-form.component';
import { PlanningRouterModule } from './planning-routing.module';
import { PlanningGuard } from './guards/planning-guard.service';
import { FeaturePlanningComponent } from './feature-planning/feature-planning.component';

@NgModule({
  imports: [
    CommonModule,
    PlanningRouterModule
  ],
  declarations: [PlanningFormComponent, FeaturePlanningComponent],
  providers: [ PlanningGuard ]
})
export class PlanningModule { }
