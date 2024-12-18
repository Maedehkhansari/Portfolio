import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { RedBallComponent } from '../components/red-ball/red-ball.component';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [
    SingleProjectComponent,
    RedBallComponent,
    TranslatePipe,
    TranslateDirective,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: 'join.png',
      link: '#',
      tools: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
    },
    {
      name: 'Pollo Loco',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: 'el-pollo-loco.png',
      link: '#',
      tools: ['TypeScript', 'HTML', 'CSS'],
    },
    {
      name: 'Simple CRM',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: 'crm.png',
      link: '#',
      tools: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
    },
    {
      name: 'Pokédex',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: 'pokedex.png',
      link: '#',
      tools: ['TypeScript', 'HTML', 'CSS', 'Api'],
    },
  ];
}
