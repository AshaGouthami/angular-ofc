import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatTableDataSource } from '@angular/material/table';

export interface DATA{
  id:number;
  username:string;
  email:string;
  city:string;
  company:string
}

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent  {
  dataSource;
 dataList:DATA[]
  displayedColumns: string[] = [ 'id','username', 'email', 'city','company'];
  
  

  constructor(private myservices:ServiceService) { 
  this.fetch_userdata();
  }
  fetch_userdata(){
    this.dataSource= this.myservices.getuserdata().subscribe((dataList:DATA[])=>{
       this.dataList=dataList;
       this.dataSource=new MatTableDataSource(dataList);
    });
    //     res=>{
    //     this.dataList=res;
    //     console.log(this.dataList);
    //   },
    //   error=>{
    //     console.log(error)
    //   });
  
  }

}
