import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-espiral-reloj',
  templateUrl: './espiral-reloj.component.html',
  styleUrls: ['./espiral-reloj.component.css']
})
export class EspiralRelojComponent implements OnInit {
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
    now.setMinutes(now.getMinutes() + this.offsetMinutes);
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

    ctx.beginPath();
    ctx.strokeStyle = 'white'; 
    ctx.lineWidth = 1; 

    for (let i = 0; i <= 12; i++) {
      const angle = (i * Math.PI) / 6; // 30 grados por número
      const spiralRadius = radius + (i * 10) + 20; // Incrementar el radio para espiral
      const x = spiralRadius * Math.cos(angle - Math.PI / 2);
      const y = spiralRadius * Math.sin(angle - Math.PI / 2);
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        // Calcular el punto anterior
        const previousAngle = ((i - 1) * Math.PI) / 6;
        const previousSpiralRadius = radius + ((i - 1) * 10) + 20;
        const previousX = previousSpiralRadius * Math.cos(previousAngle - Math.PI / 2);
        const previousY = previousSpiralRadius * Math.sin(previousAngle - Math.PI / 2);
        
        // Dibujar la curva utilizando bezierCurveTo
        const cpX = (previousX + x) / 2; // Punto de control en x
        const cpY = (previousY + y) / 2; // Punto de control en y
        ctx.quadraticCurveTo(cpX, cpY, x, y); // Dibujar curva hacia el siguiente número
      }
    }

    ctx.stroke(); // Dibujar la línea
    ctx.closePath();

    // Dibujar los números del reloj en espiral
    ctx.fillStyle = '#ffffff';
    ctx.font = '18px Arial';
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI) / 6; // 30 grados por número
      const spiralRadius = radius + (i * 10); // Mantener el mismo cálculo que antes para los números
      const x = spiralRadius * Math.cos(angle - Math.PI / 2);
      const y = spiralRadius * Math.sin(angle - Math.PI / 2);
      ctx.fillText((i + 1).toString(), x - 10, y + 10); // Ajustar el texto
    }

    // Calcular las posiciones de las manecillas
    const hour = this.currentTime.getHours() % 12;
    const minute = this.currentTime.getMinutes();
    const second = this.currentTime.getSeconds();

    // Dibujar la manecilla de las horas
    this.drawHand(ctx, ((hour - 1 + minute / 60) * (Math.PI / 6)), 'lightblue', hour + 1); 
    // Dibujar la manecilla de los minutos
    this.drawHand(ctx, (minute - 5 + second / 60) * (Math.PI / 30), 'yellow', minute + 1); 
    // Dibujar la manecilla de los segundos
    this.drawHand(ctx, second * (Math.PI / 30), 'red', second + 1); 
    
    ctx.restore(); // Restaurar contexto
  }

  drawHand(ctx: CanvasRenderingContext2D, angle: number, color: string, distanceFromCenter: number) {
    ctx.save();
    ctx.rotate(angle); // Rotar el contexto

    // Longitud de la manecilla basada en la distancia del número
    const length = 40 + distanceFromCenter * 3.2; // Proporcional a la distancia del centro
    const controlPointDist = length * 0.1; // La distancia del punto de control de la curva

    // Dibujar curva en lugar de una línea recta
    ctx.beginPath();
    ctx.moveTo(0, 0); // Inicio en el centro
    ctx.bezierCurveTo(0, -controlPointDist, length / 3, -length * -0.3, 0, -length); // Dibujar una curva tipo espiral

    ctx.strokeStyle = color; // Color de la manecilla
    ctx.lineWidth = 4; // Grosor de la manecilla
    ctx.stroke(); // Dibujar la curva

    ctx.restore(); // Restaurar contexto
  }
}
