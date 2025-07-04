import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonAvatar,
  IonSkeletonText, IonInput, IonList, IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonList, IonInput,
    IonItem,
    IonContent,
    CommonModule,
    FormsModule,
  ],
})
export class LoginPage implements OnInit {
  public dummyArray: string[] = ['fuck', 'konek', 'kecik', 'makcik', 'fayyaz'];
  constructor() {
    this.firstFunction('fuck you');
  }

  firstFunction(msg: string) {
    console.log(msg);
  }

  ngOnInit() { }
}
