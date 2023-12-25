import { Component, OnInit } from '@angular/core';
import { Review } from '../types/MyTypes';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { ReviewSelectionComponent } from '../review-selection/review-selection.component';
import { FetchReviewsService } from '../fetch-reviews/fetch-reviews.service';
import { PlaceholderComponent } from '../placeholder/placeholder.component';

@Component({
  selector: 'app-review-perspective',
  standalone: true,
  imports: [
    ReviewCardComponent,
    ReviewSelectionComponent,
    PlaceholderComponent,
  ],
  templateUrl: './review-perspective.component.html',
  styleUrl: './review-perspective.component.scss',
  providers: [FetchReviewsService],
})
export class ReviewPerspectiveComponent implements OnInit {
  score: number = 0;
  reviews: Review[] = [];

  constructor(private fetchReviewService: FetchReviewsService) {}

  ngOnInit(): void {
    this.fetchReviewService
      .getInitialReviews()
      .subscribe((resp) => console.log((this.reviews = resp.reviews)));
  }
}
