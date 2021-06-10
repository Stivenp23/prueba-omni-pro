import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';

@Component({
  selector: 'app-layout',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  data$: Observable<any>;

  constructor(
    public store: Store<AppState>,
    public router: Router
  ) {
  }

  ngOnInit() {
  }
}
