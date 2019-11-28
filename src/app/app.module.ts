import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared';
import { StorageService } from './storage.service';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
