import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'friends',
    loadComponent: () => import('./friends/friends.page').then( m => m.FriendsPage)
  },
  {
    path: 'groups',
    loadComponent: () => import('./groups/groups.page').then( m => m.GroupsPage)
  },
  {
    path: 'add-expense',
    loadComponent: () => import('./add-expense/add-expense.page').then( m => m.AddExpensePage)
  },
  {
    path: 'activity',
    loadComponent: () => import('./activity/activity.page').then( m => m.ActivityPage)
  },
  {
    path: 'account',
    loadComponent: () => import('./account/account.page').then( m => m.AccountPage)
  },
];
