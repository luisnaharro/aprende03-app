import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-ej05-e-form',
  templateUrl: './ej05-e-form.component.html',
  styleUrls: ['./ej05-e-form.component.css']
})
export class Ej05EFormComponent implements OnInit {

  persona: Persona = {nombre:'', apellidos:''}

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
  }

  add(): void {
    this.personasService.add(this.persona);
    this.persona = {nombre:'', apellidos:''}
  }

}
