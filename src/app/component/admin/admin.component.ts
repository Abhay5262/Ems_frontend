import { Component } from '@angular/core';
import { DataproviderService } from 'src/app/service/dataprovider.service';
import Swal from 'sweetalert2';
import { SinglestudentComponent } from '../singlestudent/singlestudent.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateemployeComponent } from 'src/app/updateemploye/updateemploye.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  students:any;
  constructor(private data:DataproviderService,private dialog:MatDialog){
    this.getall();
  }

    getall(){
      this.data.getallusers().subscribe((res:any)=>{
        console.log(res);
        this.students=res;
      })
    }

    deletedata(enrollmentNo:any){
      console.log(enrollmentNo);
    
    
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.data.deleteuser(enrollmentNo).subscribe(
            (res:any)=>{
              
              Swal.fire({
                title: "Deleted!",
                text: res,
                icon: "success"
              });
              this.getall()
            }
          )
          
        }
      });
    }
    openDetail(tmp:any): void {
  
      const dialogRef = this.dialog.open(SinglestudentComponent, {
        data: {info:tmp},
      });
    
      dialogRef.afterClosed().subscribe((result: any) => {
        this.getall()
      });
    }

    updateStudent(tmp:any){
      const dialogRef = this.dialog.open(UpdateemployeComponent, {
        data: {info:tmp},
      });
      dialogRef.afterClosed().subscribe((result: any) => {
        this.getall()
      });
    }
}
