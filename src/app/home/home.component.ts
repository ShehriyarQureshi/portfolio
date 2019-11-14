import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TAB_TITLE } from '../global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title
  ) {
  }

  ngOnInit() {
    this.title.setTitle(TAB_TITLE.HOME);
  }

}
