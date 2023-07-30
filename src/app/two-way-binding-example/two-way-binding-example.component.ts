// two-way-binding-example.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-example',
  templateUrl: './two-way-binding-example.component.html',
  styleUrls: ['./two-way-binding-example.component.scss'],
})
export class TwoWayBindingExampleComponent {
  user: string = '';
}
