import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'yl-job-content',
  templateUrl: './job-content.component.html',
  styleUrls: ['./job-content.component.scss'],
  animations: [
    trigger('transparencyTransition1', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1600, style({ opacity: 0 })),
        animate(1000, style({ opacity: 1 })),
        animate(1600, style({ opacity: 1 })),
        animate(1000, style({ opacity: 0 })),
      ]),
    ]),
    trigger('transparencyTransition2', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(5200, style({ opacity: 0 })),
        animate(1600, style({ opacity: 1 }))
      ]),
    ])
  ]
})

export class JobContentComponent implements OnInit {
  
  stateOpacity = 'opacity1';

  transparencyState() {
    this.stateOpacity = this.stateOpacity === 'opacity1' ? 'opacity2' : 'opacity1';
  }


  ngOnInit(): void {
  //  this.transparencyState()
  }

  

  // ngAfterContentChecked() {
  //   this.transparencyStateOne();    
  // }

}
