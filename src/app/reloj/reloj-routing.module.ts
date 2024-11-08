import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleRelojComponent } from './simple-reloj/simple-reloj.component';
import { EspiralRelojComponent } from './espiral-reloj/espiral-reloj.component';
import { SolRelojComponent } from './sol-reloj/sol-reloj.component';
import { AnalogicoRelojComponent } from './analogico-reloj/analogico-reloj.component';

const routes: Routes = [
  { path: 'simple', component: SimpleRelojComponent },
  { path: 'espiral', component: EspiralRelojComponent },
  { path: 'sol', component: SolRelojComponent },
  { path: 'analogico', component: AnalogicoRelojComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelojRoutingModule { }
