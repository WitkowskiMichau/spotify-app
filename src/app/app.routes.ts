import {Route} from "@angular/router";
import {AlbumDetailsComponent} from "./spotify/album-details/album-details.component";
import {SpotifyComponent} from "./spotify/spotify.component";
import {AlbumDetailsResolver} from "./spotify/album-details/album-details.resolver";

export const routes: Route[] = [
    {path: 'spotify', component: SpotifyComponent},
    {path: 'spotify/:id', component: AlbumDetailsComponent, resolve: {album: AlbumDetailsResolver}},
    {path: '**', component: SpotifyComponent}
];
