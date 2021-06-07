import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarshipDetailsPageRoutingModule } from './starship-details-routing.module';

import { StarshipDetailsPage } from './starship-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarshipDetailsPageRoutingModule
  ],
  declarations: [StarshipDetailsPage]
})
export class StarshipDetailsPageModule {}
