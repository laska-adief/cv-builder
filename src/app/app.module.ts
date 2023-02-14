import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvBuilderComponent } from './cv-builder/cv-builder.component';
import { CvPreviewComponent } from './cv-preview/cv-preview.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CvDownloadComponent } from './cv-download/cv-download.component';
import { RouterModule } from '@angular/router';

const angularMaterial = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatCardModule
];
@NgModule({
  declarations: [AppComponent, CvBuilderComponent, CvPreviewComponent, CvDownloadComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...angularMaterial,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
