import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, I18nModule, provideConfig } from '@spartacus/core';
import { CardModule, OrganizationTableType } from '@spartacus/organization/administration/components';
import { IconModule, TableConfig } from '@spartacus/storefront';
import { MyUserDetailsComponent } from './my-user-details.component';
import { MyUserStatusComponent } from './my-user-status/my-user-status.component';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    I18nModule,
    IconModule
  ],
  declarations: [MyUserDetailsComponent, MyUserStatusComponent],
  providers: [
    provideConfig({
      cmsComponents: {
        ManageUsersListComponent: {
          childRoutes: {
            children: [
              {
                path: `:userCode`,
                component: MyUserDetailsComponent,
                data: {
                  cxPageMeta: { breadcrumb: 'orgUser.breadcrumbs.details' },
                }
              }
            ]
          }
        }
      }
    } as CmsConfig),
    provideConfig({
      table: {
        [OrganizationTableType.USER]: {
          cells: ['name', 'active', 'uid', 'roles', 'unit', 'newColumn'],
          options: {
            cells: {
              active: {
                dataComponent: MyUserStatusComponent,
              },
            }
          }
        }
      }
    } as TableConfig)
  ]
})
export class MyUserDetailsModule { }
