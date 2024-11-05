import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojRoutingModule } from './reloj-routing.module';
import { SimpleRelojComponent } from './simple-reloj/simple-reloj.component';
import { FormsModule } from '@angular/forms';
import { EspiralRelojComponent } from './espiral-reloj/espiral-reloj.component';
import { SolRelojComponent } from './sol-reloj/sol-reloj.component';

@NgModule({
  declarations: [
    SimpleRelojComponent,
    EspiralRelojComponent,
    SolRelojComponent
  ],
  imports: [
    CommonModule,
    RelojRoutingModule,
    FormsModule
  ]
})
export class RelojModule { }
