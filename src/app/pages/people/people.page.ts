// Referred to tutorials from https://ionicacademy.com/ionic-crash-course/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { tap } from 'rxjs/operators';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  enabled = this.analyticsService.analyticsEnabled;
  people: Observable<any>;

  constructor(private router: Router, private api: ApiService, private analyticsService: AnalyticsService) { }
 
  ngOnInit() {
    this.people = this.api.getPeople().pipe(
      tap(r => console.log(r))
    );
  }

  openDetails(person) {
    let split = person.url.split('/');
    let personId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/people/${personId}`);
  }

}
