import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'yl-job-header',
  templateUrl: './job-header.component.html',
  styleUrls: ['./job-header.component.scss'],
  animations: [
    trigger('appearTransition', [
      state('transition1', style({
        width: '40%',
      })),
      state('transition2', style({
        width: '20%',
      })),
      transition('transition1 => transition2', [
        animate('1.5s')
      ]) 
    ])        
  ]
})

export class JobHeaderComponent implements OnInit {

  state = 'transition1';

  toggleState() {
    this.state = this.state === 'transition1' ? 'transition2' : 'transition1';
  }

  constructor() {
     // TODO document why this constructor is empty       
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty      
  }

  ngAfterViewInit() {
    this.toggleState();
  }
}

