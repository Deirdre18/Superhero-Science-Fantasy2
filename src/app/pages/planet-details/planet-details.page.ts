// Referred to tutorials from https://ionicacademy.com/ionic-crash-course/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AnalyticsService } from 'src/app/services/analytics.service';


@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.page.html',
  styleUrls: ['./planet-details.page.scss'],
})
export class PlanetDetailsPage implements OnInit {
  enabled = this.analyticsService.analyticsEnabled;
  subject: string='Check out all your favorite Planets from Starwars!'
  text: string='Check out all your favorite Planets from Starwars!'
  imgurl:string='https://raw.githubusercontent.com/Deirdre18/Superhero-Science-Fantasy/main/src/assets/images/planets.png'
  link: string='https://www.starwars.com/search?q=planets'
  planet: any;
  isFavorite2 = false;
  planetId = null;

  ShareGeneric(parameter){
    const url = this.link
    const text = parameter+'\n'
    this.socialSharing.share(this.subject, null, url,this.link)
  }
 
    constructor(private activatedRoute: ActivatedRoute, private api: ApiService,
      private favoriteService: FavoriteService, private socialSharing: SocialSharing, private analyticsService: AnalyticsService) { }    
     
  ngOnInit() {
    this.planetId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getPlanet(this.planetId).subscribe(res => {
      this.planet = res;
    });

    this.favoriteService.isFavorite2(this.planetId).then(isFav => {
      this.isFavorite2 = isFav;
    });
  }

  favoritePlanet() {
    this.favoriteService.favoritePlanet(this.planetId).then(() => {
      this.isFavorite2 = true;
    });
  }

  unfavoritePlanet() {
    this.favoriteService.unfavoritePlanet(this.planetId).then(() => {
      this.isFavorite2 = false;
    });
  }
  SendEmail(){
    this.socialSharing.shareViaEmail(this.link, this.subject, ['email@address.com'])
  }

  ShareFacebook(){
    this.socialSharing.shareViaFacebookWithPasteMessageHint(this.link, null /* url */, 'Copy Paste!')
  }

  SendTwitter(){
    this.socialSharing.shareViaTwitter(this.link, null /* url */)
  }

  SendInstagram(){
    this.socialSharing.shareViaInstagram(this.text, this.imgurl)
  }

  ShareWhatsapp(){
    this.socialSharing.shareViaWhatsApp(this.link)
  }    

}
