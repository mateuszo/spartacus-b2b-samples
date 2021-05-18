import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { MyUserListComponent } from './my-user-list.component';

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ManageUsersListComponent: {
          component: MyUserListComponent
        }
      }
    } as CmsConfig)
  ],
  declarations: [MyUserListComponent]
})
export class MyUserListModule { }
