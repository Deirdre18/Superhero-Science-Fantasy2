import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/services/api.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  films = [];
  planets = [];
  people = [];
  starships = [];
   
  constructor(private storage: Storage, private favService: FavoriteService, private apiService: ApiService) { }
  
   doRefresh(event) {
    console.log('Begin async operation');
    this.ngOnInit();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
    this.favService.getAllFavoriteFilms().then(data => {
      console.log('fav film: ', data); // ["1", "5", "3"]
      this.loadFilmData(data);
    });
    
     this.favService.getAllFavoritePeople().then(data => {
      console.log('fav people: ', data); // ["1", "5", "3"]
      this.loadPeopleData(data);
    });
    
      this.favService.getAllFavoritePlanets().then(data => {
      console.log('fav planet: ', data); // ["1", "5", "3"]
      this.loadPlanetData(data);
    });
    
      this.favService.getAllFavoriteStarships().then(data => {
      console.log('fav starship: ', data); // ["1", "5", "3"]
      this.loadStarshipData(data);
    });
  }

  loadFilmData(favFilms: string[]) {
    const observables = [];

    // Create an API call for every saved movie ID
    for (let id of favFilms) {
      observables.push(this.apiService.getFilm(id));
    }

    // Wait until all observables are finished
    forkJoin(observables).subscribe(result => {
      console.log('film data: ', result);
      this.films = result;
    })
  }
  
  loadPeopleData(favPeople: string[]) {
    const observables = [];

    // Create an API call for every saved planet ID
    for (let id of favPeople) {
      observables.push(this.apiService.getPerson(id));
    }

    // Wait until all observables are finished
    forkJoin(observables).subscribe(result => {
      console.log('people data: ', result);
      this.people = result;
    })
  }

  loadPlanetData(favPlanets: string[]) {
    const observables = [];

    // Create an API call for every saved planet ID
    for (let id of favPlanets) {
      observables.push(this.apiService.getPlanet(id));
    }

    // Wait until all observables are finished
    forkJoin(observables).subscribe(result => {
      console.log('planet data: ', result);
      this.planets = result;
    })
  }
  
   loadStarshipData(favStarships: string[]) {
    const observables = [];

    // Create an API call for every saved planet ID
    for (let id of favStarships) {
      observables.push(this.apiService.getStarship(id));
    }

    // Wait until all observables are finished
    forkJoin(observables).subscribe(result => {
      console.log('starship data: ', result);
      this.starships = result;
    })
  }
}
