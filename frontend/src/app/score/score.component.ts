import { Component } from '@angular/core';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss',
})
export class ScoreComponent {
  score: number = 0;

  increaseScore(diffculty: number) {
    this.score += 20 * diffculty;
  }
}
