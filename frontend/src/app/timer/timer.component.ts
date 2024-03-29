import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent implements OnInit, OnDestroy, AfterViewInit {
  TIME_LIMIT: number = 90;
  timePassed: number = 0;
  FULL_DASH_ARRAY: number = 283;
  WARNING_THRESHOLD: number = 10;
  ALERT_THRESHOLD: number = 5;
  currentDashArray: number = 0;
  timeLeft: number | string = this.TIME_LIMIT;
  start = true;
  warning = false;
  alert = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.formatTimeLeft();
  }

  ngOnDestroy(): void {}
  ngAfterViewInit(): void {
    this.startTimer();
  }

  formatTimeLeft() {
    const minutes = Math.floor(this.TIME_LIMIT / 60);
    let seconds: string | number = this.TIME_LIMIT % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    this.timeLeft = `${minutes}:${seconds}`;
  }

  calculateTimeFraction(): number {
    return Number(this.timePassed) / this.TIME_LIMIT;
  }

  setCircleDasharray() {
    this.currentDashArray = this.calculateTimeFraction() * this.FULL_DASH_ARRAY;
  }

  setPathColor() {
    if (
      this.timePassed > Math.ceil(this.TIME_LIMIT * 0.75) &&
      this.timePassed < Math.ceil(this.TIME_LIMIT * 0.9)
    )
      this.warning = true;

    if (
      this.timePassed >= Math.ceil(this.TIME_LIMIT * 0.9) ||
      this.timePassed > this.TIME_LIMIT
    )
      this.alert = true;
  }

  startTimer(): void {
    if (isPlatformBrowser(this.platformId)) {
      let countDownTime = this.TIME_LIMIT;
      let passedTime = countDownTime;
      interval(1000) // Adjusted to one second interval
        .pipe(take(this.TIME_LIMIT))
        .subscribe(() => {
          passedTime--;
          this.timePassed++;
          const minutes = Math.floor(passedTime / 60);
          let seconds: string | number = passedTime % 60;
          if (seconds < 10) {
            seconds = `0${seconds}`;
          }

          this.timeLeft = `${minutes}:${seconds}`;
          this.setCircleDasharray();
          this.setPathColor();
        });
    }
  }
}
