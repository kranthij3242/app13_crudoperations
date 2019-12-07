import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentmanagementComponent} from './studentmanagement/studentmanagement.component';
import {AddstudentComponent} from './addstudent/addstudent.component';
import {EditstudentComponent} from './editstudent/editstudent.component';


const routes: Routes = [
  {path:'',component:StudentmanagementComponent},
  {path:'addstudent',component:AddstudentComponent},
  {path:'editstudent/:id' ,component:EditstudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
