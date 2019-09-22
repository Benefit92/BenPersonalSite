import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.sass']
})
export class LanguagesComponent implements OnInit {
  language = 'en';
  model = 1;
  public duoIsHovered = false;
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.language);
  }

  ngOnInit() {
  }
  useLanguage(language: string) {
    console.log(language);
    this.translate.use(language);
  }

  onImageClick() {
    window.open('https://www.duolingo.com/profile/BenjaminNielsen', '_blank');
  }

  mouseEnter() {
    this.duoIsHovered = true;
  }

  mouseLeave() {
    this.duoIsHovered = false;
  }
}
