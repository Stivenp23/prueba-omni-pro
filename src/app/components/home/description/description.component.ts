import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  see = false
  text = 'LEER MÁS'
  constructor() { }

  ngOnInit(): void {
  }

  seeText(){
  this.see = !this.see;
  this.text = this.see ? 'LEER MENOS' : 'LEER MÁS'
  }

}
