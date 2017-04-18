import {Component, OnInit, Input} from '@angular/core';
import {Bookmark} from "../bookmark.model";
import {BookmarksService} from "../bookmarks.service";

@Component({
  selector: 'ma-bookmark-remove',
  templateUrl: './bookmark-remove.component.html',
  styleUrls: ['./bookmark-remove.component.scss']
})
export class BookmarkRemoveComponent {

  @Input() item: Bookmark;

  constructor(private bookmarksService: BookmarksService) {
  }

  remove() {
    this.bookmarksService.remove(this.item);
  }

  get isVisible(): boolean {
    const visible: boolean = this.bookmarksService.has(this.item);
    return visible;
  }

}
