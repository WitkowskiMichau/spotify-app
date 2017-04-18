import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from "./app.routing.module";
import {SpotifyModule} from "./spotify/spotify.module";
import {BookmarksModule} from "./bookmarks/bookmarks.module";
import {CookieService} from "angular2-cookie/core";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    SpotifyModule,
    BookmarksModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
