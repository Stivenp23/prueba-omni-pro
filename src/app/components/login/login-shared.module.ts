import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SwiperModule} from 'swiper/angular';
import {NgModule} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {TabsLoginComponent} from './tabs-login/tabs-login.component';
import {ThkModuleComponent} from './thk-module/thk-module.component';
import {HeaderComponent} from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    TabsLoginComponent,
    ThkModuleComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    TabsLoginComponent,
    ThkModuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SwiperModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class LoginSharedModule {
}
