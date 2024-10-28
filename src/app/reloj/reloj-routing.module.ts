import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleRelojComponent } from './simple-reloj/simple-reloj.component';
import { RelojFasesLunaresComponent } from './reloj-fases-lunares/reloj-fases-lunares.component';
import { EspiralRelojComponent } from './espiral-reloj/espiral-reloj.component';

const routes: Routes = [
  { path: 'simple', component: SimpleRelojComponent },
  { path: 'fases-lunares', component: RelojFasesLunaresComponent },
  { path: 'espiral', component: EspiralRelojComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelojRoutingModule { }
