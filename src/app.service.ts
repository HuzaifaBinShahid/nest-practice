import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    return books;
  }

  findById(bookId: number): Book | undefined {
    return books.find((book) => book.id === bookId);
  }

  create(book: Partial<Book>): Book {
    const newID = books[books.length - 1].id + 1;

    const newBook: Book = {
      id: newID,
      author: book.author ?? '',
      title: book.title ?? '',
      publicationYear: book.publicationYear ?? 0,
    };
    books.push(newBook);
    return newBook;
  }
}
