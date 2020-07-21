import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [],
})
export class ContactComponent implements OnInit {
  constructor(public detailService: DetailService) {}

  ngOnInit() {}
}
