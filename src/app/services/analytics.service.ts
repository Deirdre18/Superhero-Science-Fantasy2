import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
 
// Init for the web
import "@capacitor-community/firebase-analytics";
 
import { Plugins } from "@capacitor/core";
const { FirebaseAnalytics, Device } = Plugins;
 
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  analyticsEnabled = true;
 
  constructor( private router: Router) {
    this.initFb();
    this.router.events.pipe(
      filter((e: RouterEvent) => e instanceof NavigationEnd),
    ).subscribe((e: RouterEvent) => {
      console.log('route changed: ', e.url)
    });
  }
 
  async initFb() {
    if ((await Device.getInfo()).platform == 'web') {
      FirebaseAnalytics.initializeFirebase(environment.firebaseConfig);
    }
  } 
 
}
