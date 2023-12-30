import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Review } from '../types/MyTypes';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss',
})
export class ReviewCardComponent implements OnInit, AfterViewInit {
  @Output() clickReviewCard = new EventEmitter<ReviewCardComponent>();
  @Input() review: Review | undefined;
  @ViewChild('reviewCard') reviewCard!: ElementRef;
  ngOnInit(): void {}
  ngAfterViewInit(): void {}
  setFocus() {
    this.reviewCard.nativeElement.focus();
  }

  clickedCard(): void {
    this.clickReviewCard.emit(this);
  }
}
