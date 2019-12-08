import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('phoneNumber', { static: true })
  public phoneNumber: ElementRef;

  public isVisible = false;

  links: any = {
    github: 'https://github.com/ShehriyarQureshi',
    medium: 'https://medium.com/@thatdevsherry',
    linkedin: 'https://www.linkedin.com/in/thatdevsherry/',
    email: 'mailto:SShehriyar266@gmail.com',
    snapchat: 'https://www.snapchat.com/add/thatdevsherry',
    instagram: 'https://www.instagram.com/thatdevsherry/'
  };

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll')
  public inView(): void {
    if (this.phoneNumber.nativeElement.getBoundingClientRect().top
      + this.phoneNumber.nativeElement.getBoundingClientRect().height < window.innerHeight
      && this.phoneNumber.nativeElement.getBoundingClientRect().top
      + this.phoneNumber.nativeElement.getBoundingClientRect().height > 0) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }

  }

}
