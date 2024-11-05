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
    // Calcula el ángulo de la sombra basado en la hora, solo entre 0 y 180 grados
    // El reloj solar está orientado para que 12:00 esté en la parte superior
    if (this.hours >= 6 && this.hours <= 18) {
      // La sombra solo se proyecta entre 6 AM y 6 PM
      this.shadowAngle = ((this.hours - 6) / 12) * 180; // Mapea de 6-18 horas a 0-180 grados
    } else {
      this.shadowAngle = 0; // Sin sombra fuera del horario de funcionamiento
    }
  }
}
