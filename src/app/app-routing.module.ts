import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvBuilderComponent } from './cv-builder/cv-builder.component';
import { CvDownloadComponent } from './cv-download/cv-download.component';

const routes: Routes = [
  {path: '', component: CvBuilderComponent},
  {path: 'cv-download', component: CvDownloadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
