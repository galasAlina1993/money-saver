import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewResolver } from './resolvers/review-resolver.service';


const routes: Routes = [
  { path: '', component: ReviewFormComponent, resolve: {message: ReviewResolver} }
];

export const ReviewRouterModule: ModuleWithProviders = RouterModule.forChild(routes);
