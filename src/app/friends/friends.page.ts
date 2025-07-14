import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonItem,
  IonAvatar,
  IonLabel,
  IonText,
  IonButton,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { FriendsService } from '../services/friends.service';
import { Friend } from '../services/interfaces';
import { DebtStatusComponent } from '../components/debt-status/debt-status.component';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonText,
    IonLabel,
    IonItem,
    IonContent,
    IonHeader,
    IonToolbar,
    IonAvatar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    DebtStatusComponent,
  ],
})
export class FriendsPage implements OnInit {
  private friendsService = inject(FriendsService);
  public friendsList: Friend[] = [];
  public settledFriendsList: Friend[] = [];
  public showSettledFriends = false;

  constructor() {
    this.loadFriends();
  }

  loadFriends() {
    this.friendsService.getFriendsList().subscribe({
      next: (res) => {
        for (let i = 0; i < res.friends.length; i++) {
          if (
            res.friends[i].amountOwed === 0 &&
            res.friends[i].debtAmount === 0
          ) {
            this.settledFriendsList.push(res.friends[i]);
          } else {
            this.friendsList.push(res.friends[i]);
          }
        }
      },
    });
  }

  displaySettledFriends() {
    this.showSettledFriends = !this.showSettledFriends;
  }

  ngOnInit() {}
}
