import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  inject,
} from '@angular/core';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { ReviewSelectionService } from './review-selection.service';
import { combineLatest, map, take } from 'rxjs';

@Component({
  selector: 'app-review-selection',
  standalone: true,
  imports: [],
  templateUrl: './review-selection.component.html',
  styleUrl: './review-selection.component.scss',
})
export class ReviewSelectionComponent implements OnInit, AfterViewInit {
  numberOfSelectedReviews: number = 0;
  reviewCards: ReviewCardComponent[] = [];
  reviewSelectionService = inject(ReviewSelectionService);

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') this.left();
    if (event.key === 'ArrowRight') this.right();
    if (event.key === 'Enter') {
      this.reviewSelectionService.focusedReviewCard$
        .pipe(take(1))
        .subscribe((reviewCard) => {
          if (reviewCard === null) throw Error('What');
          this.setCard(reviewCard);
        });
    }
  }

  left(): void {
    combineLatest([
      this.reviewSelectionService.reviewCards$,
      this.reviewSelectionService.focusedReviewCard$,
    ])
      .pipe(
        take(1),
        map(([reviews, focusReview]) => {
          const focusReviewSteamId = focusReview?.review?.steam_id;
          if (!focusReviewSteamId) return;

          const currentIndex = reviews.findIndex(
            (review) => review.review?.steam_id === focusReviewSteamId,
          );

          const nextIndex =
            (currentIndex - 1 + reviews.length) % reviews.length;
          return reviews[nextIndex];
        }),
      )
      .subscribe((focusedReview) => {
        if (focusedReview === undefined) return;
        focusedReview?.setFocus();
        this.reviewSelectionService.setFocusReviewCard(focusedReview);
      });
  }

  right(): void {
    combineLatest([
      this.reviewSelectionService.reviewCards$,
      this.reviewSelectionService.focusedReviewCard$,
    ])
      .pipe(
        take(1),
        map(([reviews, focusReview]) => {
          const focusReviewSteamId = focusReview?.review?.steam_id;
          if (!focusReviewSteamId) return;

          const currentIndex = reviews.findIndex(
            (review) => review.review?.steam_id === focusReviewSteamId,
          );

          const nextIndex =
            (currentIndex + 1 + reviews.length) % reviews.length;
          return reviews[nextIndex];
        }),
      )
      .subscribe((focusedReview) => {
        if (focusedReview === undefined) return;
        focusedReview?.setFocus();
        this.reviewSelectionService.setFocusReviewCard(focusedReview);
      });
  }

  async setCard(selectedReview: ReviewCardComponent) {
    if (selectedReview.selected) {
      this.reviewSelectionService.removeReviewCard(selectedReview);
      selectedReview.setSelected();
      this.numberOfSelectedReviews--;
    } else {
      this.reviewSelectionService.addReviewCard(selectedReview);
      selectedReview.setSelected();
      this.numberOfSelectedReviews++;
    }
  }
}
