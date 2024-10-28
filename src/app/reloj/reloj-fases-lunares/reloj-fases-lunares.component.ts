import { Component } from '@angular/core';

@Component({
  selector: 'app-reloj-fases-lunares',
  templateUrl: './reloj-fases-lunares.component.html',
  styleUrls: ['./reloj-fases-lunares.component.css']
})
export class RelojFasesLunaresComponent {
  public currentMoonPhase: string = '';
  public moonPhaseName: string = '';

  constructor() {
    this.calculateMoonPhase(new Date());
  }

  calculateMoonPhase(date: Date) {
    const moonCycleDays = 29.53; // Ciclo de fases lunares en días
    const knownNewMoonDate = new Date('2024-01-06'); // Fecha de luna nueva conocida
    const daysSinceNewMoon = (date.getTime() - knownNewMoonDate.getTime()) / (1000 * 3600 * 24);
    const currentCycleDay = (daysSinceNewMoon % moonCycleDays + moonCycleDays) % moonCycleDays;

    if (currentCycleDay < 1.84566) {
      this.moonPhaseName = 'Luna Nueva';
    } else if (currentCycleDay < 5.53699) {
      this.moonPhaseName = 'Creciente Iluminante';
    } else if (currentCycleDay < 9.22831) {
      this.moonPhaseName = 'Cuarto Creciente';
    } else if (currentCycleDay < 12.91963) {
      this.moonPhaseName = 'Gibosa Iluminante';
    } else if (currentCycleDay < 16.61096) {
      this.moonPhaseName = 'Luna Llena';
    } else if (currentCycleDay < 20.30228) {
      this.moonPhaseName = 'Gibosa Menguante';
    } else if (currentCycleDay < 23.99361) {
      this.moonPhaseName = 'Cuarto Menguante';
    } else {
      this.moonPhaseName = 'Creciente Menguante';
    }

    this.currentMoonPhase = `${Math.round((currentCycleDay / moonCycleDays) * 100)}%`;
  }

  adjustMoonPhase(event: Event) {
    const input = event.target as HTMLInputElement; // Convertir a HTMLInputElement
    const date = new Date(input.value); // Obtenemos el valor del input
    this.calculateMoonPhase(date);
  }
}
