import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calendar-slab-code';
  text = 'Por favor ingresar en una resolución mobile, según el diseño'
  constructor(
    public deviceService: DeviceDetectorService
  ) {
  }
}
