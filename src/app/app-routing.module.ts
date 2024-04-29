import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AdminComponent } from './component/admin/admin.component';
import { UserComponent } from './component/user/user.component';
import { UpdateemployeComponent } from './updateemploye/updateemploye.component';
import { EmpdetailComponent } from './component/empdetail/empdetail.component';
import { RegisteradminComponent } from './component/registeradmin/registeradmin.component';
import { AdminregisterComponent } from './component/adminregister/adminregister.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'register',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:AdminComponent,
    pathMatch:'full'
  },
  {
    path:'user',
    component:UserComponent,
    pathMatch:'full'
  },
  {
    path:'updateemploye',
    component:UpdateemployeComponent,
    pathMatch:'full'
  },
  {
    path:'empdetail',
    component:EmpdetailComponent,
    pathMatch:'full'
  },
  {
    path:'registeradmin',
    component:RegisteradminComponent,
    pathMatch:'full'
  },
  {
    path:'adminregister',
    component:AdminregisterComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
