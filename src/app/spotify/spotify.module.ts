import {NgModule} from "@angular/core";
import {SpotifyComponent} from "./spotify.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {SpotifyService} from "./spotify.service";
import {SharedModule} from "../shared/shared.module";
import {BookmarksModule} from "../bookmarks/bookmarks.module";
import {AlbumDetailsComponent} from "./album-details/album-details.component";
import {RouterModule} from "@angular/router";
import {AlbumDetailsResolver} from "./album-details/album-details.resolver";

@NgModule({
  declarations: [
    SpotifyComponent,
    AlbumDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    BookmarksModule,
    RouterModule
  ],
  exports: [
    SpotifyComponent
  ],
  providers: [
    SpotifyService,
    AlbumDetailsResolver
  ]
})
export class SpotifyModule {

}
