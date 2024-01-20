import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  afterRender,
  ChangeDetectorRef,
} from '@angular/core';
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
  timeLeft: number | string = this.TIME_LIMIT;

  constructor() {}

  ngOnInit(): void {
    this.formatTimeLeft();
  }

  ngOnDestroy(): void {}
  ngAfterViewInit(): void {}

  formatTimeLeft() {
    const minutes = Math.floor(this.TIME_LIMIT / 60);
    let seconds: string | number = this.TIME_LIMIT % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    this.timeLeft = `${minutes}:${seconds}`;
  }

  startTimer(): void {}
}
