import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  language = 'en';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.language);
  }

  ngOnInit() {
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

}
