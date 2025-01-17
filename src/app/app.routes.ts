import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImpressumComponent } from './imprint/impressum/impressum.component';
import { DatenschutzComponent } from './imprint/datenschutz/datenschutz.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
  },
  {
    path: 'datenschutz',
    component: DatenschutzComponent,
  },
];
