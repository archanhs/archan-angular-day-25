import { Component } from '@angular/core';

@Component({
  selector: 'app-galery-image',
  templateUrl: './galery-image.component.html',
  styleUrls: ['./galery-image.component.css'],
})
export class GaleryImageComponent {
  images: string[] = [];

  addImage() {
    let rand: number = Math.floor(Math.random() * 60);
    this.images.push(`https://picsum.photos/250/250?random=${rand}`);
  }
  popImage() {
    this.images.pop();
  }
}
