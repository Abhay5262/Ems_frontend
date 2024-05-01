import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataproviderService } from 'src/app/service/dataprovider.service';
import { SinglestudentComponent } from '../singlestudent/singlestudent.component';
import { EmpdetailComponent } from '../empdetail/empdetail.component';
import { UpdateemployeComponent } from 'src/app/updateemploye/updateemploye.component';
import { animate, style, transition, trigger } from '@angular/animations';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations :[
    trigger('buttonAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }), // Initial state: slightly scaled down
        animate('1000ms cubic-bezier(0.215, 0.61, 0.355, 1)', style({ opacity: 1, transform: 'scale(1)' })), // Smooth fade-in and scale-up
      ]),
    ]),
  ],
})
export class UserComponent {
  Student: any;
  constructor(private data:DataproviderService,private dialog:MatDialog){
  }
  
  getdatabyid(id:any){
    this.data.getemp(id).subscribe(
      {
        next: (response:any)=>{
          console.log(response);
          this.Student=response;
        },
        error: (err:any) =>{
          // console.log("HELOOO",err);
          Swal.fire({
            icon: 'error',
            text:err.error.exceptionMessage
          });
        }
      }
    )
  }

  openDetail(tmp:any): void {
  
    const dialogRef = this.dialog.open(SinglestudentComponent, {
      data: {info:tmp},
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      
    });
  }

  
  updateStudent(tmp:any){
    const dialogRef = this.dialog.open(UpdateemployeComponent, {
      data: {info:tmp},
    });
    dialogRef.afterClosed().subscribe((result: any) => {
    
    });
  }
}



