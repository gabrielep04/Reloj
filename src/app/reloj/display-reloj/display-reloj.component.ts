import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-display-reloj',
  templateUrl: './display-reloj.component.html',
  styleUrls: ['./display-reloj.component.css']
})
export class DisplayRelojComponent implements OnInit {
  public currentTime: Date = new Date();  // Almacena la hora actual
  public offsetMinutes: number = 0;       // Ajuste de minutos

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.updateTime();

    // Solo ejecutar setInterval en el navegador
    if (isPlatformBrowser(this.platformId)) {
      setInterval(() => {
        this.updateTime();
      }, 1000); // Actualiza cada segundo
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

  // Convierte el valor numérico en dos dígitos
  getDigits(value: number): any[] {
    const digits = value.toString().padStart(2, '0').split('').map(Number);
    return digits.map(digit => this.getSegmentsForDigit(digit));
  }

  // Obtiene los segmentos para cada número
  getSegmentsForDigit(digit: number) {
    const segments = [
      { a: true,  b: true,  c: true,  d: true,  e: true,  f: true,  g: false }, // 0
      { a: false, b: true,  c: true,  d: false, e: false, f: false, g: false }, // 1
      { a: true,  b: true,  c: false, d: true,  e: true,  f: false, g: true  }, // 2
      { a: true,  b: true,  c: true,  d: true,  e: false, f: false, g: true  }, // 3
      { a: false, b: true,  c: true,  d: false, e: false, f: true,  g: true  }, // 4
      { a: true,  b: false, c: true,  d: true,  e: false, f: true,  g: true  }, // 5
      { a: true,  b: false, c: true,  d: true,  e: true,  f: true,  g: true  }, // 6
      { a: true,  b: true,  c: true,  d: false, e: false, f: false, g: false }, // 7
      { a: true,  b: true,  c: true,  d: true,  e: true,  f: true,  g: true  }, // 8
      { a: true,  b: true,  c: true,  d: true,  e: false, f: true,  g: true  }, // 9
    ];
    return { segments: segments[digit] };
  }
}
