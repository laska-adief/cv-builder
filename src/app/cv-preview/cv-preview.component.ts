import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CvServiceService } from '../services/cv-service.service';

@Component({
  selector: 'app-cv-preview',
  templateUrl: './cv-preview.component.html',
  styleUrls: ['./cv-preview.component.scss'],
})
export class CvPreviewComponent implements OnInit, OnChanges {
  @Input() formValue: any;
  constructor(private router: Router, private cvService: CvServiceService) {}

  ngOnInit(): void {
    const value = this.cvService.getCv();
    if(value) {
      this.formValue = value;
    }
    console.log('input', this.formValue) ;
  }

  ngOnChanges(change: SimpleChanges) {
    console.log("CHANGES", change)
    console.log('Changes', this.formValue);
  }

  downloadCv() {
    this.cvService.setCv(this.formValue);
    this.router.navigate(['/cv-download']);
  }
}
