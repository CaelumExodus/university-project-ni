import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'university-project-ni';

  constructor(translate: TranslateService) {
    translate.addLangs(['pl']);
    translate.setDefaultLang('pl');
    translate.use('pl');
  }
}
