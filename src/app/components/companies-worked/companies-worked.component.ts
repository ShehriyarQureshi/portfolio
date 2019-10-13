import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from 'src/app/services/work-experience.service';

@Component({
  selector: 'app-companies-worked',
  templateUrl: './companies-worked.component.html',
  styleUrls: ['./companies-worked.component.scss']
})
export class CompaniesWorkedComponent implements OnInit {

  constructor(
    public workService: WorkExperienceService
  ) { }

  ngOnInit() {
  }

}
