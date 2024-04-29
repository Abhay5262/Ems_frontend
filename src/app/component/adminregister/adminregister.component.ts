import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataproviderService } from 'src/app/service/dataprovider.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent {
  form: any;
  constructor(private fb:FormBuilder,private data:DataproviderService,private route:Router){
    this.form = this.fb.group({
      admin_id: ['', Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      email:   ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      dob: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  register(){
    this.form.value.role="ROLE_ADMIN"
    this.data.regad(this.form.value).subscribe(
      (res:any)=>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: res,
          showConfirmButton: false,
          timer: 1500
        });
        this.route.navigate(['/login'])   
      }
    )
  }
}
