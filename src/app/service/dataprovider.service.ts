import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService {

  public session:any=null;

  private loginuser="http://localhost:8090/auth/login"
  private getall="http://localhost:8090/admin/getallUsers"
  private delete="http://localhost:8090/admin/deleteUser/"
  private single="http://localhost:8090/admin/getUser/"
  private update="http://localhost:8090/admin/updateuserwithimg"
  private reg="http://localhost:8090/emp/register"
  private emp="http://localhost:8090/emp/getUser/"
  private updteuser="http://localhost:8090/emp/updateuserwithimg"
  private regadmin="http://localhost:8090/admin/register"


  constructor(private http:HttpClient) { }
  login(post:any){
    return this.http.post(this.loginuser,post,{responseType:'json'})
  }
  getallusers(){
    return this.http.get(this.getall)
  }
  deleteuser(enrollmentNo:any){
    return this.http.post(this.delete+enrollmentNo,null,{responseType:'text'})
  }
  singleuser(enrollmentNo:any){
    return this.http.get(this.single+enrollmentNo,{responseType:'json'})
  }
  updateemp(file:any,pos:any){
    let formParams = new FormData();
    formParams.append('file', file);
    formParams.append("data",JSON.stringify(pos));
    return this.http.post(this.update,formParams,{responseType:'text'})
  }
  register(file:any,pos:any){
    let formParams = new FormData();
    formParams.append('file', file);
    formParams.append("data",JSON.stringify(pos));
    return this.http.post(this.reg,formParams,{responseType:'text'})
  }

  getemp(emp_id:any){
    return this.http.get(this.emp+emp_id,{responseType:'json'})
  }
  updateuser(file:any,pos:any){
    let formParams = new FormData();
    formParams.append('file', file);
    formParams.append("data",JSON.stringify(pos));
    return this.http.post(this.updteuser,formParams,{responseType:'text'})
  }

  regad(pos:any){
    return this.http.post(this.regadmin,pos,{responseType:'text'})
  }
}
