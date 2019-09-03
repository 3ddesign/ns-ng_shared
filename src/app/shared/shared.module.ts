import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ActionBarComponent } from './ui/action-bar/action-bar.component';

@NgModule({
  imports: [RouterModule],
  declarations: [ActionBarComponent],
  exports: [ActionBarComponent]
})
export class SharedModule {}
