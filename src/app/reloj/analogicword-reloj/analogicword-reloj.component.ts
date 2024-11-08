import { Component, ElementRef, ViewChild, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-analogicword-reloj',
  templateUrl: './analogicword-reloj.component.html',
  styleUrls: ['./analogicword-reloj.component.css']
})
export class AnalogicWordRelojComponent implements OnInit {
  public currentTime: Date = new Date();
  public offsetMinutes: number = 0;

  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  public isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateTime();
      setInterval(() => this.updateTime(), 1000);
    }
  }

  updateTime() {
    if (!isPlatformBrowser(this.platformId)) return;

    const now = new Date();
    now.setMinutes(now.getMinutes() + this.offsetMinutes);
    this.currentTime = now;
    this.drawClock();
  }

  drawClock() {
    if (!isPlatformBrowser(this.platformId)) return;

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Limpia el lienzo y coloca el origen en el centro
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2); 
    const radius = 180;

    // Definir los textos de hora, minuto y segundo
    const hourText = this.convertToWords(this.currentTime.getHours() % 12);
    const minuteText = this.convertToWords(this.currentTime.getMinutes());
    const secondText = this.convertToWords(this.currentTime.getSeconds());

    // Dibujar líneas punteadas para hora, minuto y segundo
    this.drawDottedLine(ctx, ((this.currentTime.getHours() % 12) * Math.PI) / 6, radius - 60, '#ff7f50');
    this.drawDottedLine(ctx, (this.currentTime.getMinutes() * Math.PI) / 30, radius - 30, '#ffd700');
    this.drawDottedLine(ctx, (this.currentTime.getSeconds() * Math.PI) / 30, radius, '#1e90ff');

    // Dibujar textos en el ángulo correspondiente
    this.drawTextAtAngle(ctx, hourText, ((this.currentTime.getHours() % 12) * Math.PI) / 6, radius - 60, '#ff7f50');
    this.drawTextAtAngle(ctx, minuteText, (this.currentTime.getMinutes() * Math.PI) / 30, radius - 30, '#ffd700');
    this.drawTextAtAngle(ctx, secondText, (this.currentTime.getSeconds() * Math.PI) / 30, radius, '#1e90ff');

    ctx.restore();
  }

  drawTextAtAngle(ctx: CanvasRenderingContext2D, text: string, angle: number, distance: number, color: string) {
    ctx.save();
    ctx.rotate(angle);
    ctx.fillStyle = color;
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 0, -distance);
    ctx.restore();
  }

  drawDottedLine(ctx: CanvasRenderingContext2D, angle: number, distance: number, color: string) {
    ctx.save();
    ctx.rotate(angle);
    ctx.strokeStyle = color;
    ctx.setLineDash([4, 8]);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -distance);
    ctx.stroke();
    ctx.restore();
  }

  private convertToWords(num: number): string {
    const words: { [key: number]: string } = {
      0: 'doce', 1: 'uno', 2: 'dos', 3: 'tres', 4: 'cuatro', 5: 'cinco',
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
