import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { UpgradeModule } from '@angular/upgrade/static';
import { mainNg1ModuleName } from './ng1';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { setAngularJSGlobal } from '@angular/upgrade/static';
import * as angular from 'angular';

if (environment.production) {
  enableProdMode();
}

setAngularJSGlobal(angular);

//platformBrowserDynamic().bootstrapModule(AppModule)
//  .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  console.log("Bootstrapping in Hybrid mode with Angular 11 & AngularJS");
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, [ mainNg1ModuleName ]);
});


