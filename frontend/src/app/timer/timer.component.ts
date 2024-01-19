import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  afterNextRender,
} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent implements OnInit, OnDestroy, AfterViewInit {
  countDownTime: number = 90;

  constructor() {
    afterNextRender(() => {
      interval(1000).subscribe(() => console.log(2));
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
  ngAfterViewInit(): void {}
}
