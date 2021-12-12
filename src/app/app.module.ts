import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { AbientLightEffectComponent } from './abient-light-effect/abient-light-effect.component';


@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    AbientLightEffectComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
