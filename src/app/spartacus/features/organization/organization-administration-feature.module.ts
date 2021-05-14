import { NgModule } from '@angular/core';
import { CmsConfig, I18nConfig, provideConfig } from '@spartacus/core';
import { organizationTranslationChunksConfig, organizationTranslations } from '@spartacus/organization/administration/assets';
import { AdministrationRootModule, ORGANIZATION_ADMINISTRATION_FEATURE } from '@spartacus/organization/administration/root';
import { MyUserDetailsModule } from './my-user-details/my-user-details.module';

@NgModule({
  declarations: [],
  imports: [
    AdministrationRootModule,
    MyUserDetailsModule
  ],
  providers: [
    provideConfig({
      featureModules: {
        [ORGANIZATION_ADMINISTRATION_FEATURE]: {
          module: () =>
            import('@spartacus/organization/administration').then((m) => m.AdministrationModule),
        },
      }
    } as CmsConfig),
    provideConfig({
      i18n: {
        resources: organizationTranslations,
        chunks: organizationTranslationChunksConfig,
      },
    } as I18nConfig),
  ]
})
export class OrganizationAdministrationFeatureModule { }
