import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../types/MyTypes';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss',
})
export class ReviewCardComponent implements OnInit {
  @Input() review: Review | undefined;

  ngOnInit(): void {}
}
