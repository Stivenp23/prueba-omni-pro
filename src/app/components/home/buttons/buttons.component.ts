import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  countInput: number = 1
  constructor() { }

  ngOnInit(): void {
  }

  count(operations: string){
    //this.countInput = 5
    if (operations === 'res'){
      //console.log('Esta es resta');
      this.countInput -= 1;
    }if (operations === 'sum'){
      //console.log('Esta es suma');
      this.countInput += 1;
    }
  }

}

