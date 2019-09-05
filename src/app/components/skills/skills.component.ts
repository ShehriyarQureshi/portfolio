import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { slideInLeft } from 'contact.animation';
import { hrExtend } from 'src/app/animations/project.animation';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    slideInLeft,
    hrExtend
  ]
})
export class SkillsComponent implements OnInit {

  @ViewChild('heading')
  public heading: ElementRef;

  @ViewChild('underline')
  public underline: ElementRef;

  public isHeadingVisible = false;
  public isUnderlineVisible = false;

  constructor(
    public skillService: SkillService
  ) { }

  ngOnInit() {
  }

  @HostListener('window:scroll')
  public inView(): void {
    if (this.heading.nativeElement.getBoundingClientRect().top
      + this.heading.nativeElement.getBoundingClientRect().height < window.innerHeight
      && this.heading.nativeElement.getBoundingClientRect().top + this.heading.nativeElement.getBoundingClientRect().height > 0) {
      this.isHeadingVisible = true;
    }
    if (this.underline.nativeElement.getBoundingClientRect().top
      + this.underline.nativeElement.getBoundingClientRect().height < window.innerHeight
      && this.underline.nativeElement.getBoundingClientRect().top + this.underline.nativeElement.getBoundingClientRect().height > 0) {
      this.isUnderlineVisible = true;
    }

  }


}
