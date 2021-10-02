import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateReview } from '../models/CreateReview';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  endpoint = 'http://localhost:3000/api/books';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  addReview(review: CreateReview) {
    return this.http.post(this.endpoint, JSON.stringify(review), this.httpOptions);
  }
}
