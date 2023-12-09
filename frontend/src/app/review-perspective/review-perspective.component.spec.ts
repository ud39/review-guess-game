import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPerspectiveComponent } from './review-perspective.component';

describe('ReviewPerspectiveComponent', () => {
  let component: ReviewPerspectiveComponent;
  let fixture: ComponentFixture<ReviewPerspectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewPerspectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewPerspectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
