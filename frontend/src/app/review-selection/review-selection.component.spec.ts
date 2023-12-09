import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSelectionComponent } from './review-selection.component';

describe('ReviewSelectionComponent', () => {
  let component: ReviewSelectionComponent;
  let fixture: ComponentFixture<ReviewSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
