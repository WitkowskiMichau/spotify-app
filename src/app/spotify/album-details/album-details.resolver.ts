
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AlbumDetails} from "./album-details.model";
import {SpotifyService} from "../spotify.service";
import {Injectable} from "@angular/core";
import {AlbumDetailsParams} from "./album-details.component";

@Injectable()
export class AlbumDetailsResolver implements Resolve<AlbumDetails> {

    constructor(private spotifyService: SpotifyService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AlbumDetails> {
        return this.spotifyService.getAlbum((route.params as AlbumDetailsParams).id);
    }

}
