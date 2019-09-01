import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { ChallengeEditComponent } from './challenge-edit.component.tns';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ChallengeEditComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    // NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      { path: '', component: ChallengeEditComponent }
    ]),
    SharedModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengeEditModule {}
