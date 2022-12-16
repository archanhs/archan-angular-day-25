import { IPost } from '../interfaces/i-post';

export class Post implements IPost {
  id: number;
  title: string;
  body: string;
  isPublished: boolean;
  urlImage: string;
  constructor(
    id: number,
    title: string,
    body: string,
    isPublished: boolean,
    urlImage: string
  ) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.isPublished = isPublished;
    this.urlImage = urlImage;
  }
}
