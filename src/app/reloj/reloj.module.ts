import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojRoutingModule } from './reloj-routing.module';
import { SimpleRelojComponent } from './simple-reloj/simple-reloj.component';
import { FormsModule } from '@angular/forms';
import { RelojFasesLunaresComponent } from './reloj-fases-lunares/reloj-fases-lunares.component';
import { EspiralRelojComponent } from './espiral-reloj/espiral-reloj.component';

@NgModule({
  declarations: [
    SimpleRelojComponent,
    RelojFasesLunaresComponent,
    EspiralRelojComponent
  ],
  imports: [
    CommonModule,
    RelojRoutingModule,
    FormsModule
  ]
})
export class RelojModule { }
