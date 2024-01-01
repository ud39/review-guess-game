import { Injectable } from '@angular/core';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewSelectionService {
  private reviewCardsSubject = new BehaviorSubject<ReviewCardComponent[]>([]);
  reviewCards$: Observable<ReviewCardComponent[]> =
    this.reviewCardsSubject.asObservable();

  private focusedReviewCardSubject =
    new BehaviorSubject<ReviewCardComponent | null>(null);
  focusedReviewCard$: Observable<ReviewCardComponent | null> =
    this.focusedReviewCardSubject.asObservable();

  selectedReviewCards: ReviewCardComponent[] = [];

  constructor() {}

  setReviewCards(reviewCards: ReviewCardComponent[]) {
    this.reviewCardsSubject.next(reviewCards);
  }

  setFocusReviewCard(reviewCard: ReviewCardComponent) {
    this.focusedReviewCardSubject.next(reviewCard);
  }

  addReviewCard(reviewCard: ReviewCardComponent) {
    if (this.selectedReviewCards.length == 3) {
      throw Error('Too many Cards deselect a Card please');
    }
    this.selectedReviewCards.push(reviewCard);
  }

  removeReviewCard(selectedReviewCard: ReviewCardComponent) {
    this.selectedReviewCards = this.selectedReviewCards.filter(
      (reviewCard) =>
        reviewCard.review?.steam_id !== selectedReviewCard.review?.steam_id,
    );
  }
}
