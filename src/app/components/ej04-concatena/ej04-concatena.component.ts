import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej04-concatena',
  templateUrl: './ej04-concatena.component.html',
  styleUrls: ['./ej04-concatena.component.css']
})
export class Ej04ConcatenaComponent implements OnInit {
  nombre: string = "";
  apellidos: string = "";
  resultado: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  concatenar(): void {
    this.resultado = `${this.nombre} ${this.apellidos}`
  }

}
