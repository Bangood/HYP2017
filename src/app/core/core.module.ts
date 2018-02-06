/**
 * Created by pure on 2018/2/2.
 */
import {ModuleWithProviders, NgModule} from '@angular/core';
import {NbAuthModule, NbDummyAuthProvider} from '@nebular/auth';
//
import {DataModule} from './data/data.module';

const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  ...NbAuthModule.forRoot({
    providers: {
      email: {
        service: NbDummyAuthProvider,
        config: {
          delay: 3000,
          login: {
            rememberMe: true
          }
        }
      }
    }
  }).providers
];
@NgModule({
  imports: [],
  exports: [NbAuthModule],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS
      ]
    };
  }
}
