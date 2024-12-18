import { Component } from '@angular/core';
import { SingleSkillComponent } from './single-skill/single-skill.component';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [SingleSkillComponent, TranslatePipe, TranslateDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    {
      name: 'Angular',
      image: 'angular.svg',
    },
    {
      name: 'TypeScript',
      image: 'ts.svg',
    },
    {
      name: 'JavaScript',
      image: 'js.svg',
    },
    {
      name: 'HTML',
      image: 'html.svg',
    },
    {
      name: 'Scrum',
      image: 'scrum.svg',
    },
    {
      name: 'Firebase',
      image: 'firebase.svg',
    },
    {
      name: 'GIT',
      image: 'git.svg',
    },
    {
      name: 'CSS',
      image: 'css.svg',
    },
    {
      name: 'Rest-Api',
      image: 'api.svg',
    },
    {
      name: 'Material design',
      image: 'mt.svg',
    },
  ];
}
