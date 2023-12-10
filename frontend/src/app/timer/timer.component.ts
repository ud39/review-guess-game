import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent implements OnInit, OnDestroy {
  timer: number = 90;
  private alive: boolean = true;

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  decreaseTime() {}

  resetTimer() {}
}
