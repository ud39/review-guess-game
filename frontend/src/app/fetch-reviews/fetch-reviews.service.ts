import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
