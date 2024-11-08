import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-barra-reloj',
  templateUrl: './barra-reloj.component.html',
  styleUrls: ['./barra-reloj.component.css']
})
export class BarraRelojComponent implements OnInit, OnDestroy {
  public currentTime: Date = new Date();
  public offsetMinutes: number = 0;

  public hourLevel: number = 0;
  public minuteLevel: number = 0;
  public secondLevel: number = 0;

  private timerId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.updateTime();

    // Solo iniciar el temporizador si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.startTimer();
    }
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearTimeout(this.timerId); // Limpia el temporizador si existe
    }
  }

  updateTime() {
    const now = new Date();
    now.setMinutes(now.getMinutes() + this.offsetMinutes);
    this.currentTime = now;

    this.hourLevel = (this.currentTime.getHours() % 12) * 100 / 12;
    this.minuteLevel = this.currentTime.getMinutes() * 100 / 60;
    this.secondLevel = this.currentTime.getSeconds() * 100 / 60;
  }

  // Función para iniciar el temporizador en el cliente
  startTimer() {
    this.timerId = setTimeout(() => {
      this.updateTime();
      this.startTimer(); // Llama a startTimer de nuevo para continuar el ciclo
    }, 1000);
  }

  changeTime(newValue: number) {
    this.offsetMinutes = newValue;
    this.updateTime();
  }

  getHourLevelStyle() {
    return { height: `${this.hourLevel}%` };
  }

  getMinuteLevelStyle() {
    return { height: `${this.minuteLevel}%` };
  }

  getSecondLevelStyle() {
    return { height: `${this.secondLevel}%` };
  }
}
