import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Book } from '../home/models/Book';
import { CreateReview } from './models/CreateReview';
import { ReviewService } from './services/review.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() book: Book;

  constructor(
    private modalController: ModalController,
    private reviewService: ReviewService
  ) {}

  review: string = '';
  calification: number = 0;

  ngOnInit() {}

  onClose() {
    this.modalController.dismiss();
  }

  onReview(e) {
    this.review = e.target.value;
    console.log(this.review);
  }

  onCalification(e) {
    this.calification = parseInt(e.target.value);
    console.log(this.calification);
  }

  addReview() {
    let review: CreateReview = {
      comment: this.review,
      calification: this.calification,
      userId: 1,
      bookId: this.book.id,
    };
    console.log(review);
    this.reviewService.addReview(review).subscribe((response: Book) => {
      console.log(response);
      this.book = response;
      this.calification = 0
      this.review = ''
    });
  }
}
