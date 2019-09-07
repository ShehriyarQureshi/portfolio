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

  @ViewChild('heading', { static: true })
  public heading: ElementRef;

  @ViewChild('underline', { static: true })
  public underline: ElementRef;

  public isVisible = false;
  public isVisible2 = false;

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

  @HostListener('window:scroll')
  public inView(): void {
    if (this.heading.nativeElement.getBoundingClientRect().top + this.heading.nativeElement.getBoundingClientRect().height
      < window.innerHeight
      && this.heading.nativeElement.getBoundingClientRect().top + this.heading.nativeElement.getBoundingClientRect().height > 0) {
      this.isVisible = true;
    }
    if (this.underline.nativeElement.getBoundingClientRect().top + this.underline.nativeElement.getBoundingClientRect().height
      < window.innerHeight
      && this.underline.nativeElement.getBoundingClientRect().top + this.underline.nativeElement.getBoundingClientRect().height > 0) {
      this.isVisible2 = true;
    }

  }

}
