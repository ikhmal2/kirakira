import { Component, inject, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';
import { Profile } from 'src/app/services/interfaces';

@Component({
  selector: 'app-debt-status',
  templateUrl: './debt-status.component.html',
  styleUrls: ['./debt-status.component.scss'],
})
export class DebtStatusComponent implements OnInit {
  private friendsService = inject(FriendsService)
  public profile = <Profile>{}

  constructor() {
    console.log(this.profile);
    this.initProfile()
    console.log(this.profile.totalOwed);
    console.log(this.oweOrOwed());
    console.log(this.loadAmount());

  }

  initProfile() {
    this.friendsService.getOwedAmount().subscribe({
      next: (res) => {
        this.profile = res
      }
    })
  }

  oweOrOwed() {
    if (this.profile.totalOwed > this.profile.owe) {
      return true
    } else { return false }
  }

  loadAmount() {
    this.friendsService.getOwedAmount().subscribe({
      next: (res) => {
        if (this.oweOrOwed()) {
          console.log('lancau');
          console.log('hi', res.totalOwed, res.owe);
          return res.totalOwed
        } else {
          console.log('lancau1');
          return res.owe
        }
      }
    })
  }

  ngOnInit() { }

}
