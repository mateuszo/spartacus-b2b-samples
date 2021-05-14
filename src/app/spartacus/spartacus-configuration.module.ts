import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from '@spartacus/core';
import { defaultB2bCheckoutConfig, defaultB2bOccConfig } from '@spartacus/setup';
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from '@spartacus/storefront';

@NgModule({
  providers: [
    //#region standard config
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig({
      backend: {
        occ: {
          baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443',
        }
      },
    } as OccConfig), provideConfig({
      context: {
        currency: ['USD'],
        language: ['en'],
        baseSite: ['powertools-spa']
      },
    } as SiteContextConfig), provideConfig({
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
    } as I18nConfig), provideConfig({
      features: {
        level: '3.3'
      }
    } as FeaturesConfig),
    //#endregion
    provideConfig(defaultB2bOccConfig),
    provideConfig(defaultB2bCheckoutConfig)
  ]
})
export class SpartacusConfigurationModule { }
