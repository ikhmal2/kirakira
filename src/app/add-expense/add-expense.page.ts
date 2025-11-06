import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { AddExpenseModalComponent } from '../components/add-expense-modal/add-expense-modal.component';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonItem,
  IonLabel,
  IonAvatar,
  IonRow,
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonList,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline, fileTrayOutline } from 'ionicons/icons';
import { FriendsService } from '../services/friends.service';
import { GroupsService } from '../services/groups.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonSearchbar,
    IonRow,
    IonAvatar,
    IonLabel,
    IonItem,
    IonIcon,
    IonContent,
    IonHeader,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    AddExpenseModalComponent,
  ],
})
export class AddExpensePage implements OnInit {
  private friendService = inject(FriendsService);
  private groupService = inject(GroupsService);
  public friendList: string[] = [
    'Aan Adik Alep',
    'Alif Aiman',
    'Ijud',
    'Ariff',
  ];
  public groupList: string[] = [
    'Bob Mullet',
    'Ke pd ke kita',
    'Loy dtg',
    'Pestapora',
  ];
  public recentList = [
    { name: 'Ijud', type: 'friend' },
    { name: 'Thailand', type: 'group' },
    { name: 'Aliff Aiman', type: 'friend' },
  ];
  //   public results = [...this.friendList, this.groupList];
  public results: string[] = [];
  public combinedData = this.friendList.concat(this.groupList);

  constructor() {
    addIcons({ closeOutline, fileTrayOutline });
  }

  loadFriends() {
    this.friendService.getFriendsList().subscribe({
      next: (res) => {
        for (let i = 0; i < res.friends.length; i++) {
          this.friendList.push(res.friends[i].name);
        }
      },
    });
  }

  loadGroups() {
    this.groupService.retrieveDetails().subscribe({
      next: (res) => {
        for (let i = 0; i < res.groups.length; i++) {
          this.friendList.push(res.groups[i].name);
        }
      },
    });
  }

  handleInput(event: Event) {
    this.results = [];
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';
    this.results = this.combinedData.filter((d) =>
      d.toLowerCase().includes(query)
    );

    if (query === '') {
      this.results = [];
    }
  }

  public modalIsOpen = false;
  public selectedEntity = '';

  setOpen(isOpen: boolean, recentItem: string) {
    this.modalIsOpen = isOpen;
    this.selectedEntity = recentItem;
  }

  ngOnInit() {}
}
