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

  constructor(
    public projectService: ProjectService,
  ) { }

  ngOnInit() {
  }

  @HostListener('window:scroll')
  public inView(): void {
    // console.log('math', this.test.nativeElement.getBoundingClientRect().top + this.test.nativeElement.getBoundingClientRect().height);
    // console.log('height', window.innerHeight);
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
