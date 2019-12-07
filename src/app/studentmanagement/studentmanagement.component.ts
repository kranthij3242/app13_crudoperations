import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../students.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-studentmanagement',
  templateUrl: './studentmanagement.component.html',
  styleUrls: ['./studentmanagement.component.css']
})
export class StudentmanagementComponent implements OnInit {

  students:object=[];

  constructor(private studentapi:StudentsService,private http:HttpClient) { }

  ngOnInit() {
    this.getstudents();
  }

  getstudents(){
    this.studentapi.getallstudents().subscribe((allstudents)=>{
      this.students=allstudents;
    });
  }
  deletestudent(id){
    if(confirm('Are you sure to Delete?')){

      const url=`${"http://localhost:4444/students"}/${id}`;
      this.http.delete(url).subscribe(()=>{
        this.getstudents();
      });
      }
  }
}
