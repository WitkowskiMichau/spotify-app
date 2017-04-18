import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {Album} from "./spotify.model";
import {AlbumDetails} from "./album-details/album-details.model";

@Injectable()
export class SpotifyService {

  constructor(private http: Http) {
  }

  search(query: string): Observable<Album[]> {
    const url = `https://api.spotify.com/v1/search?type=album&q=${query}`;
    return this.http.get(url).map(r => r.json().albums.items);
  }

  getAlbum(id: string): Observable<AlbumDetails> {
    const url = `https://api.spotify.com/v1/albums/${id}`;
    return this.http.get(url).map(r => r.json());

  }
}
