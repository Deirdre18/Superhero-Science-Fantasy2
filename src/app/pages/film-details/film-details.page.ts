// Referred to tutorials from https://ionicacademy.com/ionic-crash-course/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {
  enabled = this.analyticsService.analyticsEnabled;
  film: any;
  isFavorite = false;
  filmId = null;
  subject: string='Check out all your favorite Starwars films!'
  text: string='Check out all your favorite Starwars films!'
  link: string='https://www.starwars.com/films/'
  imgurl: string='https://raw.githubusercontent.com/Deirdre18/Superhero-Science-Fantasy/main/src/assets/images/films.png'
  ShareGeneric(parameter){
    const url = this.link
    const text = parameter+'\n'
    const subject = parameter+'\n'
    this.socialSharing.share(this.subject, url,this.link, this.imgurl)
  }
  
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService,
    private favoriteService: FavoriteService, private socialSharing: SocialSharing, private analyticsService: AnalyticsService) { }  
 
  ngOnInit() {
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getFilm(this.filmId).subscribe(res => {
      this.film = res;
    });

    this.favoriteService.isFavorite(this.filmId).then(isFav => {
      this.isFavorite = isFav;
    });
  }

  favoriteFilm() {
    this.favoriteService.favoriteFilm(this.filmId).then(() => {
      this.isFavorite = true;
    });
  }

  unfavoriteFilm() {
    this.favoriteService.unfavoriteFilm(this.filmId).then(() => {
      this.isFavorite = false;
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
