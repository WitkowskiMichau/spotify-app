import {Component, OnInit, Input} from '@angular/core';
import {BookmarksService} from "../bookmarks.service";
import {Bookmark} from "../bookmark.model";

@Component({
    selector: 'ma-bookmark-add',
    templateUrl: './bookmark-add.component.html',
    styleUrls: ['./bookmark-add.component.scss']
})
export class BookmarkAddComponent {

    @Input() item: Bookmark;

    constructor(private bookmarksService: BookmarksService) {
    }

    add() {
        this.bookmarksService.add(this.item);
    }

    get isVisible() : boolean {
        return !this.bookmarksService.has(this.item);
    }
}
