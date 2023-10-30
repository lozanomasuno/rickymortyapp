import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiPersonajesService {
  private url: string = 'https://rickandmortyapi.com/api/character'
  constructor(private http: HttpClient ) { }

  getApiPersonajes(keyword: string){     
    return this.http.get(`${this.url}/${keyword}`)
  }
  
  getTotalResults(){
    return this.http.get(`${this.url}`)
  }


}
