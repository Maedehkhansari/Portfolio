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
        'Project planner inspired by Agile methodologies. Effortlessly manage and prioritize projects with intuitive drag-and-drop features, assign team members, and group tasks by labels or milestones.',
      image: 'join.jpg',
      link: 'https://github.com/Maedehkhansari/Join',
      tools: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
    },
    {
      name: 'Pollo Loco',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      image: 'el-pollo-loco.png',
      link: 'https://github.com/Maedehkhansari/El-pollo-loco',
      tools: ['TypeScript', 'HTML', 'CSS'],
    },
    {
      name: 'Pokédex',
      description:
        'A simple and interactive Pokedex web application. The Pokedex app allows users to search for Pokémon, view detailed information about each one, including evolutions, stats, and more.',
      image: 'pokedex.jpg',
      link: 'https://github.com/Maedehkhansari/Pokedex',
      tools: ['TypeScript', 'HTML', 'CSS', 'Api'],
    },
  ];
}
