import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selfie à wookies';
  subTitle = 'La super application';
  logoAffiche = true;
  lesSelfies : string [] = ['test 01', 'test 02', 'test 03'];
}
