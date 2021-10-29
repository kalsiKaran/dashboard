import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, Optional } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim',[
      transition('* => *',[
        query(':enter',[
          style({
            opacity: 0,
            transform: 'translateX(10px)',
            display: 'block'
          }),
        animate(200, style({
          transform: 'translateX(0)',
          opacity: 1,
        }))
      ], {optional:true})
      ])
    ])
  ]
})
export class AppComponent {
  title = 'dashboard';


  routerAnimation(outlet:RouterOutlet):any{
    if(outlet.isActivated) return outlet.activatedRoute.url
  }
  
}
