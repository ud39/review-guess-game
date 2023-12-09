import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessPerspectiveComponent } from './guess-perspective.component';

describe('GuessPerspectiveComponent', () => {
  let component: GuessPerspectiveComponent;
  let fixture: ComponentFixture<GuessPerspectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuessPerspectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuessPerspectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
