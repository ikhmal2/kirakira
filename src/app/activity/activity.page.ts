import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonText, IonList } from '@ionic/angular/standalone';
import { HeaderComponent } from "../components/header/header.component";
import { ActivityItemComponent } from '../components/activity-item/activity-item.component';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
  standalone: true,
  imports: [IonList, IonText, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, HeaderComponent, ActivityItemComponent]
})
export class ActivityPage implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
