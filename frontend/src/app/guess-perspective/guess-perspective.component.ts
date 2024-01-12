import {
  Component,
  Input,
  ViewChildren,
  QueryList,
  inject,
  HostListener,
} from '@angular/core';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { Review } from '../types/MyTypes';
import { ScoreComponent } from '../score/score.component';
import { FetchReviewsService } from '../fetch-reviews/fetch-reviews.service';
import { GuessInputComponent } from '../guess-input/guess-input.component';
import { TimerComponent } from '../timer/timer.component';
import { ReviewSelectionService } from '../review-selection/review-selection.service';
import { take, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-guess-perspective',
  standalone: true,
  imports: [
    ReviewCardComponent,
    ScoreComponent,
    GuessInputComponent,
    TimerComponent,
  ],
  providers: [FetchReviewsService, ReviewSelectionService],
  templateUrl: './guess-perspective.component.html',
  styleUrl: './guess-perspective.component.scss',
})
export class GuessPerspectiveComponent {
  private reviewSelectionService = inject(ReviewSelectionService);
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

  @ViewChildren(ReviewCardComponent)
  reviewCards!: QueryList<ReviewCardComponent>;

  constructor() {}

  handleCardClick(clickedCard: ReviewCardComponent): void {}

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') this.left();
    if (event.key === 'ArrowRight') this.right();
    if (event.key === 'Enter') {
    }
  }

  left(): void {}

  right(): void {}
}
