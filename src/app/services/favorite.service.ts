import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY  = 'favoriteFilms';
const PLANETS_KEY = 'favoritePlanets';
const PEOPLE_KEY = 'favoritePeople';
const STARSHIPS_KEY = 'favoriteStarships';


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private storage: Storage) {
  }

  getAllFavoriteFilms() {
    return this.storage.get(STORAGE_KEY);
  }

  getAllFavoritePeople() {
    return this.storage.get(PEOPLE_KEY);
  }

  getAllFavoritePlanets() {
    return this.storage.get(PLANETS_KEY);
  }

  getAllFavoriteStarships() {
    return this.storage.get(STARSHIPS_KEY);
  }
  
  isFavorite(filmId) {
    return this.getAllFavoriteFilms().then(result => {
      return result && result.indexOf(filmId) !== -1;
    });
  }

  isFavorite1(personId) {
    return this.getAllFavoritePeople().then(result => {
      return result && result.indexOf(personId) !== -1;
    });
  }

  isFavorite2(planetId) {
    return this.getAllFavoritePlanets().then(result => {
      return result && result.indexOf(planetId) !== -1;
    });
  }

  isFavorite3(starshipId) {
    return this.getAllFavoriteStarships().then(result => {
      return result && result.indexOf(starshipId) !== -1;
    });
  }

  favoriteFilm(filmId) {
    return this.getAllFavoriteFilms().then(result => {
      result = result || [];
      result.push(filmId);
      return this.storage.set(STORAGE_KEY, result);
    });
  }

  favoritePerson(personId) {
    return this.getAllFavoritePeople().then(result => {
      result = result || [];
      result.push(personId);
      return this.storage.set(PEOPLE_KEY, result);
    });
  }

  favoritePlanet(planetId) {
    return this.getAllFavoritePlanets().then(result => {
      result = result || [];
      result.push(planetId);
      return this.storage.set(PLANETS_KEY, result);
    });
  }

  favoriteStarship(starshipId) {
    return this.getAllFavoriteStarships().then(result => {
      result = result || [];
      result.push(starshipId);
      return this.storage.set(STARSHIPS_KEY, result);
    });
  }

  unfavoriteFilm(filmId) {
    return this.getAllFavoriteFilms().then(result => {
      if (result) {
        var index = result.indexOf(filmId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  unfavoritePerson(personId) {
    return this.getAllFavoritePeople().then(result => {
      if (result) {
        var index = result.indexOf(personId);
        result.splice(index, 1);
        return this.storage.set(PEOPLE_KEY, result);
      }
    });
  }

  unfavoritePlanet(planetId) {
    return this.getAllFavoritePlanets().then(result => {
      if (result) {
        var index = result.indexOf(planetId);
        result.splice(index, 1);
        return this.storage.set(PLANETS_KEY, result);
      }
    });
  }

  unfavoriteStarship(starshipId) {
    return this.getAllFavoriteStarships().then(result => {
      if (result) {
        var index = result.indexOf(starshipId);
        result.splice(index, 1);
        return this.storage.set(STARSHIPS_KEY, result);
      }
    });
  }
}
