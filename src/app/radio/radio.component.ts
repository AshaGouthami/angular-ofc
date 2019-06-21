import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  matForm:FormGroup;
  dynamicForm:FormGroup;
  staticForm:FormGroup;
  constructor(private fb:FormBuilder) { }
  ngOnInit() {
    this.matForm=this.fb.group({
      matForm:['',Validators.required]
    });
    this.staticForm=this.fb.group({
      staticForm:['',[Validators.required]]
    });
    this.dynamicForm=this.fb.group({
      dynamicForm:['',[Validators.required]],
    })
  }

}
