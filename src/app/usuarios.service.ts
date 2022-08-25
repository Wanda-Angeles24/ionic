import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  urlBase = 'https://reqres.in/api/';

  constructor(
    private http: HttpClient
  ) { }


  obtenerUsuarios(): Observable<any>{
    return this.http.get(this.urlBase+'users').pipe(map (rest =>{
      return rest;
    }));
  }
  obtenerUsuario(id): Observable<any>{
    return this.http.get(this.urlBase+'users/'+id).pipe(map (rest =>{
      return rest;
    }));
  }
}
