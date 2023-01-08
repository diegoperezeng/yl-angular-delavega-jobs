import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { JobHeaderComponent } from './job-header/job-header.component';
import { JobSearchComponent } from './job-search/job-search.component';



@NgModule({
  declarations: [
    JobHeaderComponent,
    JobSearchComponent
  ],
  exports: [
    JobHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
