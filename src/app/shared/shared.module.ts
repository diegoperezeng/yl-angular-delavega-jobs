import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { JobHeaderComponent } from './job-header/job-header.component';
import { JobContentComponent } from './job-content/job-content.component';



@NgModule({
  declarations: [
    JobHeaderComponent,
    JobContentComponent
  ],
  exports: [
    JobHeaderComponent,
    JobContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
