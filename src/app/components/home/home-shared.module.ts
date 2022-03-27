import {HeaderHomeComponent} from './header-home/header-home.component';
import {MenuComponent} from './menu/menu.component';
import {BannerComponent} from './banner/banner.component';
import {ContentComponent} from './content/content.component';
import {RadiusComponent} from './radius/radius.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {FooterHomeComponent} from './footer-home/footer-home.component';
import {CarouselComponent} from './carousel/carousel.component';
import {DescriptionComponent} from './description/description.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SwiperModule} from 'swiper/angular';
import {NgModule} from '@angular/core';


@NgModule({
  declarations: [
    HeaderHomeComponent,
    MenuComponent,
    BannerComponent,
    ContentComponent,
    RadiusComponent,
    ButtonsComponent,
    DescriptionComponent,
    CarouselComponent,
    FooterHomeComponent
  ],
  exports: [
    HeaderHomeComponent,
    MenuComponent,
    BannerComponent,
    ContentComponent,
    RadiusComponent,
    ButtonsComponent,
    DescriptionComponent,
    CarouselComponent,
    FooterHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SwiperModule,
  ],
})
export class HomeSharedModule {
}
