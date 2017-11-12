import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Account } from './account';

@Injectable()
export class SearchProfileService {
  readonly API: string = 'https://api.github.com/search/users';
  constructor(private http: HttpClient) { }
  doSearch(query: string) {
    const params = new HttpParams().set('q', query);
    return this.http.get<{items: Account[]}>(this.API, {
      params: params
    });
  }

}
