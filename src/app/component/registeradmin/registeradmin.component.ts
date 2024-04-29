import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataproviderService } from 'src/app/service/dataprovider.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registeradmin',
  templateUrl: './registeradmin.component.html',
  styleUrls: ['./registeradmin.component.css']
})
export class RegisteradminComponent {
  form: any;
  constructor(private fb:FormBuilder,private data:DataproviderService){
    this.form = this.fb.group({
      admin_id: ['', Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      dob: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  register(){
    this.data.regad(this.form.value).subscribe(
      (res:any)=>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: res,
          showConfirmButton: false,
          timer: 1500
        });
      }
    )
  }
}
