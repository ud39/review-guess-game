import { Component, Input } from '@angular/core';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { Review } from '../types/MyTypes';
import { ScoreComponent } from '../score/score.component';

@Component({
  selector: 'app-guess-perspective',
  standalone: true,
  imports: [ReviewCardComponent, ScoreComponent],
  templateUrl: './guess-perspective.component.html',
  styleUrl: './guess-perspective.component.scss',
})
export class GuessPerspectiveComponent {
  @Input() reviews: Review[] = [
    {
      id: 1,
      title: 'Final Fantasy XV',
      text: 'Good game',
      recommend: true,
      played_hours: 1337,
      helpful: 20,
      funny: 69,
    },
    {
      id: 2,
      title: 'Witcher 3',
      text: 'Okay game',
      recommend: true,
      played_hours: 42,
      helpful: 20,
      funny: 69,
    },
    {
      id: 3,
      title: 'Breath of the Wild',
      text: 'Amazing game',
      recommend: true,
      played_hours: 42,
      helpful: 20,
      funny: 69,
    },
  ];
  isLoading: boolean = true;
}
