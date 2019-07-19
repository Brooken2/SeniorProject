import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      { id: 11, name: 'Where the crawdas Sing' },
      { id: 12, name: 'A Better Man' },
      { id: 13, name: 'The Poison Jungle' },
      { id: 14, name: 'Dragonfly' },
      { id: 15, name: 'Ghosts of the Shadow Market' },
      { id: 16, name: 'Lord of the Flies' }
    ];
    return {books};
  }

  // Overrides the genId method to ensure that a book always has an id.
  // If the books array is empty,
  // the method below returns the initial number (11).
  // if the book array is not empty, the method below returns the highest
  // book id + 1.
  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 11;
  }
}