import { Component, OnInit } from '@angular/core';
import { fullHeight } from 'contact.animation';
import { SOCIAL_LINKS } from 'src/app/global';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fullHeight]
})
export class ContactComponent implements OnInit {

  constructor(public detailService: DetailService) { }

  ngOnInit() { }
}
