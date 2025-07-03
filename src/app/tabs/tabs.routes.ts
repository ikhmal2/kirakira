import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'friends',
        loadComponent: () =>
          import('../friends/friends.page').then((m) => m.FriendsPage),
      },
      {
        path: 'groups',
        loadComponent: () =>
          import('../groups/groups.page').then((m) => m.GroupsPage),
      },
      {
        path: 'add-expense',
        loadComponent: () =>
          import('../add-expense/add-expense.page').then(
            (m) => m.AddExpensePage
          ),
      },
      {
        path: 'activity',
        loadComponent: () =>
          import('../activity/activity.page').then((m) => m.ActivityPage),
      },
      {
        path: 'account',
        loadComponent: () =>
          import('../account/account.page').then(
            (m) => m.AccountPage
          ),
      },
      {
        path: '',
        redirectTo: '/groups',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/groups',
    pathMatch: 'full',
  },
];
