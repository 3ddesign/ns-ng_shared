import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengesRoutingModule } from './challenges-routing.module';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { TodayComponent } from './today/today.component';
import { SharedModule } from '../shared/shared.module';
import { ChallengeActionsModule } from './challenge-actions/challenge-actions.module';

@NgModule({
  declarations: [
    CurrentChallengeComponent,
    TodayComponent
  ],
  imports: [
    CommonModule,
    ChallengesRoutingModule,
    SharedModule,
    ChallengeActionsModule
  ]
})
export class ChallengesModule {}
