import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataproviderService } from 'src/app/service/dataprovider.service';
interface Food
 {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router,private data:DataproviderService){}
  
  
  
  postdata(payload:any){
   let rolebase= payload.role;

    console.log("Posting Data",payload);
    this.data.login(payload).subscribe(
      (res:any)=>{
        localStorage.setItem("role",payload.role)
        console.log("Success",res);
        this.data.session={username:'xyz'};
        localStorage.setItem("token", res.token);
        // alert(JSON.stringify(res)); 
        if(rolebase=='ROLE_USER')
          {
            this.router.navigate(['/user']);
          } else {
            this.router.navigate(['/admin'])
          }
      }
    )
  }
  foods: Food[] = [
    {value: 'ROLE_USER', viewValue: 'ROLE_USER'},
    {value: 'ROLE_ADMIN', viewValue: 'ROLE_ADMIN'},
  ];
}
