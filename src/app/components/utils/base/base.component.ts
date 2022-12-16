import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  template: `<div class="container-fluid">
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./base.component.css'],
})
export class BaseComponent {}
