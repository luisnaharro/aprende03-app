import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej02-concatena',
  templateUrl: './ej02-concatena.component.html',
  styleUrls: ['./ej02-concatena.component.css']
})
export class Ej02ConcatenaComponent implements OnInit {
  nombre: string = "";
  apellidos: string = "";
  resultado: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
