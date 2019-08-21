import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { fullHeight } from 'contact.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    fullHeight
  ]
})
export class ContactComponent implements OnInit {

  @ViewChild('projectTalk')
  public projectButtons: ElementRef;

  public isVisible = false;

  links: any = {
    github: 'https://github.com/ShehriyarQureshi',
    medium: 'https://medium.com/@Shehriyar.Qureshi',
    linkedin: 'https://www.linkedin.com/in/sshehriyar/',
    email: 'mailto:SShehriyar266@gmail.com',
  };

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll')
  public inView(): void {
    console.log('math', this.projectButtons.nativeElement.getBoundingClientRect().bottom);
    console.log('height', window.innerHeight);
    if (this.projectButtons.nativeElement.getBoundingClientRect().top
      + this.projectButtons.nativeElement.getBoundingClientRect().height < window.innerHeight
      && this.projectButtons.nativeElement.getBoundingClientRect().top
      + this.projectButtons.nativeElement.getBoundingClientRect().height > 0) {
      this.isVisible = true;
    }

  }

}
