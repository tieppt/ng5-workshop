import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { map } from 'rxjs/operators';

import { SearchProfileService } from './search-profile.service';
import { Account } from './account';


@Component({
  selector: 'tpc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tpc';

  isEditMode = false;

  posts = [
    'Lesson 1',
    'Lesson 2',
    'Lesson 3',
    'Lesson 4'
  ];

  user = {
    name: 'Tiep Phan',
    joinDate: 1505174400995
  };

  accounts: Observable<Account[]>;
  constructor(private searchSvc: SearchProfileService) { }
  search(query) {
    this.accounts = this.searchSvc.doSearch(query)
      .pipe(
        map(res => res.items),
        map(res => res),
      );
  }

  updateTitle(value) {
    this.title = value;
  }
}
