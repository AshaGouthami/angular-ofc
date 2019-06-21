import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Car{
  name:'String';
  price:'number';
  logo:'string';
}
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  carForm:FormGroup;
  filteredcarList: Observable<Car[]>;

carList:any[]=[
  {
  name:'benz',
  price:'1000000',
  logo:'https://www.car-logos.org/wp-content/uploads/2011/09/marchedrs.png'
 },
 {
  name:'audi',
  price:'1500000',
  logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsL7MlMRaO5RZG2O3P68q-6oCGUKmfXqsUaJoTiSwwGmKXJPpV'
 },
 {
  name:'bmw',
  price:'2000000',
  logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9XvuuB_oADQgoU1xaH4lOPlwLzqlHs-FgRGeIMtqKSo7v5EX9LA'
 },
 {
  name:'honda',
  price:'100000',
  logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq0JwhZWg4nfouAXrQ8sk1hzAoxHpHUDUzWB5tgCGVp5lUdMYnlg'
 },
 {
  name:'ferrari',
  price:'3000000',
  logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ESesfRHZCMVTemA8Mc1fNzQZOSFeRjUOQDfJpCLFdGsP7gLp'
 },
 {
  name:'jagaur',
  price:'5000000',
  logo:'https://cdn.shopify.com/s/files/1/2783/9160/products/Car_Logo_Lights_Jaguar_774x620_600x600.jpg?v=1540296685'
 }
]
  constructor(private fb:FormBuilder) {}
  ngOnInit() {
    this.carForm=this.fb.group({
      carForm:['',[Validators.required]]
    });
    this.filteredcarList= this.carForm.get('carForm')!.valueChanges.pipe(
      startWith(''),
      map(car=> car ? this._filterCars(car) : this.carList.slice())
    );
  }
  private _filterCars(value: string): Car[] {
    const filterValue = value.toLowerCase();

    return this.carList.filter(car => car.name.toLowerCase().indexOf(filterValue) === 0);
  }
  

    
  }




 
  

