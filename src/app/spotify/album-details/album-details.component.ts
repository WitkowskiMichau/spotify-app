import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../spotify.service";
import {AlbumDetails} from "./album-details.model";
import "rxjs/add/operator/mergeMap";
import {BookmarksService} from "../../bookmarks/bookmarks.service";

export interface AlbumDetailsParams {
    id: string
}

@Component({
    selector: 'ma-album-details',
    templateUrl: './album-details.component.html',
    styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent {

    private album: AlbumDetails;

    constructor(private router: ActivatedRoute, private spotifyService: SpotifyService, private bs: BookmarksService) {
        this.album = router.snapshot.data['album'];
    }

    isBookmark() {
        return this.bs.has(this.album);
    }

}
