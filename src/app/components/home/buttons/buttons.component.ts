import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  countInput: number = 1

  constructor() {
  }

  ngOnInit(): void {
  }

  count(operations: string) {
    switch (operations) {
      case  'res':
        if (this.countInput >= 1) {
          this.countInput -= 1;
        }
        break;
      case 'sum':
        this.countInput += 1;
        break;
      default:
        break;
    }
  }

}

