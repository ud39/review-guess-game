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
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss',
})
export class ReviewCardComponent implements OnInit, AfterViewInit {
  @Output() clickReviewCard = new EventEmitter<ReviewCardComponent>();
  @Input() review: Review | undefined;
  @ViewChild('reviewCard') reviewCard!: ElementRef;
  selected: boolean = false;
  ngOnInit(): void {}
  ngAfterViewInit(): void {}
  setFocus() {
    this.reviewCard.nativeElement.focus();
  }

  setSelected() {
    this.selected = !this.selected;
  }

  clickedCard(): void {
    this.clickReviewCard.emit(this);
  }
}
