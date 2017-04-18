import {Injectable, EventEmitter} from "@angular/core";
import {Bookmark, BookmarkId} from "./bookmark.model";
import * as _ from "lodash";
import {CookieService} from "angular2-cookie/core";

const key = 'bookmarks';

@Injectable()
export class BookmarksService {
  changed = new EventEmitter<Bookmark[]>();


  private bookmarks: Bookmark[] = [];

  constructor(private _cookieService:CookieService) {
    if(this.getCookie()){
      this.bookmarks = <Bookmark[]>this.getCookie();
    }
  }

  getAll() {
    return [...this.bookmarks];
  }

  add(bookmark: Bookmark) {
    this.addToCache(bookmark);
    this.putCookie(this.bookmarks);
  }

  has(bookmark: Bookmark) {
    return _.some(this.bookmarks, is(bookmark));
  }

  remove(bookmark: Bookmark) {
    this.removeFromCache(bookmark);
    this.putCookie(this.bookmarks);
  }

  get(bookmarkId: BookmarkId): Bookmark {
    return _.find(this.bookmarks, {id: bookmarkId});
  }

  private addToCache(bookmark: Bookmark) {
    this.bookmarks.push(bookmark);
    this.notifyChanged();
  }

  private removeFromCache(bookmark: Bookmark) {
    this.bookmarks = _.reject(this.bookmarks, is(bookmark));
    this.notifyChanged();
  }

  private notifyChanged() {
    this.changed.emit(this.getAll());
  }

  updateBookmark(bookmark: Bookmark) {
    this.putCookie(this.bookmarks);
  }

  private getCookie(){
    return this._cookieService.getObject(key);
  }

  private putCookie(bookmarks){
    return this._cookieService.putObject(key, bookmarks);
  }
}

function is(bookmark: Bookmark) {
  return _.matches({id: bookmark.id});
}
