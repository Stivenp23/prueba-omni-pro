import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, LOCALE_ID, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
// Components
import {AppComponent} from './app.component';
import {HomeProductComponent} from './pages/home-product/home-product.component';
import {LoginComponent} from './pages/login/login.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
// Redux
import * as reducers from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ActionReducerMap, State, StoreModule} from '@ngrx/store';
import {registerLocaleData} from '@angular/common';
import {effects} from './effects';
// Env
import {environment} from '../environments/environment';
// Lib
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {EventsService} from './services/eventsService';

export const reducerToken = new InjectionToken<ActionReducerMap<State<reducers.AppState>>>('Registered Reducers');

@NgModule({
  declarations: [
    AppComponent,
    HomeProductComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducerToken),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    NgbModalModule
  ],
  providers: [
    {provide: 'ENV', useValue: environment},
    {provide: reducerToken, useValue: reducers},
    {provide: LOCALE_ID, useValue: 'es'},
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
