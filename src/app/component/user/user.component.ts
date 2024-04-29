import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataproviderService } from 'src/app/service/dataprovider.service';
import { SinglestudentComponent } from '../singlestudent/singlestudent.component';
import { EmpdetailComponent } from '../empdetail/empdetail.component';
import { UpdateemployeComponent } from 'src/app/updateemploye/updateemploye.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  Student: any;
  constructor(private data:DataproviderService,private dialog:MatDialog){
  }
  
  getdatabyid(id:any){
    this.data.getemp(id).subscribe(
      (response:any)=>{
        console.log(response);
        this.Student=response;
      },
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



