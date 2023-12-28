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

  constructor() {}

  setReviewCards(reviewCards: ReviewCardComponent[]) {
    this.reviewCardsSubject.next(reviewCards);
  }

  setFocusReviewCard(reviewCard: ReviewCardComponent) {
    this.focusedReviewCardSubject.next(reviewCard);
  }
}
