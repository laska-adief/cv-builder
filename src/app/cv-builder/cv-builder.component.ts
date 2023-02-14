import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CvServiceService } from '../services/cv-service.service';

@Component({
  selector: 'app-cv-builder',
  templateUrl: './cv-builder.component.html',
  styleUrls: ['./cv-builder.component.scss'],
})
export class CvBuilderComponent implements OnInit {
  cvForm!: FormGroup;
  cvFormValue: any;

  constructor(private fb: FormBuilder, private cvService: CvServiceService) {}

  ngOnInit(): void {
    this.formInit();

    // set form based on value saved in service
    const servieValue = this.cvService.getCv();
    this.cvForm.patchValue(servieValue);

    // update value input to cv preview
    this.cvForm.valueChanges.subscribe((val) => {
      this.cvFormValue = val;
    });
  }

  formInit() {
    this.cvForm = this.fb.group({
      name: [''],
      telp: [''],
      email: ['', Validators.email],
      address: [''],
      about: [''],
      experience: this.fb.array([]),
      education: this.fb.array([]),
    });

    this.addCvExperience();
    this.addCvEducation();
  }

  getCvExperience() {
    return this.cvForm.get('experience') as FormArray;
  }

  initCvExperience() {
    return this.fb.group({
      company: [''],
      title: [''],
      location: [''],
      startDate: [''],
      endDate: [''],
      description: [''],
    });
  }

  addCvExperience() {
    this.getCvExperience().push(this.initCvExperience());
  }

  getCvEducation() {
    return this.cvForm.get('education') as FormArray;
  }

  initCvEducation() {
    return this.fb.group({
      school: [''],
      degree: [''],
      field: [''],
      grade: [''],
      startDate: [''],
      endDate: [''],
      description: [''],
    });
  }

  addCvEducation() {
    this.getCvEducation().push(this.initCvEducation());
  }
}
