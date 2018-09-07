import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewFormComponent } from './review-form/review-form.component';
import {ReviewRouterModule} from './review-routing.module';
import {ReviewResolver} from './resolvers/review-resolver.service';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReviewRouterModule
  ],
  declarations: [ReviewFormComponent],
  providers: [ReviewResolver]
})
export class ReviewModule { }
