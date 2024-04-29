import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataproviderService } from '../service/dataprovider.service';
import Swal from 'sweetalert2';

interface Food
{
value: string;
viewValue: string;
}
@Component({
  selector: 'app-updateemploye',
  templateUrl: './updateemploye.component.html',
  styleUrls: ['./updateemploye.component.css']
})
export class UpdateemployeComponent {
  formData: any;
  role=localStorage.getItem('role');
  form:any;

  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<UpdateemployeComponent>,private update:DataproviderService){
    this.form = this.fb.group({
      emp_id: [this.data.info.emp_id, Validators.required],
      name: [this.data.info.name, Validators.required],
      gender: [this.data.info.gender, Validators.required],
      contact: [this.data.info.contact, Validators.required],
      salary: [this.data.info.salary, Validators.required],
      email: [this.data.info.email, [Validators.required, Validators.email]],
      dob: [this.data.info.dob, Validators.required],
      department: [this.data.info.department, Validators.required],
      qualification: [this.data.info.qualification, Validators.required],
      passingyear: [this.data.info.passingyear, Validators.required],
      experince: [this.data.info.experince, Validators.required],
      collegename: [this.data.info.collegename, Validators.required],
      img: [this.data.info.img, Validators.required],
  
      password: [this.data.info.password, Validators.required],
      role: [this.data.info.role, Validators.required],
    });
  }
 
  updatebyid(){
    if (this.role=="ROLE_ADMIN") {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
  
          console.log(this.form.value)
          console.log(this.form.value.img)
          this.update.updateemp(this.formData,this.form.value).subscribe(
            (res: any)=>{
              console.log('Get all data response: ', res);
              // this.Student=res;
              this.dialogRef.close()
              Swal.fire(res, "", "success");
            }
          )
      
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
     
    }
    else{
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
  
          console.log(this.form.value)
          console.log(this.form.value.img)
          this.update.updateuser(this.formData,this.form.value).subscribe(
            (res: any)=>{
              console.log('Get all data response: ', res);
              // this.Student=res;
              this.dialogRef.close()
              Swal.fire(res, "", "success");
            }
          )
      
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
   
  }
  foods: Food[] = [
    {value: 'SELLS', viewValue: 'SELLS'},
    {value: 'IT', viewValue: 'IT'},
    {value: 'ACCOUNT', viewValue: 'ACCOUNT'},
  ];
  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.formData = event.target.files[0]
  }
}
