import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonItem, IonIcon, IonCard, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { searchOutline, closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonText, IonIcon, IonItem, IonCard, RouterLink],
})
export class HeaderComponent implements OnInit {
  private router = inject(Router)

  constructor() {
    addIcons({ searchOutline, closeOutline });
  }

  checkRoute() {
    const urlPath = window.location.pathname;
    if (urlPath === '/friends') {
      return 'Add Friends';
    } else if (urlPath === '/groups') {
      return 'Create Group';
    } else if (urlPath === '/add-expense') {
      return 'Save';
    } else {
      return '';
    }
  }

  navigateToGroup() {
    this.router.navigate(['/groups'])
  }

  ngOnInit() { }
}
