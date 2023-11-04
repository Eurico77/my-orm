import { Entity } from "./main";

export class Book extends Entity {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    super();
    this.title = title;
    this.author = author;
  }
}