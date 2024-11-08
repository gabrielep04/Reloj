import { Component, Inject, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-escrito-reloj',
  templateUrl: './escrito-reloj.component.html',
  styleUrls: ['./escrito-reloj.component.css']
})
export class EscritoRelojComponent implements OnInit, OnDestroy {
  public currentTime: Date = new Date();
  public offsetMinutes: number = 0;

  private timerId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.updateTime();
    // Solo inicia el temporizador si está en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.timerId = setInterval(() => this.updateTime(), 1000);
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
  }

  changeTime(newValue: number) {
    this.offsetMinutes = newValue;
    this.updateTime();
  }

  getHourText(): string {
    const hours = this.currentTime.getHours();
    return this.convertToWords(hours);
  }

  getMinuteText(): string {
    const minutes = this.currentTime.getMinutes();
    return this.convertToWords(minutes);
  }

  getSecondText(): string {
    const seconds = this.currentTime.getSeconds();
    return this.convertToWords(seconds);
  }

  private convertToWords(num: number): string {
    const words: { [key: number]: string } = {
      0: 'cero', 1: 'uno', 2: 'dos', 3: 'tres', 4: 'cuatro', 5: 'cinco',
      6: 'seis', 7: 'siete', 8: 'ocho', 9: 'nueve', 10: 'diez',
      11: 'once', 12: 'doce', 13: 'trece', 14: 'catorce', 15: 'quince',
      16: 'dieciséis', 17: 'diecisiete', 18: 'dieciocho', 19: 'diecinueve',
      20: 'veinte', 21: 'veintiuno', 22: 'veintidós', 23: 'veintitrés',
      24: 'veinticuatro', 25: 'veinticinco', 26: 'veintiséis', 27: 'veintisiete',
      28: 'veintiocho', 29: 'veintinueve', 30: 'treinta', 31: 'treinta y uno',
      32: 'treinta y dos', 33: 'treinta y tres', 34: 'treinta y cuatro',
      35: 'treinta y cinco', 36: 'treinta y seis', 37: 'treinta y siete',
      38: 'treinta y ocho', 39: 'treinta y nueve', 40: 'cuarenta',
      41: 'cuarenta y uno', 42: 'cuarenta y dos', 43: 'cuarenta y tres',
      44: 'cuarenta y cuatro', 45: 'cuarenta y cinco', 46: 'cuarenta y seis',
      47: 'cuarenta y siete', 48: 'cuarenta y ocho', 49: 'cuarenta y nueve',
      50: 'cincuenta', 51: 'cincuenta y uno', 52: 'cincuenta y dos',
      53: 'cincuenta y tres', 54: 'cincuenta y cuatro', 55: 'cincuenta y cinco',
      56: 'cincuenta y seis', 57: 'cincuenta y siete', 58: 'cincuenta y ocho',
      59: 'cincuenta y nueve'
    };
  
    return words[num] || num.toString();
  }
}
