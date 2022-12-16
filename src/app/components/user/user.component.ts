import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  username: string = 'Archan HS';
  name: string = 'Archan';
  email: string = 'archanhabib11@gmail.com';

  constructor() {}
  ngOnInit(): void {}
}
