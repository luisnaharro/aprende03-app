import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasDataService {
  private urlEndPoint: string = 'http://localhost:80/api/personas';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAll(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.urlEndPoint}/list.php`)
    .pipe(
      map(response => response as Persona[])
    );
  }

  delete(id: number): Observable<string> {
    return this.http.delete<string>(`${this.urlEndPoint}/delete.php?pos=${id}`)
    .pipe(
      map(response => response as string)
    );
  }

  public post(persona: Persona): Observable<any> {
    return this.http.post<Persona>(`${this.urlEndPoint}/add.php`, persona, 
    { headers: this.httpHeaders });
  }



  /*
  getAll(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.urlEndPoint}/list`)
    .pipe(
      map(response => response as Persona[])
    );
  }

  delete(id: number): Observable<string> {
    return this.http.delete<string>(`${this.urlEndPoint}/delete?pos=${id}`)
    .pipe(
      map(response => response as string)
    );
  }

  public post(persona: Persona): Observable<any> {
    return this.http.post<Persona>(`${this.urlEndPoint}/add`, persona, 
    { headers: this.httpHeaders });
  }
  */


}
