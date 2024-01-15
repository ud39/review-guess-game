import {
  OnInit,
  Component,
  Input,
  ViewChildren,
  QueryList,
  inject,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { Review } from '../types/MyTypes';
import { ScoreComponent } from '../score/score.component';
import { FetchReviewsService } from '../fetch-reviews/fetch-reviews.service';
import { GuessInputComponent } from '../guess-input/guess-input.component';
import { TimerComponent } from '../timer/timer.component';
import { ReviewSelectionService } from '../review-selection/review-selection.service';

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
export class GuessPerspectiveComponent implements OnInit, AfterViewInit {
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

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.reviewCards.toArray()[1].setFocus();
    this.focusedCard = this.getCurrentFocusedCard();
  }

  @ViewChildren(ReviewCardComponent)
  reviewCards!: QueryList<ReviewCardComponent>;
  focusedCard: ReviewCardComponent | undefined;

  constructor() {}

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') this.left();
    if (event.key === 'ArrowRight') this.right();
    if (event.key === 'Enter') {
      this.focusedCard = this.getCurrentFocusedCard();
      this.focusedCard?.setCurrentViewedCard();
    }
  }

  getCurrentFocusedCard() {
    return (
      this.reviewCards.filter(
        (review) => review.reviewCard.nativeElement === document.activeElement,
      )[0] || this.focusedCard
    );
  }

  left(): void {
    this.focusedCard?.removeViewedCard();
    const focusedCard = this.getCurrentFocusedCard();
    const currentIndex = this.reviewCards
      .toArray()
      .findIndex(
        (review) => review.review?.steam_id === focusedCard.review?.steam_id,
      );
    const arrayLength = this.reviewCards.length;
    const nextIndex = (currentIndex - 1 + arrayLength) % arrayLength;
    this.reviewCards.toArray()[nextIndex].setFocus();
  }

  right(): void {
    this.focusedCard?.removeViewedCard();
    const focusedCard = this.getCurrentFocusedCard();
    const currentIndex = this.reviewCards
      .toArray()
      .findIndex(
        (review) => review.review?.steam_id === focusedCard.review?.steam_id,
      );
    const arrayLength = this.reviewCards.length;
    const nextIndex = (currentIndex + 1) % arrayLength;
    this.reviewCards.toArray()[nextIndex].setFocus();
  }
}
