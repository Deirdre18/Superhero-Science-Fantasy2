// Referred to tutorials from https://ionicacademy.com/ionic-crash-course/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { tap } from 'rxjs/operators';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {

  enabled = this.analyticsService.analyticsEnabled;
  starships: Observable<any>;

  constructor(private router: Router, private api: ApiService, private analyticsService: AnalyticsService) { }  
  
  ngOnInit() {
    this.starships = this.api.getStarships().pipe(
      tap(r => console.log(r))
    );
  }

  openDetails(starship) {
    let split = starship.url.split('/');
    let starshipId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/starships/${starshipId}`);
  }
}
