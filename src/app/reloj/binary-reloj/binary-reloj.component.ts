import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-binary-reloj',
  templateUrl: './binary-reloj.component.html',
  styleUrls: ['./binary-reloj.component.css']
})
export class BinaryRelojComponent implements OnInit, OnDestroy {
  public currentTime: Date = new Date();
  public offsetMinutes: number = 0;

  public binaryHours: boolean[] = [];
  public binaryMinutes: boolean[] = [];
  public binarySeconds: boolean[] = [];

  private intervalId: any;

  constructor() {}

  ngOnInit(): void {
    this.updateTime();
    if (typeof window !== 'undefined') {
      this.intervalId = setInterval(() => this.updateTime(), 1000); // Actualiza cada segundo
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpia el intervalo al destruir el componente
    }
  }

  updateTime() {
    const now = new Date();
    now.setMinutes(now.getMinutes() + this.offsetMinutes);
    this.currentTime = now;

    this.binaryHours = this.convertToBinary(this.currentTime.getHours(), 5);   // Horas en 5 bits
    this.binaryMinutes = this.convertToBinary(this.currentTime.getMinutes(), 6);  // Minutos en 6 bits
    this.binarySeconds = this.convertToBinary(this.currentTime.getSeconds(), 6);  // Segundos en 6 bits
  }

  changeTime(newValue: number) {
    this.offsetMinutes = newValue;
    this.updateTime();
  }

  private convertToBinary(value: number, bits: number): boolean[] {
    return Array.from(value.toString(2).padStart(bits, '0')).map(bit => bit === '1');
  }
}
