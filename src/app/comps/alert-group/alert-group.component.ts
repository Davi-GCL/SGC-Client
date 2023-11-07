import { Component, Input } from '@angular/core';
import { UIHelpersService } from 'src/app/services/ui-helpers.service';

@Component({
  selector: 'app-alert-group',
  templateUrl: './alert-group.component.html',
  styleUrls: ['./alert-group.component.css']
})
export class AlertGroupComponent {
  constructor(public uiHelper: UIHelpersService){}

}
