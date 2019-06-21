import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-drapdowmlist',
  templateUrl: './drapdowmlist.component.html',
  styleUrls: ['./drapdowmlist.component.css']
})
export class DrapdowmlistComponent implements OnInit {
  drapdownForm:FormGroup;
  selectList:any=['Super admin','Department users','Normal users']

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.drapdownForm=this.fb.group({
      drapdownForm:['',[Validators.required]]
    })
  }

}
