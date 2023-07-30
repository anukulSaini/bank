// greeting.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent {
  greetingMessage: string = 'Hello, Angular!';

  count : number=0;

  inc() :void{
    this.count++;
  }

  dec() : void{
    this.count--;
  }

}

