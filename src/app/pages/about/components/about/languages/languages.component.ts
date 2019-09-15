import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.sass']
})
export class LanguagesComponent implements OnInit {
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
