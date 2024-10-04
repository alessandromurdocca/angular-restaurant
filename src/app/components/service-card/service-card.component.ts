import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './service-card.component.html',
})
export class ServiceCardComponent {
  @Input() serviceTitle: string = '';
  @Input() serviceSubtitle: string = '';
  @Input() icon: any = {};
}
