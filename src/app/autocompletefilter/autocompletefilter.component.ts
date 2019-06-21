import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-autocompletefilter',
  templateUrl: './autocompletefilter.component.html',
  styleUrls: ['./autocompletefilter.component.css']
})
export class AutocompletefilterComponent implements OnInit {
  matForm:FormGroup;
 dataList:string[]=['asha','one','two','tulasi','three','bhavya','four','teju','five','laxmi','six','mani','naveen','anil']
 filtereddataList:Observable<string[]>;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.matForm=this.fb.group({
      matForm:['',Validators.required]
    });
    this.filtereddataList = this.matForm.get('matForm')!.valueChanges.pipe(
        startWith(''),
        map(value => this.filter(value))
      );
  }
  private filter(value: string): string[] {
     const filterValue = value.toString().toLowerCase();
    return this.dataList.filter(list => list.toLowerCase().includes(filterValue));
  }
}


