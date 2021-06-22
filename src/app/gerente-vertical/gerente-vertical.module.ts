import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenteVerticalRoutingModule } from './gerente-vertical-routing.module';
import { GerenteVerticalComponent } from './gerente-vertical.component';

@NgModule({
  declarations: [GerenteVerticalComponent],
  imports: [
    CommonModule,
    GerenteVerticalRoutingModule
  ]
})
export class GerenteVerticalModule { }
