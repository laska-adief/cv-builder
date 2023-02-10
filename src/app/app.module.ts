import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvBuilderComponent } from './cv-builder/cv-builder.component';
import { CvPreviewComponent } from './cv-preview/cv-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    CvBuilderComponent,
    CvPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
