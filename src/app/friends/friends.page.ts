import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { FriendsService } from '../services/friends.service';
import { Friend, Friends } from '../services/interfaces';
import { DebtStatusComponent } from "../components/debt-status/debt-status.component";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, HeaderComponent, DebtStatusComponent]
})
export class FriendsPage implements OnInit {
  private friendsService = inject(FriendsService)
  public friendsList: Friend[] = []

  constructor() {
    this.loadFriends()
  }

  loadFriends() {
    this.friendsService.getFriendsList().subscribe({
      next: (res) => {
        this.friendsList.push(...res.friends)
      }
    });
  }

  ngOnInit() {
  }

}
