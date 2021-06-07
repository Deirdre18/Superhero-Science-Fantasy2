import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http: HttpClient) { }
 
  getFilms() {
    return this.http.get('https://swapi.dev/api/films');
  }
 
  getFilm(id) {
    return this.http.get(`https://swapi.dev/api/films/${id}`);
  }

  getPlanets() {
    return this.http.get('https://swapi.dev/api/planets');
  }
  
  getPlanet(id) {
    return this.http.get(`https://swapi.dev/api/planets/${id}`);
  }
  
  getStarships() {
    return this.http.get('https://swapi.dev/api/starships');
  }
 
  getStarship(id) {
    return this.http.get(`https://swapi.dev/api/starships/${id}`);
  }

  //referred to code below from https://github.com/herbae/starwarsapp, for some of the code on this page
  
  getPeople() {
    return this.http.get('https://swapi.dev/api/people');
  }

  getPerson(id) {
    return this.http.get(`https://swapi.dev/api/people/${id}`);
  }
}