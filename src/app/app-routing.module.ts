import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./pages/home/home.component";
import {TrendingComponent} from "./pages/trending/trending.component";
import {RandomComponent} from "./pages/random/random.component";
import {ImagesComponent} from "./pages/images/images.component";
import {SearchComponent} from "./pages/search/search.component";
import {BrowseComponent} from "./pages/browse/browse.component";
import {LoginComponent} from "./pages/login/login.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {ForgetPasswordComponent} from "./pages/forget-password/forget-password.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'trending', component: TrendingComponent},
    {path: 'random', component: RandomComponent},
    {path: 'images', component: ImagesComponent},
    {path: 'search', component: SearchComponent},
    {path: 'browse', component: BrowseComponent},
    {path: 'login', component: LoginComponent},
    {path: 'forget-password', component: ForgetPasswordComponent},
    {path: 'signup', component: SignupComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
