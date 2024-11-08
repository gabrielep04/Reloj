import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-analogico-reloj',
  templateUrl: './analogico-reloj.component.html',
  styleUrls: ['./analogico-reloj.component.css']
})
export class AnalogicoRelojComponent implements OnInit {
  public currentTime: Date = new Date();
  public offsetMinutes: number = 0;

  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor() {}

  ngOnInit(): void {
    this.updateTime(); // Inicializar el tiempo
    setInterval(() => this.updateTime(), 1000); // Actualizar cada segundo
  }

  updateTime() {
    const now = new Date();
    now.setMinutes(now.getMinutes() + this.offsetMinutes); // Ajustar el minuto
    this.currentTime = now; // Actualizar el tiempo con el offset
    this.drawClock(); // Dibujar el reloj
  }

  drawClock() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2); // Mover el origen al centro
    const radius = 150; // Radio base del reloj

    // Dibujar el círculo del reloj
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI); 
    ctx.strokeStyle = 'white'; 
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath();

    // Dibujar los números del reloj (del 1 al 12)
    ctx.fillStyle = '#ffffff';
    ctx.font = '18px Arial';
    for (let i = 1; i <= 12; i++) {
      const angle = (i * Math.PI) / 6; // 30 grados por número
      const x = (radius - 20) * Math.cos(angle - Math.PI / 2);
      const y = (radius - 20) * Math.sin(angle - Math.PI / 2);
      ctx.fillText(i.toString(), x - 10, y + 10); // Ajustar el texto
    }

    // Dibujar las manecillas
    const hour = this.currentTime.getHours() % 12;
    const minute = this.currentTime.getMinutes();
    const second = this.currentTime.getSeconds();

    // Manecilla de las horas
    this.drawHand(ctx, ((hour + minute / 60) * (Math.PI / 6)), 'lightblue', radius - 90); 
    // Manecilla de los minutos
    this.drawHand(ctx, (minute + second / 60) * (Math.PI / 30), 'yellow', radius - 40); 
    // Manecilla de los segundos
    this.drawHand(ctx, second * (Math.PI / 30), 'red', radius - 10); 
    
    ctx.restore(); // Restaurar contexto
  }

  drawHand(ctx: CanvasRenderingContext2D, angle: number, color: string, length: number) {
    ctx.save();
    ctx.rotate(angle); // Rotar el contexto

    // Dibujar la manecilla
    ctx.beginPath();
    ctx.moveTo(0, 0); // Inicio en el centro
    ctx.lineTo(0, -length); // Línea hacia la posición final
    ctx.strokeStyle = color; // Color de la manecilla
    ctx.lineWidth = 4; // Grosor de la manecilla
    ctx.stroke(); // Dibujar la manecilla

    ctx.restore(); // Restaurar contexto
  }
}
