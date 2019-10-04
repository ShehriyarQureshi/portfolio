import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { slideInLeft, slideInRight, hrExtend } from 'src/app/animations/project.animation';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    slideInLeft,
    slideInRight,
    hrExtend
  ]
})
export class ProjectsComponent implements OnInit {

  public projectLength: number = undefined;

  public shouldCenterGrid = false;

  constructor(
    public projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.shouldCenterGrid = this.getProjectSize();
  }

  public getProjectSize(): boolean {
    if (this.projectService.projectsLength() <= 2) {
      return true;
    } else {
      return false;
    }
  }
}
