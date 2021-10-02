import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAllBooks() {
    return this.http.get<Book[]>('http://localhost:3000/api/books')
  }

  getSearchBooks(searchTerm: string) {
    return this.http.get<Book[]>(`http://localhost:3000/api/books/filter?search=${searchTerm}`)
  }

}
