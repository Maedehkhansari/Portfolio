import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    TranslatePipe,
    TranslateDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
  }

  title = 'portfolio';

  updateCSSVariable(newColor: {
    primaryColor: string;
    secondaryColor: string;
    shadowColor: string;
    svgIconColor: string;
  }): void {
    document.documentElement.style.setProperty(
      '--primaryColor',
      newColor.primaryColor
    );

    document.documentElement.style.setProperty(
      '--secondaryColor',
      newColor.secondaryColor
    );

    document.documentElement.style.setProperty(
      '--shadowColor',
      newColor.shadowColor
    );

    document.documentElement.style.setProperty(
      '--svgIconColor',
      newColor.svgIconColor
    );
  }

  changeSiteLanguage(language: { title: string; value: string }): void {
    this.translate.use(language.value);
  }
}
