import { Component } from '@angular/core';
import { Review } from '../types/MyTypes';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { ReviewSelectionComponent } from '../review-selection/review-selection.component';

@Component({
  selector: 'app-review-perspective',
  standalone: true,
  imports: [ReviewCardComponent, ReviewSelectionComponent],
  templateUrl: './review-perspective.component.html',
  styleUrl: './review-perspective.component.scss',
})
export class ReviewPerspectiveComponent {
  score: number = 0;
  reviews: Review[] = [];
}
