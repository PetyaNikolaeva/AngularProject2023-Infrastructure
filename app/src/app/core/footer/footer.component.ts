import { Component  } from '@angular/core'; 
import { interval, Observable, map } from 'rxjs';
 
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent  {  
  currentDate$: Observable<Date>;

  constructor(){
    this.currentDate$ = interval(1000).pipe(
      map(() => new Date())
    )
  }
}