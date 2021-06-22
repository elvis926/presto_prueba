import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: '', canActivate:[AuthGuard], data: {roles: ["user", "admin"]} , loadChildren: './main/main.module#MainModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'admin', canActivate:[AuthGuard], data: {roles: ["admin"]} ,loadChildren: './admin/admin.module#AdminModule' },
  {path: 'gerenteVertical', loadChildren: './gerente-vertical/gerente-vertical.module#GerenteVerticalModule' },
  {path:'recursos', loadChildren:'./rrhh/rrhh.module#RrhhModule'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
