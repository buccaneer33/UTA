import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObservableComponent } from './async/observable/observable.component';
import { TestComponent } from './services/test/test.component';
import { SpyesComponent } from './services/spyes/spyes.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    TestComponent,
    SpyesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
