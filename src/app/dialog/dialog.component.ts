import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DATA{
  course:string;
  language:string;
}


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  course:DATA[];
  language:DATA[];
  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<DialogComponent>,) { }

  openDialog():void{
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.course, animal: this.language}
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.language = result;
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

 

  ngOnInit() {
  }

}
