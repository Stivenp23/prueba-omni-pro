import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent implements OnInit {
  isLike = false;
  addCircle = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  like() {
    this.isLike = !this.isLike
  }

  click() {
    this.addCircle = !this.addCircle
  }

}
