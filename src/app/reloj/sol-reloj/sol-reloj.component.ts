import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sol-reloj',
  templateUrl: './sol-reloj.component.html',
  styleUrls: ['./sol-reloj.component.css']
})
export class SolRelojComponent implements OnInit, OnDestroy {
  hours: number = new Date().getHours();
  minutes: number = new Date().getMinutes();
  seconds: number = new Date().getSeconds();
  shadowAngle: number = 0;
  horas: Array<{ valor: number, rotacion: number }> = [];

  timeUpdateRequested: boolean = false;
  intervalId: any; // Variable para almacenar el ID del setInterval

  constructor() {
    // Inicializa las horas para los números alrededor del reloj solar
    this.horas = [
      { valor: 6, rotacion: 180 },
      { valor: 7, rotacion: 150 },
      { valor: 8, rotacion: 120 },
      { valor: 9, rotacion: 90 },
      { valor: 10, rotacion: 60 },
      { valor: 11, rotacion: 30 },
      { valor: 12, rotacion: 0 },
      { valor: 13, rotacion: -30 },
      { valor: 14, rotacion: -60 },
      { valor: 15, rotacion: -90 },
      { valor: 16, rotacion: -120 },
      { valor: 17, rotacion: -150 },
      { valor: 18, rotacion: -180 }
    ];
  }

  ngOnInit() {
    this.updateShadow();
    this.animateTime();

    // Configura un intervalo para actualizar los segundos, minutos y horas
    this.intervalId = setInterval(() => {
      this.updateTime();
      this.updateShadow();
    }, 1000); // Actualiza cada segundo
  }

  ngOnDestroy() {
    // Asegúrate de limpiar el intervalo y la animación al destruir el componente
    clearInterval(this.intervalId);
    this.timeUpdateRequested = false;
  }

  animateTime() {
    if (this.timeUpdateRequested) return;

    this.timeUpdateRequested = true;
    requestAnimationFrame(() => {
      this.updateShadow();
      this.animateTime(); // Continuar actualizando en el siguiente ciclo de animación
    });
  }

  updateTime() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1;
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours = (this.hours + 1) % 24;
      }
    }
  }

  updateShadow() {
    if (this.hours >= 6 && this.hours <= 18) {
        const fractionalHour = (this.hours) + this.minutes / 60;
        this.shadowAngle = (fractionalHour / 12) * 180;

        // Calcular y asignar la rotación para cada hora
        this.horas.forEach((hora, index) => {
            const angle = (hora.valor - 6) * 15; // Ajustar el ángulo para cada hora (6, 7, ..., 18)
            hora.rotacion = angle;
        });
    } else {
        this.shadowAngle = 0;
    }
}
}
