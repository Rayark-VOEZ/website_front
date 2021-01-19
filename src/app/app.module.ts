import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";

import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {HomeComponent} from './pages/home/home.component';
import {TrendingComponent} from './pages/trending/trending.component';
import {RandomComponent} from './pages/random/random.component';
import {ImagesComponent} from './pages/images/images.component';
import {SearchComponent} from './pages/search/search.component';
import {BrowseComponent} from './pages/browse/browse.component';
import {ForgetPasswordComponent} from './pages/forget-password/forget-password.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        SignupComponent,
        PageNotFoundComponent,
        HomeComponent,
        TrendingComponent,
        RandomComponent,
        ImagesComponent,
        SearchComponent,
        BrowseComponent,
        ForgetPasswordComponent
    ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
