import {Component, OnInit} from "@angular/core";
import {Album} from "./spotify.model";
import {SpotifyService} from "./spotify.service";
import 'rxjs/add/operator/last';
import {Bookmark} from "../bookmarks/bookmark.model";
import {BookmarksService} from "../bookmarks/bookmarks.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html'
})
export class SpotifyComponent implements OnInit {
  sortValue: string = 'none';
  albums: Album[] = [];
  albumsToShow: Album[] = [];
  loading: boolean = false;
  bookmarks: Bookmark[];

  private assignBookmarks = (bookmarks: Bookmark[]) => {
    this.bookmarks = bookmarks;
    this.sortChange(this.sortValue);
  };

  constructor(private spotifyService: SpotifyService, private bookmarksService: BookmarksService) {
    this.bookmarksService.changed.subscribe(this.assignBookmarks);
  }

  ngOnInit(): void {
    this.assignBookmarks(this.bookmarksService.getAll());
  }

  search(query: string) {
    this.searchFor(query);
  }

  sortChange(newValue: string) {
    if (newValue === 'bookmark') {
      this.albumsToShow = _.filter(this.albums, (e) =>{
        return this.bookmarksService.has(e);
      });
    } else if (newValue === 'none') {
      this.albumsToShow = [...this.albums];
    } else {
      this.albumsToShow = _.sortBy(this.albums, newValue);
    }
  }

  private searchFor(query: string) {
    this.loading = true;
    this.spotifyService.search(query)
      .subscribe(albums => {
        this.albums = albums;
        this.albumsToShow = albums;
        this.loading = false;
        this.sortChange(this.sortValue);
      });
  }
}
