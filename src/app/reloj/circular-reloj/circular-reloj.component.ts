import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-circular-reloj',
  templateUrl: './circular-reloj.component.html',
  styleUrls: ['./circular-reloj.component.css']
})
export class CircularRelojComponent implements OnInit, OnDestroy {
  public currentTime: Date = new Date();
  public offsetMinutes: number = 0;

  public hourProgress: number = 0;
  public minuteProgress: number = 0;
  public secondProgress: number = 0;

  public hourCircleLength = 2 * Math.PI * 90; // Circunferencia del círculo de las horas
  public minuteCircleLength = 2 * Math.PI * 70; // Circunferencia del círculo de los minutos
  public secondCircleLength = 2 * Math.PI * 50; // Circunferencia del círculo de los segundos
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
      clearInterval(this.timerId);
    }
  }

  updateTime() {
    const now = new Date();
    now.setMinutes(now.getMinutes() + this.offsetMinutes);
    this.currentTime = now;

    // Progreso calculado como longitud del trazo
    this.hourProgress = this.hourCircleLength * ((this.currentTime.getHours() % 24) / 24);
    this.minuteProgress = this.minuteCircleLength * (this.currentTime.getMinutes() / 60);
    this.secondProgress = this.secondCircleLength * (this.currentTime.getSeconds() / 60);
  }

  startTimer() {
    this.timerId = setInterval(() => this.updateTime(), 1000);
  }

  changeTime(newValue: number) {
    this.offsetMinutes = newValue;
    this.updateTime();
  }
}
