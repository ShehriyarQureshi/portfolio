import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(
    public skillService: SkillService
  ) { }

  ngOnInit() {
  }

}
