// Referred to tutorials from https://ionicacademy.com/ionic-crash-course/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.page.html',
  styleUrls: ['./starship-details.page.scss'],
})
export class StarshipDetailsPage implements OnInit {
    enabled = this.analyticsService.analyticsEnabled;
    subject: string='Check out all your favorite Starships from Starwars!'
    text: string='Check out all your favorite Starships from Starwars!'
    imgurl:string='https://raw.githubusercontent.com/Deirdre18/Superhero-Science-Fantasy/main/src/assets/images/spaceships.png'
    link: string='https://www.starwars.com/search?q=starships'
    starship: any;
    isFavorite3 = false;
    starshipId = null;
  
    ShareGeneric(parameter){
      const url = this.link
      const text = parameter+'\n'
      this.socialSharing.share(this.subject, null, url,this.link)
    }

 constructor(private activatedRoute: ActivatedRoute, private api: ApiService,
    private favoriteService: FavoriteService, private socialSharing: SocialSharing, private analyticsService: AnalyticsService) { }
  
  
  ngOnInit() {
    this.starshipId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getStarship(this.starshipId).subscribe(res => {
      this.starship = res;
    });

    this.favoriteService.isFavorite3(this.starshipId).then(isFav => {
      this.isFavorite3 = isFav;
    });
  }

  favoriteStarship() {
    this.favoriteService.favoriteStarship(this.starshipId).then(() => {
      this.isFavorite3 = true;
    });
  }

  unfavoriteStarship() {
    this.favoriteService.unfavoriteStarship(this.starshipId).then(() => {
      this.isFavorite3 = false;
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
