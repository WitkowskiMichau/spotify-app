import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query: string;
  @Output() searched: EventEmitter<string> = new EventEmitter<string>();
  @Input() loading: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  search() {
    this.searched.emit(this.query);
  }

}
