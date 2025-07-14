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
  IonCol,
  IonRow,
  IonButton,
  IonAvatar,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { DebtStatusComponent } from '../components/debt-status/debt-status.component';
import {
  fileTrayOutline,
  logoDesignernews,
  pricetagsOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { GroupsService } from '../services/groups.service';
import { Groups, Group } from '../services/interfaces';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
  standalone: true,
  imports: [
    IonAvatar,
    IonButton,
    IonRow,
    IonCol,
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
  public groupList: Group[] = [];
  public settleGroupList: Group[] = [];
  public showSettledGroups = false;

  constructor() {
    this.retrieveDetails();
    addIcons({ fileTrayOutline, pricetagsOutline });
  }

  async retrieveDetails() {
    this.groupService.retrieveDetails().subscribe({
      next: (res) => {
        for (let i = 0; i < res.groups.length; i++) {
          if (res.groups[i].amount !== 0) {
            this.groupList.push(res.groups[i]);
          } else {
            this.settleGroupList.push(res.groups[i]);
          }
        }
      },
    });
  }

  displaySettledGroups() {
    this.showSettledGroups = !this.showSettledGroups;
    if (this.showSettledGroups) {
      document
        .querySelector('#settled-friends')
        ?.classList.add('visibility', 'collapse');
    } else {
      document
        .querySelector('#settled-friends')
        ?.classList.add('visibility', 'visible');
    }
  }

  removeCharInNegativeAmount(amount: string): string {
    const str = amount.replace('-', '');
    return str;
  }

  ngOnInit() {}
}
