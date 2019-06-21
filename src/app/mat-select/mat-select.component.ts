import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

export interface Designation {
  value: 'string';
  viewValue: 'string';
}

@Component({
  selector: 'app-mat-select',
  templateUrl: './mat-select.component.html',
  styleUrls: ['./mat-select.component.css']
})
export class MatSelectComponent implements OnInit {
 
  matForm: FormGroup;
  selectForm:FormGroup;

  constructor(private fb: FormBuilder) {

  }
  selectedValue: 'string';

companies:any=['Vectamind','IBM','Wipro','Google','Oracle','TCS','TM','CGS','Delloite']
  workList: any[] = [
    {
      value: 'accounting', viewValue: 'Accounting'
    },
    {
      value: 'developer', viewValue: 'Developer'
    },
    {
      value: 'QA', viewValue: 'QA'
    },
    {
      value: 'testing', viewValue: 'Testing'
    }];
    courseList: any[] = [
      {
        value: 'C', viewValue: 'c Languaga'
      },
      {
        value: 'C++', viewValue: 'c++'
      },
      {
        value: 'JAVA', viewValue: 'java'
      },
      {
        value: 'ANGULAR', viewValue: 'angular'
      }];
  ngOnInit() {
    this.matForm = this.fb.group({
      designation: [null, Validators.required],
      course: [null, Validators.required],
    });
    this.selectForm=this.fb.group({
      company: [null, Validators.required],
    });
  }
}



