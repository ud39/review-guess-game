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
}
