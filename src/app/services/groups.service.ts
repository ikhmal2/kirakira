import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Group, Groups } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  private http = inject(HttpClient);
  constructor() {}

  retrieveDetails(): Observable<Groups> {
    return this.http.get<Groups>('assets/mock/groups.json');
  }
}
