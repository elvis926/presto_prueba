import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GerenteVerticalComponent } from './gerente-vertical.component';

const routes: Routes = [
  {path:'', component:GerenteVerticalComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenteVerticalRoutingModule { }
