import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'reloj', loadChildren: () => import('./reloj/reloj.module').then(m => m.RelojModule) },
  { path: '', redirectTo: '/reloj/simple', pathMatch: 'full' },  // Redirección por defecto al reloj simple
  { path: '**', redirectTo: '/reloj/simple' }  // Redirección para cualquier ruta inválida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
