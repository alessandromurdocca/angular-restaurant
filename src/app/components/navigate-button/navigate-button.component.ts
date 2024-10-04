import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigate-button',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './navigate-button.component.html',
})
export class NavigateButtonComponent {
  @Input() buttonTitle:string = ''
  @Input() pathLink: string = ""

}
