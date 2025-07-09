import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonToolbar,
  IonHeader,
  IonItem,
  IonIcon,
  IonList,
  IonLabel,
  IonText,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { DebtStatusComponent } from '../components/debt-status/debt-status.component';
import { fileTrayOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { GroupsService } from '../services/groups.service';
import { Group, Groups } from '../services/interfaces';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonLabel,
    IonList,
    IonIcon,
    IonItem,
    IonHeader,
    IonToolbar,
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponent,
    DebtStatusComponent,
  ],
})
export class GroupsPage implements OnInit {
  private groupService = inject(GroupsService);
  public details = <Groups>{};
  constructor() {
    addIcons({ fileTrayOutline });
    this.retrieveDetails();
  }

  retrieveDetails() {
    this.groupService.retrieveDetails().subscribe((res) => {
      this.details = res;
    });
  }

  filterGroup() {
    return;
  }

  removeCharInNegativeAmount(amount: string): string {
    const str = amount.replace('-', '');
    return str;
  }

  ngOnInit() {}
}
