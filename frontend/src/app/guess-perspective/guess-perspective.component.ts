import { Component, Input } from '@angular/core';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { Review } from '../types/MyTypes';
import { ScoreComponent } from '../score/score.component';
import { FetchReviewsService } from '../fetch-reviews/fetch-reviews.service';

@Component({
  selector: 'app-guess-perspective',
  standalone: true,
  imports: [ReviewCardComponent, ScoreComponent],
  providers: [FetchReviewsService],
  templateUrl: './guess-perspective.component.html',
  styleUrl: './guess-perspective.component.scss',
})
export class GuessPerspectiveComponent {
  @Input() reviews: Review[] = [
    {
      steam_id: '1',
      review: 'Good game',
      voted_up: true,
      playtime_forever: 1337,
      votes_funny: 20,
      votes_up: 69,
    },
    {
      steam_id: '2',
      review: 'Okay game',
      playtime_forever: 42,
      voted_up: true,
      votes_funny: 20,
      votes_up: 69,
    },
    {
      steam_id: '3',
      review: 'Amazing game',
      playtime_forever: 42,
      voted_up: true,
      votes_up: 20,
      votes_funny: 69,
    },
  ];
  isLoading: boolean = true;

  constructor() {}
}
