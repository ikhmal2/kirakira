import { Component, OnInit } from '@angular/core';
import { IonItem, IonGrid, IonRow, IonCol, IonIcon, IonText } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { cashOutline, checkmarkDoneOutline, receiptOutline } from 'ionicons/icons';
import { ActivityItem } from 'src/app/activity/activity-item';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss'],
  imports: [IonText, IonIcon, IonCol, IonRow, IonGrid, IonItem],
})
export class ActivityItemComponent implements OnInit {
  constructor() {
    addIcons({ cashOutline, receiptOutline, checkmarkDoneOutline });
  }

  ngOnInit() { }

}
