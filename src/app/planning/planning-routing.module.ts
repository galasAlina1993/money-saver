import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanningFormComponent } from './planning-form/planning-form.component';
import { PlanningGuard } from './guards/planning-guard.service';
import { FeaturePlanningComponent } from './feature-planning/feature-planning.component';


const routes: Routes = [
  { path: '', component: PlanningFormComponent, data: { preload: true },
    canActivate: [PlanningGuard],
    canActivateChild: [PlanningGuard],
    canDeactivate: [PlanningGuard],
    children:
    [
      { path: 'feature', component: FeaturePlanningComponent}
    ]
  }
];

export const PlanningRouterModule: ModuleWithProviders = RouterModule.forChild(routes);
