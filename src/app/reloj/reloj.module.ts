import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojRoutingModule } from './reloj-routing.module';
import { SimpleRelojComponent } from './simple-reloj/simple-reloj.component';
import { FormsModule } from '@angular/forms';
import { EspiralRelojComponent } from './espiral-reloj/espiral-reloj.component';
import { SolRelojComponent } from './sol-reloj/sol-reloj.component';
import { AnalogicoRelojComponent } from './analogico-reloj/analogico-reloj.component';
import { BarraRelojComponent } from './barra-reloj/barra-reloj.component';
import { EscritoRelojComponent } from './escrito-reloj/escrito-reloj.component';
import { BinaryRelojComponent } from './binary-reloj/binary-reloj.component';
import { AnalogicWordRelojComponent } from './analogicword-reloj/analogicword-reloj.component';
import { CircularRelojComponent } from './circular-reloj/circular-reloj.component';
import { DisplayRelojComponent } from './display-reloj/display-reloj.component';

@NgModule({
  declarations: [
    SimpleRelojComponent,
    EspiralRelojComponent,
    SolRelojComponent,
    AnalogicoRelojComponent,
    BarraRelojComponent,
    EscritoRelojComponent,
    BinaryRelojComponent,
    AnalogicWordRelojComponent,
    CircularRelojComponent,
    DisplayRelojComponent
  ],
  imports: [
    CommonModule,
    RelojRoutingModule,
    FormsModule
  ]
})
export class RelojModule { }
