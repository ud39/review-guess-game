import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-selection',
  standalone: true,
  imports: [],
  templateUrl: './review-selection.component.html',
  styleUrl: './review-selection.component.scss',
})
export class ReviewSelectionComponent implements OnInit {
  numberOfSelectedReviews: number = 0;

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
