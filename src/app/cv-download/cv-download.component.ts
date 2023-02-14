import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CvServiceService } from '../services/cv-service.service';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';


const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-cv-download',
  templateUrl: './cv-download.component.html',
  styleUrls: ['./cv-download.component.scss']
})
export class CvDownloadComponent implements OnInit, AfterViewInit {
  @ViewChild('pdfCV', {static: false}) pdfCV!: ElementRef;
  formValue:any = null;
  constructor(private cvService: CvServiceService, private router: Router) { }

  ngAfterViewInit(): void {
    this.exportPDF();
  }

  ngOnInit(): void {
    console.log("getCV",this.cvService.getCv());
    const value = this.cvService.getCv();
    if(value) {
      this.formValue = value;
    }
    console.log(this.formValue)
  }

  exportPDF() {
    this.router.navigate(['/']);
    // jspdf html2canvas
    html2canvas(document.getElementById('pdfCVExport')!).then((canvas) => {
      // let pdf = new jsPDF('p', 'cm', 'a4'); // A4 size page of PDF
      let pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
      });
      // pdf.setFontSize(50);
      var width = pdf.internal.pageSize.getWidth();
      var height = (canvas.height * width) / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height);
      pdf.save('cv.pdf'); // Generated PDF
    });



    // html2pdf
    // const options = {
    //   filename: 'cv.pdf',
    //   image: { type: 'jpeg' },
    //   html2canvas: {},
    //   jsPDF: { orientation: 'potrait' },
    // };

    // const content: Element | any = document.getElementById('pdfCVExport');

    // html2pdf()
    //   .from(content)
    //   .set(options)
    //   .save();

    // jsPDF
    // let pdf = new jsPDF();
    // pdf.html(this.pdfCV.nativeElement, {
    //   callback: (pdf) => {
    //     pdf.save("cv.pdf")
    //   }
    // })

    // const pdfCV = this.pdfCV.nativeElement;
    // var html = htmlToPdfmake(pdfCV.innerHTML);
    // const documentDefinition = { content: html };
    // pdfMake.createPdf(documentDefinition).download(); 
     
  }

}
