import { Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'challenges',
    loadChildren: './challenges/challenges.module#ChallengesModule',
    canLoad: [AuthGuard]
  }
];
