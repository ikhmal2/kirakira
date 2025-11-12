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
import { ExpenseData } from '../services/interfaces';

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
  public friendList: any = [
    { name: 'Aan Adik Alep', type: 1 },
    { name: 'Alif Aiman', type: 1 },
    { name: 'Ijud', type: 1 },
    { name: 'Ariff', type: 1 },
  ];
  public groupList = [
    { name: 'Bob Mullet', type: 2 },
    { name: 'Ke pd ke kita', type: 2 },
    { name: 'Loy dtg', type: 2 },
    { name: 'Pestapora', type: 2 },
  ];
  public recentList = [
    { name: 'Ijud', type: 1 },
    { name: 'Thailand', type: 2 },
    { name: 'Aliff Aiman', type: 1 },
  ];
  public results: { name: string; type: number }[] = [];
  public combinedData = this.friendList.concat(this.groupList);

  constructor() {
    addIcons({ closeOutline, fileTrayOutline });
  }

  loadFriends() {
    this.friendService.getFriendsList().subscribe({
      next: (res) => {
        for (let i = 0; i < res.friends.length; i++) {
          const data = {
            name: res.friends[i].name,
            type: '1',
          };
          //   this.friendList.push(res.friends[i].name);
          this.friendList.push(data);
        }
        console.log(this.friendList);
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
    this.results = this.combinedData.filter(
      (d: { name: string; type: number }) =>
        d.name.toLowerCase().includes(query)
    );

    if (query === '') {
      this.results = [];
    }
  }

  public modalIsOpen = false;
  public selectedEntity = '';
  public selectedEntityType = 0;
  public expense_data: ExpenseData | null = null;

  setOpen(isOpen: boolean, recentItem: string, itemType: number) {
    this.modalIsOpen = isOpen;
    this.selectedEntity = recentItem;
    this.selectedEntityType = itemType;
  }

  handleExpenseSaved(expenseData: ExpenseData) {
    this.expense_data = expenseData;
    console.log('Expense data saved:', this.expense_data);
  }

  ngOnInit() {}
}
