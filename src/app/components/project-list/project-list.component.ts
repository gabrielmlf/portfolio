import { Component, OnInit } from '@angular/core';
import { ProjectsList } from 'src/app/util/projects/projects-list-mock';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = ProjectsList
  githubIcon = faGithub
  constructor() { }

  ngOnInit(): void {
    console.log('projects', this.projects);

  }

}
