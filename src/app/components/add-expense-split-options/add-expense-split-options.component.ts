import { Component, inject, OnInit } from '@angular/core';
import {
  IonCard,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
} from '@ionic/angular/standalone';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-add-expense-split-options',
  templateUrl: './add-expense-split-options.component.html',
  styleUrls: ['./add-expense-split-options.component.scss'],
  imports: [
    IonLabel,
    IonItem,
    IonList,
    IonButton,
    IonRow,
    IonText,
    IonCard,
    IonGrid,
    IonCol,
    IonCheckbox,
  ],
})
export class AddExpenseSplitOptionsComponent implements OnInit {
  constructor() {
    this.getGroupParticipants();
  }

  private groupService = inject(GroupsService);

  public mode: 1 | 2 = 1;

  public groupParticipants: any = [];

  getGroupParticipants() {
    this.groupService.retrieveDetails().subscribe({
      next: (res) => {
        const allParticipants: string[] = [];
        res.groups.forEach((group: any) => {
          if (group.list && Array.isArray(group.list)) {
            group.list.forEach((participant: any) => {
              if (participant.name) {
                allParticipants.push(participant.name);
              }
            });
          }
        });
        this.groupParticipants = [...new Set(allParticipants)];
      },
    });
  }

  equalSplit() {
    this.mode = 1;
  }

  multiSplit() {
    this.mode = 2;
  }

  ngOnInit() {}
}
