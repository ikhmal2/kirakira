import { Component, inject, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';
import { Profile } from 'src/app/services/interfaces';

@Component({
  selector: 'app-debt-status',
  templateUrl: './debt-status.component.html',
  styleUrls: ['./debt-status.component.scss'],
})
export class DebtStatusComponent implements OnInit {
  private friendsService = inject(FriendsService);
  public profile = <Profile>{};
  public debtAmount: number = 0;

  constructor() {
    this.initProfile();
    this.loadAmount();
  }

  initProfile(): any {
    let profile = <Profile>{};
    this.friendsService.getOwedAmount().subscribe({
      next: (res) => {
        profile = res;
        this.profile = profile;
      },
    });
  }

  oweOrOwed() {
    if (this.profile.totalOwed > this.profile.owe) {
      return true;
    } else {
      return false;
    }
  }

  loadAmount() {
    this.friendsService.getOwedAmount().subscribe({
      next: (res) => {
        if (this.oweOrOwed()) {
          this.debtAmount = res.totalOwed;
        } else {
          this.debtAmount = res.owe;
        }
      },
    });
  }

  ngOnInit() {}
}
