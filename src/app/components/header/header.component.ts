import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonItem, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { searchOutline } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonIcon, IonItem]
})
export class HeaderComponent implements OnInit {
  constructor() {
    addIcons({ searchOutline })
  }

  checkRoute() {
    const urlPath = window.location.pathname
    if (urlPath === '/friends') {
      return 'Add Friends'
    } else if (urlPath === '/groups') {
      return 'Create Group'
    } else {
      return ''
    }
  }

  ngOnInit() { }

}
