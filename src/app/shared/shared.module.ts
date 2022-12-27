import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { JobHeaderComponent } from './job-header/job-header.component';



@NgModule({
  declarations: [
    JobHeaderComponent
  ],
  exports: [
    JobHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
