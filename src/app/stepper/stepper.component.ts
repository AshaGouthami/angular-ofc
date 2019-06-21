import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder ,Validators} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  isLinear=false;
  isOptional=false;
  firstformGroup: FormGroup;
  secondformGroup:FormGroup;
  thirdformGroup:FormGroup;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.firstformGroup=this.formbuilder.group({
      firstName: ['', Validators.required],
      rollNumber: ['', Validators.required],
      collegeName: ['', Validators.required],
      department: ['', Validators.required],
      percentage: ['', Validators.required],
    });
  
  this.secondformGroup=this.formbuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    mobileNumber: ['', Validators.required],
  });
  this.thirdformGroup=this.formbuilder.group({
    currentAddress:['',Validators.required],
    permanentAddress:['',Validators.required]
  })
}
}



