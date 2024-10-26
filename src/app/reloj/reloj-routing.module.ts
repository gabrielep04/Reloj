import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleRelojComponent } from './simple-reloj/simple-reloj.component';

const routes: Routes = [
  { path: 'simple', component: SimpleRelojComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelojRoutingModule { }
