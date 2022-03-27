import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SwiperModule} from 'swiper/angular';
import {NgModule} from '@angular/core';
import {HomeSharedModule} from '../../components/home/home-shared.module';
import {LoginComponent} from './login.component';
import {LoginSharedModule} from '../../components/login/login-shared.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SwiperModule,
    HomeSharedModule,
    LoginSharedModule
  ],
})
export class LoginModule {
}
