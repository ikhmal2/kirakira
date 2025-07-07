import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Friend, Friends, Profile } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  private http = inject(HttpClient);

  getFriendsList(): Observable<Friends> {
    return this.http.get<Friends>('assets/mock/friends.json');
  }

  getOwedAmount(): Observable<Profile> {
    return this.http.get<Profile>('assets/mock/profile.json');
  }

  constructor() {}
}
