import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataproviderService } from 'src/app/service/dataprovider.service';
import Swal from 'sweetalert2';
interface Food
{
value: string;
viewValue: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any;


  constructor(private fb:FormBuilder,private data:DataproviderService,private route:Router){
    this.form = this.fb.group({
      emp_id: ['', Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      contact: ['', Validators.required],
      salary: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      department:['', Validators.required],
      qualification: ['', Validators.required],
      passingyear: ['', Validators.required],
      experince: ['', Validators.required],
      collegename: ['', Validators.required],
      img: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    })
  }

  register(){
    this.form.value.role="ROLE_USER"
    this.data.register(this.form.img,this.form.value).subscribe((res:any)=>{
      console.log(res)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: res,
        showConfirmButton: false,
        timer: 1500
      });
      this.route.navigate(['/login'])   
    })
  }

  foods: Food[] = [
    {value: 'SELLS', viewValue: 'SELLS'},
    {value: 'IT', viewValue: 'IT'},
    {value: 'ACCOUNT', viewValue: 'ACCOUNT'},
  ];
  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.form.img = event.target.files[0]
  }
}
