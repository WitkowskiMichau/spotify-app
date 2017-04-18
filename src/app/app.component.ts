import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu: MenuItem[] = [
    {caption: 'Spotify', link: '/spotify'},
  ];
}

interface MenuItem {
  caption: string;
  link: string;
  exact?: boolean;
}
