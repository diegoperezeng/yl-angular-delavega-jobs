import { Component } from '@angular/core';
import { JobApiService } from 'src/app/service/job-api.service';

@Component({
  selector: 'yl-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent {

  constructor(
    private jobApiService: JobApiService
  ) { }

  ngOnInit(): void {
    this.jobApiService.apiListCompanies.subscribe( data => console.log(data) );
  }


}
