import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  name=/^[A-Za-z]+$/;
  data: any = ['QA', 'Testing', 'developer', 'accounting']
  contactForm: FormGroup;
  constructor(public formbuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formbuilder.group({
      firstName: [null, [Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
      lastName: [null, [Validators.required]],
      emailId: ['', [Validators.required ,Validators.email]],
      password: ['', [Validators.required]],
      mobileNumber: [null, [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      Designation: [null, Validators.required],
      percentage: [null, Validators.required]
    });
  }
  keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();
    }
}
keyPress1(event: any) {
  const pattern =/^[A-Za-z]+$/;
  let inputChar = String.fromCharCode(event.charCode);
  if (!pattern.test(inputChar)) {
      event.preventDefault();

  }
}
keyPress2(event: any) {
  const pattern =/^[A-Za-z]+$/;
  let inputChar = String.fromCharCode(event.charCode);
  if (!pattern.test(inputChar)) {
      event.preventDefault();
  }
  }
}
