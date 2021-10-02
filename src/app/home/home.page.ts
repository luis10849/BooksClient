import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Book } from './models/Book';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private bookService: BookService,
    private modalController: ModalController
  ) {}

  allBooks: Book[] = [];
  loading: boolean = true;
  searchTerm: string = '';

  ngOnInit(): void {
    this.getBooks();
  }

  async viewBook(book: Book) {
    console.log(book);
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        book,
      },
    });
    return await modal.present();
  }

  getBooks() {
    this.bookService.getAllBooks().subscribe((books: Book[]) => {
      console.log(books);
      this.allBooks = books;
      this.loading = false;
    });
  }

  onSimpleSearch(e) {
    this.searchTerm = e.target.value;
    if (this.searchTerm) {
      this.bookService
        .getSearchBooks(this.searchTerm)
        .subscribe((books: Book[]) => {
          console.log(books);
          this.allBooks = books;
        });
    } else {
      this.getBooks();
    }
  }
}
