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
  remainingPathColor: string = 'blue';
  timeLeft: number | string = this.TIME_LIMIT;

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

  startTimer(): void {
    if (isPlatformBrowser(this.platformId)) {
      let countDownTime = this.TIME_LIMIT;
      interval(1000) // Adjusted to one second interval
        .pipe(take(this.TIME_LIMIT))
        .subscribe(() => {
          countDownTime--;
          const minutes = Math.floor(countDownTime / 60);
          let seconds: string | number = countDownTime % 60;
          if (seconds < 10) {
            seconds = `0${seconds}`;
          }

          this.timeLeft = `${minutes}:${seconds}`;
        });
    }
  }
}
