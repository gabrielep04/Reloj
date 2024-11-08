import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-barra-reloj',
  templateUrl: './barra-reloj.component.html',
  styleUrls: ['./barra-reloj.component.css']
})
export class BarraRelojComponent implements OnInit {
  public currentTime: Date = new Date(); // Almacena la hora actual
  public offsetMinutes: number = 0; // Almacena el ajuste de minutos

  public hourLevel: number = 0; // Nivel de la barra de horas (0-100)
  public minuteLevel: number = 0; // Nivel de la barra de minutos (0-100)
  public secondLevel: number = 0; // Nivel de la barra de segundos (0-100)

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.updateTime(); // Inicializar el tiempo
    setInterval(() => this.updateTime(), 1000); // Actualizar cada segundo
  }

  updateTime() {
    const now = new Date();
    now.setMinutes(now.getMinutes() + this.offsetMinutes); // Ajustar con offset
    this.currentTime = now; // Actualizar hora actual

    // Actualizar los niveles de las barras
    this.hourLevel = (this.currentTime.getHours() % 12) * 100 / 12; // Normalizamos a 100
    this.minuteLevel = this.currentTime.getMinutes() * 100 / 60; // Normalizamos a 100
    this.secondLevel = this.currentTime.getSeconds() * 100 / 60; // Normalizamos a 100
  }

  changeTime(newValue: number) {
    this.offsetMinutes = newValue; // Asignar directamente el nuevo valor
    this.updateTime(); // Actualizar la hora después de cambiar
  }
}
