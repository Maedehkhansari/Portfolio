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
      description: 'app.projects.join',
      image: 'join.jpg',
      github: 'https://github.com/Maedehkhansari/Join',
      link: 'https://join.maedehkhonsari.com/',
      tools: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
    },
    {
      name: 'Pollo Loco',
      description: 'app.projects.polloLoco',
      image: 'el-pollo-loco.png',
      github: 'https://github.com/Maedehkhansari/El-pollo-loco',
      link: 'https://el-pollo-loco.maedehkhonsari.com/',
      tools: ['TypeScript', 'HTML', 'CSS'],
    },
    {
      name: 'Pokédex',
      description: 'app.projects.pokedex',
      image: 'pokedex.jpg',
      github: 'https://github.com/Maedehkhansari/Pokedex',
      link: 'https://pokedex.maedehkhonsari.com/',
      tools: ['TypeScript', 'HTML', 'CSS', 'Api'],
    },
  ];
}
