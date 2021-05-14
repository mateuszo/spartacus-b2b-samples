import { Component } from '@angular/core';
import { StatusCellComponent } from '@spartacus/organization/administration/components';
import { ICON_TYPE } from '@spartacus/storefront';

@Component({
  selector: 'app-my-user-status',
  templateUrl: './my-user-status.component.html',
  styleUrls: ['./my-user-status.component.scss']
})
export class MyUserStatusComponent extends StatusCellComponent {

  icon = this.isActive ? ICON_TYPE.ON : ICON_TYPE.OFF;


}
