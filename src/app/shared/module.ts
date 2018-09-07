import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ParamsPipe} from './pipes/params.pipe';


const Declarations = [ParamsPipe];
const Exports = [ParamsPipe];

@NgModule({
  imports: [CommonModule],
  declarations: Declarations,
  exports: Exports
})
export class SharedModule { }
