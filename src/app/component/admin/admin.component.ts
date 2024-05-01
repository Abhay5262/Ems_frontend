import { Component, HostListener } from '@angular/core';
import { DataproviderService } from 'src/app/service/dataprovider.service';
import Swal from 'sweetalert2';
import { SinglestudentComponent } from '../singlestudent/singlestudent.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateemployeComponent } from 'src/app/updateemploye/updateemploye.component';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [
    // trigger('buttonAnimation', [
    //   transition(':enter', [
    //     style({ opacity: 5, transform:'scale(0.4) rotate(20deg)' }),
    //     animate('2000ms cubic-bezier(0.68, 0.55, 0.27, 1.55)' , style({ opacity: 1, transform: 'translateY(0)' })),
    //   ]),
    // ]),
    trigger('buttonAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }), // Initial state: slightly scaled down
        animate('1000ms cubic-bezier(0.215, 0.61, 0.355, 1)', style({ opacity: 1, transform: 'scale(1)' })), // Smooth fade-in and scale-up
      ]),
    ]),
    trigger('buttonHoverAnimation', [
      transition(':enter', [
        style({ transform: 'scale(1)' }),
        animate('200ms', style({ transform: 'scale(1.1)' })),
      ]),
      transition(':leave', [
        animate('200ms', style({ transform: 'scale(1)' })),
      ]),
    ]),
  
  ],
})
export class AdminComponent {
  students:any;
  constructor(private data:DataproviderService,private dialog:MatDialog){
   
  
    this.getall();
  }

    getall(){
      this.data.getallusers().subscribe((res:any)=>{
        console.log(res);
        console.log("hello1",res);
        this.students=res;
      },
      (err:any)=>{
        
        console.log("hello",err);
      }

    )
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