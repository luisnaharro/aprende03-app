import { Component, OnInit } from '@angular/core';
import { NombresService } from 'src/app/services/nombres.service';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-ej05-e-list',
  templateUrl: './ej05-e-list.component.html',
  styleUrls: ['./ej05-e-list.component.css']
})
export class Ej05EListComponent implements OnInit {

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
  }

  get personas() {
    return this.personasService.personas;
  }

  borrarFila(pos: number) {
    this.personasService.borraFila(pos);
  }

}
