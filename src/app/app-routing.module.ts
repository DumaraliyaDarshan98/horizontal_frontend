import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "login"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
