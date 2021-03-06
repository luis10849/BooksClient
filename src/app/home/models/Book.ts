import { Author } from "./Author";
import { Review } from "./Reviews";

export class Book {
    id: number;
    title: number;
    description: string;
    url: string;
    isbn: string;
    createAt: Date;
    author: Author
    reviews: [Review]
}
