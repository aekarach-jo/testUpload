import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadImageComponent } from './compoonents/upload-image/upload-image.component';
import { SupComponentComponent } from './compoonents/sup-component/sup-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent,
    SupComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
