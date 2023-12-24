import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game, Review } from '../types/MyTypes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchReviewsService {
  private URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  testCall() {
    const endpoint = `${this.URL}/`;

    const result = this.httpClient.get(endpoint, { responseType: 'text' });
    return result;
  }

  getReviews(gameTitle: string, numberOfReviews: number): Observable<Review[]> {
    const endpoint = `${this.URL}/reviews?gameTitle=${gameTitle}&numberOfReviews=${numberOfReviews}`;
    return this.httpClient.get<Review[]>(endpoint);
  }

  getInitialReviews(): Observable<{ game: Game; reviews: Review[] }> {
    const endpoint = `${this.URL}/initialreviews`;
    return this.httpClient.get<{ game: Game; reviews: Review[] }>(endpoint);
  }

  //getGames(): Observable<Game[]>;
}
