import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UIService } from '../../shared/ui.service';
import { ChallengeService } from '../challenge.service';
import { Challenge } from '../challenge.model';
import { Day, DayStatus } from '../day.model';

@Component({
  selector: 'ns-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.scss']
})
export class CurrentChallengeComponent implements OnInit, OnDestroy {
  weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  currentChallenge: Challenge;
  private curChallengeSub: Subscription;

  constructor(
    private vcRef: ViewContainerRef,
    private uiService: UIService,
    private challengeService: ChallengeService
  ) {}

  ngOnInit() {
    this.curChallengeSub = this.challengeService.currentChallenge.subscribe(
      challenge => {
        this.currentChallenge = challenge;
      }
    );
  }

  getIsSettable(dayInMonth: number) {
    return dayInMonth <= new Date().getDate();
  }

  getRow(index: number, day: { dayInMonth: number; dayInWeek: number }) {
    const startRow = 2;
    const weekRow = Math.floor(index / 7);
    const firstWeekDayOfMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      1
    ).getDay();
    const irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;

    return startRow + weekRow + irregularRow;
  }

  onChangeStatus(day: Day) {
    if (!this.getIsSettable(day.dayInMonth)) {
      return;
    }
  }

  ngOnDestroy() {
    if (this.curChallengeSub) {
      this.curChallengeSub.unsubscribe();
    }
  }
}
