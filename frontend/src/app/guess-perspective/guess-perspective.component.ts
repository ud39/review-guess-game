import { Component, Input } from '@angular/core';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { Review } from '../types/MyTypes';

@Component({
  selector: 'app-guess-perspective',
  standalone: true,
  imports: [ReviewCardComponent],
  templateUrl: './guess-perspective.component.html',
  styleUrl: './guess-perspective.component.scss',
})
export class GuessPerspectiveComponent {
  @Input() reviews: Review[] = [];
  isLoading: boolean = true;
}
