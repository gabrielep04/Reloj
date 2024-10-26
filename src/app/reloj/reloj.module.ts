import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojRoutingModule } from './reloj-routing.module';
import { SimpleRelojComponent } from './simple-reloj/simple-reloj.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SimpleRelojComponent
  ],
  imports: [
    CommonModule,
    RelojRoutingModule,
    FormsModule
  ]
})
export class RelojModule { }
