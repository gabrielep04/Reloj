import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleRelojComponent } from './simple-reloj/simple-reloj.component';
import { EspiralRelojComponent } from './espiral-reloj/espiral-reloj.component';
import { SolRelojComponent } from './sol-reloj/sol-reloj.component';
import { AnalogicoRelojComponent } from './analogico-reloj/analogico-reloj.component';
import { BarraRelojComponent } from './barra-reloj/barra-reloj.component';
import { EscritoRelojComponent } from './escrito-reloj/escrito-reloj.component';
import { BinaryRelojComponent } from './binary-reloj/binary-reloj.component';
import { AnalogicWordRelojComponent } from './analogicword-reloj/analogicword-reloj.component';
import { CircularRelojComponent } from './circular-reloj/circular-reloj.component';
import { DisplayRelojComponent } from './display-reloj/display-reloj.component';

const routes: Routes = [
  { path: 'simple', component: SimpleRelojComponent },
  { path: 'espiral', component: EspiralRelojComponent },
  { path: 'sol', component: SolRelojComponent },
  { path: 'analogico', component: AnalogicoRelojComponent },
  { path: 'barra', component: BarraRelojComponent },
  { path: 'escrito', component: EscritoRelojComponent },
  { path: 'binario', component: BinaryRelojComponent },
  { path: 'analogicword', component: AnalogicWordRelojComponent },
  { path: 'circular', component: CircularRelojComponent },
  { path: 'display', component: DisplayRelojComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelojRoutingModule { }
