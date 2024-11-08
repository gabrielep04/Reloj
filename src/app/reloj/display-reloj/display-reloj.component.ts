import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-display-reloj',
  templateUrl: './display-reloj.component.html',
  styleUrls: ['./display-reloj.component.css']
})
export class DisplayRelojComponent implements OnInit, OnDestroy {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  offsetMinutes: number = 0;
  private timer: any;

  // Mapeo de segmentos activos para cada número en display de 7 segmentos
  segmentMap: { [key: string]: boolean[] } = {
    '0': [true, true, true, true, true, true, false],
    '1': [false, true, true, false, false, false, false],
    '2': [true, true, false, true, true, false, true],
    '3': [true, true, true, true, false, false, true],
    '4': [false, true, true, false, false, true, true],
    '5': [true, false, true, true, false, true, true],
    '6': [true, false, true, true, true, true, true],
    '7': [true, true, true, false, false, false, false],
    '8': [true, true, true, true, true, true, true],
    '9': [true, true, true, true, false, true, true]
  };

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    this.updateCurrentTime();

    // Solo iniciar el reloj si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.startClock();
    }
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private updateCurrentTime(): void {
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
  }

  private startClock(): void {
    this.timer = setInterval(() => this.incrementTime(), 1000);
  }

  private incrementTime(): void {
    this.seconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hours = (this.hours + 1) % 24;
      }
    }
  }

  // Método para obtener los dígitos de horas, minutos o segundos como un array de caracteres
  getDigits(value: number): string[] {
    return ('0' + value).slice(-2).split('');
  }

  // Método para obtener la clase de cada segmento basado en el dígito actual y el índice del segmento
  getSegmentClass(digit: string, segmentIndex: number): string {
    return this.segmentMap[digit][segmentIndex] ? 'on' : 'off';
  }

  // Método para cambiar los minutos con el deslizador
  changeMinutes(newOffset: number): void {
    this.offsetMinutes = newOffset;
    const now = new Date();
    now.setMinutes(now.getMinutes() + this.offsetMinutes);
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
  }
}
