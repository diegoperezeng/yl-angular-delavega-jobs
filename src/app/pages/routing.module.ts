import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'jobdetails',
    component: JobdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
