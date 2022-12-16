import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/i-post';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  getAllPost(): IPost[] {
    return [
      new Post(
        1,
        'lorem ipsum',
        'ini postingan pertaama dari jc',
        true,
        'https://picsum.photos/id/232/200/300'
      ),
      new Post(
        2,
        'lorem ipsum',
        'ini postingan kedua dari jc',
        true,
        'https://picsum.photos/id/231/200/300'
      ),
      new Post(
        3,
        'lorem ipsum',
        'ini postingan ketiga dari jc',
        true,
        'https://picsum.photos/id/220/200/300'
      ),
      new Post(
        4,
        'lorem ipsum',
        'ini postingan keempat dari jc',
        true,
        'https://picsum.photos/id/200/200/300'
      ),
    ];
  }
}
