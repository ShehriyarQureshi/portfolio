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

  @ViewChild('test')
  public test: ElementRef;

  @ViewChild('test2')
  public test2: ElementRef;

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
    if (this.test.nativeElement.getBoundingClientRect().top + this.test.nativeElement.getBoundingClientRect().height < window.innerHeight
      && this.test.nativeElement.getBoundingClientRect().top + this.test.nativeElement.getBoundingClientRect().height > 0) {
      this.isVisible = true;
    }
    if (this.test2.nativeElement.getBoundingClientRect().top + this.test2.nativeElement.getBoundingClientRect().height < window.innerHeight
      && this.test2.nativeElement.getBoundingClientRect().top + this.test2.nativeElement.getBoundingClientRect().height > 0) {
      this.isVisible2 = true;
    }

  }

}
