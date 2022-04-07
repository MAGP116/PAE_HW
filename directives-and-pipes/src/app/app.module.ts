import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { OnMouseDirective } from './on-mouse.directive';
import { ToCharPipe } from './to-char.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    OnMouseDirective,
    ToCharPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
