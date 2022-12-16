import { Component, OnInit } from '@angular/core';
import { IPost } from './interfaces/i-post';
import { Post } from './models/post';
import { Product } from './models/products';
import { PostService } from './services/post.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  posts: IPost[] = [];
  constructor(private postService: PostService) {}

  getProducts() {}
  ngOnInit(): void {
    this.posts = this.postService.getAllPost();
  }
}
