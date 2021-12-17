import { Component, OnInit } from '@angular/core';
import { NombresService } from 'src/app/services/nombres.service';

@Component({
  selector: 'app-ej05-d-form',
  templateUrl: './ej05-d-form.component.html',
  styleUrls: ['./ej05-d-form.component.css']
})
export class Ej05DFormComponent implements OnInit {

  nombre: string = '';
  apellidos: string = '';

  constructor(private nombresService: NombresService) { }

  ngOnInit(): void {
  }

  add(): void {
    this.nombresService.add(`${this.nombre} ${this.apellidos}`);
    this.nombre = '';
    this.apellidos = '';
  }

}
