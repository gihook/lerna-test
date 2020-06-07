import { Component } from '@angular/core';
import { createId } from 'shared';
import { User } from 'interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: User;
  title = 'Test id: ' + createId();
}
