import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit
} from "@angular/core";

import { fromEvent, Subscription } from "rxjs";
import { filter, throttleTime } from "rxjs/operators";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit, OnDestroy {
  isOpen = false;

  resize: Subscription;
  constructor(private elementRef: ElementRef) {}

  @HostListener("document:click", ["$event"]) onClick(event: any) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.checkIfNavDropDown();
    }
  }

  ngOnInit() {
    this.resize = fromEvent(window, "resize")
      .pipe(
        throttleTime(500),
        filter(() => !!this.elementRef)
      )
      .subscribe(() => this.checkIfNavDropDown());
  }

  ngOnDestroy() {
    this.resize.unsubscribe();
  }

  checkIfNavDropDown(){
    if (this.isOpen) {
      this.isOpen = false;
    }
  }
  onMenu() {
     this.isOpen = !this.isOpen;
  }


}

