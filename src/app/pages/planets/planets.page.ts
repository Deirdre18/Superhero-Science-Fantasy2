// Referred to tutorials from https://ionicacademy.com/ionic-crash-course/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { tap } from 'rxjs/operators';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {
  enabled = this.analyticsService.analyticsEnabled;
  planets: Observable<any>;

  constructor(private router: Router, private api: ApiService, private analyticsService: AnalyticsService) { } 
 
  ngOnInit() {
    this.planets = this.api.getPlanets().pipe(
      tap(r => console.log(r))
    );
  }

  openDetails(planet) {
    let split = planet.url.split('/');
    let planetId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/planets/${planetId}`);
  }

}
