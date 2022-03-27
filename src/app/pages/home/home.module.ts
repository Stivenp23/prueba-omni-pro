import {HomeComponent} from './home.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SwiperModule} from 'swiper/angular';
import {NgModule} from '@angular/core';
import {HomeSharedModule} from '../../components/home/home-shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SwiperModule,
    HomeSharedModule
  ],
})
export class HomeModule {
}
