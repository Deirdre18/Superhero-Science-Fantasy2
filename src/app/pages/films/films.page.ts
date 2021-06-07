// Referred to tutorials from https://ionicacademy.com/ionic-crash-course/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { tap } from 'rxjs/operators';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  enabled = this.analyticsService.analyticsEnabled;
  films: Observable<any>;

  constructor(private router: Router, private api: ApiService, private analyticsService: AnalyticsService) { } 
 
  ngOnInit() {
    this.films = this.api.getFilms().pipe(
      tap(r => console.log(r))
    );
  }

  openDetails(film) {
    let split = film.url.split('/');
    let filmId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/films/${filmId}`);
  }
}
