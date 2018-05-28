import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmokerLifeCycleService  } from './smoker-life-cycle.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SmokerLifeCycleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
