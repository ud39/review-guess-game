import { User } from './types/MyTypes';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReviewPerspectiveComponent } from './review-perspective/review-perspective.component';
import { GuessPerspectiveComponent } from './guess-perspective/guess-perspective.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    GuessPerspectiveComponent,
    ReviewPerspectiveComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'GuessTheGame';
  user: User | undefined;
  guesserReviewer: boolean = true;

  changePerspective() {
    this.guesserReviewer = !this.guesserReviewer;
  }
}
