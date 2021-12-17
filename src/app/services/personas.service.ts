import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona';
import { PersonasDataService } from './personas-data.service';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private _personas: Persona[] = [];

  constructor(private dataService: PersonasDataService) {
    dataService.getAll().subscribe(personas => this._personas = personas);
  }

  get personas(): Persona[] {
    return [...this._personas]; //... para que devuelva copia del array
  }

  add(persona:Persona) {
    this.dataService.post(persona).subscribe({
      next: data => {
        console.log(JSON.stringify(data));
        this._personas.push(data);

      },
      error: error => {
        console.error('Se ha producido un error: ', error);
      }
    });

  }

  borraFila(pos: number) {
    this.dataService.delete(pos).subscribe(persona => {
      this._personas.splice(pos, 1);
      console.log("Persona borrada en el backend: "+ persona);
    });
  }

}
