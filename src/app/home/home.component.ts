import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { META_TAGS, TAB_TITLE } from '../global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTag(META_TAGS.DESCRIPTION);
    this.title.setTitle(TAB_TITLE.HOME);
  }

  ngOnInit() {}
}
