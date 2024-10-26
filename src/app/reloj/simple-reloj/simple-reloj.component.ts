import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-reloj',
  templateUrl: './simple-reloj.component.html',
  styleUrls: ['./simple-reloj.component.css']
})
export class SimpleRelojComponent implements OnInit {
  public currentTime: Date = new Date(); // Almacena la hora actual
  public offsetMinutes: number = 0; // Almacena el ajuste de minutos

  constructor() {}

  ngOnInit(): void {
    this.updateTime();
    if (typeof window !== 'undefined') {
      setInterval(() => {
        this.updateTime();
      }, 1000); // Actualiza cada segundo
    }
  }

  updateTime() {
    if (typeof window !== 'undefined') { // Comprueba si está en el navegador
      const now = new Date();
      now.setMinutes(now.getMinutes() + this.offsetMinutes); // Aplica el offset
      this.currentTime = now; // Muestra la hora actual ajustada
    }
  }

  changeTime(newValue: number) {
    this.offsetMinutes = newValue; // Asignar directamente el nuevo valor
    this.updateTime(); // Actualiza la hora después de cambiar
  }
}
