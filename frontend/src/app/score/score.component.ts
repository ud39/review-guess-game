import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss',
})
export class ScoreComponent implements OnInit, OnDestroy {
  score: number = 69;

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  increaseScore(diffculty: number) {}

  decreaseScore(diffculty: number) {}
}
