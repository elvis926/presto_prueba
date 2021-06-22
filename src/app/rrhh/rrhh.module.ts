import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RrhhRoutingModule } from './rrhh-routing.module';
import { RrhhComponent } from './rrhh.component';

@NgModule({
  declarations: [RrhhComponent],
  imports: [
    CommonModule,
    RrhhRoutingModule
  ]
})
export class RrhhModule { }
