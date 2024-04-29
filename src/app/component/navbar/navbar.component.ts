import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataproviderService } from 'src/app/service/dataprovider.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private rout:Router,public auth:DataproviderService) {}
  reg=localStorage.getItem('token');
  
  logout(){
    this.auth.session=null;
    localStorage.removeItem('token');
    this.rout.navigate(['/login']);
  }
}
